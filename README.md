# egg-openapi-router
[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
![NPM](https://img.shields.io/npm/l/egg-openapi-router?style=flat-square)

[npm-image]: https://img.shields.io/npm/v/egg-openapi-router.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-openapi-router
[download-image]: https://img.shields.io/npm/dm/egg-openapi-router.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-openapi-router

[@rickyli79/koa-openapi-router](https://github.com/RickyLi79/koa-openapi-router) plugin for Egg.js.

> NOTE: This plugin just for Egg.js, more documentation please visit https://github.com/RickyLi79/koa-openapi-router.

## Install

```bash
$ npm i --save egg-openapi-router
```

## Usage & configuration

#### Enable plugin in `config/plugin.js`

``` js
exports.openapiRouter = {
  enable: true,
  package: 'egg-openapi-router'
}
```

#### Edit your own configurations in `config/config.{env}.js`

- Single config
  ```js
  // config/config.{env}.js
  exports.openapiRouter = {
    config: {
      controllerDir: 'my/api/dir', // default: ''
      docsDir: path.join(appInfo.baseDir, 'my-openapi-doc'), // default: path.join(appInfo.baseDir, 'openapi-doc')
      routerPrefix: '/myApi', // default : ''
    },
  };
  ```
- Muti Configs
  ```js
  // config/config.{env}.js
  exports.openapiRouter = {
    configs: {
      'my/api/module/1': {
        controllerDir: 'module-1',
        docsDir: path.join(appInfo.baseDir, 'openapi-doc-module-1'),
      },
      'my/api/module/2': {
        controllerDir: 'module-2',
        docsDir: path.join(appInfo.baseDir, 'openapi-doc-module-2'),
      },
    },
  };
  ```

## Examples

#### openapi-docs:
```yaml
# openapi-doc/my.oas3.json
openapi: "3.0.0"
paths:
  /hello:
    get:
      responses:
        200:
          description: ok
```

#### edit `config/config.{env}.js`:
```js
// config/config.{env}.js
exports.openapiRouter = {
  config: {
    controllerDir: '', 
    docsDir: path.join(appInfo.baseDir, 'openapi-doc'),
    routerPrefix: '',
  },
};
```

#### controller:
```js
// app/controller/default.js
const Controller = require('egg').Controller;
class DefaultController extends Controller {
  async 'GET /hello'() {
    const { ctx } = this;
    ctx.status = 200;
    ctx.body = 'nihao';
  }
}
module.exports = DefaultController;
```

> More documentation please visit https://github.com/RickyLi79/koa-openapi-router.

## License

[MIT](LICENSE)

