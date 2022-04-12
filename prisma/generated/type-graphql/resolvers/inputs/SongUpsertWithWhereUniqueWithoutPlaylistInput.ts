import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutPlaylistInput } from "../inputs/SongCreateWithoutPlaylistInput";
import { SongUpdateWithoutPlaylistInput } from "../inputs/SongUpdateWithoutPlaylistInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongUpsertWithWhereUniqueWithoutPlaylistInput", {
  isAbstract: true
})
export class SongUpsertWithWhereUniqueWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongUpdateWithoutPlaylistInput, {
    nullable: false
  })
  update!: SongUpdateWithoutPlaylistInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutPlaylistInput, {
    nullable: false
  })
  create!: SongCreateWithoutPlaylistInput;
}
