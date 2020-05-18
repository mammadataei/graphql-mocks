import { ResolverMap, ResolverMapWrapper, PackOptions, ResolverWrapper, Resolver } from '../types';
import { getTypeAndField, addResolverToMap, embedPackOptionsResolverWrapper } from '../utils';
import { wrapResolver } from '../resolver/wrap';
import { GraphQLSchema } from 'graphql';

export const wrapEachField = (resolverWrappers: ResolverWrapper[]): ResolverMapWrapper => (
  resolvers: ResolverMap,
  packOptions: PackOptions,
): ResolverMap => {
  const { graphqlSchema: schema }: { graphqlSchema?: GraphQLSchema } = packOptions.dependencies;

  if (!schema) {
    throw new Error('Include in your pack dependencies, key: "graphqlSchema" with an instance of your GraphQLSchema');
  }

  for (const typeName in resolvers) {
    for (const fieldName in resolvers[typeName]) {
      const resolverToWrap = resolvers[typeName][fieldName] as Resolver;
      const [type, field] = getTypeAndField(typeName, fieldName, schema);

      const wrappedResolver = wrapResolver(resolverToWrap, [...resolverWrappers, embedPackOptionsResolverWrapper], {
        type,
        field,
        resolvers,
        packOptions,
      });

      addResolverToMap({
        resolverMap: resolvers,
        typeName,
        fieldName,
        resolver: wrappedResolver,
        overwrite: true,
      });
    }
  }

  return resolvers;
};