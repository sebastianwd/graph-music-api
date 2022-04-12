import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaylistWhereInput } from "../../../inputs/PlaylistWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPlaylistArgs {
  @TypeGraphQL.Field(_type => PlaylistWhereInput, {
    nullable: true
  })
  where?: PlaylistWhereInput | undefined;
}
