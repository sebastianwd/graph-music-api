import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateWithoutUserInput } from "../inputs/PlaylistCreateWithoutUserInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class PlaylistCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistCreateWithoutUserInput, {
    nullable: false
  })
  create!: PlaylistCreateWithoutUserInput;
}
