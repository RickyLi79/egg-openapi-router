"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../lib/types");
exports.default = () => {
    const openapiRouter = {
        config: {
            watcher: { enabled: true },
            validSchema: {
                request: true,
                reponse: true,
            },
        },
    };
    const config = {};
    config.customLogger = {};
    config.customLogger[types_1.OPENAPI_ROUTER_LOGGER] = {
        level: 'ALL',
    };
    return Object.assign(Object.assign({}, config), { openapiRouter });
};
