import { Resolver, Query, Arg, Int } from 'type-graphql'
import { map } from 'lodash'
import { Artist } from '~/entities'
import { lastFM, audioDB } from '~/utils'
import { LastFMTopTrack, AudioDBArtist } from '~/types/types'
import { Song } from '~/generated'

const normalizeTrack = (track: LastFMTopTrack) => ({
  playcount: track.playcount,
  title: track.name,
  artistName: track.artist.name,
})

const normalizeArtist = (artist: AudioDBArtist) => ({
  name: artist.strArtist,
  formedYear: artist.intFormedYear,
  image: artist.strArtistThumb,
  bannerImage: artist.strArtistFanart,
  logo: artist.strArtistLogo,
  style: artist.strStyle,
  genre: artist.strGenre,
  website: artist.strWebsite,
  facebook: artist.strFacebook,
  twitter: artist.strTwitter,
  biography: artist.strBiographyEN,
  memberQuantity: Number(artist.intMembers),
  location: artist.strCountry,
  disbanded: artist.strDisbanded ? Boolean(artist.strDisbanded) : undefined,
  disbandedYear: artist.intDiedYear,
})

@Resolver()
class ArtistResolver {
  @Query(() => [Song])
  async topTracksByArtist(
    @Arg('artistName') artistName: string,
    @Arg('limit', () => Int, { defaultValue: 20 }) limit: number,
    @Arg('page', () => Int, { nullable: true }) page?: number
  ): Promise<Partial<Song>[]> {
    const { data } = await lastFM.getArtistTracks({
      artistName,
      limit,
      page,
    })

    const tracks = data.toptracks?.track

    return map(tracks, normalizeTrack)
  }

  @Query(() => [Artist])
  async similarArtists(
    @Arg('artistName') artistName: string,
    @Arg('limit', () => Int, { defaultValue: 8 }) limit: number,
    @Arg('withFullInfo', { defaultValue: false }) withFullInfo?: boolean
  ): Promise<Partial<Artist>[]> {
    const {
      data: { similarartists },
    } = await lastFM.getSimilarArtists({ artistName, limit })

    const baseSimilarArtists = similarartists?.artist

    if (!baseSimilarArtists) {
      return []
    }

    const similarArtistsNames = map(baseSimilarArtists, (artist) => ({
      id: parseInt(artist.name, 36),
      name: artist.name,
    }))

    if (!withFullInfo) {
      return similarArtistsNames
    }

    const similarArtists = await Promise.all(
      similarArtistsNames.map(async (baseArtist) => {
        const { data } = await audioDB.getArtistInfo({
          artistName: baseArtist.name,
        })

        const artist = data.artists?.[0]

        const normalized = artist ? normalizeArtist(artist) : baseArtist

        return normalized
      })
    )

    return similarArtists
  }

  @Query(() => Artist, { nullable: true })
  async artist(
    @Arg('artistName') artistName: string
  ): Promise<Partial<Artist> | undefined> {
    const args = {
      artistName,
    }

    const { data } = await audioDB.getArtistInfo(args)

    const baseArtist = data.artists?.[0]

    if (!baseArtist) {
      const response = await lastFM.getArtistInfo(args)

      const { artist } = response.data

      if (!artist) {
        return undefined
      }

      return {
        name: artist.name,
        biography: artist.bio?.content,
      }
    }

    return normalizeArtist(baseArtist)
  }

  @Query(() => [String])
  async searchArtists(
    @Arg('artistName') artistName: string,
    @Arg('limit', () => Int, { defaultValue: 10 }) limit: number
  ): Promise<string[]> {
    const { data } = await lastFM.searchArtist({ artistName, limit })

    const artists = data.results.artistmatches.artist

    return map(artists, 'name')
  }
}

export default ArtistResolver
