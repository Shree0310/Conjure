# AI UI Builder - Setup Guide

Complete AI-powered UI builder with Claude integration. Describe UIs in natural language and watch them build in real-time!

## 🚀 Quick Start (2 Steps)

### Step 1: Install Dependencies
```bash
pnpm install
```

### Step 2: Run in Two Terminals

**Terminal 1 - API Server:**
```bash
export ANTHROPIC_API_KEY='sk-ant-...'
pnpm server
```

**Terminal 2 - UI Builder:**
```bash
pnpm build
```

Open the URL from Terminal 2 in your browser!

## 📋 What You'll See

- **Left Side**: Chat interface where you describe UIs
- **Right Side**: Live preview that updates instantly
- **API Status**: Green dot = connected, Red dot = offline

## 💬 Example Prompts to Try

```
Create a modern pricing card with three tiers
Build a sleek login form with email and password
Make a hero section with gradient background
Design a contact form with name, email, and message
Create a product card with image placeholder
Build a navigation bar with logo and menu items
Make a footer with social media links
Design a testimonial card with avatar
```

## 🔧 How It Works

1. **You type** a description in the chat
2. **Claude generates** the HTML/Tailwind code
3. **Preview updates** instantly on the right
4. **Iterate** by asking for changes

## 📁 Project Structure

- `server.ts` - Express API server with Claude integration
- `ui-builder-connected.ts` - Split-screen React UI with live preview
- `package.json` - Dependencies and scripts

## 🛠️ Troubleshooting

### API Server Won't Start
- Check that `ANTHROPIC_API_KEY` is set
- Verify key starts with `sk-ant-`
- Make sure port 3001 is available

### UI Builder Shows "API Offline"
- Ensure the server is running in another terminal
- Check server console for errors
- Verify server shows "🚀 UI Builder API Server Running"

### Preview Not Updating
- Check browser console for errors
- Ensure the API response includes valid HTML
- Try refreshing the page

## 🎨 Features

- ✅ Real-time AI code generation with Claude
- ✅ Split-screen chat + preview interface
- ✅ Live preview with iframe rendering
- ✅ Tailwind CSS v4 support
- ✅ API connection status indicator
- ✅ Beautiful dark mode UI
- ✅ Keyboard shortcuts (Enter to send)

## 🔐 Security Note

The API key is **only used on your local server** - never exposed to the browser. The frontend talks to your local API server at `http://localhost:3001`.

## 📦 Alternative: Demo Mode

Want to test the UI without API setup? Run:
```bash
pnpm ui-builder
```

This runs with demo templates (no API required).
