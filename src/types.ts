/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  GraphQLFieldResolver,
  GraphQLObjectType,
  GraphQLField,
  GraphQLUnionType,
  GraphQLInterfaceType,
  GraphQLTypeResolver,
} from 'graphql';

export type Primitive = string | boolean | number;

export type Resolver = GraphQLFieldResolver<any, any>;

export type ResolverWrapper = (resolver: GraphQLFieldResolver<any, any>, options: ResolverWrapperOptions) => Resolver;

export type PatchResolverWrapper = (options: ResolverWrapperOptions) => Resolver | undefined;

// A resolvable type is a type that has a "field" that can be resolved by a resolver function
export type ResolvableType = GraphQLObjectType | GraphQLUnionType | GraphQLInterfaceType;

export type ResolvableField = GraphQLField<any, any, any>;

export type ResolverWrapperOptions = {
  resolvers: ResolverMap;
  type: ResolvableType;
  field: ResolvableField;
  packOptions: PackOptions;
};

export type ResolverMap<TFieldResolver = Resolver, TTypeResolver = GraphQLTypeResolver<any, any>> = {
  [typeName: string]: {
    [fieldName: string]: TFieldResolver;
  } & { __resolveType?: TTypeResolver };
};

export type PackState = Record<any, any>;

export type PackOptions = {
  state: PackState;
  dependencies: Record<string, unknown>;
};

export type ResolverMapWrapper = (map: ResolverMap, packOptions: PackOptions) => ResolverMap;

export type Packed = { resolvers: ResolverMap; state: PackState };

export type Packer = (
  initialMap: ResolverMap,
  wrappers: ResolverMapWrapper[],
  packOptions?: Partial<PackOptions>,
) => Packed;