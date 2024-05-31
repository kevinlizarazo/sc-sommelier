# Node.js Hello World

Simple Node.js + Vercel example that returns a "Hello World" response.

## How to Use

You can choose from one of the following two methods to use this repository:

### One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/examples/tree/main/solutions/node-hello-world&project-name=node-hello-world&repository-name=node-hello-world)

### Clone and Deploy

```bash
git clone https://github.com/vercel/examples/tree/main/solutions/node-hello-world
```

Install the Vercel CLI:

```bash
npm i -g vercel
```

Then run the app at the root of the repository:

```bash
vercel dev
```

Given the pricing for GPT-4o as $5.00 per 1 million tokens for input and $15.00 per 1 million tokens for output, we can calculate the cost as follows:

### Total Tokens Calculation:
- System Message: 8 tokens
- User Message: 800 tokens
- Model Response: 543 tokens

**Total Tokens:**
8 (system) + 800 (user) + 543 (response) = 1351 tokens

### Cost Calculation:

**Using GPT-4o:**

1. **Input Tokens Cost:**
   - 8 (system) + 800 (user) = 808 tokens
   - Cost per 1 million tokens: $5.00
   - Cost: \( 808 \, \text{tokens} \times \frac{\$5.00}{1,000,000 \, \text{tokens}} = \$0.00404 \)

2. **Output Tokens Cost:**
   - 543 tokens
   - Cost per 1 million tokens: $15.00
   - Cost: \( 543 \, \text{tokens} \times \frac{\$15.00}{1,000,000 \, \text{tokens}} = \$0.008145 \)

**Total Cost:**
- Input Tokens Cost: \$0.00404
- Output Tokens Cost: \$0.008145
- **Total Cost**: \( \$0.00404 + \$0.008145 = \$0.012185 \)

Therefore, using the GPT-4o model, this request will cost approximately \$0.012185 in credits.
