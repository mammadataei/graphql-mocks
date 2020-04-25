import { eachType } from '../../resolver-map/each-type';
import { GraphQLInterfaceType, GraphQLUnionType } from 'graphql';
import { Resolver } from '../../types';
import { mirageUnionResolver } from '../../mirage/resolvers/union';
import { mirageInterfaceResolver } from '../../mirage/resolvers/interface';
import { embedPackOptions } from '../../resolver-map/pack-wrapper';

export const patchUnionsInterfaces = eachType({
  withType({ resolvers, type, packOptions }) {
    let patchResolver: Resolver;

    if (type instanceof GraphQLUnionType) {
      patchResolver = mirageUnionResolver;
    } else if (type instanceof GraphQLInterfaceType) {
      patchResolver = mirageInterfaceResolver;
    } else {
      return;
    }

    if (patchResolver) {
      const alreadyHasResolveTypeResolver = resolvers[type.name]?.__resolveType;
      if (!alreadyHasResolveTypeResolver) {
        resolvers[type.name] = resolvers[type.name] || {};
        resolvers[type.name].__resolveType = embedPackOptions(patchResolver, packOptions);
      }
    }
  },
});
