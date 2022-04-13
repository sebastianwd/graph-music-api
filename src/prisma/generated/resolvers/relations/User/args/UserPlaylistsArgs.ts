import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaylistOrderByWithRelationInput } from "../../../inputs/PlaylistOrderByWithRelationInput";
import { PlaylistWhereInput } from "../../../inputs/PlaylistWhereInput";
import { PlaylistWhereUniqueInput } from "../../../inputs/PlaylistWhereUniqueInput";
import { PlaylistScalarFieldEnum } from "../../../../enums/PlaylistScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserPlaylistsArgs {
  @TypeGraphQL.Field(_type => PlaylistWhereInput, {
    nullable: true
  })
  where?: PlaylistWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PlaylistOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: true
  })
  cursor?: PlaylistWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PlaylistScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "userId" | "createdAt" | "updatedAt"> | undefined;
}
