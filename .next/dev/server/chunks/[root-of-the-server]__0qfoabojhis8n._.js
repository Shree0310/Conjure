module.exports = [
"[externals]/node:os [external] (node:os, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:os", () => require("node:os"));

module.exports = mod;
}),
"[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/api.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchApi",
    ()=>fetchApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/error.js [app-route] (ecmascript)");
;
//#region src/auth/api.ts
async function fetchApi(opts) {
    const x = await fetch(`https://vercel.com/api${opts.endpoint}`, {
        method: opts.method,
        body: opts.body,
        headers: {
            Authorization: `Bearer ${opts.token}`,
            "Content-Type": "application/json"
        }
    });
    if (!x.ok) {
        let message = await x.text();
        try {
            const { error } = JSON.parse(message);
            message = `${error.code.toUpperCase()}: ${error.message}`;
        } catch  {}
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NotOk"]({
            responseText: message,
            statusCode: x.status
        });
    }
    return await x.json();
}
;
}),
"[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/error.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotOk",
    ()=>NotOk
]);
//#region src/auth/error.ts
var NotOk = class extends Error {
    constructor(response){
        super(`HTTP ${response.statusCode}: ${response.responseText}`);
        this.name = "NotOk";
        this.response = response;
    }
};
;
}),
"[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/file.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAuth",
    ()=>getAuth,
    "updateAuthConfig",
    ()=>updateAuthConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/zod.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .number>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:os [external] (node:os, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xdg$2d$app$2d$paths$40$5$2e$1$2e$0$2f$node_modules$2f$xdg$2d$app$2d$paths$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xdg-app-paths@5.1.0/node_modules/xdg-app-paths/index.js [app-route] (ecmascript)");
;
;
;
;
;
;
//#region src/auth/file.ts
const ZodDate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().transform((seconds)=>/* @__PURE__ */ new Date(seconds * 1e3));
const AuthFile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1).optional(),
    refreshToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1).optional(),
    expiresAt: ZodDate.optional()
});
const StoredAuthFile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["json"].pipe(AuthFile);
const isDirectory = (path$1)=>{
    try {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].lstatSync(path$1).isDirectory();
    } catch (_) {
        return false;
    }
};
/**
* Returns in which directory the config should be present.
*
* @internal The `VERCEL_AUTH_CONFIG_DIR` env var is for testing purposes only
* and is not part of the public API.
*/ const getGlobalPathConfig = ()=>{
    if (process.env.VERCEL_AUTH_CONFIG_DIR) return process.env.VERCEL_AUTH_CONFIG_DIR;
    const vercelDirectories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xdg$2d$app$2d$paths$40$5$2e$1$2e$0$2f$node_modules$2f$xdg$2d$app$2d$paths$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])("com.vercel.cli").dataDirs();
    return [
        ...vercelDirectories,
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__["homedir"])(), ".now"),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xdg$2d$app$2d$paths$40$5$2e$1$2e$0$2f$node_modules$2f$xdg$2d$app$2d$paths$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])("now").dataDirs()
    ].find((configPath)=>isDirectory(configPath)) || vercelDirectories[0];
};
const getAuth = ()=>{
    try {
        const pathname = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(getGlobalPathConfig(), "auth.json");
        return StoredAuthFile.parse(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].readFileSync(pathname, "utf8"));
    } catch  {
        return null;
    }
};
function updateAuthConfig(config) {
    const pathname = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(getGlobalPathConfig(), "auth.json");
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].mkdirSync(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(pathname), {
        recursive: true
    });
    const content = {
        token: config.token,
        expiresAt: config.expiresAt && Math.round(config.expiresAt.getTime() / 1e3),
        refreshToken: config.refreshToken
    };
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].writeFileSync(pathname, JSON.stringify(content) + "\n");
}
;
}),
"[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotOk",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NotOk"],
    "OAuth",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$oauth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OAuth"],
    "getAuth",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$file$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuth"],
    "inferScope",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$project$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inferScope"],
    "isOAuthError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$oauth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isOAuthError"],
    "pollForToken",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$poll$2d$for$2d$token$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pollForToken"],
    "updateAuthConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$file$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateAuthConfig"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$file$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/file.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$oauth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/oauth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$poll$2d$for$2d$token$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/poll-for-token.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/error.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$project$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/project.js [app-route] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$file$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/file.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$oauth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/oauth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$poll$2d$for$2d$token$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/poll-for-token.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/error.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$project$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/project.js [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/linked-project.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readLinkedProject",
    ()=>readLinkedProject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/zod.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
;
;
;
;
//#region src/auth/linked-project.ts
const LinkedProjectSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["json"].pipe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
    orgId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()
}));
/**
* Reads the linked project configuration from `.vercel/project.json`.
*
* @param cwd - The directory to search for `.vercel/project.json`.
* @returns The linked project's `projectId` and `teamId`, or `null` if not found.
*/ async function readLinkedProject(cwd) {
    const projectJsonPath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"](cwd, ".vercel", "project.json");
    let content;
    try {
        content = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"](projectJsonPath, "utf-8");
    } catch  {
        return null;
    }
    const parsed = LinkedProjectSchema.safeParse(content);
    if (!parsed.success) return null;
    return {
        projectId: parsed.data.projectId,
        teamId: parsed.data.orgId
    };
}
;
}),
"[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/oauth.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OAuth",
    ()=>OAuth,
    "isOAuthError",
    ()=>isOAuthError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$version$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/version.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .number>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$literal$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .literal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .enum>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$ZodError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .ZodError>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/os [external] (os, cjs)");
;
;
;
//#region src/auth/oauth.ts
const USER_AGENT = `${__TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["default"].hostname()} @ vercel/sandbox/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$version$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["VERSION"]} node-${process.version} ${__TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["default"].platform()} (${__TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["default"].arch()})`;
const ISSUER = new URL("https://vercel.com");
const CLIENT_ID = "cl_HYyOPBNtFMfHhaUn9L4QPfTZz6TP47bp";
const AuthorizationServerMetadata = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    issuer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().url(),
    device_authorization_endpoint: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().url(),
    token_endpoint: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().url(),
    revocation_endpoint: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().url(),
    jwks_uri: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().url(),
    introspection_endpoint: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().url()
});
let _as;
const DeviceAuthorization = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    device_code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
    user_code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
    verification_uri: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().url(),
    verification_uri_complete: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().url(),
    expires_in: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number(),
    interval: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number()
});
const IntrospectionResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    active: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$literal$3e$__["z"].literal(true),
    client_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
    session_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()
}).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    active: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$literal$3e$__["z"].literal(false)
}));
/**
* Returns the Authorization Server Metadata
*
* @see https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfigurationRequest
* @see https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfigurationResponse
*/ async function authorizationServerMetadata() {
    if (_as) return _as;
    const response = await fetch(new URL(".well-known/openid-configuration", ISSUER), {
        headers: {
            "Content-Type": "application/json",
            "user-agent": USER_AGENT
        }
    });
    _as = AuthorizationServerMetadata.parse(await response.json());
    return _as;
}
async function OAuth() {
    const as = await authorizationServerMetadata();
    return {
        async deviceAuthorizationRequest () {
            const json = await (await fetch(as.device_authorization_endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "user-agent": USER_AGENT
                },
                body: new URLSearchParams({
                    client_id: CLIENT_ID,
                    scope: "openid offline_access"
                })
            })).json();
            const parsed = DeviceAuthorization.safeParse(json);
            if (!parsed.success) throw new OAuthError("Failed to parse device authorization response from the Vercel authorization server.", json);
            return {
                device_code: parsed.data.device_code,
                user_code: parsed.data.user_code,
                verification_uri: parsed.data.verification_uri,
                verification_uri_complete: parsed.data.verification_uri_complete,
                expiresAt: Date.now() + parsed.data.expires_in * 1e3,
                interval: parsed.data.interval
            };
        },
        async deviceAccessTokenRequest (device_code) {
            try {
                return [
                    null,
                    await fetch(as.token_endpoint, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            "user-agent": USER_AGENT
                        },
                        body: new URLSearchParams({
                            client_id: CLIENT_ID,
                            grant_type: "urn:ietf:params:oauth:grant-type:device_code",
                            device_code
                        }),
                        signal: AbortSignal.timeout(10 * 1e3)
                    })
                ];
            } catch (error) {
                if (error instanceof Error) return [
                    error
                ];
                return [
                    new Error("An unknown error occurred. See the logs for details.", {
                        cause: error
                    })
                ];
            }
        },
        async processTokenResponse (response) {
            const json = await response.json();
            const processed = TokenSet.safeParse(json);
            if (!processed.success) return [
                new OAuthError("Failed to parse token response from the Vercel authorization server.", json)
            ];
            return [
                null,
                processed.data
            ];
        },
        async revokeToken (token) {
            const response = await fetch(as.revocation_endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "user-agent": USER_AGENT
                },
                body: new URLSearchParams({
                    token,
                    client_id: CLIENT_ID
                })
            });
            if (response.ok) return;
            return new OAuthError("Revocation request failed", await response.json());
        },
        async refreshToken (token) {
            const response = await fetch(as.token_endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "user-agent": USER_AGENT
                },
                body: new URLSearchParams({
                    client_id: CLIENT_ID,
                    grant_type: "refresh_token",
                    refresh_token: token
                })
            });
            const [tokensError, tokenSet] = await this.processTokenResponse(response);
            if (tokensError) throw tokensError;
            return tokenSet;
        },
        async introspectToken (token) {
            const json = await (await fetch(as.introspection_endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "user-agent": USER_AGENT
                },
                body: new URLSearchParams({
                    token
                })
            })).json();
            const processed = IntrospectionResponse.safeParse(json);
            if (!processed.success) throw new OAuthError("Failed to parse introspection response from the Vercel authorization server.", json);
            return processed.data;
        }
    };
}
const TokenSet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    access_token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
    token_type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$literal$3e$__["z"].literal("Bearer"),
    expires_in: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number(),
    refresh_token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional(),
    scope: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional()
});
const OAuthErrorResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        "invalid_request",
        "invalid_client",
        "invalid_grant",
        "unauthorized_client",
        "unsupported_grant_type",
        "invalid_scope",
        "server_error",
        "authorization_pending",
        "slow_down",
        "access_denied",
        "expired_token",
        "unsupported_token_type"
    ]),
    error_description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional(),
    error_uri: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional()
});
function processOAuthErrorResponse(json) {
    try {
        return OAuthErrorResponse.parse(json);
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$ZodError$3e$__["z"].ZodError) return /* @__PURE__ */ new TypeError(`Invalid OAuth error response: ${error.message}`);
        return /* @__PURE__ */ new TypeError("Failed to parse OAuth error response");
    }
}
var OAuthError = class extends Error {
    constructor(message, response){
        super(message);
        this.name = "OAuthError";
        const error = processOAuthErrorResponse(response);
        if (error instanceof TypeError) {
            this.cause = /* @__PURE__ */ new Error("Unexpected response from the Vercel authorization server.");
            this.code = "server_error";
            return;
        }
        let cause = error.error;
        if (error.error_description) cause += `: ${error.error_description}`;
        if (error.error_uri) cause += ` (${error.error_uri})`;
        this.cause = new Error(cause);
        this.code = error.error;
    }
};
function isOAuthError(error) {
    return error instanceof OAuthError;
}
;
}),
"[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/poll-for-token.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pollForToken",
    ()=>pollForToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$file$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/file.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$oauth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/oauth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$timers$2f$promises__$5b$external$5d$__$28$node$3a$timers$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:timers/promises [external] (node:timers/promises, cjs)");
;
;
;
//#region src/auth/poll-for-token.ts
async function* pollForToken({ request, oauth }) {
    const controller = new AbortController();
    try {
        let intervalMs = request.interval * 1e3;
        while(Date.now() < request.expiresAt){
            const [tokenResponseError, tokenResponse] = await oauth.deviceAccessTokenRequest(request.device_code);
            if (tokenResponseError) {
                if (tokenResponseError.message.includes("timeout")) {
                    intervalMs *= 2;
                    yield {
                        _tag: "Timeout",
                        newInterval: intervalMs
                    };
                    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$timers$2f$promises__$5b$external$5d$__$28$node$3a$timers$2f$promises$2c$__cjs$29$__["setTimeout"])(intervalMs, {
                        signal: controller.signal
                    });
                    continue;
                }
                yield {
                    _tag: "Error",
                    error: tokenResponseError
                };
                return;
            }
            yield {
                _tag: "Response",
                response: tokenResponse.clone()
            };
            const [tokensError, tokens] = await oauth.processTokenResponse(tokenResponse);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$oauth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isOAuthError"])(tokensError)) {
                const { code } = tokensError;
                switch(code){
                    case "authorization_pending":
                        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$timers$2f$promises__$5b$external$5d$__$28$node$3a$timers$2f$promises$2c$__cjs$29$__["setTimeout"])(intervalMs, {
                            signal: controller.signal
                        });
                        continue;
                    case "slow_down":
                        intervalMs += 5 * 1e3;
                        yield {
                            _tag: "SlowDown",
                            newInterval: intervalMs
                        };
                        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$timers$2f$promises__$5b$external$5d$__$28$node$3a$timers$2f$promises$2c$__cjs$29$__["setTimeout"])(intervalMs, {
                            signal: controller.signal
                        });
                        continue;
                    default:
                        yield {
                            _tag: "Error",
                            error: tokensError.cause
                        };
                        return;
                }
            }
            if (tokensError) {
                yield {
                    _tag: "Error",
                    error: tokensError
                };
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$file$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateAuthConfig"])({
                token: tokens.access_token,
                expiresAt: new Date(Date.now() + tokens.expires_in * 1e3),
                refreshToken: tokens.refresh_token
            });
            return;
        }
        yield {
            _tag: "Error",
            error: /* @__PURE__ */ new Error("Timed out waiting for authentication. Please try again.")
        };
        return;
    } finally{
        controller.abort();
    }
}
;
}),
"[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/project.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inferScope",
    ()=>inferScope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/error.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$api$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/api.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$linked$2d$project$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/linked-project.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .number>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .array>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$unknown$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .unknown>");
;
;
;
;
//#region src/auth/project.ts
const UserSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    user: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        defaultTeamId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().nullable(),
        username: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()
    })
});
const TeamSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
    slug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().optional(),
    membership: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()
    }),
    billing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        plan: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()
    })
});
const TeamsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    teams: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$unknown$3e$__["z"].unknown()).transform((entries)=>entries.flatMap((entry)=>{
            const parsed = TeamSchema.safeParse(entry);
            return parsed.success ? [
                parsed.data
            ] : [];
        })),
    pagination: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        count: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number(),
        next: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().nullable()
    })
});
const DEFAULT_PROJECT_NAME = "vercel-sandbox-default-project";
/** Status codes that mean "this team can't be used, try the next one". */ function isSkippableTeamError(e) {
    return e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NotOk"] && (e.response.statusCode === 402 || e.response.statusCode === 403);
}
/**
* Resolves the team and project scope for sandbox operations.
*
* First checks for a locally linked project in `.vercel/project.json`.
* If found, uses the `projectId` and `orgId` from there.
*
* Otherwise, if `teamId` is not provided, builds an ordered list of candidate
* teams to try: the user's `defaultTeamId` first (if set), then hobby-plan
* teams where the user has an OWNER role (preferring the personal team matching
* the username, then the most recently updated). Tries each candidate until one
* succeeds.
*
* @param opts.token - Vercel API authentication token.
* @param opts.teamId - Optional team slug. If omitted, candidate teams are resolved automatically.
* @param opts.cwd - Optional directory to search for `.vercel/project.json`. Defaults to `process.cwd()`.
* @returns The resolved scope with `projectId`, `teamId`, and whether the project was `created`.
*
* @throws {NotOk} If the API returns an error other than 404 when checking the project.
*
* @example
* ```ts
* const scope = await inferScope({ token: "vercel_..." });
* // => { projectId: "vercel-sandbox-default-project", teamId: "my-team", created: false }
* ```
*/ async function inferScope(opts) {
    const linkedProject = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$linked$2d$project$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readLinkedProject"])(opts.cwd ?? process.cwd());
    if (linkedProject) {
        const slugs = await resolveLinkedProjectSlugs(opts.token, linkedProject.teamId, linkedProject.projectId);
        return {
            ...linkedProject,
            created: false,
            ...slugs
        };
    }
    if (opts.teamId) return tryTeam(opts.token, opts.teamId);
    const { defaultTeamId, username } = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$api$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchApi"])({
        token: opts.token,
        endpoint: "/v2/user"
    }).then(UserSchema.parse)).user;
    if (defaultTeamId) try {
        const result = await tryTeam(opts.token, defaultTeamId);
        try {
            const team = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$api$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchApi"])({
                token: opts.token,
                endpoint: `/v2/teams/${encodeURIComponent(defaultTeamId)}`
            }).then(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
                slug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()
            }).parse);
            return {
                ...result,
                teamSlug: team.slug
            };
        } catch  {
            return result;
        }
    } catch (e) {
        if (!isSkippableTeamError(e)) throw e;
    }
    let next = null;
    do {
        const endpoint = next === null ? "/v2/teams?limit=20" : `/v2/teams?limit=20&until=${next}`;
        const page = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$api$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchApi"])({
            token: opts.token,
            endpoint
        }).then(TeamsSchema.parse);
        next = page.pagination.next;
        const hobbyOwnerTeams = page.teams.filter((t)=>t.membership.role === "OWNER" && t.billing.plan === "hobby");
        if (hobbyOwnerTeams.length === 0) continue;
        const bestHobbyTeam = hobbyOwnerTeams.find((t)=>t.slug === username) ?? hobbyOwnerTeams.sort((a, b)=>(b.updatedAt ?? 0) - (a.updatedAt ?? 0))[0];
        if (bestHobbyTeam && bestHobbyTeam.id !== defaultTeamId) try {
            return {
                ...await tryTeam(opts.token, bestHobbyTeam.id),
                teamSlug: bestHobbyTeam.slug
            };
        } catch (e) {
            if (!isSkippableTeamError(e)) throw e;
        }
    }while (next !== null)
    try {
        return {
            ...await tryTeam(opts.token, username),
            teamSlug: username
        };
    } catch (e) {
        if (!isSkippableTeamError(e)) throw e;
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NotOk"]({
        statusCode: 403,
        responseText: `Authenticated as "${username}" but none of the available teams allow sandbox creation.`
    });
}
/**
* Attempts to use a specific team for sandbox operations by checking for
* (or creating) the default project within that team.
*
* @returns The resolved scope if the team is usable.
* @throws {NotOk} On authorization or other API errors.
*/ async function tryTeam(token, teamId) {
    const teamParam = teamId.startsWith("team_") ? `teamId=${encodeURIComponent(teamId)}` : `slug=${encodeURIComponent(teamId)}`;
    let created = false;
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$api$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchApi"])({
            token,
            endpoint: `/v2/projects/${encodeURIComponent(DEFAULT_PROJECT_NAME)}?${teamParam}`
        });
    } catch (e) {
        if (!(e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NotOk"]) || e.response.statusCode !== 404) throw e;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$api$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchApi"])({
            token,
            endpoint: `/v11/projects?${teamParam}`,
            method: "POST",
            body: JSON.stringify({
                name: DEFAULT_PROJECT_NAME
            })
        });
        created = true;
    }
    return {
        projectId: DEFAULT_PROJECT_NAME,
        teamId,
        created
    };
}
/**
* Best-effort resolution of team slug and project name for a linked project.
* Both IDs may be opaque (e.g. `team_xxx`, `prj_xxx`), so we fetch the
* human-readable names from the API in parallel.
*/ async function resolveLinkedProjectSlugs(token, teamId, projectId) {
    try {
        const teamParam = teamId.startsWith("team_") ? `teamId=${encodeURIComponent(teamId)}` : `slug=${encodeURIComponent(teamId)}`;
        const [teamData, projectData] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$api$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchApi"])({
                token,
                endpoint: `/v2/teams/${encodeURIComponent(teamId)}`
            }).then(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
                slug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()
            }).parse),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$sandbox$40$4$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$sandbox$2f$dist$2f$auth$2f$api$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchApi"])({
                token,
                endpoint: `/v2/projects/${encodeURIComponent(projectId)}?${teamParam}`
            }).then(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
                name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()
            }).parse)
        ]);
        return {
            teamSlug: teamData.slug,
            projectSlug: projectData.name
        };
    } catch  {
        return {};
    }
}
;
}),
"[project]/node_modules/.pnpm/@vercel+sandbox@4.0.0/node_modules/@vercel/sandbox/dist/auth/zod.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "json",
    ()=>json
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$ZodIssueCode$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .ZodIssueCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$NEVER$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .NEVER>");
;
//#region src/auth/zod.ts
/**
* A Zod codec that serializes and deserializes JSON strings.
*/ const json = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().transform((jsonString, ctx)=>{
    try {
        return JSON.parse(jsonString);
    } catch (err) {
        ctx.addIssue({
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$ZodIssueCode$3e$__["z"].ZodIssueCode.custom,
            message: `Invalid JSON: ${err.message}`
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$NEVER$3e$__["z"].NEVER;
    }
});
;
}),
"[project]/node_modules/.pnpm/os-paths@4.4.0/node_modules/os-paths/src/lib/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-env es6, node */ // # spell-checker:ignore HomeDrive HomePath LocalAppData UserProfile WinDir
const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const paths = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
const isWinOS = /^win/i.test(process.platform);
function normalize_path(path) {
    return paths.normalize(paths.join(path, '.'));
}
const base = ()=>{
    const { env } = process;
    const object = {};
    object.home = ()=>normalize_path(os.homedir ? os.homedir() : env.HOME);
    object.temp = ()=>normalize_path(os.tmpdir ? os.tmpdir() : env.TMPDIR || env.TEMP || env.TMP);
    return object;
};
const windows = ()=>{
    const { env } = process;
    const object = {};
    object.home = ()=>normalize_path(os.homedir ? os.homedir() : env.USERPROFILE || paths.join(env.HOMEDRIVE, env.HOMEPATH) || env.HOME);
    object.temp = ()=>normalize_path(os.tmpdir ? os.tmpdir() : env.TEMP || env.TMP || paths.join(env.LOCALAPPDATA || env.SystemRoot || env.windir, 'Temp'));
    return object;
};
class _OSPaths {
    constructor(){
        const OSPaths = function() {
            return new _OSPaths();
        };
        this._fn = OSPaths;
        // Connect to platform-specific API functions by extension
        const extension = isWinOS ? windows() : base();
        Object.keys(extension).forEach((key)=>{
            this._fn[key] = extension[key];
        });
        return this._fn;
    }
}
module.exports = new _OSPaths();
}),
"[project]/node_modules/.pnpm/xdg-app-paths@5.1.0/node_modules/xdg-app-paths/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// # spell-checker:ignore macos APPDATA LOCALAPPDATA
/* eslint-env es6, node */ const path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const xdg = __turbopack_context__.r("[project]/node_modules/.pnpm/xdg-portable@7.3.0/node_modules/xdg-portable/src/lib/index.js [app-route] (ecmascript)");
const isWinOS = /^win/i.test(process.platform);
function _normalizeOptions(options, isolated) {
    options = options || {};
    if (typeof options !== 'object') {
        options = {
            isolated: options
        };
    }
    options.isolated = options.isolated === undefined || options.isolated === null ? isolated : options.isolated;
    if (typeof options.isolated !== 'boolean') {
        throw new TypeError(`Expected boolean for "isolated" argument, got ${typeof options.isolated}`);
    }
    return options;
}
const base = (name, isolated)=>{
    const object = {};
    object.cache = (options = {
        isolated: null
    })=>{
        options = _normalizeOptions(options, isolated);
        return path.join(xdg.cache(), options.isolated ? name : '');
    };
    object.config = (options = {
        isolated: null
    })=>{
        options = _normalizeOptions(options, isolated);
        return path.join(xdg.config(), options.isolated ? name : '');
    };
    object.data = (options = {
        isolated: null
    })=>{
        options = _normalizeOptions(options, isolated);
        return path.join(xdg.data(), options.isolated ? name : '');
    };
    object.runtime = (options = {
        isolated: null
    })=>{
        options = _normalizeOptions(options, isolated);
        return xdg.runtime() ? path.join(xdg.runtime(), options.isolated ? name : '') : undefined;
    };
    object.state = (options = {
        isolated: null
    })=>{
        options = _normalizeOptions(options, isolated);
        return path.join(xdg.state(), options.isolated ? name : '');
    };
    object.configDirs = (options = {
        isolated: null
    })=>{
        options = _normalizeOptions(options, isolated);
        return xdg.configDirs().map((s)=>path.join(s, options.isolated ? name : ''));
    };
    object.dataDirs = (options = {
        isolated: null
    })=>{
        options = _normalizeOptions(options, isolated);
        return xdg.dataDirs().map((s)=>path.join(s, options.isolated ? name : ''));
    };
    return object;
};
const windows = (name, isolated)=>{
    const { env } = process;
    const homedir = os.homedir();
    const tmpdir = os.tmpdir();
    // # ref: <https://www.thewindowsclub.com/local-localnow-roaming-folders-windows-10> @@ <http://archive.is/tDEPl>
    const appData = env.APPDATA || path.join(homedir || tmpdir, 'AppData', 'Roaming'); // APPDATA == "AppData/Roaming" contains data which may follow user between machines
    const localAppData = env.LOCALAPPDATA || path.join(homedir || tmpdir, 'AppData', 'Local'); // LOCALAPPDATA == "AppData/Local" contains local-machine-only user data
    const object = {};
    // Locations for data/config/cache/state are invented (Windows doesn't have a popular convention)
    object.cache = (options = {
        isolated: null
    })=>{
        options = _normalizeOptions(options, isolated);
        return !options.isolated || env.XDG_CACHE_HOME ? path.join(xdg.cache(), options.isolated ? name : '') : path.join(localAppData, options.isolated ? name : '', 'Cache');
    };
    object.config = (options = {
        isolated: null
    })=>{
        options = _normalizeOptions(options, isolated);
        const config = !options.isolated || env.XDG_CONFIG_HOME ? path.join(xdg.config(), options.isolated ? name : '') : path.join(appData, options.isolated ? name : '', 'Config');
        return config;
    };
    object.data = (options = {
        isolated: null
    })=>{
        options = _normalizeOptions(options, isolated);
        const data = !options.isolated || env.XDG_DATA_HOME ? path.join(xdg.data(), options.isolated ? name : '') : path.join(appData, options.isolated ? name : '', 'Data');
        return data;
    };
    object.runtime = (options = {
        isolated: null
    })=>{
        options = _normalizeOptions(options, isolated);
        return xdg.runtime() ? path.join(xdg.runtime(), options.isolated ? name : '') : undefined;
    };
    object.state = (options = {
        isolated: null
    })=>{
        options = _normalizeOptions(options, isolated);
        return !options.isolated || env.XDG_STATE_HOME ? path.join(xdg.state(), options.isolated ? name : '') : path.join(localAppData, options.isolated ? name : '', 'State');
    };
    object.configDirs = (options = {
        isolated: null
    })=>{
        options = _normalizeOptions(options, isolated);
        const dirs = [
            object.config(options)
        ];
        if (env.XDG_CONFIG_DIRS) {
            dirs.push(...env.XDG_CONFIG_DIRS.split(path.delimiter).map((s)=>path.join(s, options.isolated ? name : '')));
        }
        return dirs;
    };
    object.dataDirs = (options = {
        isolated: null
    })=>{
        options = _normalizeOptions(options, isolated);
        const dirs = [
            object.data(options)
        ];
        if (env.XDG_DATA_DIRS) {
            dirs.push(...env.XDG_DATA_DIRS.split(path.delimiter).map((s)=>path.join(s, options.isolated ? name : '')));
        }
        return dirs;
    };
    return object;
};
class _XDGAppPaths {
    constructor(options = {
        name: null,
        suffix: null,
        isolated: true
    }){
        const XDGAppPaths = function(options = {
            name: null,
            suffix: null,
            isolated: true
        }) {
            return new _XDGAppPaths(options);
        };
        this._fn = XDGAppPaths;
        options = options || {};
        if (typeof options !== 'object') {
            options = {
                name: options
            };
        }
        let name = options.name || '';
        if (typeof name !== 'string') {
            throw new TypeError(`Expected string for "name" argument, got ${typeof name}`);
        }
        const suffix = options.suffix || '';
        if (typeof suffix !== 'string') {
            throw new TypeError(`Expected string for "suffix" argument, got ${typeof suffix}`);
        }
        const isolated = options.isolated === undefined || options.isolated === null ? true : options.isolated;
        if (typeof isolated !== 'boolean') {
            throw new TypeError(`Expected boolean for "isolated" argument, got ${typeof isolated}`);
        }
        if (!name) {
            // Find a suitable application name (ref: <https://stackoverflow.com/a/46110961/43774>)
            name = path.parse(process.pkg ? process.execPath : /*TURBOPACK member replacement*/ __turbopack_context__.t.main ? /*TURBOPACK member replacement*/ __turbopack_context__.t.main.filename : process.argv[0]).name;
        }
        if (suffix) {
            name += suffix;
        }
        this._fn.$name = ()=>name;
        this._fn.$isolated = ()=>isolated;
        // Connect to platform-specific API functions by extension
        const extension = isWinOS ? windows(name, isolated) : base(name, isolated);
        Object.keys(extension).forEach((key)=>{
            this._fn[key] = extension[key];
        });
        return this._fn;
    }
}
module.exports = new _XDGAppPaths();
}),
"[project]/node_modules/.pnpm/xdg-portable@7.3.0/node_modules/xdg-portable/src/lib/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// # spell-checker:ignore macos APPDATA LOCALAPPDATA
/* eslint-env es6, node */ const path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
const osPaths = __turbopack_context__.r("[project]/node_modules/.pnpm/os-paths@4.4.0/node_modules/os-paths/src/lib/index.js [app-route] (ecmascript)");
// XDG references
// # ref: <https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html> @@ <https://archive.is/aAhtw>
// # ref: <https://specifications.freedesktop.org/basedir-spec/latest/ar01s03.html> @@ <https://archive.is/7N0TN>
// # ref: <https://wiki.archlinux.org/index.php/XDG_Base_Directory> @@ <https://archive.is/VdO9n>
// # ref: <https://wiki.debian.org/XDGBaseDirectorySpecification#state> @@ <http://archive.is/pahId>
// # ref: <https://ploum.net/207-modify-your-application-to-use-xdg-folders> @@ <https://archive.is/f43Gk>
const linux = ()=>{
    const object = {};
    object.cache = ()=>process.env.XDG_CACHE_HOME || path.join(osPaths.home() || osPaths.temp(), '.cache');
    object.config = ()=>process.env.XDG_CONFIG_HOME || path.join(osPaths.home() || osPaths.temp(), '.config');
    object.data = ()=>process.env.XDG_DATA_HOME || path.join(osPaths.home() || osPaths.temp(), '.local', 'share');
    object.runtime = ()=>process.env.XDG_RUNTIME_DIR || undefined;
    object.state = ()=>process.env.XDG_STATE_HOME || path.join(osPaths.home() || osPaths.temp(), '.local', 'state');
    return object;
};
const macos = ()=>{
    const object = {};
    object.cache = ()=>process.env.XDG_CACHE_HOME || path.join(path.join(osPaths.home() || osPaths.temp(), 'Library'), 'Caches');
    object.config = ()=>process.env.XDG_CONFIG_HOME || path.join(path.join(osPaths.home() || osPaths.temp(), 'Library'), 'Preferences');
    object.data = ()=>process.env.XDG_DATA_HOME || path.join(path.join(osPaths.home() || osPaths.temp(), 'Library'), 'Application Support');
    object.runtime = ()=>process.env.XDG_RUNTIME_DIR || undefined;
    object.state = ()=>process.env.XDG_STATE_HOME || path.join(path.join(osPaths.home() || osPaths.temp(), 'Library'), 'State');
    return object;
};
const windows = ()=>{
    const object = {};
    // # ref: <https://www.thewindowsclub.com/local-localnow-roaming-folders-windows-10> @@ <http://archive.is/tDEPl>
    // Locations for cache/config/data/state are invented (Windows doesn't have a popular convention)
    object.cache = ()=>{
        const localAppData = process.env.LOCALAPPDATA || path.join(osPaths.home() || osPaths.temp(), 'AppData', 'Local'); // "AppData/Local" contains local-machine-only user data
        return process.env.XDG_CACHE_HOME || path.join(localAppData, 'xdg.cache');
    };
    object.config = ()=>{
        const appData = process.env.APPDATA || path.join(osPaths.home() || osPaths.temp(), 'AppData', 'Roaming'); // "AppData/Roaming" contains data which may follow user between machines
        return process.env.XDG_CONFIG_HOME || path.join(appData, 'xdg.config');
    };
    object.data = ()=>{
        const appData = process.env.APPDATA || path.join(osPaths.home() || osPaths.temp(), 'AppData', 'Roaming'); // "AppData/Roaming" contains data which may follow user between machines
        return process.env.XDG_DATA_HOME || path.join(appData, 'xdg.data');
    };
    object.runtime = ()=>process.env.XDG_RUNTIME_DIR || undefined;
    object.state = ()=>{
        const localAppData = process.env.LOCALAPPDATA || path.join(osPaths.home() || osPaths.temp(), 'AppData', 'Local'); // "AppData/Local" contains local-machine-only user data
        return process.env.XDG_STATE_HOME || path.join(localAppData, 'xdg.state');
    };
    return object;
};
const _XDGPortable = ()=>{
    const XDGPortable = function() {
        return _XDGPortable();
    };
    let extension = {};
    if (/^darwin$/i.test(process.platform)) {
        extension = macos();
    } else if (/^win/i.test(process.platform)) {
        extension = windows();
    } else {
        extension = linux();
    }
    extension.configDirs = ()=>{
        const dirs = [];
        dirs.push(extension.config());
        if (process.env.XDG_CONFIG_DIRS) {
            dirs.push(...process.env.XDG_CONFIG_DIRS.split(path.delimiter));
        }
        return dirs;
    };
    extension.dataDirs = ()=>{
        const dirs = [];
        dirs.push(extension.data());
        if (process.env.XDG_DATA_DIRS) {
            dirs.push(...process.env.XDG_DATA_DIRS.split(path.delimiter));
        }
        return dirs;
    };
    Object.keys(extension).forEach((key)=>{
        XDGPortable[key] = extension[key];
    });
    return XDGPortable;
};
module.exports = _XDGPortable();
}),
"[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .NEVER>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "z",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .ZodError>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "z",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .ZodIssueCode>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "z",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .unknown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "z",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-route] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0qfoabojhis8n._.js.map