import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongWhereInput } from "../inputs/SongWhereInput";

@TypeGraphQL.InputType("SongListRelationFilter", {
  isAbstract: true
})
export class SongListRelationFilter {
  @TypeGraphQL.Field(_type => SongWhereInput, {
    nullable: true
  })
  every?: SongWhereInput | undefined;

  @TypeGraphQL.Field(_type => SongWhereInput, {
    nullable: true
  })
  some?: SongWhereInput | undefined;

  @TypeGraphQL.Field(_type => SongWhereInput, {
    nullable: true
  })
  none?: SongWhereInput | undefined;
}
