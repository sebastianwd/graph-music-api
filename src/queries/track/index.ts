import { Resolver, Query, Arg, Int } from 'type-graphql'
import getYoutubeIds from 'src/utils/get-youtube-ids'

@Resolver()
export class TrackResolver {
  @Query(() => [String])
  async trackYoutubeIds(
    @Arg('artistName') artistName: string,
    @Arg('trackTitle') trackTitle: string,
    @Arg('limit', () => Int, { defaultValue: 2 }) limit: number
  ): Promise<string[]> {
    return getYoutubeIds(`${artistName} ${trackTitle}`, limit)
  }
}
