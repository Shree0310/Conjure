(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/SplitView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SplitView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@opentelemetry+api@1.10.0_@types+node@26.6.6_react-dom@19.3.1_react@19.3.1__react@19.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@opentelemetry+api@1.10.0_@types+node@26.6.6_react-dom@19.3.1_react@19.3.1__react@19.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function SplitView() {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sandboxUrl, setSandboxUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [previewContent, setPreviewContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [githubRepo, setGithubRepo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sandboxId, setSandboxId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingMessage, setLoadingMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Thinking...");
    // GitHub workflow state
    const [isGithubConnected, setIsGithubConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCommitted, setIsCommitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isConnecting, setIsConnecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCommitting, setIsCommitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPushing, setIsPushing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [commitHistory, setCommitHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Debug: Monitor sandboxId changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplitView.useEffect": ()=>{
            console.log("🔍 sandboxId state changed:", sandboxId);
        }
    }["SplitView.useEffect"], [
        sandboxId
    ]);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplitView.useEffect": ()=>{
            scrollToBottom();
        }
    }["SplitView.useEffect"], [
        messages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplitView.useEffect": ()=>{
            if (!isLoading) return;
            const loadingMessages = [
                "Thinking...",
                "Understanding your request...",
                "Generating code...",
                "Creating project structure...",
                "Building components...",
                "Setting up configuration...",
                "Crafting beautiful design...",
                "Adding final touches...",
                "Almost ready..."
            ];
            let currentIndex = 0;
            setLoadingMessage(loadingMessages[0]);
            const interval = setInterval({
                "SplitView.useEffect.interval": ()=>{
                    currentIndex = (currentIndex + 1) % loadingMessages.length;
                    setLoadingMessage(loadingMessages[currentIndex]);
                }
            }["SplitView.useEffect.interval"], 3500); // Change message every 3.5 seconds
            return ({
                "SplitView.useEffect": ()=>clearInterval(interval)
            })["SplitView.useEffect"];
        }
    }["SplitView.useEffect"], [
        isLoading
    ]);
    const handleSend = async ()=>{
        if (!input.trim() || isLoading) return;
        const userMessage = {
            role: "user",
            content: input
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInput("");
        setIsLoading(true);
        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messages: [
                        ...messages,
                        userMessage
                    ]
                })
            });
            if (!response.ok) {
                const errorData = await response.json().catch(()=>({
                        error: "Unknown error"
                    }));
                throw new Error(errorData.error || `API error: ${response.status}`);
            }
            const data = await response.json();
            console.log("Full API response:", JSON.stringify(data, null, 2));
            const assistantMessage = {
                role: "assistant",
                content: data.message
            };
            setMessages((prev)=>[
                    ...prev,
                    assistantMessage
                ]);
            // If response contains a sandbox URL, update the preview
            if (data.sandboxUrl) {
                console.log("Setting sandboxUrl:", data.sandboxUrl);
                setSandboxUrl(data.sandboxUrl);
            }
            // If response contains sandbox ID, store it
            if (data.sandboxId) {
                console.log("✅ Received sandboxId:", data.sandboxId);
                setSandboxId(data.sandboxId);
                console.log("✅ State should now have sandboxId");
            } else {
                console.log("❌ No sandboxId in response");
            }
            // If response contains preview content, update it
            if (data.previewContent) {
                setPreviewContent(data.previewContent);
            }
        } catch (error) {
            console.error("Error:", error);
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        content: `Sorry, I encountered an error: ${errorMessage}\n\nPlease check the browser console for more details.`
                    }
                ]);
        } finally{
            setIsLoading(false);
        }
    };
    const handleKeyPress = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    // Step 1: Connect GitHub
    const handleConnectGithub = async ()=>{
        if (!githubRepo.trim() || isConnecting) return;
        setIsConnecting(true);
        // Simulate connection validation
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        setIsGithubConnected(true);
        setIsConnecting(false);
        setMessages((prev)=>[
                ...prev,
                {
                    role: "assistant",
                    content: `✅ GitHub connected!\n\nRepository: ${githubRepo}\n\nYou can now commit your changes.`
                }
            ]);
    };
    // Step 2: Commit changes
    const handleCommit = async ()=>{
        if (!sandboxId || !isGithubConnected || isCommitting) return;
        setIsCommitting(true);
        try {
            const response = await fetch("/api/git-commit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    sandboxId,
                    githubRepo: githubRepo.trim()
                })
            });
            if (!response.ok) {
                const errorData = await response.json().catch(()=>({
                        error: "Unknown error"
                    }));
                throw new Error(errorData.error || `API error: ${response.status}`);
            }
            const data = await response.json();
            setIsCommitted(true);
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        content: `✅ Changes committed!\n\nCommit: ${data.commitHash || 'Initial commit'}\n\nYou can now push to GitHub.`
                    }
                ]);
        } catch (error) {
            console.error("Error committing:", error);
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        content: `❌ Failed to commit: ${errorMessage}`
                    }
                ]);
        } finally{
            setIsCommitting(false);
        }
    };
    // Step 3: Push to GitHub
    const handlePush = async ()=>{
        if (!sandboxId || !isCommitted || isPushing) return;
        setIsPushing(true);
        try {
            const response = await fetch("/api/git-push", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    sandboxId,
                    githubRepo: githubRepo.trim()
                })
            });
            if (!response.ok) {
                const errorData = await response.json().catch(()=>({
                        error: "Unknown error"
                    }));
                throw new Error(errorData.error || `API error: ${response.status}`);
            }
            const data = await response.json();
            // Add to commit history
            const newCommit = {
                hash: data.commitHash || 'unknown',
                message: 'Initial commit: AI-generated Astro website',
                timestamp: new Date().toLocaleString(),
                repo: githubRepo
            };
            setCommitHistory((prev)=>[
                    newCommit,
                    ...prev
                ]);
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        content: `✅ Successfully pushed to GitHub!\n\nRepository: ${githubRepo}\nCommit: ${data.commitHash || 'Initial commit'}`
                    }
                ]);
            // Reset workflow for next iteration
            setIsGithubConnected(false);
            setIsCommitted(false);
            setGithubRepo("");
        } catch (error) {
            console.error("Error pushing to GitHub:", error);
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        content: `❌ Failed to push to GitHub: ${errorMessage}\n\nMake sure the repository exists and you have access rights.`
                    }
                ]);
        } finally{
            setIsPushing(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen flex overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1/2 flex flex-col border-r border-slate-800/50 backdrop-blur-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm px-8 py-6 border-b border-slate-700/50 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SplitView.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent",
                                        children: "AI Assistant"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SplitView.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SplitView.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 text-sm ml-6",
                                children: "Powered by Claude AI"
                            }, void 0, false, {
                                fileName: "[project]/components/SplitView.tsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SplitView.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent",
                        children: [
                            messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center space-y-6 max-w-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SplitView.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative text-7xl",
                                                    children: "✨"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SplitView.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SplitView.tsx",
                                            lineNumber: 293,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold text-white",
                                                    children: "Start a conversation"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SplitView.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400",
                                                    children: "Ask me anything or describe what you'd like to build"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SplitView.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SplitView.tsx",
                                            lineNumber: 297,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2 justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-4 py-2 bg-slate-800/50 text-slate-300 rounded-full text-sm border border-slate-700/50",
                                                    children: "Build a website"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SplitView.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-4 py-2 bg-slate-800/50 text-slate-300 rounded-full text-sm border border-slate-700/50",
                                                    children: "Create an app"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SplitView.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-4 py-2 bg-slate-800/50 text-slate-300 rounded-full text-sm border border-slate-700/50",
                                                    children: "Design a UI"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SplitView.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SplitView.tsx",
                                            lineNumber: 301,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SplitView.tsx",
                                    lineNumber: 292,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/SplitView.tsx",
                                lineNumber: 291,
                                columnNumber: 13
                            }, this) : messages.map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-in slide-in-from-bottom-4 duration-300`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3 max-w-[85%]",
                                        children: [
                                            msg.role === "assistant" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white text-sm",
                                                    children: "AI"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SplitView.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/SplitView.tsx",
                                                lineNumber: 322,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `rounded-2xl px-5 py-3.5 shadow-lg ${msg.role === "user" ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white border border-blue-500/50" : "bg-slate-800/80 backdrop-blur-sm text-slate-100 border border-slate-700/50"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "whitespace-pre-wrap leading-relaxed",
                                                    children: msg.content
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SplitView.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/SplitView.tsx",
                                                lineNumber: 326,
                                                columnNumber: 19
                                            }, this),
                                            msg.role === "user" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white text-sm",
                                                    children: "You"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SplitView.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/SplitView.tsx",
                                                lineNumber: 336,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SplitView.tsx",
                                        lineNumber: 320,
                                        columnNumber: 17
                                    }, this)
                                }, idx, false, {
                                    fileName: "[project]/components/SplitView.tsx",
                                    lineNumber: 316,
                                    columnNumber: 15
                                }, this)),
                            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-start animate-in slide-in-from-bottom-4 duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white text-sm",
                                                children: "AI"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SplitView.tsx",
                                                lineNumber: 348,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/SplitView.tsx",
                                            lineNumber: 347,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl px-5 py-4 shadow-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce shadow-lg shadow-blue-500/50"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/SplitView.tsx",
                                                                lineNumber: 353,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-2.5 h-2.5 bg-purple-500 rounded-full animate-bounce [animation-delay:0.2s] shadow-lg shadow-purple-500/50"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/SplitView.tsx",
                                                                lineNumber: 354,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s] shadow-lg shadow-blue-500/50"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/SplitView.tsx",
                                                                lineNumber: 355,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/SplitView.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-300 text-sm font-medium animate-pulse",
                                                        children: loadingMessage
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SplitView.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/SplitView.tsx",
                                                lineNumber: 351,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/SplitView.tsx",
                                            lineNumber: 350,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SplitView.tsx",
                                    lineNumber: 346,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/SplitView.tsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: messagesEndRef
                            }, void 0, false, {
                                fileName: "[project]/components/SplitView.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SplitView.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-sm px-6 py-6 border-t border-slate-700/50 shadow-2xl",
                        children: [
                            sandboxId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 pb-4 border-b border-slate-700/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 text-slate-400",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SplitView.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/SplitView.tsx",
                                                lineNumber: 374,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-slate-300",
                                                children: "Push to GitHub"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SplitView.tsx",
                                                lineNumber: 377,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SplitView.tsx",
                                        lineNumber: 373,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 relative",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: githubRepo,
                                                    onChange: (e)=>setGithubRepo(e.target.value),
                                                    placeholder: "https://github.com/username/repo.git",
                                                    className: "w-full bg-slate-800/50 text-white placeholder-slate-500 rounded-lg pl-3 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-slate-700/50 backdrop-blur-sm transition-all duration-200",
                                                    disabled: isPushing
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SplitView.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/SplitView.tsx",
                                                lineNumber: 380,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleGitPush,
                                                disabled: isPushing || !githubRepo.trim(),
                                                className: "flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:from-slate-700 disabled:to-slate-800 text-white rounded-lg font-medium text-sm transition-all duration-200 disabled:cursor-not-allowed shadow-lg hover:shadow-purple-500/25 disabled:shadow-none border border-purple-500/50 disabled:border-slate-700/50 whitespace-nowrap",
                                                children: isPushing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SplitView.tsx",
                                                            lineNumber: 397,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "animate-pulse",
                                                            children: pushingMessage
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SplitView.tsx",
                                                            lineNumber: 398,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/SplitView.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-4 h-4",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/SplitView.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SplitView.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Push"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SplitView.tsx",
                                                            lineNumber: 405,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/SplitView.tsx",
                                                    lineNumber: 401,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/SplitView.tsx",
                                                lineNumber: 390,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SplitView.tsx",
                                        lineNumber: 379,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SplitView.tsx",
                                lineNumber: 372,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: input,
                                            onChange: (e)=>setInput(e.target.value),
                                            onKeyDown: handleKeyPress,
                                            placeholder: "Type your message...",
                                            className: "w-full bg-slate-800/50 text-white placeholder-slate-500 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none border border-slate-700/50 backdrop-blur-sm transition-all duration-200",
                                            rows: 2,
                                            disabled: isLoading
                                        }, void 0, false, {
                                            fileName: "[project]/components/SplitView.tsx",
                                            lineNumber: 415,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/SplitView.tsx",
                                        lineNumber: 414,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSend,
                                        disabled: isLoading || !input.trim(),
                                        className: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-slate-700 disabled:to-slate-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/25 disabled:shadow-none self-end border border-blue-500/50 disabled:border-slate-700/50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-2",
                                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SplitView.tsx",
                                                        lineNumber: 433,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Sending"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SplitView.tsx",
                                                        lineNumber: 434,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/SplitView.tsx",
                                                lineNumber: 432,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Send"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SplitView.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SplitView.tsx",
                                                            lineNumber: 440,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SplitView.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/SplitView.tsx",
                                                lineNumber: 437,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/SplitView.tsx",
                                            lineNumber: 430,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/SplitView.tsx",
                                        lineNumber: 425,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SplitView.tsx",
                                lineNumber: 413,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 text-xs mt-3 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-3.5 h-3.5",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SplitView.tsx",
                                            lineNumber: 449,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/SplitView.tsx",
                                        lineNumber: 448,
                                        columnNumber: 13
                                    }, this),
                                    "Press ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                        className: "px-1.5 py-0.5 bg-slate-700 text-slate-300 rounded text-xs",
                                        children: "Enter"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SplitView.tsx",
                                        lineNumber: 451,
                                        columnNumber: 19
                                    }, this),
                                    " to send,",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                        className: "px-1.5 py-0.5 bg-slate-700 text-slate-300 rounded text-xs",
                                        children: "Shift"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SplitView.tsx",
                                        lineNumber: 452,
                                        columnNumber: 13
                                    }, this),
                                    " +",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                        className: "px-1.5 py-0.5 bg-slate-700 text-slate-300 rounded text-xs",
                                        children: "Enter"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SplitView.tsx",
                                        lineNumber: 453,
                                        columnNumber: 13
                                    }, this),
                                    " for new line"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SplitView.tsx",
                                lineNumber: 447,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SplitView.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SplitView.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1/2 flex flex-col bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-sm px-8 py-6 border-b border-slate-700/50 shadow-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent",
                                            children: "Live Preview"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SplitView.tsx",
                                            lineNumber: 464,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 text-sm mt-1",
                                            children: "Vercel Sandbox Environment"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SplitView.tsx",
                                            lineNumber: 467,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SplitView.tsx",
                                    lineNumber: 463,
                                    columnNumber: 13
                                }, this),
                                sandboxUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: sandboxUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg transition-colors border border-blue-500/30 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: "Open"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SplitView.tsx",
                                            lineNumber: 476,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SplitView.tsx",
                                                lineNumber: 478,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/SplitView.tsx",
                                            lineNumber: 477,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SplitView.tsx",
                                    lineNumber: 470,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SplitView.tsx",
                            lineNumber: 462,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/SplitView.tsx",
                        lineNumber: 461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-hidden relative",
                        children: sandboxUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: sandboxUrl,
                            className: "w-full h-full border-0",
                            title: "Sandbox Preview"
                        }, void 0, false, {
                            fileName: "[project]/components/SplitView.tsx",
                            lineNumber: 488,
                            columnNumber: 13
                        }, this) : previewContent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full overflow-auto p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                dangerouslySetInnerHTML: {
                                    __html: previewContent
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/SplitView.tsx",
                                lineNumber: 495,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/SplitView.tsx",
                            lineNumber: 494,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-6 max-w-md p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SplitView.tsx",
                                                lineNumber: 501,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-24 h-24 mx-auto bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl flex items-center justify-center shadow-lg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-12 h-12 text-slate-500",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 1.5,
                                                            d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SplitView.tsx",
                                                            lineNumber: 505,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SplitView.tsx",
                                                        lineNumber: 504,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SplitView.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/SplitView.tsx",
                                                lineNumber: 502,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SplitView.tsx",
                                        lineNumber: 500,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-slate-800",
                                                children: "No Preview Yet"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SplitView.tsx",
                                                lineNumber: 511,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-600 leading-relaxed",
                                                children: "Start a conversation to create and preview your project in real-time"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SplitView.tsx",
                                                lineNumber: 512,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SplitView.tsx",
                                        lineNumber: 510,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SplitView.tsx",
                                lineNumber: 499,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/SplitView.tsx",
                            lineNumber: 498,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/SplitView.tsx",
                        lineNumber: 486,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SplitView.tsx",
                lineNumber: 459,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SplitView.tsx",
        lineNumber: 274,
        columnNumber: 5
    }, this);
}
_s(SplitView, "LV5YRiXTpJpBAIf4KJUHc9bPl5M=");
_c = SplitView;
var _c;
__turbopack_context__.k.register(_c, "SplitView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/next@16.4.6_@opentelemetry+api@1.10.0_@types+node@26.6.6_react-dom@19.3.1_react@19.3.1__react@19.3.1/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@opentelemetry+api@1.10.0_@types+node@26.6.6_react-dom@19.3.1_react@19.3.1__react@19.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.4.6_@opentelemetry+api@1.10.0_@types+node@26.6.6_react-dom@19.3.1_react@19.3.1__react@19.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/.pnpm/next@16.4.6_@opentelemetry+api@1.10.0_@types+node@26.6.6_react-dom@19.3.1_react@19.3.1__react@19.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$opentelemetry$2b$api$40$1$2e$10$2e$0_$40$types$2b$node$40$26$2e$6$2e$6_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@opentelemetry+api@1.10.0_@types+node@26.6.6_react-dom@19.3.1_react@19.3.1__react@19.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.4.6_@opentelemetry+api@1.10.0_@types+node@26.6.6_react-dom@19.3.1_react@19.3.1__react@19.3.1/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_13gpif0xaubf2._.js.map