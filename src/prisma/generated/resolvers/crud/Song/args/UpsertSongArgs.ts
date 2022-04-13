import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongCreateInput } from "../../../inputs/SongCreateInput";
import { SongUpdateInput } from "../../../inputs/SongUpdateInput";
import { SongWhereUniqueInput } from "../../../inputs/SongWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSongArgs {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongCreateInput, {
    nullable: false
  })
  create!: SongCreateInput;

  @TypeGraphQL.Field(_type => SongUpdateInput, {
    nullable: false
  })
  update!: SongUpdateInput;
}
