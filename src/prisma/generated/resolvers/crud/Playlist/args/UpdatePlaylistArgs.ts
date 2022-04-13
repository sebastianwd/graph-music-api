import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaylistUpdateInput } from "../../../inputs/PlaylistUpdateInput";
import { PlaylistWhereUniqueInput } from "../../../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePlaylistArgs {
  @TypeGraphQL.Field(_type => PlaylistUpdateInput, {
    nullable: false
  })
  data!: PlaylistUpdateInput;

  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistWhereUniqueInput;
}
