import { config } from '~/config'

export const urls = {
  audioDB: (method: string) =>
    `https://www.theaudiodb.com/api/v1/json/${config.AUDIODB_API_KEY}/${method}.php?`,
  lastFM: (method: string) =>
    `http://ws.audioscrobbler.com/2.0/?method=${method}&format=json`,
  youtubeId: (query: string, limit: number) =>
    `https://www.googleapis.com/youtube/v3/search?part=Id&maxResults=${limit}&order=relevance&key=${config.YOUTUBE_API_KEY}&type=video&q=${query}`,
}
