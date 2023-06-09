import { StackContext, Api as ApiGateway } from "sst/constructs";

export function Api({ stack }: StackContext) {
  const api = new ApiGateway(stack, "api", {
    routes: {
      "GET /trpc/{proxy+}": "packages/api/index.handler",
    }
  })

  stack.addOutputs({
    API: api.url
  })

  return api;
}
