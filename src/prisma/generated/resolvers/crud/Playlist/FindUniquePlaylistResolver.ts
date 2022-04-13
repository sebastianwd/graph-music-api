import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniquePlaylistArgs } from "./args/FindUniquePlaylistArgs";
import { Playlist } from "../../../models/Playlist";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Playlist)
export class FindUniquePlaylistResolver {
  @TypeGraphQL.Query(_returns => Playlist, {
    nullable: true
  })
  async playlist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePlaylistArgs): Promise<Playlist | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).playlist.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
