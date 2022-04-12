import * as TypeGraphQL from "type-graphql";
import { Playlist } from "../../../models/Playlist";
import { Song } from "../../../models/Song";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Song)
export class SongRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Playlist, {
    nullable: true
  })
  async Playlist(@TypeGraphQL.Root() song: Song, @TypeGraphQL.Ctx() ctx: any): Promise<Playlist | null> {
    return getPrismaFromContext(ctx).song.findUnique({
      where: {
        id: song.id,
      },
    }).Playlist({});
  }
}
