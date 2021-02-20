"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const koa_openapi_router_1 = require("@rickyli79/koa-openapi-router");
exports.default = {
    oasOperation() {
        return this[koa_openapi_router_1.CTX_OPERATION_SCHEMA];
    },
    oasRequestBodySchema() {
        return this[koa_openapi_router_1.OPENAPI_RQEUST_BODY_SCHEMA];
    },
};
