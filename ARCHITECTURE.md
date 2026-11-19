# Architecture Diagram

## System Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           AI Website Builder                                 │
│                     (Next.js 16 + React 19 + Tailwind v4)                   │
└─────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────────┐
│                              Browser (Client)                                 │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    app/page.tsx (Entry Point)                       │    │
│  │                    Renders: <SplitView />                           │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                     │                                        │
│                                     ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │              components/SplitView.tsx (Main UI)                     │    │
│  ├─────────────────────────────────────────────────────────────────────┤    │
│  │                                                                     │    │
│  │  ┌────────────────────┐         ┌──────────────────────────┐      │    │
│  │  │   Left Panel       │         │    Right Panel           │      │    │
│  │  │   (Chat UI)        │         │    (Preview)             │      │    │
│  │  ├────────────────────┤         ├──────────────────────────┤      │    │
│  │  │ • Message History  │         │ • Sandbox iframe         │      │    │
│  │  │ • Input Textarea   │         │ • Empty State            │      │    │
│  │  │ • Send Button      │         │ • Open in New Tab Button │      │    │
│  │  │ • Loading States   │         │                          │      │    │
│  │  └────────────────────┘         └──────────────────────────┘      │    │
│  │           │                                  ▲                     │    │
│  │           │                                  │                     │    │
│  │           └──────────POST /api/chat──────────┘                     │    │
│  │                 { messages: [...] }                                │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                     │                                        │
└─────────────────────────────────────┼────────────────────────────────────────┘
                                      │
                                      ▼ HTTP POST
┌───────────────────────────────────────────────────────────────────────────────┐
│                        Next.js API Route (Server)                             │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                 app/api/chat/route.ts                               │    │
│  │                                                                     │    │
│  │  1. Receive messages array                                         │    │
│  │  2. Call Anthropic API ──────────────────────┐                     │    │
│  │                                               │                     │    │
│  │  3. Parse response (handle thinking blocks)   │                     │    │
│  │     • Skip "thinking" content block           │                     │    │
│  │     • Extract "text" content block            │                     │    │
│  │                                               │                     │    │
│  │  4. Check for JSON sandbox config             │                     │    │
│  │     • Regex: /```json\s*\n([\s\S]*?)\n```/   │                     │    │
│  │                                               │                     │    │
│  │  5. If sandbox config found:                  │                     │    │
│  │     ├─ Create Vercel Sandbox ────────────┐   │                     │    │
│  │     ├─ Write files to sandbox             │   │                     │    │
│  │     ├─ Run npm install                    │   │                     │    │
│  │     ├─ Start Astro dev server              │   │                     │    │
│  │     ├─ Wait 8 seconds                      │   │                     │    │
│  │     └─ Get sandbox URL                     │   │                     │    │
│  │                                               │                     │    │
│  │  6. Return: { message, sandboxUrl }          │                     │    │
│  └───────────────────────────────────────────────┼─────────────────────┘    │
│                                                  │                          │
└──────────────────────────────────────────────────┼──────────────────────────┘
                                                   │
                    ┌──────────────────────────────┴─────────────────────┐
                    │                                                    │
                    ▼                                                    ▼
┌─────────────────────────────────────┐  ┌──────────────────────────────────────┐
│      Anthropic API                  │  │      Vercel Sandbox API              │
├─────────────────────────────────────┤  ├──────────────────────────────────────┤
│                                     │  │                                      │
│ Model: claude-sonnet-5-5            │  │ ┌──────────────────────────────────┐ │
│                                     │  │ │   Sandbox Instance (Node.js 22)  │ │
│ Request:                            │  │ ├──────────────────────────────────┤ │
│ • System Prompt (Astro expert)      │  │ │                                  │ │
│ • Message history                   │  │ │  File System:                    │ │
│                                     │  │ │  ├─ package.json                 │ │
│ Response (Content Blocks):          │  │ │  ├─ astro.config.mjs             │ │
│ ┌─────────────────────────────────┐ │  │ │  ├─ tsconfig.json                │ │
│ │ [0] thinking: "..."             │ │  │ │  └─ src/                         │ │
│ │     (internal reasoning)        │ │  │ │     └─ pages/                    │ │
│ └─────────────────────────────────┘ │  │ │        └─ index.astro            │ │
│ ┌─────────────────────────────────┐ │  │ │                                  │ │
│ │ [1] text:                       │ │  │ │  Processes:                      │ │
│ │   "I'll create..."              │ │  │ │  ├─ npm install                  │ │
│ │   ```json                       │ │  │ │  └─ npm run dev (detached)       │ │
│ │   {                             │ │  │ │     └─ Astro Dev Server          │ │
│ │     "createSandbox": true,      │ │  │ │        • Port: 4321              │ │
│ │     "files": {...}              │ │  │ │        • Host: 0.0.0.0           │ │
│ │   }                             │ │  │ │        • allowedHosts: true      │ │
│ │   ```                           │ │  │ │                                  │ │
│ │   "I've created..."             │ │  │ │  Exposed URL:                    │ │
│ └─────────────────────────────────┘ │  │ │  https://sb-xxxxx.vercel.run     │ │
│                                     │  │ └──────────────────────────────────┘ │
└─────────────────────────────────────┘  └──────────────────────────────────────┘
```

## Data Flow Diagram

```
User Input                                    API Response
    │                                              ▲
    ▼                                              │
┌────────────────────┐                   ┌──────────────────┐
│ "Build me a        │                   │ message:         │
│  coffee shop       │  ──────POST────▶  │  "I've created..." │
│  website"          │   /api/chat       │ sandboxUrl:      │
└────────────────────┘                   │  "https://..."   │
                                         └──────────────────┘
         │                                        │
         ▼                                        │
  ┌──────────────┐                                │
  │ User Message │                                │
  │   Object     │                                │
  └──────────────┘                                │
         │                                        │
         ▼                                        │
  ┌──────────────────────────┐                   │
  │ Messages Array           │                   │
  │ [{role:"user",           │                   │
  │   content:"Build..."}]   │                   │
  └──────────────────────────┘                   │
         │                                        │
         ▼                                        │
  ┌───────────────────────────────────────────┐  │
  │      Anthropic Messages API               │  │
  │                                           │  │
  │  System: "You are an Astro expert..."     │  │
  │  Messages: [...]                          │  │
  │  Model: claude-sonnet-5-5                 │  │
  │  Max Tokens: 4096                         │  │
  └───────────────────────────────────────────┘  │
         │                                        │
         ▼                                        │
  ┌──────────────────────────┐                   │
  │ Claude Generates         │                   │
  │ Complete Astro Project   │                   │
  │                          │                   │
  │ Output Format:           │                   │
  │ • Thinking block         │                   │
  │ • Text with JSON config  │                   │
  │ • Explanation text       │                   │
  └──────────────────────────┘                   │
         │                                        │
         ▼                                        │
  ┌───────────────────────────┐                  │
  │ Parse JSON Config         │                  │
  │ Extract file contents     │                  │
  └───────────────────────────┘                  │
         │                                        │
         ▼                                        │
  ┌─────────────────────────────────────┐        │
  │ Vercel Sandbox.create()             │        │
  │ • token, teamId, projectId          │        │
  │ • runtime: "node22"                 │        │
  │ • ports: [4321]                     │        │
  └─────────────────────────────────────┘        │
         │                                        │
         ▼                                        │
  ┌─────────────────────────────────────┐        │
  │ sandbox.writeFiles([...])           │        │
  │ Write all project files             │        │
  └─────────────────────────────────────┘        │
         │                                        │
         ▼                                        │
  ┌─────────────────────────────────────┐        │
  │ sandbox.runCommand()                │        │
  │ npm install                         │        │
  │ (Wait for completion)               │        │
  └─────────────────────────────────────┘        │
         │                                        │
         ▼                                        │
  ┌─────────────────────────────────────┐        │
  │ sandbox.runCommand()                │        │
  │ npm run dev (detached)              │        │
  │ Start Astro server                  │        │
  └─────────────────────────────────────┘        │
         │                                        │
         ▼                                        │
  ┌─────────────────────────────────────┐        │
  │ Wait 8 seconds                      │        │
  │ (Allow server startup)              │        │
  └─────────────────────────────────────┘        │
         │                                        │
         ▼                                        │
  ┌─────────────────────────────────────┐        │
  │ sandbox.domain(4321)                │        │
  │ Get public URL                      │        │
  └─────────────────────────────────────┘        │
         │                                        │
         ▼                                        │
  ┌─────────────────────────────────────┐        │
  │ Clean message text                  │        │
  │ (Remove JSON block)                 │        │
  └─────────────────────────────────────┘        │
         │                                        │
         └────────────────────────────────────────┘
```

## Component Interaction Diagram

```
┌──────────────────────────────────────────────────────────────────────┐
│                         Client-Side Flow                             │
└──────────────────────────────────────────────────────────────────────┘

SplitView Component
    │
    ├─── State Management
    │    ├─ messages: Message[]
    │    ├─ input: string
    │    ├─ isLoading: boolean
    │    └─ sandboxUrl: string | null
    │
    ├─── Event Handlers
    │    ├─ handleSend() ────────┐
    │    ├─ handleKeyPress()     │
    │    └─ scrollToBottom()     │
    │                            │
    │    ┌───────────────────────┘
    │    │
    │    ▼
    │    1. Add user message to state
    │    2. Set loading state
    │    3. POST to /api/chat
    │    4. Receive response
    │    5. Add assistant message
    │    6. Update sandboxUrl if present
    │    7. Clear loading state
    │
    └─── UI Rendering
         ├─ Chat Panel (Left)
         │  ├─ Header with status indicator
         │  ├─ Message list (scrollable)
         │  ├─ Loading indicator
         │  └─ Input + Send button
         │
         └─ Preview Panel (Right)
            ├─ Header with "Open" button
            └─ Content:
               ├─ iframe (if sandboxUrl exists)
               └─ Empty state (if no sandbox)

┌──────────────────────────────────────────────────────────────────────┐
│                         Server-Side Flow                             │
└──────────────────────────────────────────────────────────────────────┘

API Route Handler (POST /api/chat)
    │
    ├─── Input Validation
    │    └─ Check messages array format
    │
    ├─── Anthropic API Call
    │    ├─ Prepare system prompt
    │    ├─ Format messages
    │    └─ Call anthropic.messages.create()
    │
    ├─── Response Processing
    │    ├─ Filter content blocks
    │    │  └─ Find type === "text" (skip "thinking")
    │    │
    │    └─ Parse JSON configuration
    │       └─ Regex match: ```json...```
    │
    ├─── Conditional: If sandbox config found
    │    │
    │    ├─── Sandbox Creation
    │    │    ├─ Sandbox.create()
    │    │    ├─ sandbox.mkDir() for directories
    │    │    └─ sandbox.writeFiles()
    │    │
    │    ├─── Dependency Installation
    │    │    ├─ sandbox.runCommand(npm install)
    │    │    └─ Check exit code
    │    │
    │    ├─── Server Startup
    │    │    ├─ sandbox.runCommand(npm run dev, detached)
    │    │    ├─ Wait 8 seconds
    │    │    └─ sandbox.domain(4321)
    │    │
    │    └─── URL Assignment
    │         └─ sandboxUrl = domain URL
    │
    ├─── Message Cleanup
    │    └─ Remove JSON block from message text
    │
    └─── Response
         └─ Return { message, sandboxUrl }

┌──────────────────────────────────────────────────────────────────────┐
│                      Environment & Configuration                      │
└──────────────────────────────────────────────────────────────────────┘

.env Variables
    ├─ ANTHROPIC_API_KEY ──────▶ Anthropic SDK initialization
    ├─ VERCEL_TOKEN ───────────▶ Sandbox.create()
    ├─ VERCEL_TEAM_ID ─────────▶ Sandbox.create()
    └─ VERCEL_PROJECT_ID ──────▶ Sandbox.create()

System Prompt (Embedded in API Route)
    ├─ Role: "Expert Astro web developer"
    ├─ Output format: JSON with files object
    └─ Critical requirements:
       ├─ server: { host: "0.0.0.0", port: 4321 }
       └─ vite: { server: { allowedHosts: true } }

Generated Astro Config (By Claude)
    └─ astro.config.mjs:
       ├─ defineConfig()
       ├─ integrations: [tailwind()]
       ├─ server: { host: "0.0.0.0", port: 4321 }
       └─ vite: { server: { allowedHosts: true } }
           │
           └─ Prevents: "Blocked request. This host is not allowed"
```

## Technology Stack Layers

```
┌─────────────────────────────────────────────────────────────────┐
│                        Presentation Layer                       │
├─────────────────────────────────────────────────────────────────┤
│ • React 19 (UI Components)                                      │
│ • Tailwind CSS v4 (Styling via @import)                        │
│ • Next.js App Router (Routing & SSR)                           │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        Application Layer                        │
├─────────────────────────────────────────────────────────────────┤
│ • Next.js API Routes (Backend logic)                           │
│ • Message state management (useState)                          │
│ • HTTP client (fetch API)                                      │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        Integration Layer                        │
├─────────────────────────────────────────────────────────────────┤
│ • Anthropic SDK (@anthropic-ai/sdk)                            │
│ • Vercel Sandbox SDK (@vercel/sandbox)                         │
│ • JSON parsing & regex matching                                │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        External Services                        │
├─────────────────────────────────────────────────────────────────┤
│ • Anthropic API (Claude Sonnet 5.5)                            │
│ • Vercel Sandbox API (Ephemeral environments)                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        Generated Output                         │
├─────────────────────────────────────────────────────────────────┤
│ • Astro Project (Node.js 22 runtime)                           │
│ • Tailwind CSS styling                                         │
│ • Live dev server on port 4321                                │
└─────────────────────────────────────────────────────────────────┘
```

## Key Design Decisions

### 1. Extended Thinking Handling
Claude Sonnet 5.5 returns multiple content blocks. We filter to find the "text" block:
```typescript
const textContent = response.content.find((block: any) => block.type === "text");
```

### 2. Sandbox Configuration
Critical Astro config to prevent host blocking:
```javascript
vite: { server: { allowedHosts: true } }
```

### 3. Async Sandbox Startup
8-second wait ensures Astro is fully started before returning URL.

### 4. JSON Embedding
Claude embeds configuration in markdown code blocks, parsed via regex.

### 5. Split-Screen UI
Real-time chat + live preview provides immediate feedback loop.
