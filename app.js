"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const koa_openapi_router_1 = require("@rickyli79/koa-openapi-router");
const types_1 = require("./lib/types");
class default_1 {
    constructor(app) {
        this.app = app;
    }
    async willReady() {
        await this.initOpenapiRouter();
    }
    async initOpenapiRouter() {
        const logger = this.app.getLogger(types_1.OPENAPI_ROUTER_LOGGER);
        const configs = [];
        if (this.app.config.openapiRouter.config) {
            configs.push(this.app.config.openapiRouter.config);
        }
        if (this.app.config.openapiRouter.configs) {
            const cfgs = this.app.config.openapiRouter.configs;
            for (const iConfigKey in cfgs) {
                const iConfig = cfgs[iConfigKey];
                iConfig.routerPrefix = iConfigKey;
                configs.push(iConfig);
            }
        }
        await koa_openapi_router_1.OpenapiRouter.Start(this.app, configs, { logger, isEggApp: true });
    }
}
exports.default = default_1;
