import "dotenv/config";
import { Sandbox } from "@vercel/sandbox";
import Anthropic from "@anthropic-ai/sdk";
import * as readline from "readline";

// Validate credentials
const { ANTHROPIC_API_KEY, VERCEL_TOKEN, VERCEL_TEAM_ID, VERCEL_PROJECT_ID } = process.env;

if (!ANTHROPIC_API_KEY || !VERCEL_TOKEN || !VERCEL_TEAM_ID || !VERCEL_PROJECT_ID) {
  console.error("❌ Missing required environment variables in .env");
  process.exit(1);
}

const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY });
const conversationHistory: Array<{ role: "user" | "assistant"; content: string }> = [];

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "\n💬 You: ",
});

console.log("🤖 Chat Interface");
console.log("Type your messages and press Enter. Type 'exit' to quit.\n");

rl.prompt();

rl.on("line", async (input: string) => {
  const userMessage = input.trim();

  if (userMessage.toLowerCase() === "exit") {
    console.log("\n👋 Goodbye!");
    rl.close();
    process.exit(0);
  }

  if (!userMessage) {
    rl.prompt();
    return;
  }

  // Add user message to history
  conversationHistory.push({
    role: "user",
    content: userMessage,
  });

  try {
    // Call Claude API
    process.stdout.write("\n🤖 Assistant: ");

    const stream = await anthropic.messages.stream({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      messages: conversationHistory,
    });

    let assistantMessage = "";

    for await (const chunk of stream) {
      if (
        chunk.type === "content_block_delta" &&
        chunk.delta.type === "text_delta"
      ) {
        const text = chunk.delta.text;
        process.stdout.write(text);
        assistantMessage += text;
      }
    }

    // Add assistant message to history
    conversationHistory.push({
      role: "assistant",
      content: assistantMessage,
    });

    console.log("\n");
  } catch (error) {
    console.error("\n❌ Error:", error instanceof Error ? error.message : error);
  }

  rl.prompt();
});

rl.on("close", () => {
  process.exit(0);
});