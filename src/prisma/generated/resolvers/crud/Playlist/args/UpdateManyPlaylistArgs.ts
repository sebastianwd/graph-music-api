import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaylistUpdateManyMutationInput } from "../../../inputs/PlaylistUpdateManyMutationInput";
import { PlaylistWhereInput } from "../../../inputs/PlaylistWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPlaylistArgs {
  @TypeGraphQL.Field(_type => PlaylistUpdateManyMutationInput, {
    nullable: false
  })
  data!: PlaylistUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PlaylistWhereInput, {
    nullable: true
  })
  where?: PlaylistWhereInput | undefined;
}
