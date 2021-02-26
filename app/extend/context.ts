import { OperationSchema, Schema } from '@rickyli79/koa-openapi-router';

export default {
  oasOperation():OperationSchema {
    return (this as any).getOperation();
  },
  oasRequestBodySchema():Schema {
    return (this as any).getRequestBodySchema();
  },
  oasRequestQuery():any {
    return (this as any).getRequestQuery();
  },
};
