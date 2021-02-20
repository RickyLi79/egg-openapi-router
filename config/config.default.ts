import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as path from 'path';
import { IEggOpenapiRouterConfig, OPENAPI_ROUTER_LOGGER } from '../lib/types';

export default (appInfo: EggAppInfo): { openapiRouter: IEggOpenapiRouterConfig } => {
  const openapiRouter: IEggOpenapiRouterConfig = {
    config: {
      controllerDir: path.join(appInfo.baseDir, 'app', 'controller'),
      docsDir: path.join(appInfo.baseDir, 'openapi-doc'),
      routerPrefix: '',
    },
  };

  const config: PowerPartial<EggAppConfig> = {};
  config.customLogger = {};
  config.customLogger[OPENAPI_ROUTER_LOGGER] = {
    file: path.join(appInfo.root, 'logs', appInfo.name, 'egg-openapi-router.log'),
  };

  return { ...config, openapiRouter };
};
