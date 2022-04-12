import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongOrderByWithRelationInput } from "../../../inputs/SongOrderByWithRelationInput";
import { SongWhereInput } from "../../../inputs/SongWhereInput";
import { SongWhereUniqueInput } from "../../../inputs/SongWhereUniqueInput";
import { SongScalarFieldEnum } from "../../../../enums/SongScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PlaylistSongsArgs {
  @TypeGraphQL.Field(_type => SongWhereInput, {
    nullable: true
  })
  where?: SongWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SongOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SongOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: true
  })
  cursor?: SongWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SongScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title" | "artist" | "album" | "year" | "duration" | "genre" | "playlistId"> | undefined;
}
