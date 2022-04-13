import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistWhereInput } from "../inputs/PlaylistWhereInput";

@TypeGraphQL.InputType("PlaylistRelationFilter", {
  isAbstract: true
})
export class PlaylistRelationFilter {
  @TypeGraphQL.Field(_type => PlaylistWhereInput, {
    nullable: true
  })
  is?: PlaylistWhereInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistWhereInput, {
    nullable: true
  })
  isNot?: PlaylistWhereInput | undefined;
}
