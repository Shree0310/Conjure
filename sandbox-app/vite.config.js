import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Anthropic from "@anthropic-ai/sdk";

// API plugin for handling Claude requests
function apiPlugin() {
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

  return {
    name: "api-plugin",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        // Health check endpoint
        if (req.url === "/api/health" && req.method === "GET") {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ ok: true }));
          return;
        }

        // Generate UI endpoint
        if (req.url === "/api/generate" && req.method === "POST") {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk.toString();
          });
          req.on("end", async () => {
            try {
              const { prompt } = JSON.parse(body);
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
                let code = content.text;
                // Strip markdown code fences
                code = code.replace(/```html\n?/g, "");
                code = code.replace(/```\n?/g, "");
                code = code.trim();

                console.log("✅ UI generated successfully");
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ success: true, code }));
              } else {
                throw new Error("Unexpected response format");
              }
            } catch (error) {
              console.error("❌ Error generating UI:", error.message);
              res.writeHead(500, { "Content-Type": "application/json" });
              res.end(
                JSON.stringify({ success: false, error: error.message })
              );
            }
          });
          return;
        }

        // Improve UI endpoint
        if (req.url === "/api/improve" && req.method === "POST") {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk.toString();
          });
          req.on("end", async () => {
            try {
              const { code, feedback } = JSON.parse(body);
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
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ success: true, code: improvedCode }));
              } else {
                throw new Error("Unexpected response format");
              }
            } catch (error) {
              console.error("❌ Error improving UI:", error.message);
              res.writeHead(500, { "Content-Type": "application/json" });
              res.end(
                JSON.stringify({ success: false, error: error.message })
              );
            }
          });
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), apiPlugin()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: true,
    watch: {
      usePolling: true,
    },
  },
});
