import { EggAppConfig, PowerPartial } from 'egg';
import { IEggOpenapiRouterConfig, OPENAPI_ROUTER_LOGGER } from '../lib/types';

export default () => {
  const openapiRouter: IEggOpenapiRouterConfig = {
    config: {
      watcher: { enabled: true },
      validSchema: {
        request: true,
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
