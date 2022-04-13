import { Resolver, Query, Arg, Int, Args } from 'type-graphql'
import _ from 'lodash'
import { Album } from '~/entities'
import { LastFMImage } from '~/types/types'
import { lastFM } from '~/utils'
import getYoutubeIds from '~/utils/get-youtube-ids'
import { GetYoutubeIdsArgs } from './song.input'

@Resolver()
export class SongResolver {
  @Query(() => [String])
  async getYoutubeIds(
    @Args() { artistName, trackTitle, limit }: GetYoutubeIdsArgs
  ): Promise<string[]> {
    return getYoutubeIds(`${artistName} ${trackTitle}`, limit)
  }
}
