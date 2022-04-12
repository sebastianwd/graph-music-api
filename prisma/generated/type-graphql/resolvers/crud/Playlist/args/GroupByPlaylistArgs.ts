import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaylistOrderByWithAggregationInput } from "../../../inputs/PlaylistOrderByWithAggregationInput";
import { PlaylistScalarWhereWithAggregatesInput } from "../../../inputs/PlaylistScalarWhereWithAggregatesInput";
import { PlaylistWhereInput } from "../../../inputs/PlaylistWhereInput";
import { PlaylistScalarFieldEnum } from "../../../../enums/PlaylistScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPlaylistArgs {
  @TypeGraphQL.Field(_type => PlaylistWhereInput, {
    nullable: true
  })
  where?: PlaylistWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PlaylistOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "userId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => PlaylistScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PlaylistScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
