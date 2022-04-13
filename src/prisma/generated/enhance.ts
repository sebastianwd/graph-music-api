import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Song: crudResolvers.SongCrudResolver,
  Playlist: crudResolvers.PlaylistCrudResolver
};
const actionResolversMap = {
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  Song: {
    song: actionResolvers.FindUniqueSongResolver,
    findFirstSong: actionResolvers.FindFirstSongResolver,
    songs: actionResolvers.FindManySongResolver,
    createSong: actionResolvers.CreateSongResolver,
    createManySong: actionResolvers.CreateManySongResolver,
    deleteSong: actionResolvers.DeleteSongResolver,
    updateSong: actionResolvers.UpdateSongResolver,
    deleteManySong: actionResolvers.DeleteManySongResolver,
    updateManySong: actionResolvers.UpdateManySongResolver,
    upsertSong: actionResolvers.UpsertSongResolver,
    aggregateSong: actionResolvers.AggregateSongResolver,
    groupBySong: actionResolvers.GroupBySongResolver
  },
  Playlist: {
    playlist: actionResolvers.FindUniquePlaylistResolver,
    findFirstPlaylist: actionResolvers.FindFirstPlaylistResolver,
    playlists: actionResolvers.FindManyPlaylistResolver,
    createPlaylist: actionResolvers.CreatePlaylistResolver,
    createManyPlaylist: actionResolvers.CreateManyPlaylistResolver,
    deletePlaylist: actionResolvers.DeletePlaylistResolver,
    updatePlaylist: actionResolvers.UpdatePlaylistResolver,
    deleteManyPlaylist: actionResolvers.DeleteManyPlaylistResolver,
    updateManyPlaylist: actionResolvers.UpdateManyPlaylistResolver,
    upsertPlaylist: actionResolvers.UpsertPlaylistResolver,
    aggregatePlaylist: actionResolvers.AggregatePlaylistResolver,
    groupByPlaylist: actionResolvers.GroupByPlaylistResolver
  }
};
const crudResolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Song: ["song", "findFirstSong", "songs", "createSong", "createManySong", "deleteSong", "updateSong", "deleteManySong", "updateManySong", "upsertSong", "aggregateSong", "groupBySong"],
  Playlist: ["playlist", "findFirstPlaylist", "playlists", "createPlaylist", "createManyPlaylist", "deletePlaylist", "updatePlaylist", "deleteManyPlaylist", "updateManyPlaylist", "upsertPlaylist", "aggregatePlaylist", "groupByPlaylist"]
};
const argsInfo = {
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSongArgs: ["where"],
  FindFirstSongArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySongArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSongArgs: ["data"],
  CreateManySongArgs: ["data", "skipDuplicates"],
  DeleteSongArgs: ["where"],
  UpdateSongArgs: ["data", "where"],
  DeleteManySongArgs: ["where"],
  UpdateManySongArgs: ["data", "where"],
  UpsertSongArgs: ["where", "create", "update"],
  AggregateSongArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySongArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePlaylistArgs: ["where"],
  FindFirstPlaylistArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPlaylistArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePlaylistArgs: ["data"],
  CreateManyPlaylistArgs: ["data", "skipDuplicates"],
  DeletePlaylistArgs: ["where"],
  UpdatePlaylistArgs: ["data", "where"],
  DeleteManyPlaylistArgs: ["where"],
  UpdateManyPlaylistArgs: ["data", "where"],
  UpsertPlaylistArgs: ["where", "create", "update"],
  AggregatePlaylistArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPlaylistArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Song: relationResolvers.SongRelationsResolver,
  Playlist: relationResolvers.PlaylistRelationsResolver
};
const relationResolversInfo = {
  User: ["playlists"],
  Song: ["Playlist"],
  Playlist: ["User", "songs"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["name", "email", "password", "createdAt", "updatedAt"],
  Song: ["title", "artist", "album", "year", "duration", "genre", "playlistId"],
  Playlist: ["name", "userId", "createdAt", "updatedAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "name", "email", "password", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSong: ["_count", "_avg", "_sum", "_min", "_max"],
  SongGroupBy: ["id", "title", "artist", "album", "year", "duration", "genre", "playlistId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePlaylist: ["_count", "_avg", "_sum", "_min", "_max"],
  PlaylistGroupBy: ["id", "name", "userId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["playlists"],
  UserCountAggregate: ["id", "name", "email", "password", "createdAt", "updatedAt", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "name", "email", "password", "createdAt", "updatedAt"],
  UserMaxAggregate: ["id", "name", "email", "password", "createdAt", "updatedAt"],
  SongCountAggregate: ["id", "title", "artist", "album", "year", "duration", "genre", "playlistId", "_all"],
  SongAvgAggregate: ["id", "year", "duration", "playlistId"],
  SongSumAggregate: ["id", "year", "duration", "playlistId"],
  SongMinAggregate: ["id", "title", "artist", "album", "year", "duration", "genre", "playlistId"],
  SongMaxAggregate: ["id", "title", "artist", "album", "year", "duration", "genre", "playlistId"],
  PlaylistCount: ["songs"],
  PlaylistCountAggregate: ["id", "name", "userId", "createdAt", "updatedAt", "_all"],
  PlaylistAvgAggregate: ["id", "userId"],
  PlaylistSumAggregate: ["id", "userId"],
  PlaylistMinAggregate: ["id", "name", "userId", "createdAt", "updatedAt"],
  PlaylistMaxAggregate: ["id", "name", "userId", "createdAt", "updatedAt"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "password", "createdAt", "updatedAt", "playlists"],
  UserOrderByWithRelationInput: ["id", "name", "email", "password", "createdAt", "updatedAt", "playlists"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "name", "email", "password", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "password", "createdAt", "updatedAt"],
  SongWhereInput: ["AND", "OR", "NOT", "id", "title", "artist", "album", "year", "duration", "genre", "Playlist", "playlistId"],
  SongOrderByWithRelationInput: ["id", "title", "artist", "album", "year", "duration", "genre", "Playlist", "playlistId"],
  SongWhereUniqueInput: ["id"],
  SongOrderByWithAggregationInput: ["id", "title", "artist", "album", "year", "duration", "genre", "playlistId", "_count", "_avg", "_max", "_min", "_sum"],
  SongScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "artist", "album", "year", "duration", "genre", "playlistId"],
  PlaylistWhereInput: ["AND", "OR", "NOT", "id", "name", "User", "userId", "songs", "createdAt", "updatedAt"],
  PlaylistOrderByWithRelationInput: ["id", "name", "User", "userId", "songs", "createdAt", "updatedAt"],
  PlaylistWhereUniqueInput: ["id"],
  PlaylistOrderByWithAggregationInput: ["id", "name", "userId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  PlaylistScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "userId", "createdAt", "updatedAt"],
  UserCreateInput: ["name", "email", "password", "createdAt", "updatedAt", "playlists"],
  UserUpdateInput: ["name", "email", "password", "createdAt", "updatedAt", "playlists"],
  UserCreateManyInput: ["id", "name", "email", "password", "createdAt", "updatedAt"],
  UserUpdateManyMutationInput: ["name", "email", "password", "createdAt", "updatedAt"],
  SongCreateInput: ["title", "artist", "album", "year", "duration", "genre", "Playlist"],
  SongUpdateInput: ["title", "artist", "album", "year", "duration", "genre", "Playlist"],
  SongCreateManyInput: ["id", "title", "artist", "album", "year", "duration", "genre", "playlistId"],
  SongUpdateManyMutationInput: ["title", "artist", "album", "year", "duration", "genre"],
  PlaylistCreateInput: ["name", "User", "songs", "createdAt", "updatedAt"],
  PlaylistUpdateInput: ["name", "User", "songs", "createdAt", "updatedAt"],
  PlaylistCreateManyInput: ["id", "name", "userId", "createdAt", "updatedAt"],
  PlaylistUpdateManyMutationInput: ["name", "createdAt", "updatedAt"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PlaylistListRelationFilter: ["every", "some", "none"],
  PlaylistOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "name", "email", "password", "createdAt", "updatedAt"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "name", "email", "password", "createdAt", "updatedAt"],
  UserMinOrderByAggregateInput: ["id", "name", "email", "password", "createdAt", "updatedAt"],
  UserSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PlaylistRelationFilter: ["is", "isNot"],
  SongCountOrderByAggregateInput: ["id", "title", "artist", "album", "year", "duration", "genre", "playlistId"],
  SongAvgOrderByAggregateInput: ["id", "year", "duration", "playlistId"],
  SongMaxOrderByAggregateInput: ["id", "title", "artist", "album", "year", "duration", "genre", "playlistId"],
  SongMinOrderByAggregateInput: ["id", "title", "artist", "album", "year", "duration", "genre", "playlistId"],
  SongSumOrderByAggregateInput: ["id", "year", "duration", "playlistId"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  SongListRelationFilter: ["every", "some", "none"],
  SongOrderByRelationAggregateInput: ["_count"],
  PlaylistCountOrderByAggregateInput: ["id", "name", "userId", "createdAt", "updatedAt"],
  PlaylistAvgOrderByAggregateInput: ["id", "userId"],
  PlaylistMaxOrderByAggregateInput: ["id", "name", "userId", "createdAt", "updatedAt"],
  PlaylistMinOrderByAggregateInput: ["id", "name", "userId", "createdAt", "updatedAt"],
  PlaylistSumOrderByAggregateInput: ["id", "userId"],
  PlaylistCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  PlaylistUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  PlaylistCreateNestedOneWithoutSongsInput: ["create", "connectOrCreate", "connect"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  PlaylistUpdateOneWithoutSongsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserCreateNestedOneWithoutPlaylistsInput: ["create", "connectOrCreate", "connect"],
  SongCreateNestedManyWithoutPlaylistInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutPlaylistsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SongUpdateManyWithoutPlaylistInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PlaylistCreateWithoutUserInput: ["name", "songs", "createdAt", "updatedAt"],
  PlaylistCreateOrConnectWithoutUserInput: ["where", "create"],
  PlaylistCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  PlaylistUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  PlaylistUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  PlaylistUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  PlaylistScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "userId", "createdAt", "updatedAt"],
  PlaylistCreateWithoutSongsInput: ["name", "User", "createdAt", "updatedAt"],
  PlaylistCreateOrConnectWithoutSongsInput: ["where", "create"],
  PlaylistUpsertWithoutSongsInput: ["update", "create"],
  PlaylistUpdateWithoutSongsInput: ["name", "User", "createdAt", "updatedAt"],
  UserCreateWithoutPlaylistsInput: ["name", "email", "password", "createdAt", "updatedAt"],
  UserCreateOrConnectWithoutPlaylistsInput: ["where", "create"],
  SongCreateWithoutPlaylistInput: ["title", "artist", "album", "year", "duration", "genre"],
  SongCreateOrConnectWithoutPlaylistInput: ["where", "create"],
  SongCreateManyPlaylistInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutPlaylistsInput: ["update", "create"],
  UserUpdateWithoutPlaylistsInput: ["name", "email", "password", "createdAt", "updatedAt"],
  SongUpsertWithWhereUniqueWithoutPlaylistInput: ["where", "update", "create"],
  SongUpdateWithWhereUniqueWithoutPlaylistInput: ["where", "data"],
  SongUpdateManyWithWhereWithoutPlaylistInput: ["where", "data"],
  SongScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "artist", "album", "year", "duration", "genre", "playlistId"],
  PlaylistCreateManyUserInput: ["id", "name", "createdAt", "updatedAt"],
  PlaylistUpdateWithoutUserInput: ["name", "songs", "createdAt", "updatedAt"],
  SongCreateManyPlaylistInput: ["id", "title", "artist", "album", "year", "duration", "genre"],
  SongUpdateWithoutPlaylistInput: ["title", "artist", "album", "year", "duration", "genre"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

