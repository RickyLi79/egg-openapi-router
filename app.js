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
        const config = this.app.config.openapiRouter;
        if (config.config) {
            configs.push(config.config);
        }
        if (config.configs) {
            const cfgs = config.configs;
            for (const iConfigKey in cfgs) {
                const iConfig = cfgs[iConfigKey];
                iConfig.routerPrefix = iConfigKey;
                configs.push(iConfig);
            }
        }
        let proxyAction;
        if (config.proxyAction) {
            const paths = config.proxyAction.split('/');
            proxyAction = this.app.middleware;
            for (const iPath of paths) {
                proxyAction = proxyAction[iPath];
            }
            proxyAction = this.app.middleware[config.proxyAction];
        }
        await koa_openapi_router_1.OpenapiRouter.Start(this.app, configs, { logger, isEggApp: true, proxyAction });
    }
}
exports.default = default_1;
