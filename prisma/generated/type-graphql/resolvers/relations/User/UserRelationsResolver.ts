import * as TypeGraphQL from "type-graphql";
import { Playlist } from "../../../models/Playlist";
import { User } from "../../../models/User";
import { UserPlaylistsArgs } from "./args/UserPlaylistsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Playlist], {
    nullable: false
  })
  async playlists(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPlaylistsArgs): Promise<Playlist[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).playlists(args);
  }
}
