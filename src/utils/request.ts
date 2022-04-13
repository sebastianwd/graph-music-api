import Axios from 'axios'
import { oneLineTrim } from 'common-tags'
import {
  LastFMMethods,
  AudioDBMethods,
  AudioDBParams,
  LastFMParams,
  LastFMArtist,
  LastFMSimilarArtists,
  AudioDBArtistResponse,
  LastFMTopTracksResponse,
  LastFMArtistSearch,
  LastFMTrackResponse,
  LastFMAlbumResponse,
  AudioDBAlbumsResponse,
  LastFMTopAlbumsResponse,
} from '~/types/types'
import createQueryParam from './create-query-param'
import { urls } from './constants'

const audioDB = async <T>(method: AudioDBMethods, args: AudioDBParams) => {
  const { trackTitle, artistName, albumTitle } = args

  const url = oneLineTrim`${urls.audioDB(method)}
  ${createQueryParam({ s: trackTitle || artistName })}
  ${createQueryParam({ a: albumTitle })}`

  return Axios.get<T>(url)
}

const lastFM = async <T>(method: LastFMMethods, args: LastFMParams) => {
  const { limit, trackTitle, artistName, albumTitle, page } = args

  const url = oneLineTrim`${urls.lastFM(method)}
  &api_key=${process.env.LASTFM_API_KEY}
  ${createQueryParam({ limit })}
  ${createQueryParam({ page })}
  ${createQueryParam({ artist: artistName })}
  ${createQueryParam({ track: trackTitle })}
  ${createQueryParam({ album: albumTitle })}`

  return Axios.get<T>(url)
}

lastFM.getTrackInfo = (args: LastFMParams) =>
  lastFM<LastFMTrackResponse>('track.getInfo', args)

lastFM.getArtistTracks = (args: LastFMParams) =>
  lastFM<LastFMTopTracksResponse>('artist.getTopTracks', args)

lastFM.getArtistInfo = (args: LastFMParams) =>
  lastFM<LastFMArtist>('artist.getinfo', args)

lastFM.getAlbumInfo = (args: LastFMParams) =>
  lastFM<LastFMAlbumResponse>('album.getInfo', args)

lastFM.getSimilarArtists = (args: LastFMParams) =>
  lastFM<LastFMSimilarArtists>('artist.getSimilar', args)

lastFM.getTopAlbums = (args: LastFMParams) =>
  lastFM<LastFMTopAlbumsResponse>('artist.getTopAlbums', args)

lastFM.searchArtist = (args: LastFMParams) =>
  lastFM<LastFMArtistSearch>('artist.search', args)

audioDB.getAlbumsByArtist = (args: AudioDBParams) =>
  audioDB<AudioDBAlbumsResponse>('searchalbum', args)

audioDB.getArtistInfo = (args: AudioDBParams) =>
  audioDB<AudioDBArtistResponse>('search', args)

export { lastFM, audioDB }
