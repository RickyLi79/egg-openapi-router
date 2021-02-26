import { Controller } from 'egg';

export default class extends Controller {

  public async 'GET /pets'() {
    const { ctx } = this;
    ctx.body = [];
  }
}
