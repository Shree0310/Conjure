# AI Website Builder

An AI-powered website builder that uses Claude AI to generate complete Astro websites and preview them live in Vercel Sandboxes.

## Overview

This application features a split-screen interface where users can chat with Claude AI on the left to describe websites they want to build, and see the generated sites running live in a Vercel Sandbox on the right.

## Architecture

### Tech Stack

- **Frontend**: Next.js 16 (App Router) with React 19
- **Styling**: Tailwind CSS v4
- **AI**: Claude Sonnet 5.5 via Anthropic API
- **Sandbox**: Vercel Sandbox SDK v4
- **Generated Sites**: Astro with Tailwind CSS

### How It Works

1. **User Input**: User describes a website in natural language via the chat interface
2. **AI Processing**: Claude Sonnet 5.5 receives the request and generates a complete Astro project
3. **JSON Configuration**: Claude outputs a JSON structure containing all files (package.json, astro.config.mjs, pages, etc.)
4. **Sandbox Creation**: The API route parses the JSON and creates a Vercel Sandbox
5. **File Writing**: All generated files are written to the sandbox
6. **Dependency Installation**: npm install runs in the sandbox
7. **Dev Server**: Astro dev server starts on port 4321
8. **Live Preview**: The sandbox URL is returned and displayed in an iframe

### Key Components

#### [app/api/chat/route.ts](app/api/chat/route.ts)
The main API endpoint that:
- Accepts chat messages from the frontend
- Calls Claude Sonnet 5.5 API with a specialized system prompt
- Handles extended thinking blocks (Claude 5.5 feature)
- Parses JSON configurations from Claude's response
- Creates and configures Vercel Sandboxes
- Manages Astro project lifecycle (install, start server)

#### [components/SplitView.tsx](components/SplitView.tsx)
The main UI component featuring:
- Left panel: Chat interface with message history
- Right panel: Live sandbox preview in iframe
- Real-time message updates
- Loading states and animations
- Error handling

#### System Prompt
Instructs Claude to generate Astro projects with:
- Proper server configuration (`host: "0.0.0.0", port: 4321`)
- Vite allowedHosts configuration to prevent blocking
- Complete file structure (package.json, config, pages, components)
- Beautiful Tailwind CSS designs

### Critical Configuration

**Astro Config Requirements** (enforced via system prompt):
```javascript
export default defineConfig({
  integrations: [tailwind()],
  server: { host: "0.0.0.0", port: 4321 },
  vite: { server: { allowedHosts: true } }
});
```

- `host: "0.0.0.0"` - Allows external connections in sandbox
- `port: 4321` - Matches the exposed sandbox port
- `allowedHosts: true` - Prevents "blocked host" errors from dynamic sandbox domains

### Environment Variables

Required in `.env`:
```env
ANTHROPIC_API_KEY=your_anthropic_api_key
VERCEL_TOKEN=your_vercel_token
VERCEL_TEAM_ID=your_team_id
VERCEL_PROJECT_ID=your_project_id
```

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Access the application
open http://localhost:3000
```

## Usage

1. Open the application in your browser
2. Type a website description in the chat (e.g., "Build me a landing page for a coffee shop")
3. Wait ~10-15 seconds while:
   - Claude generates the Astro project
   - Sandbox is created and configured
   - Dependencies are installed
   - Dev server starts
4. View the live website in the right panel
5. Continue the conversation to request changes or new features

## Project Structure

```
my-sandbox-app/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # Main API endpoint
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page (renders SplitView)
│   └── globals.css               # Tailwind imports
├── components/
│   └── SplitView.tsx             # Split-screen chat/preview UI
├── .env                          # Environment variables
└── package.json
```

## Technical Details

### Claude Sonnet 5.5 Extended Thinking
Claude Sonnet 5.5 includes "extended thinking" - an internal reasoning process that appears as a separate content block. The API route filters this out:

```typescript
const textContent = response.content.find((block: any) => block.type === "text");
const message = textContent?.text || "";
```

### Sandbox Startup
After starting the Astro dev server, the system waits 8 seconds for initialization. This accounts for:
- Astro dev server startup
- Initial page compilation
- Port binding

### JSON Parsing
Claude embeds the project configuration in a JSON code block:
```json
{
  "createSandbox": true,
  "files": {
    "package.json": "...",
    "astro.config.mjs": "...",
    "src/pages/index.astro": "..."
  }
}
```

This is parsed via regex and used to create the sandbox files.

## Development Notes

- **Port**: Application runs on port 3000 (or 3001 if 3000 is taken)
- **Model**: Uses `claude-sonnet-5-5` specifically for extended thinking capabilities
- **Sandbox Runtime**: Node.js 22
- **Build Tool**: Next.js with Turbopack (dev mode)

## Future Enhancements

Potential improvements:
- Real-time streaming of Claude's response
- File editing within existing sandboxes
- Multi-page site navigation
- Template library
- Sandbox persistence and sharing
- Support for other frameworks (React, Vue, Svelte)
