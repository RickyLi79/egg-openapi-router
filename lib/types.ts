import { IOpenapiRouterOptions, IOptionalOpenapiRouterConfig } from '@rickyli79/koa-openapi-router';
import { PowerPartial } from 'egg';

export const OPENAPI_ROUTER_LOGGER = 'openapiRouterLogger';
export type IEggOpenapiRouterConfig = {
  config?: IOptionalOpenapiRouterConfig,
  configs?: { [routerPrefix: string]: IOptionalOpenapiRouterConfig },
  options?: PowerPartial< Omit<IOpenapiRouterOptions, 'proxyAction'> & {proxyAction: string}>,
};
