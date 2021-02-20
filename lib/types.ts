import { IOptionalOpenapiRouterConfig } from '@rickyli79/koa-openapi-router';

export const OPENAPI_ROUTER_LOGGER = 'openapiRouterLogger';
export type IEggOpenapiRouterConfig = {
  config?:IOptionalOpenapiRouterConfig,
  configs?: { [routerPrefix:string] : IOptionalOpenapiRouterConfig }
};
