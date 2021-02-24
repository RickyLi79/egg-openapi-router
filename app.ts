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
    const configs: IOptionalOpenapiRouterConfig[] = [];
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
    let proxyAction:any|undefined;
    if (config.proxyAction) {
      const paths = config.proxyAction.split('/');
      proxyAction = <any> this.app.middleware;
      for (const iPath of paths) {
        proxyAction = proxyAction[iPath];
      }
      proxyAction = this.app.middleware[config.proxyAction];
    }
    await OpenapiRouter.Start(this.app, configs, { logger, isEggApp: true, proxyAction, testMode: config.testMode });
  }

}
