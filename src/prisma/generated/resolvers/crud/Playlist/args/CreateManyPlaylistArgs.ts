import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaylistCreateManyInput } from "../../../inputs/PlaylistCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPlaylistArgs {
  @TypeGraphQL.Field(_type => [PlaylistCreateManyInput], {
    nullable: false
  })
  data!: PlaylistCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
