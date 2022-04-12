import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { PlaylistRelationFilter } from "../inputs/PlaylistRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("SongWhereInput", {
  isAbstract: true
})
export class SongWhereInput {
  @TypeGraphQL.Field(_type => [SongWhereInput], {
    nullable: true
  })
  AND?: SongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereInput], {
    nullable: true
  })
  OR?: SongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereInput], {
    nullable: true
  })
  NOT?: SongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  artist?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  album?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  year?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  duration?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  genre?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => PlaylistRelationFilter, {
    nullable: true
  })
  Playlist?: PlaylistRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  playlistId?: IntNullableFilter | undefined;
}
