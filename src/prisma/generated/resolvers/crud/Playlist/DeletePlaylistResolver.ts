import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeletePlaylistArgs } from "./args/DeletePlaylistArgs";
import { Playlist } from "../../../models/Playlist";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Playlist)
export class DeletePlaylistResolver {
  @TypeGraphQL.Mutation(_returns => Playlist, {
    nullable: true
  })
  async deletePlaylist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeletePlaylistArgs): Promise<Playlist | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).playlist.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
