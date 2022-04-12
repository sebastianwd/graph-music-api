import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistWhereInput } from "../inputs/PlaylistWhereInput";

@TypeGraphQL.InputType("PlaylistListRelationFilter", {
  isAbstract: true
})
export class PlaylistListRelationFilter {
  @TypeGraphQL.Field(_type => PlaylistWhereInput, {
    nullable: true
  })
  every?: PlaylistWhereInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistWhereInput, {
    nullable: true
  })
  some?: PlaylistWhereInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistWhereInput, {
    nullable: true
  })
  none?: PlaylistWhereInput | undefined;
}
