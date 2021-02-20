import { IOptionalOpenapiRouterConfig, OpenapiRouter } from '@rickyli79/koa-openapi-router';
import { Application, IBoot } from 'egg';
import { OPENAPI_ROUTER_LOGGER } from './lib/types';

export default class implements IBoot {

  protected app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  public async willReady() {
    await this.initOpenapiRouter();
  }

  private async initOpenapiRouter() {
    const logger = this.app.getLogger(OPENAPI_ROUTER_LOGGER);
    const configs:IOptionalOpenapiRouterConfig[] = [ ];
    if (this.app.config.openapiRouter.config) { configs.push(this.app.config.openapiRouter.config); }
    if (this.app.config.openapiRouter.configs) {
      const cfgs = this.app.config.openapiRouter.configs;
      for (const iConfigKey in cfgs) {
        const iConfig = cfgs[iConfigKey];
        iConfig.routerPrefix = iConfigKey;
        configs.push(iConfig);
      }
    }
    await OpenapiRouter.Start(this.app, configs, { logger, isEggApp: true });
  }

}
