import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PlaylistScalarWhereInput", {
  isAbstract: true
})
export class PlaylistScalarWhereInput {
  @TypeGraphQL.Field(_type => [PlaylistScalarWhereInput], {
    nullable: true
  })
  AND?: PlaylistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistScalarWhereInput], {
    nullable: true
  })
  OR?: PlaylistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistScalarWhereInput], {
    nullable: true
  })
  NOT?: PlaylistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
