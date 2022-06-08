import { FieldResolver, TypeResolver } from '../types';

export function createPipeline<T extends TypeResolver | FieldResolver>(pipeline: T[]): Pipeline<T> {
  return new Pipeline(pipeline);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function embedPipeResult(context: Record<string, unknown>, pipelineResult: any) {
  return { ...context, pipelineResult };
}

class Pipeline<T extends TypeResolver | FieldResolver> {
  resolvers: T[];

  constructor(pipeline: T[]) {
    this.resolvers = pipeline;
    (this.resolver as any).pipeline = this;
  }

  before(resolvers: T[]) {
    this.resolvers = [...resolvers, ...this.resolvers];
  }

  after(resolvers: T[]) {
    this.resolvers = [...this.resolvers, ...resolvers];
  }

  resolver = async (a: any, b: any, context: any, d: any): Promise<ReturnType<T>> => {
    if (typeof context !== 'object' || !(context instanceof Object)) {
      throw new Error('Passed context should be an object');
    }

    const pipeline = [...this.resolvers];
    let resolver: FieldResolver | TypeResolver | undefined;
    let result: any = undefined;
    while ((resolver = pipeline.shift())) {
      const embeddedContext = embedPipeResult(context, result);
      result = await resolver(a, b, embeddedContext, d);
    }

    return result;
  };
}
