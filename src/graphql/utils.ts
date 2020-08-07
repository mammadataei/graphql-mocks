import { ResolverMap, ResolvableType, ResolvableField, ResolverContext } from '../types';
import {
  GraphQLSchema,
  isAbstractType,
  isObjectType,
  GraphQLType,
  isNamedType,
  isListType,
  isNonNullType,
  GraphQLScalarType,
  GraphQLObjectType,
  GraphQLInterfaceType,
  GraphQLUnionType,
  GraphQLEnumType,
  GraphQLInputObjectType,
  isSchema,
  buildSchema,
  printSchema,
  GraphQLArgs,
} from 'graphql';
import { FieldReference } from '../resolver-map/reference/field-reference';
import { PackOptions } from '../pack/types';

export function attachTypeResolversToSchema(resolverMap: ResolverMap, schema: GraphQLSchema): void {
  for (const typeName in resolverMap) {
    const type = schema.getType(typeName);

    //  Note: __resolveType for type resolvers is a convention borrowed from
    //  graphql-tools resolver maps. This allows a single ResolverMap to be used
    // for both type resolvers for abstract types (unions & interfaces), as well
    // as field resolvers
    const typeResolver = resolverMap[typeName].__resolveType;
    const hasTypeResolver = Boolean(typeResolver);

    if (hasTypeResolver && isAbstractType(type)) {
      type.resolveType = typeResolver;
    }
  }
}

export function attachFieldResolverstoSchema(resolverMap: ResolverMap, schema: GraphQLSchema): void {
  for (const typeName in resolverMap) {
    const type = schema.getType(typeName);

    if (!isObjectType(type)) {
      continue;
    }

    for (const fieldName in resolverMap[typeName]) {
      const fieldMap = type.getFields();
      fieldMap[fieldName].resolve = resolverMap[typeName][fieldName];
    }
  }
}

export function attachResolversToSchema(resolverMap: ResolverMap, schema: GraphQLSchema): void {
  attachTypeResolversToSchema(resolverMap, schema);
  attachFieldResolverstoSchema(resolverMap, schema);
}

type unwrappedType =
  | GraphQLScalarType
  | GraphQLObjectType
  | GraphQLInterfaceType
  | GraphQLUnionType
  | GraphQLEnumType
  | GraphQLInputObjectType;

export const unwrap = (type: GraphQLType): unwrappedType => ('ofType' in type ? unwrap(type.ofType) : type);

export function isRootQueryType(type: GraphQLType | string, schema: GraphQLSchema): boolean {
  if (typeof type !== 'string' && !('name' in type)) {
    return false;
  }

  const rootQueryTypeName = schema.getQueryType()?.name;
  const typeName = typeof type === 'string' ? type : type.name;
  return typeName === rootQueryTypeName;
}

export function isRootMutationType(type: GraphQLType | string, schema: GraphQLSchema): boolean {
  if (typeof type !== 'string' && !('name' in type)) {
    return false;
  }

  const rootQueryTypeName = schema.getMutationType()?.name;
  const typeName = typeof type === 'string' ? type : type.name;
  return typeName === rootQueryTypeName;
}

export function isInternalType(type: GraphQLType | string): boolean {
  if (isNamedType(type)) {
    type = type.name;
  }

  if (typeof type !== 'string') {
    return false;
  }

  return type.startsWith('__');
}

/**
 * Checks if a type is a list type or a wrapped list type (ie: wrapped with non-null)
 */
export function hasListType(type: GraphQLType): boolean {
  return isListType(type) || (isNonNullType(type) && isListType(type.ofType));
}

export function getTypeAndFieldDefinitions(
  fieldReference: FieldReference,
  schema: GraphQLSchema,
): [ResolvableType, ResolvableField] {
  const [typeName, fieldName] = fieldReference;
  const type = schema.getType(typeName);

  if (!type) {
    throw new Error(`Unable to find type "${typeName}" from schema`);
  }

  let field: ResolvableField;
  if (isObjectType(type)) {
    const fields = type.getFields();
    field = fields[fieldName];
  } else if (isAbstractType(type)) {
    field = { name: '__resolveType' } as ResolvableField;
  } else {
    throw new Error(`Type "${typeName}" must be an a GraphQLObjectType, GraphQLUnionType, GraphQLInterfaceType`);
  }

  if (!field) throw new Error(`Field "${fieldName}" does not exist on type "${typeName}"`);

  return [type, field];
}

export function copySchema(schema: GraphQLSchema): GraphQLSchema {
  return buildSchema(printSchema(schema));
}

export function createSchema(schema: GraphQLSchema | string): GraphQLSchema {
  // creates a copy of the schema
  if (isSchema(schema)) return copySchema(schema);

  if (typeof schema === 'string') {
    try {
      return buildSchema(schema);
    } catch (error) {
      throw new Error(
        'Unable to build a schema from the string passed into the `graphqlSchema` dependency. Failed with error:\n\n' +
          error.message,
      );
    }
  }

  throw new Error('Unable to build schema, pass in an instance of schema or a string');
}

export function buildContext({
  initialContext,
  queryContext,
  packOptions,
}: {
  initialContext?: GraphQLArgs['contextValue'];
  queryContext?: GraphQLArgs['contextValue'];
  packOptions: PackOptions;
}): ResolverContext {
  return {
    ...initialContext,
    ...queryContext,
    pack: packOptions,
  };
}
