import { PowerPartial } from '@rickyli79/koa-openapi-router';
import { EggAppConfig } from 'egg';
import { IEggOpenapiRouterConfig, OPENAPI_ROUTER_LOGGER } from '../lib/types';

export default () => {
  const openapiRouter: IEggOpenapiRouterConfig = {
    options: {
      testMode: true,
      watcher: { enabled: true },
      validSchema: {
        reponse: true,
      },
    },
  };
  const config: PowerPartial<EggAppConfig> = {};
  config.customLogger = {};
  config.customLogger[OPENAPI_ROUTER_LOGGER] = {
    consoleLevel: 'ALL',
  };
  return { ...config, openapiRouter };
};
