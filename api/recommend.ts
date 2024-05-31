import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Method Not Allowed" });
  }

  const data = req.body;
  const { recipe } = data;

  console.log(`Request received for wine pairings with recipe: ${JSON.stringify(recipe.title)}`)
  
  try {
      const recommendationString = await analyzeRecipe(recipe);

      console.log(`Recommendation generated: ${recommendationString}`)

      return res.status(200).send(recommendationString);
    } catch (error) {
      console.error("Failed to handle image", error);
      res.status(500).json({ error: "Failed to handle image" });
    }
 
}




async function analyzeRecipe(recipe) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "Format recipes from JSON with 100% accuracy.",
      },
      {
        role: "user",
        content: `Given this recipe text:\n\n${JSON.stringify(recipe)}\n\nRecommend a wine pairing. Limit your response to 100 words. You can recommend up to 3 wines. Your response must be in the form of a paragraph, please do not use any special formatting. Please begin your response with "For this recipe,"`,
      },
    ],
    model: "gpt-4o",
  });

  return completion.choices[0].message.content;
}
