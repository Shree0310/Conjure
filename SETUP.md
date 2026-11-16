# Conjure - AI UI Builder Setup

Build beautiful UIs by describing them in natural language, powered by Claude AI.

## Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Configure Environment

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

Edit `.env` and add:
- `ANTHROPIC_API_KEY` - Get from https://console.anthropic.com/settings/keys
- `VERCEL_TOKEN` - Get from https://vercel.com/account/settings/tokens
- `VERCEL_TEAM_ID` - From Team Settings → General (starts with `team_`)
- `VERCEL_PROJECT_ID` - From Project Settings → General (starts with `prj_`)

### 3. Run the UI Builder

**Development mode (recommended):**
```bash
pnpm dev
```

This starts a persistent sandbox with live file syncing. Edit files in `sandbox-app/` and see changes instantly via HMR.

**Production build:**
```bash
pnpm build
```

Creates a fresh sandbox each time.

## Usage

Once running, open the URL shown in the terminal. You'll see a split-screen interface:

- **Left**: Chat with Claude to describe UIs
- **Right**: Live preview of generated code

Try prompts like:
- "Create a modern pricing card with three tiers"
- "Build a sleek login form with email and password"
- "Make a hero section with gradient background and CTA buttons"
- "Design a product card with image, title, price, and buy button"

## Development

### Dev Mode Features

`pnpm dev` provides:
- **Persistent sandbox** - Reuses the same sandbox between runs
- **Live sync** - File changes sync automatically with 150ms debounce
- **HMR support** - Vite hot module replacement works across the network
- **Smart handling** - Auto-reinstalls on `package.json` changes, restarts Vite on `vite.config.js` changes
- **Timeout extension** - Keeps sandbox alive while dev is running

**Flags:**
- `pnpm dev --fresh` - Stop old sandbox and create a new one

### File Structure

```
sandbox-app/           # UI Builder app (synced to sandbox)
├── src/
│   ├── App.jsx       # Main UI with chat + preview
│   └── main.jsx      # React entry point
├── index.html        # HTML template
├── vite.config.js    # Vite config with API plugin
└── package.json      # Dependencies

dev.ts                # Dev mode with file watching
ui-builder-connected.ts  # Production build script
vercel-credentials.ts # Vercel auth helper
```

### How It Works

The API endpoints (`/api/generate`, `/api/improve`, `/api/health`) are implemented as Vite middleware in `sandbox-app/vite.config.js`. This keeps everything self-contained in the sandbox - no local server needed.

The `ANTHROPIC_API_KEY` is passed to the sandbox via environment variables and stays server-side. It's never sent to the browser.

## Troubleshooting

**"missing VERCEL_TOKEN, VERCEL_TEAM_ID, VERCEL_PROJECT_ID"**
- Make sure `.env` file exists with all three credentials
- Check that values don't have quotes or extra whitespace

**"ANTHROPIC_API_KEY is not set"**
- Add it to `.env`
- Make sure the key starts with `sk-ant-`
- User session tokens (`sk-ant-usr-`) won't work - you need a full API key

**Dev mode not syncing changes:**
- Check the terminal for error messages
- Try `pnpm dev --fresh` to start clean
- Make sure you're editing files in `sandbox-app/`, not elsewhere

**Preview not updating after typing a prompt:**
- Check browser console for errors
- Verify the green "API Connected" indicator is showing
- Check sandbox terminal logs for API errors

**Bundle contains API key:**
- The API key should only be in Vite server middleware (server-side)
- Check `sandbox-app/vite.config.js` - the key is read from `process.env` which is server-only
- The browser bundle should not contain the key

## API Reference

The sandbox exposes these endpoints:

- `GET /api/health` - Returns `{ ok: true }` if API is ready
- `POST /api/generate` - Generate UI from prompt
  ```json
  {
    "prompt": "a red button"
  }
  ```
  Returns: `{ "success": true, "code": "<div>...</div>" }`

- `POST /api/improve` - Improve existing UI
  ```json
  {
    "code": "<div>...</div>",
    "feedback": "make it bigger"
  }
  ```
  Returns: `{ "success": true, "code": "<div>...</div>" }`

## Legacy Files

- `server.ts` - Standalone API server (optional, not used by default)
- `chat-app.ts`, `ui-builder.ts` - Old examples
- `local-ui-builder.html` - Standalone HTML version

These are kept for reference but the main workflow is `pnpm dev` or `pnpm build`.
