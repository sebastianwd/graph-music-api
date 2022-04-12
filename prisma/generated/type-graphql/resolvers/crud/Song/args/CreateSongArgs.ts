import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongCreateInput } from "../../../inputs/SongCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSongArgs {
  @TypeGraphQL.Field(_type => SongCreateInput, {
    nullable: false
  })
  data!: SongCreateInput;
}
