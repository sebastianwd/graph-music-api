import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutPlaylistInput } from "../inputs/SongCreateWithoutPlaylistInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongCreateOrConnectWithoutPlaylistInput", {
  isAbstract: true
})
export class SongCreateOrConnectWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutPlaylistInput, {
    nullable: false
  })
  create!: SongCreateWithoutPlaylistInput;
}
