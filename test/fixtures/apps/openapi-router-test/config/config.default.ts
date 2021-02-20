import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1612548617180_3556';

  // add your egg config in here
  config.middleware = [];

  // const logger = config.logger ?? {};
  // logger.consoleLevel = 'ALL';
  // logger.level = 'ALL';


  // the return config will combines to EggAppConfig
  return config;
};
