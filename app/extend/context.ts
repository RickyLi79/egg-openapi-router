import { CTX_OPERATION_SCHEMA, OPENAPI_RQEUST_BODY_SCHEMA, Schema } from '@rickyli79/koa-openapi-router';

export default {
  oasOperation() {
    return this[CTX_OPERATION_SCHEMA];
  },
  oasRequestBodySchema():Schema {
    return this[OPENAPI_RQEUST_BODY_SCHEMA];
  },
};
