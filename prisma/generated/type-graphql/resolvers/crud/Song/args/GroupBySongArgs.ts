import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongOrderByWithAggregationInput } from "../../../inputs/SongOrderByWithAggregationInput";
import { SongScalarWhereWithAggregatesInput } from "../../../inputs/SongScalarWhereWithAggregatesInput";
import { SongWhereInput } from "../../../inputs/SongWhereInput";
import { SongScalarFieldEnum } from "../../../../enums/SongScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySongArgs {
  @TypeGraphQL.Field(_type => SongWhereInput, {
    nullable: true
  })
  where?: SongWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SongOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SongOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "artist" | "album" | "year" | "duration" | "genre" | "playlistId">;

  @TypeGraphQL.Field(_type => SongScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SongScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
