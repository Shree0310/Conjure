# Conjure - AI UI Builder

Build beautiful UIs by describing them in natural language, powered by Claude AI and Vercel Sandboxes.

## What is Conjure?

Conjure is a self-contained AI UI builder that lets you create React components by chatting with Claude. Simply describe what you want in plain English, and watch it appear in real-time. The entire application runs in a Vercel Sandbox with a self-contained architecture - no local servers needed.

## Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Configure Environment

Copy `.env.example` to `.env` and add your credentials:

```bash
cp .env.example .env
```

Edit `.env` and fill in:
- **ANTHROPIC_API_KEY** - Get from [Anthropic Console](https://console.anthropic.com/settings/keys)
- **VERCEL_TOKEN** - Get from [Vercel Settings](https://vercel.com/account/settings/tokens)
- **VERCEL_TEAM_ID** - From Team Settings → General (starts with `team_`)
- **VERCEL_PROJECT_ID** - From Project Settings → General (starts with `prj_`)

### 3. Start Building

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

## Architecture

### Self-Contained Design

Conjure uses a unique self-contained architecture where everything runs in the Vercel Sandbox:

```
┌─────────────────────────────────────────┐
│         Vercel Sandbox                  │
│  ┌───────────────────────────────────┐  │
│  │     Vite Dev Server (Port 5173)   │  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │   React Frontend (App.jsx)  │  │  │
│  │  │   - Chat Interface          │  │  │
│  │  │   - Live Preview            │  │  │
│  │  └─────────────────────────────┘  │  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │   API Middleware Plugin     │  │  │
│  │  │   - /api/health             │  │  │
│  │  │   - /api/generate           │  │  │
│  │  │   - /api/improve            │  │  │
│  │  │   - Claude AI Integration   │  │  │
│  │  └─────────────────────────────┘  │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
           ↑
           │ HTTPS (no CORS issues)
           │
    ┌──────┴──────┐
    │   Browser   │
    └─────────────┘
```

**Key Benefits:**
- ✅ No localhost dependencies
- ✅ No CORS issues (everything over HTTPS)
- ✅ API key stays server-side (never sent to browser)
- ✅ Works from anywhere (shareable HTTPS URL)
- ✅ Fast HMR across network

### How It Works

1. **API Middleware in Vite**: The API endpoints are implemented as Vite middleware in `sandbox-app/vite.config.js`
2. **Environment Variables**: `ANTHROPIC_API_KEY` is passed to the sandbox via environment variables (server-side only)
3. **Live Sync**: In dev mode, file changes are synced to the sandbox with 150ms debounce
4. **Persistent Sandbox**: `pnpm dev` reuses the same sandbox between runs for faster startup

## Project Structure

```
my-sandbox-app/
├── sandbox-app/              # Self-contained UI Builder app
│   ├── src/
│   │   ├── App.jsx          # Split-screen chat + preview UI
│   │   └── main.jsx         # React entry point
│   ├── index.html           # HTML template
│   ├── vite.config.js       # Vite config with API plugin
│   └── package.json         # Dependencies (@anthropic-ai/sdk, react, vite)
│
├── dev.ts                   # Dev mode with file watching & live sync
├── ui-builder-connected.ts  # Production build script
├── vercel-credentials.ts    # Vercel auth helper
│
├── .env.example             # Template for environment variables
├── .env                     # Your credentials (gitignored)
├── .gitignore               # Comprehensive ignore rules
│
├── SETUP.md                 # Detailed setup guide
├── CHANGES.md               # Implementation summary
└── README.md                # This file

Legacy files (kept for reference):
├── chat-app.ts              # Old chat interface example
├── ui-builder.ts            # Old UI builder example
├── server.ts                # Standalone API server (optional)
└── local-ui-builder.html    # Standalone HTML version
```

## Features

### UI Builder
- 💬 Chat with Claude to describe UIs in natural language
- 🎨 Live preview with instant updates
- ⚡ Powered by Claude Sonnet 5.5
- 📱 Responsive design with Tailwind CSS v4
- 🔄 Iterative improvements ("make it bigger", "add a shadow", etc.)

### Development Workflow
- 🚀 One-command setup (`pnpm dev`)
- 👀 File watching with live sync (150ms debounce)
- 🔥 Hot Module Replacement (HMR) across network
- 📦 Smart handling:
  - Auto-reinstall on `package.json` changes
  - Auto-restart Vite on `vite.config.js` changes
- ⏱️ Persistent sandbox (~45min timeout, auto-extended)
- 🔄 `--fresh` flag to stop old sandbox and create new one

### Security
- 🔒 API key never exposed to browser
- 🔒 Server-side Claude API calls only
- 🔒 Environment variables in `.env` (gitignored)
- 🔒 Token-based Vercel authentication

## API Reference

The sandbox exposes these endpoints:

### `GET /api/health`
Health check endpoint.

**Response:**
```json
{ "ok": true }
```

### `POST /api/generate`
Generate UI from a text prompt.

**Request:**
```json
{
  "prompt": "a red button that says Click Me"
}
```

**Response:**
```json
{
  "success": true,
  "code": "<div className=\"min-h-screen grid place-items-center\">...</div>"
}
```

### `POST /api/improve`
Improve existing UI based on feedback.

**Request:**
```json
{
  "code": "<div>...</div>",
  "feedback": "make it bigger and add a shadow"
}
```

**Response:**
```json
{
  "success": true,
  "code": "<div className=\"text-2xl shadow-lg\">...</div>"
}
```

## Usage Examples

Once running, try these prompts:

- "Create a modern pricing card with three tiers"
- "Build a sleek login form with email and password"
- "Make a hero section with gradient background and CTA buttons"
- "Design a product card with image, title, price, and buy button"
- "Create a navbar with logo and menu items"

Then refine with:
- "Make the buttons bigger"
- "Add a shadow"
- "Change the color to blue"
- "Add hover effects"

## Development Mode Features

When you run `pnpm dev`:

1. **First Time Setup**
   - Creates sandbox named "conjure-dev"
   - Installs npm dependencies
   - Writes all files from `sandbox-app/`
   - Starts Vite dev server

2. **Subsequent Runs**
   - Reuses existing sandbox (fast startup)
   - Syncs latest files
   - Checks if Vite is running, starts if needed
   - Begins watching for file changes

3. **Live Sync**
   - Watches `sandbox-app/` recursively
   - 150ms debounce on changes
   - Ignores `node_modules`
   - Logs each sync: `↻ src/App.jsx`
   - Special handling:
     - `package.json` → reinstall dependencies
     - `vite.config.js` → restart Vite

4. **Timeout Management**
   - Extends sandbox timeout every 10 minutes
   - Keeps sandbox alive while dev is running
   - Ctrl+C stops watching (sandbox keeps running)

5. **Fresh Start**
   ```bash
   pnpm dev --fresh
   ```
   Stops old sandbox and creates a new one.

## Troubleshooting

### "missing VERCEL_TOKEN, VERCEL_TEAM_ID, VERCEL_PROJECT_ID"
- Ensure `.env` file exists with all three credentials
- Check that values don't have quotes or extra whitespace

### "ANTHROPIC_API_KEY is not set"
- Add it to `.env`
- Ensure the key starts with `sk-ant-`
- User session tokens (`sk-ant-usr-`) may have limited model access

### Dev mode not syncing changes
- Check terminal for error messages
- Try `pnpm dev --fresh` to start clean
- Ensure you're editing files in `sandbox-app/`, not elsewhere

### Preview not updating after typing a prompt
- Check browser console for errors
- Verify the green "API Connected" indicator is showing
- Check sandbox terminal logs for API errors
- Note: User session tokens may not have access to all Claude models

### Bundle contains API key
- The API key should only be in Vite server middleware (server-side)
- Check `sandbox-app/vite.config.js` - the key is read from `process.env` which is server-only
- The browser bundle should not contain the key

## Technology Stack

- **Frontend**: React 19, Tailwind CSS v4 (browser CDN)
- **Build Tool**: Vite 6
- **AI**: Claude Sonnet 5.5 via Anthropic AI SDK
- **Sandbox**: Vercel Sandbox SDK v4
- **Runtime**: Node.js 22
- **Language**: TypeScript with tsx runtime
- **Package Manager**: pnpm

## Security Best Practices

1. **Never commit `.env`** - It contains secrets
2. **API key on server only** - Never send to browser
3. **Use full API keys** - Session tokens have limited access
4. **Token-based auth** - Use Vercel access tokens, not OIDC
5. **HTTPS only** - Sandbox runs over HTTPS

## License

ISC
