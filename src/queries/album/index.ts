import { Resolver, Query, Arg, Int } from 'type-graphql'
import _ from 'lodash'
import { coalesce } from 'object-path'
import { Album } from '~/entities'
import { lastFM, audioDB } from '~/utils'
import { LastFMImage } from '~/types'

const getCoverImage = (images: LastFMImage) => {
  if (!images) {
    return undefined
  }

  const coverImages = _.groupBy(images, 'size')

  const imageSizes = ['extralarge', 'large', 'medium']

  const defaultValue = [{ '#text': '' }]

  const [coverImage] = coalesce(coverImages, imageSizes, defaultValue)

  return coverImage['#text']
}

@Resolver()
class AlbumResolver {
  @Query(() => Album, { nullable: true })
  async albumByTrack(
    @Arg('trackTitle') trackTitle: string,
    @Arg('artistName') artistName: string
  ): Promise<Partial<Album> | undefined> {
    const { data } = await lastFM.getTrackInfo({
      trackTitle,
      artistName,
    })

    const track = data?.track

    if (!track) {
      return undefined
    }

    const { album, artist } = track

    const coverImage = getCoverImage(album?.image)

    return {
      id: parseInt(`${artist.name} ${album?.title}`, 36),
      title: album?.title || '',
      artistName: artist.name,
      coverImage,
    }
  }

  @Query(() => Album, { nullable: true })
  async album(
    @Arg('albumTitle') albumTitle: string,
    @Arg('artistName') artistName: string
  ): Promise<Partial<Album> | undefined> {
    const {
      data: { album },
    } = await lastFM.getAlbumInfo({
      artistName,
      albumTitle,
    })

    if (!album) {
      return undefined
    }

    const { data } = await audioDB.getAlbumsByArtist({
      artistName,
      albumTitle,
    })

    const baseAlbum = data.album?.[0]

    const coverImage = baseAlbum?.strAlbumThumb || getCoverImage(album?.image)

    const description = baseAlbum?.strDescription || album?.wiki?.content

    const trackTitles = _.map(album.tracks.track, 'name')

    return {
      id: parseInt(`${album.artist} ${album.name}`, 36),
      title: album.name,
      artistName: album.artist,
      tracks: trackTitles,
      coverImage,
      description,
      genre: baseAlbum?.strGenre,
      year: baseAlbum?.intYearReleased,
    }
  }

  @Query(() => [Album], { nullable: true })
  async albumsByArtist(
    @Arg('artistName') artistName: string,
    @Arg('limit', () => Int, { nullable: true, defaultValue: 8 })
    limit: number,
    @Arg('page', () => Int, { nullable: true }) page?: number
  ): Promise<Album[]> {
    const { data } = await audioDB.getAlbumsByArtist({ artistName })

    const baseAlbums = data.album

    const {
      data: { topalbums },
    } = await lastFM.getTopAlbums({ artistName, limit, page })

    const fallbackAlbums = topalbums?.album

    if (!fallbackAlbums && !baseAlbums) {
      return []
    }

    const albums = await Promise.all(
      _.map(fallbackAlbums, async (fallbackAlbum) => {
        const albumArtistName = fallbackAlbum?.artist.name

        const {
          data: { album: albumInfo },
        } = await lastFM.getAlbumInfo({
          albumTitle: fallbackAlbum.name,
          artistName: albumArtistName,
        })

        const tracks = albumInfo?.tracks.track

        if (_.isEmpty(tracks)) {
          return undefined
        }

        const trackNames = tracks!.map((track) => track.name)

        const matchedAlbum = _.find(
          baseAlbums,
          (baseAlbum) =>
            // eslint-disable-next-line eqeqeq
            _.toLower(baseAlbum?.strAlbum) == _.toLower(fallbackAlbum?.name)
        )

        const coverImage =
          matchedAlbum?.strAlbumThumb || getCoverImage(albumInfo?.image)

        const description =
          matchedAlbum?.strDescription || albumInfo?.wiki?.content

        return {
          id: parseInt(`${albumArtistName} ${fallbackAlbum!.name}`, 36),
          artistName: albumArtistName,
          coverImage,
          description,
          tracks: trackNames,
          title: fallbackAlbum!.name,
          genre: matchedAlbum?.strGenre,
          year: matchedAlbum?.intYearReleased,
        } as Album
      })
    )

    const albumsByYear = _.sortBy(_.compact(albums), (item) =>
      item.year ? Number(item.year) : 0
    ).reverse()

    return albumsByYear
  }
}

export default AlbumResolver
