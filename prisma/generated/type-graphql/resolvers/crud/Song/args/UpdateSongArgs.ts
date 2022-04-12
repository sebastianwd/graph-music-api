import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongUpdateInput } from "../../../inputs/SongUpdateInput";
import { SongWhereUniqueInput } from "../../../inputs/SongWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSongArgs {
  @TypeGraphQL.Field(_type => SongUpdateInput, {
    nullable: false
  })
  data!: SongUpdateInput;

  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;
}
