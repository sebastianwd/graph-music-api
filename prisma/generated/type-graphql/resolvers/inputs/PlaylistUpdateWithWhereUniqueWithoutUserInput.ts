import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistUpdateWithoutUserInput } from "../inputs/PlaylistUpdateWithoutUserInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class PlaylistUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistUpdateWithoutUserInput, {
    nullable: false
  })
  data!: PlaylistUpdateWithoutUserInput;
}
