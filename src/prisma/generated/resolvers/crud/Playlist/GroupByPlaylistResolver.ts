import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByPlaylistArgs } from "./args/GroupByPlaylistArgs";
import { Playlist } from "../../../models/Playlist";
import { PlaylistGroupBy } from "../../outputs/PlaylistGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Playlist)
export class GroupByPlaylistResolver {
  @TypeGraphQL.Query(_returns => [PlaylistGroupBy], {
    nullable: false
  })
  async groupByPlaylist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPlaylistArgs): Promise<PlaylistGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).playlist.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
