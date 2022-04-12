import { Request } from 'express'
import { Stream } from 'stream'
import { Session, SessionData } from 'express-session'
import { PrismaClient } from '@prisma/client'

type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U

export interface Context {
  req: Request & {
    session: Session & Partial<SessionData> & { userId?: number }
    sessionID?: string
  }
  prisma: PrismaClient
}

export interface Upload {
  filename: string
  mimeType: string
  encoding: string
  createReadStream: () => Stream
}

export interface LastFMParams {
  limit?: number
  page?: number
  trackTitle?: string
  artistName?: string
  albumTitle?: string
}

export interface AudioDBParams {
  trackTitle?: string
  artistName?: string
  albumTitle?: string
}

export type LastFMMethods =
  | 'track.getInfo'
  | 'artist.getTopTracks'
  | 'album.getInfo'
  | 'artist.getinfo'
  | 'artist.getSimilar'
  | 'artist.getTopAlbums'
  | 'artist.search'

export type AudioDBMethods = 'searchalbum' | 'search'

export interface LastFMSimilarArtists {
  similarartists?: {
    artist: {
      name: string
      url: string
    }[]
  }
}

export type AudioDBArtist = {
  idArtist: string
  strArtist: string
  intFormedYear: string
  strDisbanded?: string
  intDiedYear?: string
  strStyle?: string
  strGenre?: string
  strWebsite?: string
  strFacebook?: string
  strTwitter?: string
  strBiographyEN?: string
  intMembers: string
  strCountry: string
  strArtistThumb: string
  strArtistLogo?: string
  strArtistFanart?: string
  strArtistBanner?: string
  strMusicBrainzID: string
}

export type AudioDBArtistResponse = {
  artists: AudioDBArtist[] | null
}

export type LastFMArtist = {
  artist?: {
    name: string
    url: string
    stats: {
      listeners: string
      playcount: string
    }
    similar: {
      artist: { name: string; url: string }[]
    }
    bio: {
      summary: string
      content: string
    }
  }
}

export interface LastFMTopTrack {
  name: string
  playcount: string
  listeners: string
  url: string
  artist: {
    name: string
    url: string
  }
}

export interface LastFMTopTracksResponse {
  toptracks?: {
    track: LastFMTopTrack[]
  }
}

export interface LastFMArtistSearch {
  results: {
    'opensearch:Query': {
      searchTerms: string
      startPage: string
    }
    artistmatches: {
      artist:
        | {
            name: string
            listeners: string
            mbid: string
            url: string
          }[]
        | []
    }
  }
}

export type LastFMImage = { '#text': string; size: string }[] | undefined

export interface LastFMTrack {
  name: string
  url: string
  duration: string
  listeners: string
  playcount: string
  artist: {
    name: string
    url: string
  }
  album?: {
    artist: string
    title: string
    url: string
    image: LastFMImage
  }
  toptags: {
    tag:
      | {
          name: string
          url: string
        }[]
      | []
  }
}

export interface LastFMTrackResponse {
  track?: LastFMTrack
}

export type LastFMAlbum = {
  name: string
  artist: string
  mbid: string
  url: string
  image: LastFMImage
  listeners: string
  playcount: string
  tracks: {
    track: Pick<LastFMTrack, 'name' | 'url' | 'duration' | 'artist'>[]
  }
  tags: {
    tag: {
      name: string
      url: string
    }[]
  }
  wiki?: {
    summary: string
    /**
     * Complete album's description
     */
    content: string
  }
}

export type LastFMAlbumResponse = {
  album?: LastFMAlbum
}

export type LastFMTopAlbums = {
  album: Overwrite<
    LastFMAlbum,
    {
      artist: {
        name: string
        url: string
      }
    }
  >[]
}

export type LastFMTopAlbumsResponse = {
  topalbums?: LastFMTopAlbums
}

export type AudioDBAlbum = {
  idAlbum: string
  idArtist: string
  strAlbum: string
  strArtist: string
  intYearReleased: string
  strStyle: string
  strGenre: string
  strLabel?: string
  strReleaseFormat: string
  intSales: string
  strAlbumThumb: string
  strAlbumCDart: string
  strDescription: null
  strReview: string
  strMood: string
  strTheme: string
  strWikipediaID: string
  strAmazonID: string
}

export type AudioDBAlbumsResponse = {
  album?: AudioDBAlbum[]
}

export interface YoutubeIdResponse {
  kind: string
  etag: string
  nextPageToken: string
  regionCode: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items?: {
    kind: string
    etag: string
    id: {
      kind: string
      videoId: string
    }
  }[]
}
