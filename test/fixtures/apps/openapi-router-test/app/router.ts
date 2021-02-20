import { Application } from 'egg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (app: Application) => {

  const { controller, router } = app;

  router.get('/', async (ctx, next) => {
    ctx.status;
    await next();
  }, controller.home.index);
};
