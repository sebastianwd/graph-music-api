import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateWithoutSongsInput } from "../inputs/PlaylistCreateWithoutSongsInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistCreateOrConnectWithoutSongsInput", {
  isAbstract: true
})
export class PlaylistCreateOrConnectWithoutSongsInput {
  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistCreateWithoutSongsInput, {
    nullable: false
  })
  create!: PlaylistCreateWithoutSongsInput;
}
