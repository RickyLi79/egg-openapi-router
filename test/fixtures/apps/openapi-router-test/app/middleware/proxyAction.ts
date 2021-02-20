import { Context } from 'egg';

export default async function(ctx:Context, next:any) {
  ctx.status = 201;
  next();
}
