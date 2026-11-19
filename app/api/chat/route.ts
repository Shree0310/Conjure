import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { Sandbox } from "@vercel/sandbox";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are an expert Astro web developer. When users ask you to build a website, you create complete Astro projects.

Your responses should be conversational and helpful. When you decide to create a website, you must output a special JSON block that will be parsed to create the sandbox.

IMPORTANT: When creating a website, you MUST include a JSON code block with this exact format:
\`\`\`json
{
  "createSandbox": true,
  "files": {
    "package.json": "...",
    "astro.config.mjs": "...",
    "src/pages/index.astro": "...",
    "tsconfig.json": "..."
  }
}
\`\`\`

CRITICAL REQUIREMENTS for astro.config.mjs:
- MUST include: server: { host: "0.0.0.0", port: 4321 }
- MUST include: vite: { server: { allowedHosts: true } }
- Example:
  import { defineConfig } from 'astro/config';
  import tailwind from '@astrojs/tailwind';
  export default defineConfig({
    integrations: [tailwind()],
    server: { host: "0.0.0.0", port: 4321 },
    vite: { server: { allowedHosts: true } }
  });

The files object should contain:
1. package.json - with astro, @astrojs/tailwind, and tailwindcss dependencies
2. astro.config.mjs - MUST have server host 0.0.0.0 and port 4321
3. src/pages/index.astro - The main page with beautiful Tailwind styling
4. tsconfig.json - Standard Astro TypeScript config
5. Any additional pages, components, or assets needed

Always create beautiful, modern designs with Tailwind CSS.

After the JSON block, continue your conversational response explaining what you built.`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages format" },
        { status: 400 }
      );
    }

    console.log("Calling Anthropic API with model: claude-sonnet-5-5");
    console.log("Messages:", JSON.stringify(messages, null, 2));

    const response = await anthropic.messages.create({
      model: "claude-sonnet-5-5",
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      messages: messages.map((msg: any) => ({
        role: msg.role,
        content: msg.content,
      })),
    });

    console.log("Received response from Anthropic");
    console.log("Response stop_reason:", response.stop_reason);

    // Find the text content block (skip thinking blocks)
    const textContent = response.content.find((block: any) => block.type === "text");
    const message = textContent?.text || "";
    console.log("Extracted message length:", message.length);

    // Check if the response contains a sandbox creation request
    const jsonMatch = message.match(/```json\s*\n([\s\S]*?)\n```/);
    let sandboxUrl = null;

    if (jsonMatch) {
      try {
        const config = JSON.parse(jsonMatch[1]);

        if (config.createSandbox && config.files) {
          console.log("Creating Astro sandbox...");

          // Create the sandbox
          const sandbox = await Sandbox.create({
            token: process.env.VERCEL_TOKEN!,
            teamId: process.env.VERCEL_TEAM_ID!,
            projectId: process.env.VERCEL_PROJECT_ID!,
            runtime: "node22",
            ports: [4321],
          });

          // Write all files
          const fileEntries = Object.entries(config.files).map(([path, content]) => ({
            path,
            content: Buffer.from(content as string),
          }));

          // Create necessary directories
          await sandbox.mkDir("src");
          await sandbox.mkDir("src/pages");
          await sandbox.mkDir("public");

          // Write files
          await sandbox.writeFiles(fileEntries);

          console.log("Installing dependencies...");
          const installResult = await sandbox.runCommand({
            cmd: "npm",
            args: ["install"],
          });

          if (installResult.exitCode !== 0) {
            throw new Error("npm install failed");
          }

          console.log("Starting Astro dev server...");
          const devProcess = await sandbox.runCommand({
            cmd: "npm",
            args: ["run", "dev"],
            detached: true,
          });

          // Wait for server to start - Astro typically takes 5-10 seconds
          console.log("Waiting for Astro server to start...");
          await new Promise(resolve => setTimeout(resolve, 8000));

          sandboxUrl = sandbox.domain(4321);
          console.log("Sandbox created:", sandboxUrl);
        }
      } catch (parseError) {
        console.error("Failed to parse or create sandbox:", parseError);
      }
    }

    // Remove the JSON block from the message before sending to client
    const cleanMessage = message.replace(/```json\s*\n[\s\S]*?\n```\s*/g, "").trim();

    return NextResponse.json({
      message: cleanMessage,
      sandboxUrl
    });
  } catch (error) {
    console.error("Chat API error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to process request: ${errorMessage}` },
      { status: 500 }
    );
  }
}
