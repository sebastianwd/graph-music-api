import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaylistCreateInput } from "../../../inputs/PlaylistCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePlaylistArgs {
  @TypeGraphQL.Field(_type => PlaylistCreateInput, {
    nullable: false
  })
  data!: PlaylistCreateInput;
}
