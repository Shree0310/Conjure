/**
 * Express API server that connects the UI Builder to Claude
 * Run this alongside the UI builder to enable real AI generation
 */

import "dotenv/config";
import express from "express";
import cors from "cors";
import Anthropic from "@anthropic-ai/sdk";

const app = express();
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json());

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

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
9. Make it full height (h-full or min-h-screen) and centered if appropriate

Example output format:
<div class="h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-8">
  <div class="bg-white rounded-2xl shadow-xl p-8 max-w-md">
    <h2 class="text-3xl font-bold text-gray-900 mb-4">Your Component</h2>
  </div>
</div>`;

// Generate new UI
app.post("/api/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    console.log(`🎨 Generating UI for: "${prompt}"`);

    const response = await client.messages.create({
      model: "claude-sonnet-5-5",
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

      console.log("✅ UI generated successfully");
      res.json({ success: true, code: code });
    } else {
      throw new Error("Unexpected response format");
    }
  } catch (error: any) {
    console.error("❌ Error generating UI:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Improve existing UI
app.post("/api/improve", async (req, res) => {
  try {
    const { code, feedback } = req.body;

    console.log(`🔧 Improving UI with feedback: "${feedback}"`);

    const response = await client.messages.create({
      model: "claude-sonnet-5-5",
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: `Here is the current UI code:\n\n${code}\n\nPlease improve it based on this feedback: ${feedback}`,
        },
      ],
    });

    const content = response.content[0];
    if (content.type === "text") {
      let improvedCode = content.text;
      improvedCode = improvedCode.replace(/```html\n?/g, "");
      improvedCode = improvedCode.replace(/```\n?/g, "");
      improvedCode = improvedCode.trim();

      console.log("✅ UI improved successfully");
      res.json({ success: true, code: improvedCode });
    } else {
      throw new Error("Unexpected response format");
    }
  } catch (error: any) {
    console.error("❌ Error improving UI:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = 3001;

// Check API key
if (!process.env.ANTHROPIC_API_KEY) {
  console.error("❌ Error: ANTHROPIC_API_KEY environment variable is not set");
  console.log("\nSet it like this:");
  console.log("export ANTHROPIC_API_KEY='your-api-key-here'");
  console.log("\nThen run: pnpm server");
  process.exit(1);
}

// Start server
const server = app.listen(PORT, () => {
  console.log(`\n🚀 UI Builder API Server Running`);
  console.log(`📡 Listening on: http://localhost:${PORT}`);
  console.log(`🤖 Connected to Claude API`);
  console.log(`\n✨ Ready to generate UIs!\n`);
});

// Keep the server running
process.on('SIGINT', () => {
  console.log('\n\n👋 Shutting down server...');
  server.close(() => {
    console.log('Server stopped');
    process.exit(0);
  });
});
