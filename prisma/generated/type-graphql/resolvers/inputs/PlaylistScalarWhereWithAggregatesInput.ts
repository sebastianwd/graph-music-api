import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PlaylistScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PlaylistScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PlaylistScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PlaylistScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PlaylistScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PlaylistScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
