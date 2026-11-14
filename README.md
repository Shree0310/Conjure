# Sandbox Chat Interface

A beautiful chat interface to interact with Anthropic's Claude agent running in a Vercel Sandbox.

## Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Launch the Chat Interface

```bash
pnpm chat
```

This will:
- Create a Vercel Sandbox
- Install React and dependencies
- Launch a Vite dev server with the chat UI
- Give you a URL to open in your browser

### 3. (Optional) Test Anthropic API Integration

To use the real Anthropic API instead of the demo echo:

```bash
# Set your API key
export ANTHROPIC_API_KEY='your-api-key-here'

# Run the CLI chat example
pnpm api
```

## Project Structure

- **[chat-app.ts](chat-app.ts)** - Creates a Vercel Sandbox with the React chat interface
- **[api-server.ts](api-server.ts)** - Backend integration with Anthropic's API (with examples)
- **[index.ts](index.ts)** - Original sandbox demo
- **[update.ts](update.ts)** - Example of updating sandbox files

## Features

- 💬 Beautiful, modern chat interface with Tailwind CSS
- 🎨 Gradient background with glassmorphic design
- ⚡ Real-time message streaming support
- 📱 Responsive design
- ⌨️ Keyboard shortcuts (Enter to send, Shift+Enter for new line)
- 🔄 Loading states with animations

## Connecting to Anthropic API

The current implementation uses a demo echo response. To connect to the real Anthropic API:

### Option 1: Backend API Server (Recommended)

1. Uncomment the Express server code in [api-server.ts](api-server.ts)
2. Install Express: `pnpm add express cors @types/express @types/cors`
3. Update the frontend `handleSend` function in [chat-app.ts](chat-app.ts) to call your API server
4. Set `ANTHROPIC_API_KEY` and run `pnpm api`

### Option 2: CLI Chat (Simple Testing)

Just run `pnpm api` with your API key set to test the Anthropic integration in the terminal.

## Example API Integration

```typescript
// In your frontend (src/App.jsx in the sandbox)
const handleSend = async () => {
  const response = await fetch('http://localhost:3001/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: [...messages, { role: 'user', content: input }] })
  });

  // Handle streaming response
  const reader = response.body.getReader();
  // ... stream processing
};
```

## Security Note

Never expose your Anthropic API key in the frontend. Always use a backend server to make API calls.
# Conjure
