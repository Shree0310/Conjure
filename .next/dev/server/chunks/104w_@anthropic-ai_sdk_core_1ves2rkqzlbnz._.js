module.exports = [
"[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/core/api-promise.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APIPromise",
    ()=>APIPromise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tslib$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/tslib.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$parse$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/parse.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tracing$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/tracing.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$uploads$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/uploads.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$lib$2f$internal$2f$tracing$2f$streaming$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/lib/internal/tracing/streaming.mjs [app-route] (ecmascript)");
var _APIPromise_client;
;
;
;
;
;
var APIPromise = /* @__PURE__ */ (()=>{
    /**
     * A subclass of `Promise` providing additional helper methods
     * for interacting with the SDK.
     */ class APIPromise extends Promise {
        constructor(client, responsePromise, parseResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$parse$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultParseResponse"]){
            super((resolve)=>{
                // this is maybe a bit weird but this has to be a no-op to not implicitly
                // parse the response body; instead .then, .catch, .finally are overridden
                // to parse the response
                resolve(null);
            });
            this.responsePromise = responsePromise;
            this.parseResponse = parseResponse;
            _APIPromise_client.set(this, void 0);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tslib$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__classPrivateFieldSet"])(this, _APIPromise_client, client, "f");
        }
        /** @internal The unparsed response with its request metadata, for helpers that build one request on another. */ _responseProps() {
            return this.responsePromise;
        }
        _thenUnwrap(transform) {
            return new APIPromise((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tslib$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _APIPromise_client, "f"), this.responsePromise, async (client, props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$parse$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addResponseIDs"])(transform(await this.parseResponse(client, props), props), props.response));
        }
        /**
         * Gets the raw `Response` instance instead of parsing the response
         * data.
         *
         * If you want to parse the response body but still get the `Response`
         * instance, you can use {@link withResponse()}.
         *
         * 👋 Getting the wrong TypeScript type for `Response`?
         * Try setting `"moduleResolution": "NodeNext"` or add `"lib": ["DOM"]`
         * to your `tsconfig.json`.
         */ asResponse() {
            return this.responsePromise.then((props)=>{
                // A traced API call's span ends with the body. A response read this way, before any parse
                // of its body has begun, may never be parsed, so its span ends now, without the body.
                const span = props.options.__span?.span;
                if (span && !this.parsedPromise) {
                    const result = {
                        status: 'success',
                        ...props,
                        data: undefined
                    };
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tracing$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["guardTracing"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tslib$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _APIPromise_client, "f"), ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tracing$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["endApiCallSpan"])(span, result));
                }
                return props.response;
            });
        }
        /**
         * Gets the parsed response data, the raw `Response` instance and the ID of the request,
         * returned via the `request-id` header which is useful for debugging requests and resporting
         * issues to Anthropic.
         *
         * If you just want to get the raw `Response` instance without parsing it,
         * you can use {@link asResponse()}.
         *
         * 👋 Getting the wrong TypeScript type for `Response`?
         * Try setting `"moduleResolution": "NodeNext"` or add `"lib": ["DOM"]`
         * to your `tsconfig.json`.
         */ async withResponse() {
            const [data, response] = await Promise.all([
                this.parse(),
                this.asResponse()
            ]);
            return {
                data,
                response,
                request_id: response.headers.get('request-id'),
                workspace_id: response.headers.get('anthropic-workspace-id')
            };
        }
        parse() {
            if (!this.parsedPromise) {
                this.parsedPromise = this.responsePromise.then((props)=>this.parseResponseTraced(props));
            }
            return this.parsedPromise;
        }
        /**
         * Parses the body of an API call. When the call has a span, the span ends with the parse, or,
         * when the parse returns a streamed body, when the application has read that stream.
         */ async parseResponseTraced(props) {
            const call = props.options.__span;
            if (!call) {
                return this.parseResponse((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tslib$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _APIPromise_client, "f"), props);
            }
            const { span } = call;
            let data;
            try {
                data = await this.parseResponse((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tslib$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _APIPromise_client, "f"), props);
            } catch (error) {
                const result = {
                    status: 'error',
                    ...props,
                    error
                };
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tracing$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["guardTracing"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tslib$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _APIPromise_client, "f"), ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tracing$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["endApiCallSpan"])(span, result));
                throw error;
            }
            const result = {
                status: 'success',
                ...props,
                data
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tracing$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["guardTracing"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tslib$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _APIPromise_client, "f"), ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tracing$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setCreatedIDAttribute"])(call, data));
            if (props.options.stream && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$uploads$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAsyncIterable"])(data)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tracing$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["guardTracing"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tslib$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _APIPromise_client, "f"), ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$lib$2f$internal$2f$tracing$2f$streaming$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["endAnthropicApiCallSpanWhenStreamEnds"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tslib$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _APIPromise_client, "f"), span, data, props));
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tracing$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["guardTracing"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tslib$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _APIPromise_client, "f"), ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tracing$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["endApiCallSpan"])(span, result));
            }
            return data;
        }
        then(onfulfilled, onrejected) {
            return this.parse().then(onfulfilled, onrejected);
        }
        catch(onrejected) {
            return this.parse().catch(onrejected);
        }
        finally(onfinally) {
            return this.parse().finally(onfinally);
        }
    }
    _APIPromise_client = new WeakMap();
    return APIPromise;
})();
}),
"[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/core/credentials.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONFIG_FILE_VERSION",
    ()=>CONFIG_FILE_VERSION,
    "CREDENTIALS_FILE_VERSION",
    ()=>CREDENTIALS_FILE_VERSION,
    "getCredentialsPath",
    ()=>getCredentialsPath,
    "loadConfig",
    ()=>loadConfig,
    "loadConfigWithSource",
    ()=>loadConfigWithSource,
    "loadCredentials",
    ()=>loadCredentials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$core$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/core/error.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$detect$2d$platform$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/detect-platform.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/utils/env.mjs [app-route] (ecmascript)");
;
;
;
const CONFIG_FILE_VERSION = '1.0';
const CREDENTIALS_FILE_VERSION = '1.0';
const PROFILE_NAME_PATTERN = /^[A-Za-z0-9_.-]+$/;
function validateProfileName(name) {
    if (!name) {
        throw new Error('profile name is empty');
    }
    if (name === '.' || name === '..') {
        throw new Error(`profile name "${name}" is not allowed`);
    }
    if (name.includes('/') || name.includes('\\')) {
        throw new Error(`profile name "${name}" must not contain path separators`);
    }
    if (!PROFILE_NAME_PATTERN.test(name)) {
        throw new Error(`profile name "${name}" contains disallowed characters (allowed: letters, digits, '_', '.', '-')`);
    }
}
const loadConfig = async (profile)=>{
    return (await loadConfigWithSource(profile))?.config ?? null;
};
const loadConfigWithSource = async (profile)=>{
    var _a, _b;
    const rootConfigPath = await getRootConfigPath();
    if (rootConfigPath === null) {
        return null;
    }
    const namedInEnv = profile == null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readEnv"])('ANTHROPIC_PROFILE') != null;
    let fromEnv = null;
    if (profile == null && !namedInEnv) {
        const organizationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readEnv"])('ANTHROPIC_ORGANIZATION_ID');
        const identityTokenFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readEnv"])('ANTHROPIC_IDENTITY_TOKEN_FILE');
        const federationRuleId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readEnv"])('ANTHROPIC_FEDERATION_RULE_ID');
        if (federationRuleId && organizationId) {
            fromEnv = {
                fromFile: false,
                config: {
                    organization_id: organizationId,
                    // A defaulted-but-empty CI variable (`ANTHROPIC_WORKSPACE_ID=""`) is
                    // treated as unset — readEnv coerces empty to undefined, and the body
                    // builder's truthy check skips it — so `"workspace_id": ""` never goes
                    // on the wire.
                    workspace_id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readEnv"])('ANTHROPIC_WORKSPACE_ID'),
                    base_url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readEnv"])('ANTHROPIC_BASE_URL'),
                    authentication: {
                        type: 'oidc_federation',
                        federation_rule_id: federationRuleId,
                        service_account_id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readEnv"])('ANTHROPIC_SERVICE_ACCOUNT_ID'),
                        identity_token: identityTokenFile ? {
                            source: 'file',
                            path: identityTokenFile
                        } : undefined,
                        scope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readEnv"])('ANTHROPIC_SCOPE')
                    }
                }
            };
            if (identityTokenFile || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readEnv"])('ANTHROPIC_IDENTITY_TOKEN')) {
                return fromEnv;
            }
        }
    }
    const profileName = profile ?? await getActiveProfileName();
    if (profileName === null) {
        return null;
    }
    validateProfileName(profileName);
    const { fs, path } = await __turbopack_context__.A("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/node.mjs [app-route] (ecmascript, async loader)");
    const configPath = path.join(rootConfigPath, 'configs', `${profileName}.json`);
    let configRaw;
    try {
        configRaw = await fs.promises.readFile(configPath, 'utf-8');
    } catch (err) {
        if (err?.code !== 'ENOENT') {
            throw new Error(`failed to read config file ${configPath}: ${err}`);
        }
        if (namedInEnv) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$core$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnthropicError"](`ANTHROPIC_PROFILE names the profile "${profileName}", but ${configPath} does not exist. ` + 'Set ANTHROPIC_PROFILE to a profile that exists, or unset it.', {
                cause: err
            });
        }
        return fromEnv;
    }
    let config;
    try {
        config = JSON.parse(configRaw);
    } catch (err) {
        throw new Error(`failed to parse config file ${configPath}: ${err}`);
    }
    if (!config.authentication) {
        throw new Error(`config file ${configPath} is missing "authentication"`);
    }
    const authType = config.authentication.type;
    if (authType !== 'oidc_federation' && authType !== 'user_oauth') {
        throw new Error(`authentication.type "${authType}" is not a known authentication type`);
    }
    // File values are authoritative; env vars only fill fields the file left unset.
    config.organization_id ?? (config.organization_id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readEnv"])('ANTHROPIC_ORGANIZATION_ID'));
    config.workspace_id ?? (config.workspace_id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readEnv"])('ANTHROPIC_WORKSPACE_ID'));
    config.base_url ?? (config.base_url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readEnv"])('ANTHROPIC_BASE_URL'));
    (_a = config.authentication).scope ?? (_a.scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readEnv"])('ANTHROPIC_SCOPE'));
    if (config.authentication.type === 'oidc_federation') {
        if (!config.authentication.identity_token) {
            const identityTokenFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readEnv"])('ANTHROPIC_IDENTITY_TOKEN_FILE');
            if (identityTokenFile) {
                config.authentication.identity_token = {
                    source: 'file',
                    path: identityTokenFile
                };
            }
        }
        // Unlike siblings using `??= readEnv()` (which leaves `undefined`), coerce
        // to '' so the type stays `string` (always set). The downstream required
        // check in credential-chain rejects empty, so semantics match but types are
        // cleaner.
        if (!config.authentication.federation_rule_id) {
            config.authentication.federation_rule_id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readEnv"])('ANTHROPIC_FEDERATION_RULE_ID') ?? '';
        }
        (_b = config.authentication).service_account_id ?? (_b.service_account_id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readEnv"])('ANTHROPIC_SERVICE_ACCOUNT_ID'));
    }
    return {
        config,
        fromFile: true
    };
};
const loadCredentials = async ()=>{
    const profile = await getActiveProfileName() ?? undefined;
    const config = await loadConfig(profile);
    const credentialsPath = await getCredentialsPath(config, profile);
    if (!credentialsPath) {
        return null;
    }
    const { fs } = await __turbopack_context__.A("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/node.mjs [app-route] (ecmascript, async loader)");
    let raw;
    try {
        raw = await fs.promises.readFile(credentialsPath, 'utf-8');
    } catch (err) {
        if (err?.code !== 'ENOENT') {
            throw new Error(`failed to read credentials file ${credentialsPath}: ${err}`);
        }
        return null;
    }
    let creds;
    try {
        creds = JSON.parse(raw);
    } catch (err) {
        throw new Error(`failed to parse credentials file ${credentialsPath}: ${err}`);
    }
    if (creds.type && creds.type !== 'oauth_token') {
        throw new Error(`credentials file ${credentialsPath} has unsupported type "${creds.type}" (want "oauth_token")`);
    }
    return creds;
};
const getCredentialsPath = async (config, profile)=>{
    if (config?.authentication.credentials_path) {
        return config.authentication.credentials_path;
    }
    const rootConfigPath = await getRootConfigPath();
    if (!rootConfigPath) {
        return null;
    }
    const profileName = profile ?? await getActiveProfileName();
    if (!profileName) {
        return null;
    }
    validateProfileName(profileName);
    const { path } = await __turbopack_context__.A("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/node.mjs [app-route] (ecmascript, async loader)");
    return path.join(rootConfigPath, 'credentials', `${profileName}.json`);
};
const getRootConfigPath = async ()=>{
    if (!supportsLocalConfigFiles()) {
        return null;
    }
    const { path } = await __turbopack_context__.A("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/node.mjs [app-route] (ecmascript, async loader)");
    // ANTHROPIC_CONFIG_DIR is treated as a trusted path: it is set by the
    // process operator, not by remote input, so it is not validated.
    const configDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readEnv"])('ANTHROPIC_CONFIG_DIR');
    if (configDir) {
        return configDir;
    }
    const os = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$detect$2d$platform$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPlatformHeaders"])()['X-Stainless-OS'];
    if (os === 'Windows') {
        const appData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readEnv"])('APPDATA');
        if (appData) {
            return path.join(appData, 'Anthropic');
        }
        const userProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readEnv"])('USERPROFILE');
        if (userProfile) {
            return path.join(userProfile, 'AppData', 'Roaming', 'Anthropic');
        }
        // No usable Windows config root — return null so callers fall through to
        // "no config available" rather than silently writing under C:\.
        return null;
    }
    const xdgConfigHome = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readEnv"])('XDG_CONFIG_HOME');
    if (xdgConfigHome) {
        return path.join(xdgConfigHome, 'anthropic');
    }
    const home = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readEnv"])('HOME');
    if (home) {
        return path.join(home, '.config', 'anthropic');
    }
    return null;
};
const supportsLocalConfigFiles = ()=>{
    const runtime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$detect$2d$platform$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPlatformHeaders"])()['X-Stainless-Runtime'];
    return runtime === 'node' || runtime === 'deno';
};
const getActiveProfileName = async ()=>{
    const rootConfigPath = await getRootConfigPath();
    if (!rootConfigPath) {
        return null;
    }
    const profileName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readEnv"])('ANTHROPIC_PROFILE');
    if (profileName) {
        return profileName;
    }
    const { fs, path } = await __turbopack_context__.A("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/node.mjs [app-route] (ecmascript, async loader)");
    const filePath = path.join(rootConfigPath, 'active_config');
    try {
        return (await fs.promises.readFile(filePath, 'utf-8')).trim() || 'default';
    } catch (err) {
        if (err?.code !== 'ENOENT') {
            throw new Error(`failed to read ${filePath}: ${err}`);
        }
        return 'default';
    }
};
}),
"[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/core/error-classes.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ERROR_CODE_CLASSES",
    ()=>ERROR_CODE_CLASSES
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$files$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/resources/files.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$shared$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/resources/shared.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$beta$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/resources/beta/beta.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$messages$2f$messages$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/resources/messages/messages.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$api$2d$keys$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/resources/organization/api-keys.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$external$2d$keys$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/resources/organization/external-keys.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$invites$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/resources/organization/invites.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$organization$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/resources/organization/organization.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$users$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/resources/organization/users.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$skills$2f$skills$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/resources/skills/skills.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$user$2d$profiles$2f$user$2d$profiles$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/resources/user-profiles/user-profiles.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$environments$2f$environments$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/resources/beta/environments/environments.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$environments$2f$work$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/resources/beta/environments/work.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$users$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/resources/beta/organization/users.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$rbac$2d$groups$2f$rbac$2d$groups$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/resources/organization/rbac-groups/rbac-groups.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$workspaces$2f$workspaces$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/resources/organization/workspaces/workspaces.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$claude$2d$tag$2f$claude$2d$tag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/resources/beta/organization/claude-tag/claude-tag.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$plugins$2f$plugins$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/resources/beta/organization/plugins/plugins.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$spend$2d$limits$2f$spend$2d$limits$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/resources/beta/organization/spend-limits/spend-limits.mjs [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const ERROR_CODE_CLASSES = /* @__PURE__ */ new Map([
    [
        '400 already_member',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$invites$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AlreadyMemberError"]
    ],
    [
        '400 available_tools_limit_exceeded',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$messages$2f$messages$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AvailableToolsLimitExceededError"]
    ],
    [
        '400 bundle_attachment_not_supported',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$claude$2d$tag$2f$claude$2d$tag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaBundleAttachmentNotSupportedError"]
    ],
    [
        '400 bundle_on_call',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$claude$2d$tag$2f$claude$2d$tag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaBundleOnCallError"]
    ],
    [
        '400 cannot_invite_emails_with_unverified_domains',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$invites$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CannotInviteEmailsWithUnverifiedDomainsError"]
    ],
    [
        '400 cannot_remove_last_member',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$users$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CannotRemoveLastMemberError"]
    ],
    [
        '400 cannot_sign_out_primary_owner',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$users$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaCannotSignOutPrimaryOwnerError"]
    ],
    [
        '400 cannot_sign_out_self',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$users$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaCannotSignOutSelfError"]
    ],
    [
        '400 claude_code_key_creator_not_member',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$shared$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ClaudeCodeKeyCreatorNotMemberError"]
    ],
    [
        '400 claude_code_version_too_old',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$shared$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ClaudeCodeVersionTooOldError"]
    ],
    [
        '400 cmek_key_disabled',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$shared$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CMEKKeyDisabledError"]
    ],
    [
        '400 cmek_key_network_blocked',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$shared$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CMEKKeyNetworkBlockedError"]
    ],
    [
        '400 compaction_block_ambiguous',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$messages$2f$messages$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CompactionBlockAmbiguousError"]
    ],
    [
        '400 compaction_block_misplaced',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$messages$2f$messages$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CompactionBlockMisplacedError"]
    ],
    [
        '400 compaction_content_mismatch',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$messages$2f$messages$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CompactionContentMismatchError"]
    ],
    [
        '400 compaction_incomplete_turn',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$messages$2f$messages$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CompactionIncompleteTurnError"]
    ],
    [
        '400 compaction_nothing_to_summarize',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$messages$2f$messages$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CompactionNothingToSummarizeError"]
    ],
    [
        '400 compaction_signature_invalid',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$messages$2f$messages$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CompactionSignatureInvalidError"]
    ],
    [
        '400 compaction_too_many_tool_references',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$messages$2f$messages$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CompactionTooManyToolReferencesError"]
    ],
    [
        '400 compaction_tool_changes_mismatch',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$messages$2f$messages$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CompactionToolChangesMismatchError"]
    ],
    [
        '400 email_domain_not_allowed',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$invites$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmailDomainNotAllowedError"]
    ],
    [
        '400 environment_archived',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$environments$2f$environments$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaEnvironmentArchivedError"]
    ],
    [
        '400 external_key_in_workspace_policy',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$external$2d$keys$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ExternalKeyInWorkspacePolicyError"]
    ],
    [
        '400 external_key_validation_failed',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$external$2d$keys$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ExternalKeyValidationFailedError"]
    ],
    [
        '400 external_key_validation_timed_out',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$external$2d$keys$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ExternalKeyValidationTimedOutError"]
    ],
    [
        '400 file_not_downloadable',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$files$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FileNotDownloadableError"]
    ],
    [
        '400 invalid_config_type_change',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$environments$2f$environments$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaInvalidConfigTypeChangeError"]
    ],
    [
        '400 invalid_metadata',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$environments$2f$environments$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaInvalidMetadataError"]
    ],
    [
        '400 invite_already_exists',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$invites$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InviteAlreadyExistsError"]
    ],
    [
        '400 key_profile_mismatch',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$workspaces$2f$workspaces$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KeyProfileMismatchError"]
    ],
    [
        '400 org_api_key_limit_exceeded',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$api$2d$keys$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrgAPIKeyLimitExceededError"]
    ],
    [
        '400 org_member_limit_exceeded',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$organization$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrgMemberLimitExceededError"]
    ],
    [
        '400 organization_not_enrolled_in_beta',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$beta$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaOrganizationNotEnrolledInBetaError"]
    ],
    [
        '400 organization_on_hold',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$shared$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrganizationOnHoldError"]
    ],
    [
        '400 organization_type_not_supported',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$shared$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrganizationTypeNotSupportedError"]
    ],
    [
        '400 parent_organization_required',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$shared$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ParentOrganizationRequiredError"]
    ],
    [
        '400 rbac_group_grants_owner_access',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$rbac$2d$groups$2f$rbac$2d$groups$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RBACGroupGrantsOwnerAccessError"]
    ],
    [
        '400 rbac_group_owner_access_unconfirmed',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$rbac$2d$groups$2f$rbac$2d$groups$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RBACGroupOwnerAccessUnconfirmedError"]
    ],
    [
        '400 request_body_encoding_invalid',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$shared$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequestBodyEncodingInvalidError"]
    ],
    [
        '400 request_body_encoding_unsupported',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$shared$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequestBodyEncodingUnsupportedError"]
    ],
    [
        '400 scan_failed',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$plugins$2f$plugins$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaScanFailedError"]
    ],
    [
        '400 slack_channel_set_up_settings_refused',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$claude$2d$tag$2f$claude$2d$tag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaSlackChannelSetUpSettingsRefusedError"]
    ],
    [
        '400 storage_quota_exceeded',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$files$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StorageQuotaExceededError"]
    ],
    [
        '400 thread_already_continued',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$messages$2f$messages$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ThreadAlreadyContinuedError"]
    ],
    [
        '400 thread_continue_in_flight',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$messages$2f$messages$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ThreadContinueInFlightError"]
    ],
    [
        '400 thread_fingerprint_mismatch',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$messages$2f$messages$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ThreadFingerprintMismatchError"]
    ],
    [
        '400 thread_unsupported_request',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$messages$2f$messages$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ThreadUnsupportedRequestError"]
    ],
    [
        '400 tool_name_conflict',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$messages$2f$messages$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ToolNameConflictError"]
    ],
    [
        '400 tool_reference_unresolved',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$messages$2f$messages$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ToolReferenceUnresolvedError"]
    ],
    [
        '400 unsupported_charset',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$beta$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaUnsupportedCharsetError"]
    ],
    [
        '400 user_profile_not_found',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$user$2d$profiles$2f$user$2d$profiles$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserProfileNotFoundError"]
    ],
    [
        '400 user_profile_required',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$user$2d$profiles$2f$user$2d$profiles$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserProfileRequiredError"]
    ],
    [
        '400 workspace_api_key_limit_exceeded',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$api$2d$keys$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WorkspaceAPIKeyLimitExceededError"]
    ],
    [
        '400 workspace_member_limit_exceeded',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$workspaces$2f$workspaces$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WorkspaceMemberLimitExceededError"]
    ],
    [
        '400 workspace_policy_violation',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$workspaces$2f$workspaces$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WorkspacePolicyViolationError"]
    ],
    [
        '402 linked_organization_billing_unavailable',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$shared$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LinkedOrganizationBillingUnavailableError"]
    ],
    [
        '402 linked_organization_spend_limit_reached',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$shared$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LinkedOrganizationSpendLimitReachedError"]
    ],
    [
        '403 api_key_scope_missing',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$claude$2d$tag$2f$claude$2d$tag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaAPIKeyScopeMissingError"]
    ],
    [
        '403 cannot_sign_out_managed_member',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$users$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaCannotSignOutManagedMemberError"]
    ],
    [
        '403 cannot_sign_out_membership_admin',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$users$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaCannotSignOutMembershipAdminError"]
    ],
    [
        '403 cannot_sign_out_owner',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$users$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaCannotSignOutOwnerError"]
    ],
    [
        '403 cannot_sign_out_privileged_member',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$users$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaCannotSignOutPrivilegedMemberError"]
    ],
    [
        '403 claude_tag_writes_not_enabled',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$claude$2d$tag$2f$claude$2d$tag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaClaudeTagWritesNotEnabledError"]
    ],
    [
        '403 compliance_configuration_restricted',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$claude$2d$tag$2f$claude$2d$tag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaComplianceConfigurationRestrictedError"]
    ],
    [
        '403 environment_create_disabled',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$environments$2f$environments$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaEnvironmentCreateDisabledError"]
    ],
    [
        '403 environment_update_disabled',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$environments$2f$environments$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaEnvironmentUpdateDisabledError"]
    ],
    [
        '403 organization_level_scoped_api_key_required',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$claude$2d$tag$2f$claude$2d$tag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaOrganizationLevelScopedAPIKeyRequiredError"]
    ],
    [
        '403 sandbox_egress_restricted',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$shared$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SandboxEgressRestrictedError"]
    ],
    [
        '403 spend_limits_admin_api_writes_not_enabled',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$spend$2d$limits$2f$spend$2d$limits$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaSpendLimitsAdminAPIWritesNotEnabledError"]
    ],
    [
        '403 user_profile_billing_not_authorized',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$user$2d$profiles$2f$user$2d$profiles$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserProfileBillingNotAuthorizedError"]
    ],
    [
        '403 user_profile_not_billable',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$user$2d$profiles$2f$user$2d$profiles$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserProfileNotBillableError"]
    ],
    [
        '404 environment_not_found',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$environments$2f$environments$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaEnvironmentNotFoundError"]
    ],
    [
        '404 file_expired',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$files$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FileExpiredError"]
    ],
    [
        '404 rbac_role_not_found',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$organization$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RBACRoleNotFoundError"]
    ],
    [
        '404 slack_channel_set_up_environment_not_found',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$claude$2d$tag$2f$claude$2d$tag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaSlackChannelSetUpEnvironmentNotFoundError"]
    ],
    [
        '404 thread_not_found',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$messages$2f$messages$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ThreadNotFoundError"]
    ],
    [
        '409 concurrent_membership_change',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$organization$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ConcurrentMembershipChangeError"]
    ],
    [
        '409 external_key_changed',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$organization$2f$external$2d$keys$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ExternalKeyChangedError"]
    ],
    [
        '409 plugin_name_taken',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$plugins$2f$plugins$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaPluginNameTakenError"]
    ],
    [
        '409 scan_pending',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$plugins$2f$plugins$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaScanPendingError"]
    ],
    [
        '409 skill_name_taken',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$plugins$2f$plugins$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaSkillNameTakenError"]
    ],
    [
        '409 skill_read_blocked_undecryptable',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$skills$2f$skills$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SkillReadBlockedUndecryptableError"]
    ],
    [
        '409 slack_channel_set_up_settings_conflict',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$claude$2d$tag$2f$claude$2d$tag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaSlackChannelSetUpSettingsConflictError"]
    ],
    [
        '412 heartbeat_precondition_failed',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$environments$2f$work$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BetaHeartbeatPreconditionFailedError"]
    ],
    [
        '413 request_body_too_large_after_decoding',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$shared$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequestBodyTooLargeAfterDecodingError"]
    ],
    [
        '429 contract_spend_limit_reached',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$shared$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ContractSpendLimitReachedError"]
    ],
    [
        '429 enforced_spend_limit_reached',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$shared$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EnforcedSpendLimitReachedError"]
    ],
    [
        '429 ramp_limit_exceeded',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$shared$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RampLimitExceededError"]
    ],
    [
        '503 cmek_context_unavailable',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$shared$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CMEKContextUnavailableError"]
    ],
    [
        '503 cmek_key_unreachable',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$shared$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CMEKKeyUnreachableError"]
    ],
    [
        '503 registration_pending',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$beta$2f$organization$2f$plugins$2f$plugins$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetaRegistrationPendingError"]
    ],
    [
        '529 compaction_unavailable',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$resources$2f$messages$2f$messages$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CompactionUnavailableError"]
    ]
]);
}),
"[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/core/error.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APIConnectionError",
    ()=>APIConnectionError,
    "APIConnectionTimeoutError",
    ()=>APIConnectionTimeoutError,
    "APIError",
    ()=>APIError,
    "APIUserAbortError",
    ()=>APIUserAbortError,
    "AnthropicError",
    ()=>AnthropicError,
    "AuthenticationError",
    ()=>AuthenticationError,
    "BadRequestError",
    ()=>BadRequestError,
    "ClientClosedRequestError",
    ()=>ClientClosedRequestError,
    "ConflictError",
    ()=>ConflictError,
    "ContentTooLargeError",
    ()=>ContentTooLargeError,
    "GatewayTimeoutError",
    ()=>GatewayTimeoutError,
    "InternalServerError",
    ()=>InternalServerError,
    "NotFoundError",
    ()=>NotFoundError,
    "NotImplementedError",
    ()=>NotImplementedError,
    "OverloadedError",
    ()=>OverloadedError,
    "PaymentRequiredError",
    ()=>PaymentRequiredError,
    "PermissionDeniedError",
    ()=>PermissionDeniedError,
    "PreconditionFailedError",
    ()=>PreconditionFailedError,
    "RateLimitError",
    ()=>RateLimitError,
    "RequestHeaderFieldsTooLargeError",
    ()=>RequestHeaderFieldsTooLargeError,
    "RequestTimeoutError",
    ()=>RequestTimeoutError,
    "RetryableError",
    ()=>RetryableError,
    "ServiceUnavailableError",
    ()=>ServiceUnavailableError,
    "UnprocessableEntityError",
    ()=>UnprocessableEntityError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/errors.mjs [app-route] (ecmascript)");
;
var AnthropicError = /* @__PURE__ */ (()=>{
    class AnthropicError extends Error {
        /** @internal */ constructor(message, options){
            super(message, options);
            Object.defineProperty(this, 'name', {
                value: new.target._errorName,
                writable: true,
                configurable: true
            });
        }
    }
    /** @internal */ AnthropicError._errorName = 'AnthropicError';
    return AnthropicError;
})();
var APIError = /* @__PURE__ */ (()=>{
    class APIError extends AnthropicError {
        constructor(status, error, message, headers, type){
            super(`${APIError.makeMessage(status, error, message)}`);
            this.status = status;
            this.headers = headers;
            this.requestID = headers?.get('request-id');
            this.workspaceID = headers?.get('anthropic-workspace-id');
            this.error = error;
            const body = error ?? {};
            this.apiMessage = body.error?.message ?? null;
            this.type = type ?? body.error?.type ?? null;
            const errorCode = body.error?.details?.error_code;
            this.errorCode = typeof errorCode === 'string' ? errorCode : null;
            this.details = body.error?.details ?? null;
        }
        static makeMessage(status, error, message) {
            const msg = error?.message ? typeof error.message === 'string' ? error.message : JSON.stringify(error.message) : error ? JSON.stringify(error) : message;
            if (status && msg) {
                return `${status} ${msg}`;
            }
            if (status) {
                return `${status} status code (no body)`;
            }
            if (msg) {
                return msg;
            }
            return '(no status code or body)';
        }
        static generate(status, errorResponse, message, headers) {
            if (!status || !headers) {
                return new APIConnectionError({
                    message,
                    cause: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["castToError"])(errorResponse)
                });
            }
            const error = errorResponse;
            const errorClass = STATUS_ERROR_CLASSES.get(status);
            if (errorClass) {
                return new errorClass(status, error, message, headers);
            }
            if (status >= 500) {
                return new InternalServerError(status, error, message, headers);
            }
            return new APIError(status, error, message, headers);
        }
    }
    /** @internal */ APIError._errorName = 'APIError';
    return APIError;
})();
var APIUserAbortError = /* @__PURE__ */ (()=>{
    class APIUserAbortError extends APIError {
        constructor({ message } = {}){
            super(undefined, undefined, message || 'Request was aborted.', undefined);
        }
    }
    /** @internal */ APIUserAbortError._errorName = 'APIUserAbortError';
    return APIUserAbortError;
})();
var APIConnectionError = /* @__PURE__ */ (()=>{
    class APIConnectionError extends APIError {
        constructor({ message, cause }){
            super(undefined, undefined, message || 'Connection error.', undefined);
            // in some environments the 'cause' property is already declared
            // @ts-ignore
            if (cause) this.cause = cause;
        }
    }
    /** @internal */ APIConnectionError._errorName = 'APIConnectionError';
    return APIConnectionError;
})();
var APIConnectionTimeoutError = /* @__PURE__ */ (()=>{
    class APIConnectionTimeoutError extends APIConnectionError {
        constructor({ message } = {}){
            super({
                message: message ?? 'Request timed out.'
            });
        }
    }
    /** @internal */ APIConnectionTimeoutError._errorName = 'APIConnectionTimeoutError';
    return APIConnectionTimeoutError;
})();
var RetryableError = /* @__PURE__ */ (()=>{
    /**
     * An error that opts into the SDK's retry policy: throw it (e.g. from
     * middleware) to have the attempt retried.
     *
     * Note that the request will only be retried when `maxRetries` has not been exhausted.
     */ class RetryableError extends AnthropicError {
        constructor(message, { cause } = {}){
            super(message ?? 'Retryable error.');
            // in some environments the 'cause' property is already declared
            // @ts-ignore
            if (cause !== undefined) this.cause = cause;
        }
    }
    /** @internal */ RetryableError._errorName = 'RetryableError';
    return RetryableError;
})();
var BadRequestError = /* @__PURE__ */ (()=>{
    class BadRequestError extends APIError {
    }
    /** @internal */ BadRequestError._errorName = 'BadRequestError';
    return BadRequestError;
})();
var AuthenticationError = /* @__PURE__ */ (()=>{
    class AuthenticationError extends APIError {
    }
    /** @internal */ AuthenticationError._errorName = 'AuthenticationError';
    return AuthenticationError;
})();
var PaymentRequiredError = /* @__PURE__ */ (()=>{
    class PaymentRequiredError extends APIError {
    }
    /** @internal */ PaymentRequiredError._errorName = 'PaymentRequiredError';
    return PaymentRequiredError;
})();
var PermissionDeniedError = /* @__PURE__ */ (()=>{
    class PermissionDeniedError extends APIError {
    }
    /** @internal */ PermissionDeniedError._errorName = 'PermissionDeniedError';
    return PermissionDeniedError;
})();
var NotFoundError = /* @__PURE__ */ (()=>{
    class NotFoundError extends APIError {
    }
    /** @internal */ NotFoundError._errorName = 'NotFoundError';
    return NotFoundError;
})();
var RequestTimeoutError = /* @__PURE__ */ (()=>{
    class RequestTimeoutError extends APIError {
    }
    /** @internal */ RequestTimeoutError._errorName = 'RequestTimeoutError';
    return RequestTimeoutError;
})();
var ConflictError = /* @__PURE__ */ (()=>{
    class ConflictError extends APIError {
    }
    /** @internal */ ConflictError._errorName = 'ConflictError';
    return ConflictError;
})();
var PreconditionFailedError = /* @__PURE__ */ (()=>{
    class PreconditionFailedError extends APIError {
    }
    /** @internal */ PreconditionFailedError._errorName = 'PreconditionFailedError';
    return PreconditionFailedError;
})();
var ContentTooLargeError = /* @__PURE__ */ (()=>{
    class ContentTooLargeError extends APIError {
    }
    /** @internal */ ContentTooLargeError._errorName = 'ContentTooLargeError';
    return ContentTooLargeError;
})();
var UnprocessableEntityError = /* @__PURE__ */ (()=>{
    class UnprocessableEntityError extends APIError {
    }
    /** @internal */ UnprocessableEntityError._errorName = 'UnprocessableEntityError';
    return UnprocessableEntityError;
})();
var RateLimitError = /* @__PURE__ */ (()=>{
    class RateLimitError extends APIError {
    }
    /** @internal */ RateLimitError._errorName = 'RateLimitError';
    return RateLimitError;
})();
var RequestHeaderFieldsTooLargeError = /* @__PURE__ */ (()=>{
    class RequestHeaderFieldsTooLargeError extends APIError {
    }
    /** @internal */ RequestHeaderFieldsTooLargeError._errorName = 'RequestHeaderFieldsTooLargeError';
    return RequestHeaderFieldsTooLargeError;
})();
var ClientClosedRequestError = /* @__PURE__ */ (()=>{
    class ClientClosedRequestError extends APIError {
    }
    /** @internal */ ClientClosedRequestError._errorName = 'ClientClosedRequestError';
    return ClientClosedRequestError;
})();
var InternalServerError = /* @__PURE__ */ (()=>{
    class InternalServerError extends APIError {
    }
    /** @internal */ InternalServerError._errorName = 'InternalServerError';
    return InternalServerError;
})();
var NotImplementedError = /* @__PURE__ */ (()=>{
    class NotImplementedError extends InternalServerError {
    }
    /** @internal */ NotImplementedError._errorName = 'NotImplementedError';
    return NotImplementedError;
})();
var ServiceUnavailableError = /* @__PURE__ */ (()=>{
    class ServiceUnavailableError extends InternalServerError {
    }
    /** @internal */ ServiceUnavailableError._errorName = 'ServiceUnavailableError';
    return ServiceUnavailableError;
})();
var GatewayTimeoutError = /* @__PURE__ */ (()=>{
    class GatewayTimeoutError extends InternalServerError {
    }
    /** @internal */ GatewayTimeoutError._errorName = 'GatewayTimeoutError';
    return GatewayTimeoutError;
})();
var OverloadedError = /* @__PURE__ */ (()=>{
    class OverloadedError extends InternalServerError {
    }
    /** @internal */ OverloadedError._errorName = 'OverloadedError';
    return OverloadedError;
})();
const STATUS_ERROR_CLASSES = /* @__PURE__ */ new Map([
    [
        400,
        BadRequestError
    ],
    [
        401,
        AuthenticationError
    ],
    [
        402,
        PaymentRequiredError
    ],
    [
        403,
        PermissionDeniedError
    ],
    [
        404,
        NotFoundError
    ],
    [
        408,
        RequestTimeoutError
    ],
    [
        409,
        ConflictError
    ],
    [
        412,
        PreconditionFailedError
    ],
    [
        413,
        ContentTooLargeError
    ],
    [
        422,
        UnprocessableEntityError
    ],
    [
        429,
        RateLimitError
    ],
    [
        431,
        RequestHeaderFieldsTooLargeError
    ],
    [
        499,
        ClientClosedRequestError
    ],
    [
        501,
        NotImplementedError
    ],
    [
        503,
        ServiceUnavailableError
    ],
    [
        504,
        GatewayTimeoutError
    ],
    [
        529,
        OverloadedError
    ]
]);
}),
"[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/core/middleware.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyMiddleware",
    ()=>applyMiddleware,
    "isFetchOriginError",
    ()=>isFetchOriginError,
    "isRetryableError",
    ()=>isRetryableError,
    "wrapFetchWithMiddleware",
    ()=>wrapFetchWithMiddleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/errors.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$parse$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/parse.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$log$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/utils/log.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$core$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/core/error.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$core$2f$streaming$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/core/streaming.mjs [app-route] (ecmascript)");
;
;
;
;
;
/**
 * Errors thrown by the underlying `fetch`, as opposed to by a middleware.
 *
 * Tracked so the client can apply its connection-error retry policy to
 * transport failures while letting errors thrown by middleware propagate to
 * the caller untouched.
 */ const fetchOriginErrors = new WeakSet();
function isFetchOriginError(err) {
    return typeof err === 'object' && err !== null && fetchOriginErrors.has(err);
}
function isRetryableError(err) {
    const seen = new Set(); // guard against `cause` cycles
    while(typeof err === 'object' && err !== null && !seen.has(err)){
        seen.add(err);
        if (isFetchOriginError(err) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAbortError"])(err) || err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$core$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIConnectionError"] || err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$core$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RetryableError"]) {
            return true;
        }
        err = err.cause;
    }
    return false;
}
function wrapFetchWithMiddleware(fetchFn, middleware, options, client) {
    return async (url, init = {})=>{
        if (middleware.length === 0) {
            // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
            return fetchFn.call(undefined, url, init);
        }
        const headers = init.headers instanceof Headers ? init.headers : new Headers(init.headers);
        const response = await applyMiddleware(fetchFn, middleware, options, client)({
            ...init,
            headers,
            url: typeof url === 'string' ? url : url instanceof URL ? url.href : url.url
        });
        // Catch a footgun before the client tries to read the body itself and
        // fails with a confusing low-level stream error.
        if (response.bodyUsed || response.body?.locked) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$core$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnthropicError"]('middleware consumed the response body; use response.clone() to inspect it, ' + 'or return new Response(body, response) to consume and replace it');
        }
        return response;
    };
}
/**
 * Creates the {@link MiddlewareContext} shared by every middleware in one chain.
 */ function createMiddlewareContext(options, client) {
    // Keyed on the Response so each `next()` call's response (e.g. with custom
    // retries, or a middleware swapping in a replacement) parses independently,
    // while several middleware parsing the same response share a single read.
    const cache = new WeakMap();
    return {
        options,
        // Resolved per chain, so changes to the client's `logLevel`/`logger`
        // apply to subsequent requests.
        logger: client ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$log$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loggerFor"])(client) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$log$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultLogger"])(),
        parse (response) {
            // Streams are single-consumer, so caching one would hand later callers
            // an already-consumed stream; every call gets a fresh clone-backed one.
            if (options?.stream && response.ok) {
                return parseMiddlewareResponse(response, options, client);
            }
            let parsed = cache.get(response);
            if (!parsed) {
                parsed = parseMiddlewareResponse(response, options, client);
                cache.set(response, parsed);
            }
            return parsed;
        }
    };
}
/**
 * Mirrors the client's own response parsing (`defaultParseResponse` in
 * `internal/parse.ts`), reading through a clone so the body stays available
 * to the rest of the chain and the client itself.
 */ async function parseMiddlewareResponse(response, options, client) {
    if (response.bodyUsed || response.body?.locked) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$core$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnthropicError"]('cannot ctx.parse() a response whose body was already consumed; ' + 'call ctx.parse() instead of reading the body, or read via response.clone()');
    }
    // Error responses parse as JSON/text below — the SDK only stream-parses
    // successful responses, and middleware typically wants the error body.
    if (options?.stream && response.ok) {
        // A fresh controller rather than the request's own: aborting (or
        // `break`ing out of) the middleware's stream must not cancel the
        // in-flight request the client is still reading.
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$core$2f$streaming$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Stream"].fromSSEResponse(response.clone(), new AbortController(), client);
    }
    // fetch refuses to read the body when the status code is 204.
    if (response.status === 204) {
        return null;
    }
    if (options?.__binaryResponse) {
        return response;
    }
    const contentType = response.headers.get('content-type');
    const mediaType = contentType?.split(';')[0]?.trim();
    const isJSON = mediaType?.includes('application/json') || mediaType?.endsWith('+json');
    if (isJSON) {
        if (response.headers.get('content-length') === '0') {
            // if there is no content we can't do anything
            return undefined;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$parse$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addResponseIDs"])(await response.clone().json(), response);
    }
    return await response.clone().text();
}
function applyMiddleware(fetchFn, middleware, options, client) {
    // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
    let next = async ({ url, ...init })=>{
        try {
            return await fetchFn.call(undefined, url, init);
        } catch (err) {
            // Brand the error as fetch-origin, normalizing with `castToError` first since a
            // WeakSet can't hold primitives and the brand must be on the same object the
            // client's own `castToError` will later pass through.
            const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["castToError"])(err);
            fetchOriginErrors.add(error);
            throw error;
        }
    };
    const ctx = createMiddlewareContext(options, client);
    for(let i = middleware.length - 1; i >= 0; i--){
        const mw = middleware[i];
        const nextInner = next;
        next = async (request)=>mw(request, nextInner, ctx);
    }
    return next;
}
}),
"[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/core/pagination.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractPage",
    ()=>AbstractPage,
    "BidirectionalPageCursor",
    ()=>BidirectionalPageCursor,
    "Page",
    ()=>Page,
    "PageCursor",
    ()=>PageCursor,
    "PagePromise",
    ()=>PagePromise,
    "ReportPageCursor",
    ()=>ReportPageCursor,
    "TokenPage",
    ()=>TokenPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tslib$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/tslib.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$core$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/core/error.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$parse$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/parse.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$core$2f$api$2d$promise$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/core/api-promise.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tracing$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/tracing.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$values$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/utils/values.mjs [app-route] (ecmascript)");
var _AbstractPage_client;
;
;
;
;
;
;
var AbstractPage = /* @__PURE__ */ (()=>{
    class AbstractPage {
        constructor(client, response, body, options){
            _AbstractPage_client.set(this, void 0);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tslib$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__classPrivateFieldSet"])(this, _AbstractPage_client, client, "f");
            this.options = options;
            this.response = response;
            this.body = body;
        }
        hasNextPage() {
            const items = this.getPaginatedItems();
            if (!items.length) return false;
            return this.nextPageRequestOptions() != null;
        }
        async getNextPage() {
            const nextOptions = this.nextPageRequestOptions();
            if (!nextOptions) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$core$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnthropicError"]('No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.');
            }
            // Each page is its own API call, with its own call span. `nextOptions` copies the previous
            // page's options, including its `__span`, which has already ended.
            const span = this.options.__span;
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tslib$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _AbstractPage_client, "f").requestAPIList(this.constructor, {
                ...nextOptions,
                __span: span && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tracing$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["startApiCallSpan"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tslib$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _AbstractPage_client, "f"), span.name, {
                    openTelemetry: this.options.openTelemetry
                }, {
                    route: span.route,
                    queryParams: span.queryParams,
                    contentQueryParams: span.contentQueryParams,
                    attributes: span.attributes,
                    request: nextOptions
                })
            });
        }
        async *iterPages() {
            let page = this;
            yield page;
            while(page.hasNextPage()){
                page = await page.getNextPage();
                yield page;
            }
        }
        async *[(_AbstractPage_client = new WeakMap(), Symbol.asyncIterator)]() {
            for await (const page of this.iterPages()){
                for (const item of page.getPaginatedItems()){
                    yield item;
                }
            }
        }
    }
    return AbstractPage;
})();
var PagePromise = /* @__PURE__ */ (()=>{
    /**
     * This subclass of Promise will resolve to an instantiated Page once the request completes.
     *
     * It also implements AsyncIterable to allow auto-paginating iteration on an unawaited list call, eg:
     *
     *    for await (const item of client.items.list()) {
     *      console.log(item)
     *    }
     */ class PagePromise extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$core$2f$api$2d$promise$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIPromise"] {
        constructor(client, request, Page){
            super(client, request, async (client, props)=>new Page(client, props.response, await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$parse$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultParseResponse"])(client, props), props.options));
        }
        /**
         * Allow auto-paginating iteration on an unawaited list call, eg:
         *
         *    for await (const item of client.items.list()) {
         *      console.log(item)
         *    }
         */ async *[Symbol.asyncIterator]() {
            const page = await this;
            for await (const item of page){
                yield item;
            }
        }
    }
    return PagePromise;
})();
class Page extends AbstractPage {
    constructor(client, response, body, options){
        super(client, response, body, options);
        this.data = body.data || [];
        this.has_more = body.has_more || false;
        this.first_id = body.first_id || null;
        this.last_id = body.last_id || null;
    }
    getPaginatedItems() {
        return this.data ?? [];
    }
    hasNextPage() {
        if (this.has_more === false) {
            return false;
        }
        return super.hasNextPage();
    }
    nextPageRequestOptions() {
        if (this.options.query?.['before_id']) {
            // in reverse
            const first_id = this.first_id;
            if (!first_id) {
                return null;
            }
            return {
                ...this.options,
                query: {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$values$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["maybeObj"])(this.options.query),
                    before_id: first_id
                }
            };
        }
        const cursor = this.last_id;
        if (!cursor) {
            return null;
        }
        return {
            ...this.options,
            query: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$values$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["maybeObj"])(this.options.query),
                after_id: cursor
            }
        };
    }
}
class TokenPage extends AbstractPage {
    constructor(client, response, body, options){
        super(client, response, body, options);
        this.data = body.data || [];
        this.has_more = body.has_more || false;
        this.next_page = body.next_page || null;
    }
    getPaginatedItems() {
        return this.data ?? [];
    }
    hasNextPage() {
        if (this.has_more === false) {
            return false;
        }
        return super.hasNextPage();
    }
    nextPageRequestOptions() {
        const cursor = this.next_page;
        if (!cursor) {
            return null;
        }
        return {
            ...this.options,
            query: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$values$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["maybeObj"])(this.options.query),
                page_token: cursor
            }
        };
    }
}
class PageCursor extends AbstractPage {
    constructor(client, response, body, options){
        super(client, response, body, options);
        this.data = body.data || [];
        this.next_page = body.next_page || null;
    }
    getPaginatedItems() {
        return this.data ?? [];
    }
    hasNextPage() {
        return this.nextPageRequestOptions() != null;
    }
    nextPageRequestOptions() {
        const cursor = this.next_page;
        if (!cursor) {
            return null;
        }
        return {
            ...this.options,
            query: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$values$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["maybeObj"])(this.options.query),
                page: cursor
            }
        };
    }
}
class BidirectionalPageCursor extends AbstractPage {
    constructor(client, response, body, options){
        super(client, response, body, options);
        this.data = body.data || [];
        this.next_page = body.next_page || null;
        this.prev_page = body.prev_page || null;
    }
    getPaginatedItems() {
        return this.data ?? [];
    }
    hasNextPage() {
        return this.nextPageRequestOptions() != null;
    }
    nextPageRequestOptions() {
        const cursor = this.next_page;
        if (!cursor) {
            return null;
        }
        return {
            ...this.options,
            query: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$values$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["maybeObj"])(this.options.query),
                page: cursor
            }
        };
    }
}
class ReportPageCursor extends AbstractPage {
    constructor(client, response, body, options){
        super(client, response, body, options);
        this.data = body.data || [];
        this.next_page = body.next_page || null;
        this.has_more = body.has_more || false;
        this.data_refreshed_at = body.data_refreshed_at || null;
    }
    getPaginatedItems() {
        return this.data ?? [];
    }
    hasNextPage() {
        if (this.has_more === false) {
            return false;
        }
        return this.nextPageRequestOptions() != null;
    }
    nextPageRequestOptions() {
        const cursor = this.next_page;
        if (!cursor) {
            return null;
        }
        return {
            ...this.options,
            query: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$values$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["maybeObj"])(this.options.query),
                page: cursor
            }
        };
    }
}
}),
"[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/core/resource.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APIResource",
    ()=>APIResource
]);
class APIResource {
    constructor(client){
        this._client = client;
    }
}
}),
"[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/core/streaming.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stream",
    ()=>Stream,
    "_iterSSEMessages",
    ()=>_iterSSEMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tslib$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/tslib.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$core$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/core/error.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$shims$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/shims.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$decoders$2f$line$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/decoders/line.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/errors.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$values$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/utils/values.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$bytes$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/utils/bytes.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$log$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/utils/log.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$request$2d$signal$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anthropic-ai+sdk@1.10.0_zod@4.6.7/node_modules/@anthropic-ai/sdk/internal/request-signal.mjs [app-route] (ecmascript)");
var _Stream_client;
;
;
;
;
;
;
;
;
;
;
;
var Stream = /* @__PURE__ */ (()=>{
    class Stream {
        constructor(iterator, controller, client){
            this.iterator = iterator;
            _Stream_client.set(this, void 0);
            this.controller = controller;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tslib$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__classPrivateFieldSet"])(this, _Stream_client, client, "f");
        }
        /**
         * Iterate the raw Server-Sent Events from `response` — `{event, data, raw}`
         * objects, before any JSON parsing or event-name filtering.
         *
         * This reads `response.body` directly (not a clone), so the response is
         * consumed. Use this in middleware that fully replaces the stream body; for
         * read-only observation of parsed events, use `ctx.parse()` instead.
         */ static rawEvents(response, controller = new AbortController()) {
            return _iterSSEMessages(response, controller);
        }
        static fromSSEResponse(response, controller, client) {
            let consumed = false;
            const logger = client ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$log$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loggerFor"])(client) : console;
            async function* iterator() {
                if (consumed) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$core$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnthropicError"]('Cannot iterate over a consumed stream, use `.tee()` to split the stream.');
                }
                consumed = true;
                let done = false;
                try {
                    for await (const sse of _iterSSEMessages(response, controller)){
                        if (sse.event === 'ping') {
                            continue;
                        }
                        if (sse.event === null) {
                            continue;
                        }
                        if (sse.event === 'error') {
                            const body = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$values$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeJSON"])(sse.data) ?? sse.data;
                            const type = body?.error?.type;
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$core$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](undefined, body, undefined, response.headers, type);
                        } else {
                            if (!sse.data) continue;
                            try {
                                yield JSON.parse(sse.data);
                            } catch (e) {
                                logger.error(`Could not parse message into JSON:`, sse.data);
                                logger.error(`From chunk:`, sse.raw);
                                throw e;
                            }
                        }
                    }
                    done = true;
                } catch (e) {
                    // If the user calls `stream.controller.abort()`, we should exit without throwing.
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAbortError"])(e)) return;
                    throw e;
                } finally{
                    // If the user `break`s, abort the ongoing request.
                    if (!done) controller.abort();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$request$2d$signal$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["releaseRequestSignal"])(controller);
                }
            }
            return new Stream(iterator, controller, client);
        }
        /**
         * Generates a Stream from a newline-separated ReadableStream
         * where each item is a JSON value.
         */ static fromReadableStream(readableStream, controller, client) {
            let consumed = false;
            async function* iterLines() {
                const lineDecoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$decoders$2f$line$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LineDecoder"]();
                const iter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$shims$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReadableStreamToAsyncIterable"])(readableStream);
                for await (const chunk of iter){
                    for (const line of lineDecoder.decode(chunk)){
                        yield line;
                    }
                }
                for (const line of lineDecoder.flush()){
                    yield line;
                }
            }
            async function* iterator() {
                if (consumed) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$core$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnthropicError"]('Cannot iterate over a consumed stream, use `.tee()` to split the stream.');
                }
                consumed = true;
                let done = false;
                try {
                    for await (const line of iterLines()){
                        if (done) continue;
                        if (line) yield JSON.parse(line);
                    }
                    done = true;
                } catch (e) {
                    // If the user calls `stream.controller.abort()`, we should exit without throwing.
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAbortError"])(e)) return;
                    throw e;
                } finally{
                    // If the user `break`s, abort the ongoing request.
                    if (!done) controller.abort();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$request$2d$signal$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["releaseRequestSignal"])(controller);
                }
            }
            return new Stream(iterator, controller, client);
        }
        [(_Stream_client = new WeakMap(), Symbol.asyncIterator)]() {
            return this.iterator();
        }
        /**
         * Splits the stream into two streams which can be
         * independently read from at different speeds.
         */ tee() {
            const left = [];
            const right = [];
            const iterator = this[Symbol.asyncIterator]();
            const teeIterator = (queue)=>{
                return {
                    next: ()=>{
                        if (queue.length === 0) {
                            const result = iterator.next();
                            left.push(result);
                            right.push(result);
                        }
                        return queue.shift();
                    }
                };
            };
            return [
                new Stream(()=>teeIterator(left), this.controller, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tslib$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Stream_client, "f")),
                new Stream(()=>teeIterator(right), this.controller, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$tslib$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Stream_client, "f"))
            ];
        }
        /**
         * Converts this stream to a newline-separated ReadableStream of
         * JSON stringified values in the stream
         * which can be turned back into a Stream with `Stream.fromReadableStream()`.
         */ toReadableStream() {
            const self = this;
            let iter;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$shims$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeReadableStream"])({
                async start () {
                    iter = self[Symbol.asyncIterator]();
                },
                async pull (ctrl) {
                    try {
                        const { value, done } = await iter.next();
                        if (done) return ctrl.close();
                        const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$bytes$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encodeUTF8"])(JSON.stringify(value) + '\n');
                        ctrl.enqueue(bytes);
                    } catch (err) {
                        ctrl.error(err);
                    }
                },
                async cancel () {
                    await iter.return?.();
                }
            });
        }
    }
    return Stream;
})();
async function* _iterSSEMessages(response, controller) {
    if (!response.body) {
        controller.abort();
        if (typeof globalThis.navigator !== 'undefined' && globalThis.navigator.product === 'ReactNative') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$core$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnthropicError"](`The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api`);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$core$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnthropicError"](`Attempted to iterate over a response with no body`);
    }
    const decoder = new TextDecoder('utf-8', {
        ignoreBOM: true
    });
    let text = '';
    let event = null;
    let data = [];
    let raw = [];
    const takeLine = (line)=>{
        if (line.charCodeAt(0) === 0xfeff) line = line.slice(1);
        if (!line) {
            // empty line and we didn't previously encounter any messages
            if (!event && !data.length) return null;
            const sse = {
                event,
                data: data.join('\n'),
                raw
            };
            event = null;
            data = [];
            raw = [];
            return sse;
        }
        raw.push(line);
        const colon = line.indexOf(':');
        if (colon === 0) return null;
        const fieldname = colon === -1 ? line : line.slice(0, colon);
        if (fieldname !== 'event' && fieldname !== 'data') return null;
        const value = colon === -1 ? '' : line.slice(line.charCodeAt(colon + 1) === 0x20 ? colon + 2 : colon + 1);
        if (fieldname === 'event') event = value;
        else data.push(value);
        return null;
    };
    for await (const chunk of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$shims$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReadableStreamToAsyncIterable"])(response.body)){
        if (chunk == null) continue;
        text += decoder.decode(typeof chunk === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anthropic$2d$ai$2b$sdk$40$1$2e$10$2e$0_zod$40$4$2e$6$2e$7$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$internal$2f$utils$2f$bytes$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encodeUTF8"])(chunk) : chunk, {
            stream: true
        });
        let start = 0;
        if (!text.includes('\r')) {
            let end;
            while((end = text.indexOf('\n', start)) !== -1){
                const sse = takeLine(text.slice(start, end));
                start = end + 1;
                if (sse) yield sse;
            }
        } else {
            for(let i = 0; i < text.length; i++){
                const char = text[i];
                if (char !== '\n' && char !== '\r') continue;
                if (char === '\r' && i + 1 === text.length) break;
                const sse = takeLine(text.slice(start, i));
                if (char === '\r' && text[i + 1] === '\n') i++;
                start = i + 1;
                if (sse) yield sse;
            }
        }
        text = text.slice(start);
    }
    text += decoder.decode();
    if (text) {
        for (const line of text.replace(/\r$/, '').split(/\r\n|[\n\r]/)){
            const sse = takeLine(line);
            if (sse) yield sse;
        }
    }
}
}),
];

//# sourceMappingURL=104w_%40anthropic-ai_sdk_core_1ves2rkqzlbnz._.js.map