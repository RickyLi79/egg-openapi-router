
import { suite, test } from '@testdeck/mocha';
import { Severity, Status } from 'allure-js-commons';
import { allure } from 'allure-mocha/runtime';
import EggMock, { MockApplication } from 'egg-mock';
import { AllureHelper } from 'supertest-allure-step-helper';
import * as allureDecorators from 'ts-test-decorators';

let app: MockApplication;

@suite('OpenapiRouter: create')
export class TestSuite {

  public static async before() {
    allureDecorators.decorate<any>(allure);

    app = EggMock.app({
      baseDir: 'apps/openapi-router-test',
    });
    await app.ready();
  }

  public static after() {
    app.close();
  }

  public after() {
    EggMock.restore();
  }
  public async before() {
    allure.epic('egg-openapi-router');
    //

    app.mockCsrf();
  }


  @test('egg default')
  public async test00() {

    await AllureHelper.runStep('/', async () => {
      await app.httpRequest()
        .get('/')
        .expect(200);
    });

  }

  @allureDecorators.severity(Severity.BLOCKER)
  @allureDecorators.story('init')
  @test('controller, 200')
  public async test1() {

    await AllureHelper.runStep('/pets', async () => {
      await app.httpRequest()
        .get('/pets')
        .expect(200);
    });
  }

  @allureDecorators.severity(Severity.BLOCKER)
  @allureDecorators.story('init')
  @test('controller, 415')
  public async test2() {

    await AllureHelper.runStep('POST /nihao', async () => {
      await app.httpRequest()
        .post('/nihao')
        .expect(415);
    });

  }

  @allureDecorators.severity(Severity.BLOCKER)
  @allureDecorators.story('init')
  @test('controller, 422')
  public async test3() {

    await AllureHelper.runStep('POST /nihao', async () => {
      await app.httpRequest()
        .post('/nihao')
        .send({ name: 123 })
        .expect(422);
    });

  }

  @allureDecorators.severity(Severity.NORMAL)
  @allureDecorators.story('init')
  @test('controller, 200')
  public async test4() {

    await AllureHelper.runStep('POST /nihao', async () => {
      await app.httpRequest()
        .post('/nihao')
        .send({ name: 'any one' })
        .expect(200)
        .expect('hi, any one');
    });
  }

  @allureDecorators.severity(Severity.NORMAL)
  @allureDecorators.story('init')
  @test.only('proxyAction')
  public async test5() {

    const toPath = '/pets/myPet';

    AllureHelper.logStep(`set toPath='${toPath}'`, Status.PASSED);

    await AllureHelper.runStep('before set `proxyAction`, expect(501)', async () => {
      await app.httpRequest()
        .get(toPath)
        .expect(501);
    });

    AllureHelper.runStep('set `proxyAction`', () => {
      app.openapiRouter.proxyAction = app.middleware.proxyAction;
    });

    await AllureHelper.runStep('before set `proxyAction`, expect(201)', async () => {
      await app.httpRequest()
        .get(toPath)
        .expect(201);
    });

    AllureHelper.runStep('remove `proxyAction`', () => {
      app.openapiRouter.proxyAction = undefined;
    });

    await AllureHelper.runStep('after remove `proxyAction`, expect(501)', async () => {
      await app.httpRequest()
        .get(toPath)
        .expect(501);
    });
  }
}
