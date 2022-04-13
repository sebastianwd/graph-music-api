import * as TypeGraphQL from "type-graphql";
import { Playlist } from "../../../models/Playlist";
import { Song } from "../../../models/Song";
import { User } from "../../../models/User";
import { PlaylistSongsArgs } from "./args/PlaylistSongsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Playlist)
export class PlaylistRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async User(@TypeGraphQL.Root() playlist: Playlist, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).playlist.findUnique({
      where: {
        id: playlist.id,
      },
    }).User({});
  }

  @TypeGraphQL.FieldResolver(_type => [Song], {
    nullable: false
  })
  async songs(@TypeGraphQL.Root() playlist: Playlist, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PlaylistSongsArgs): Promise<Song[]> {
    return getPrismaFromContext(ctx).playlist.findUnique({
      where: {
        id: playlist.id,
      },
    }).songs(args);
  }
}
