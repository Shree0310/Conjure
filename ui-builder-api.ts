/**
 * Backend API for UI Builder with Anthropic Claude integration
 * This enables real AI-generated UIs based on user prompts
 */

import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are an expert UI/UX developer. Your job is to generate beautiful, functional HTML/Tailwind CSS code based on user descriptions.

IMPORTANT RULES:
1. Return ONLY valid HTML with Tailwind CSS classes
2. Do NOT include explanations or markdown code blocks
3. Do NOT include <!DOCTYPE>, <html>, <head>, or <body> tags - just the component HTML
4. Use Tailwind CSS v4 classes (browser CDN is loaded)
5. Make components responsive and accessible
6. Use modern, beautiful design patterns
7. Add hover effects and transitions where appropriate
8. Use semantic HTML

Example output format:
<div class="h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-8">
  <div class="bg-white rounded-2xl shadow-xl p-8 max-w-md">
    <h2 class="text-3xl font-bold text-gray-900 mb-4">Your Component</h2>
    <!-- ... rest of component -->
  </div>
</div>`;

/**
 * Generate UI code from a text prompt using Claude
 */
export async function generateUI(prompt: string): Promise<string> {
  try {
    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: `Create this UI component: ${prompt}`,
        },
      ],
    });

    const content = response.content[0];
    if (content.type === "text") {
      // Clean up any potential markdown code blocks
      let code = content.text;
      code = code.replace(/```html\n?/g, "");
      code = code.replace(/```\n?/g, "");
      code = code.trim();
      return code;
    }

    throw new Error("Unexpected response format");
  } catch (error) {
    console.error("Error generating UI:", error);
    throw error;
  }
}

/**
 * Improve existing UI code based on feedback
 */
export async function improveUI(
  currentCode: string,
  feedback: string
): Promise<string> {
  try {
    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: `Here is the current UI code:\n\n${currentCode}\n\nPlease improve it based on this feedback: ${feedback}`,
        },
      ],
    });

    const content = response.content[0];
    if (content.type === "text") {
      let code = content.text;
      code = code.replace(/```html\n?/g, "");
      code = code.replace(/```\n?/g, "");
      code = code.trim();
      return code;
    }

    throw new Error("Unexpected response format");
  } catch (error) {
    console.error("Error improving UI:", error);
    throw error;
  }
}

/**
 * Example CLI usage
 */
async function exampleCLI() {
  console.log("🎨 UI Builder CLI\n");

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const askQuestion = (query: string): Promise<string> => {
    return new Promise((resolve) => readline.question(query, resolve));
  };

  const prompt = await askQuestion("Describe the UI you want to build: ");
  console.log("\n⚡ Generating UI...\n");

  const uiCode = await generateUI(prompt);

  console.log("✅ Generated UI:\n");
  console.log("─".repeat(80));
  console.log(uiCode);
  console.log("─".repeat(80));

  readline.close();
}

/**
 * Express server example for the UI builder frontend
 * Uncomment to use:
 * npm install express cors
 */
/*
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Generate new UI
app.post("/api/generate", async (req, res) => {
  try {
    const { prompt } = req.body;
    const uiCode = await generateUI(prompt);
    res.json({ success: true, code: uiCode });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Improve existing UI
app.post("/api/improve", async (req, res) => {
  try {
    const { code, feedback } = req.body;
    const improvedCode = await improveUI(code, feedback);
    res.json({ success: true, code: improvedCode });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(\`🚀 UI Builder API running on http://localhost:\${PORT}\`);
  console.log("Ready to generate UIs with Claude!");
});
*/

// Run CLI example if executed directly
if (require.main === module) {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("❌ Error: ANTHROPIC_API_KEY environment variable is not set");
    console.log("\nSet it like this:");
    console.log("export ANTHROPIC_API_KEY='your-api-key-here'");
    process.exit(1);
  }

  exampleCLI().catch(console.error);
}

export { SYSTEM_PROMPT };
