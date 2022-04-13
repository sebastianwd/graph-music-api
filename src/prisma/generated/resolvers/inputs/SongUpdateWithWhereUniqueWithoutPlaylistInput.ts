import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongUpdateWithoutPlaylistInput } from "../inputs/SongUpdateWithoutPlaylistInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongUpdateWithWhereUniqueWithoutPlaylistInput", {
  isAbstract: true
})
export class SongUpdateWithWhereUniqueWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongUpdateWithoutPlaylistInput, {
    nullable: false
  })
  data!: SongUpdateWithoutPlaylistInput;
}
