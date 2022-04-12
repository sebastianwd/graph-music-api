import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaylistCreateInput } from "../../../inputs/PlaylistCreateInput";
import { PlaylistUpdateInput } from "../../../inputs/PlaylistUpdateInput";
import { PlaylistWhereUniqueInput } from "../../../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPlaylistArgs {
  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistCreateInput, {
    nullable: false
  })
  create!: PlaylistCreateInput;

  @TypeGraphQL.Field(_type => PlaylistUpdateInput, {
    nullable: false
  })
  update!: PlaylistUpdateInput;
}
