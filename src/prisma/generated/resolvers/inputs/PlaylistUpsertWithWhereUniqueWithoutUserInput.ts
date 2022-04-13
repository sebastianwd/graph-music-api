import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateWithoutUserInput } from "../inputs/PlaylistCreateWithoutUserInput";
import { PlaylistUpdateWithoutUserInput } from "../inputs/PlaylistUpdateWithoutUserInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class PlaylistUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistUpdateWithoutUserInput, {
    nullable: false
  })
  update!: PlaylistUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => PlaylistCreateWithoutUserInput, {
    nullable: false
  })
  create!: PlaylistCreateWithoutUserInput;
}
