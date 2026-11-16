# Quick Start - Local Chat with Sandbox Preview

This setup puts the **chat interface on your computer** (with access to your API key) and the **UI preview in the Vercel Sandbox**.

## Architecture

```
┌─────────────────────────────────────┐
│  YOUR COMPUTER                      │
│                                     │
│  local-ui-builder.html              │
│  ┌─────────────┬─────────────────┐ │
│  │   Chat UI   │  Sandbox iframe │ │
│  │   (Local)   │   (Embedded)    │ │
│  └─────────────┴─────────────────┘ │
│         ↓                           │
│  server.ts (localhost:3001)         │
│  → Uses your Anthropic API key      │
└─────────────────────────────────────┘
           ↓ Sends generated code
┌─────────────────────────────────────┐
│  VERCEL SANDBOX (Cloud)             │
│  https://sb-xxxxx.vercel.run        │
│                                     │
│  Just displays the generated UI     │
│  NO API KEY needed here             │
└─────────────────────────────────────┘
```

## Setup (3 Steps)

### Step 1: Start API Server

```bash
pnpm server
```

You should see:
```
🚀 UI Builder API Server Running
📡 Listening on: http://localhost:3001
🤖 Connected to Claude API
```

### Step 2: Create Preview Sandbox

```bash
pnpm preview
```

Copy the sandbox URL it gives you (like `https://sb-xxxxx.vercel.run`)

### Step 3: Open Local Chat Interface

Open [local-ui-builder.html](local-ui-builder.html) in your browser:

```bash
open local-ui-builder.html
```

OR just double-click the file.

Then:
1. Paste your sandbox URL in the "Sandbox URL" field
2. Start chatting to build UIs!

## Usage

Type prompts like:
- "Create a modern pricing card with three tiers"
- "Build a login form with email and password"
- "Make a hero section with gradient background"
- "Design a product card with image placeholder"

The UI will appear instantly in the sandbox preview!

## Why This is Better

✅ **Secure** - API key stays on your computer
✅ **Simple** - No tunnel needed (sandbox only displays, doesn't generate)
✅ **Local** - Chat runs locally with full API access
✅ **Clean** - Sandbox is just for preview, no chat clutter

## Troubleshooting

**"API Offline" indicator?**
- Make sure `pnpm server` is running
- Check your `.env` file has `ANTHROPIC_API_KEY`

**Preview not updating?**
- Make sure you pasted the correct sandbox URL
- Check browser console for errors
- Refresh the preview iframe

**Still getting model errors?**
- Your API key needs to be a full API key (`sk-ant-api03-...`)
- User session tokens (`sk-ant-usr-...`) don't work
- Get a proper key from https://console.anthropic.com/settings/keys
