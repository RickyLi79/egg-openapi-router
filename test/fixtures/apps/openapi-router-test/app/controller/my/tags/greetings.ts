import { Controller } from 'egg';

export default class extends Controller {

  public async 'POST /nihao'() {
    const { ctx } = this;
    ctx.body = 'hi, ' + ctx.request.body.name;
  }

}
