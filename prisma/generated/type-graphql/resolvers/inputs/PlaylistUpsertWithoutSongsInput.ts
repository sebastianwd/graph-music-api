import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateWithoutSongsInput } from "../inputs/PlaylistCreateWithoutSongsInput";
import { PlaylistUpdateWithoutSongsInput } from "../inputs/PlaylistUpdateWithoutSongsInput";

@TypeGraphQL.InputType("PlaylistUpsertWithoutSongsInput", {
  isAbstract: true
})
export class PlaylistUpsertWithoutSongsInput {
  @TypeGraphQL.Field(_type => PlaylistUpdateWithoutSongsInput, {
    nullable: false
  })
  update!: PlaylistUpdateWithoutSongsInput;

  @TypeGraphQL.Field(_type => PlaylistCreateWithoutSongsInput, {
    nullable: false
  })
  create!: PlaylistCreateWithoutSongsInput;
}
