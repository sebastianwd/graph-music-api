import ytSearch from 'yt-search'
import Axios from 'axios'
import _ from 'lodash'
import { YoutubeIdResponse } from '~/types'
import { urls } from './constants'

const getYoutubeIds = async (
  query: string,
  limit: number
): Promise<string[]> => {
  try {
    const { data } = await Axios.get<YoutubeIdResponse>(
      urls.youtubeId(query, limit)
    )

    return _.map(data.items, 'id.videoId')
  } catch (error) {
    return new Promise((resolve, reject) => {
      ytSearch({ query }, (err, results) => {
        if (err) reject(err)

        const { videos } = results

        if (videos.length === 0) {
          resolve([])
        }

        videos.length = limit

        resolve(_.map(videos, 'videoId'))
      })
    })
  }
}

export default getYoutubeIds
