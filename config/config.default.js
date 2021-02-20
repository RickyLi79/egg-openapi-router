"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path = tslib_1.__importStar(require("path"));
const types_1 = require("../lib/types");
exports.default = (appInfo) => {
    const openapiRouter = {
        config: {
            controllerDir: '',
            docsDir: path.join(appInfo.baseDir, 'openapi-doc'),
            routerPrefix: '',
        },
    };
    const config = {};
    config.customLogger = {};
    config.customLogger[types_1.OPENAPI_ROUTER_LOGGER] = {
        file: path.join(appInfo.root, 'logs', appInfo.name, 'egg-openapi-router.log'),
    };
    return Object.assign(Object.assign({}, config), { openapiRouter });
};
