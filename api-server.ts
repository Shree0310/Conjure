/**
 * Backend API server to connect the chat interface with Anthropic's API
 * This file demonstrates how to integrate Claude with your sandbox chat
 *
 * Usage:
 * 1. Set your ANTHROPIC_API_KEY environment variable
 * 2. Run: tsx api-server.ts
 * 3. Update the frontend to call this server instead of the mock response
 */

import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

interface Message {
  role: "user" | "assistant";
  content: string;
}

/**
 * Send a message to Claude and get a streaming response
 */
export async function sendMessage(
  messages: Message[],
  onChunk?: (text: string) => void
): Promise<string> {
  const stream = await client.messages.stream({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4096,
    messages: messages,
  });

  let fullResponse = "";

  for await (const chunk of stream) {
    if (
      chunk.type === "content_block_delta" &&
      chunk.delta.type === "text_delta"
    ) {
      const text = chunk.delta.text;
      fullResponse += text;
      if (onChunk) {
        onChunk(text);
      }
    }
  }

  return fullResponse;
}

/**
 * Example usage: Simple CLI chat
 */
async function exampleCLIChat() {
  const conversationHistory: Message[] = [];

  console.log("🤖 Claude Chat CLI");
  console.log("Type 'exit' to quit\n");

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const askQuestion = (query: string): Promise<string> => {
    return new Promise((resolve) => readline.question(query, resolve));
  };

  while (true) {
    const userInput = await askQuestion("You: ");

    if (userInput.toLowerCase() === "exit") {
      console.log("Goodbye!");
      readline.close();
      break;
    }

    conversationHistory.push({
      role: "user",
      content: userInput,
    });

    process.stdout.write("Assistant: ");

    const response = await sendMessage(conversationHistory, (chunk) => {
      process.stdout.write(chunk);
    });

    console.log("\n");

    conversationHistory.push({
      role: "assistant",
      content: response,
    });
  }
}

// Example HTTP server integration
/**
 * Example Express server setup
 * Uncomment and install express to use:
 * npm install express cors
 */
/*
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  await sendMessage(messages, (chunk) => {
    res.write(`data: ${JSON.stringify({ chunk })}\n\n`);
  });

  res.write("data: [DONE]\n\n");
  res.end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(\`API server running on http://localhost:\${PORT}\`);
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

  exampleCLIChat().catch(console.error);
}
