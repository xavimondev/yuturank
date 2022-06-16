import {
  MAX_RESULTS_SEARCH,
  YOUTUBE_API_CHANNEL_ENDOINT,
  YOUTUBE_API_SEARCH_ENDOINT
} from 'constants/'
import { Channel, ChannelDetails } from 'types'

export const getResultsByChannel = async (channelQuery: string): Promise<Channel[]> => {
  const API_ENDPOINT = `${YOUTUBE_API_SEARCH_ENDOINT}?part=snippet&maxResults=${MAX_RESULTS_SEARCH}&q=${channelQuery}&type=channel&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
  try {
    const request = await fetch(API_ENDPOINT)
    const data = await request.json()
    const channels = data.items.map((item: any) => {
      const { channelId, title, description, publishTime, thumbnails } = item.snippet
      const {
        default: { url }
      } = thumbnails
      return {
        id: channelId,
        title,
        description,
        publishTime,
        thumbnail: url
      }
    })

    return channels
  } catch (error) {
    console.log(error)
    return []
  }
}

export const getDetailsByChannel = async (channelId: string): Promise<ChannelDetails | null> => {
  const API_ENDPOINT = `${YOUTUBE_API_CHANNEL_ENDOINT}?part=id%2Csnippet%2Cstatistics&id=${channelId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
  try {
    const request = await fetch(API_ENDPOINT)
    const data = await request.json()
    const { id, snippet, statistics } = data.items[0]
    const { title, description, publishedAt: publishTime, thumbnails, country } = snippet
    const { default: thumbnail } = thumbnails
    const { url } = thumbnail
    const { subscriberCount, videoCount, viewCount } = statistics
    const channel: Channel = {
      id,
      title,
      description,
      publishTime,
      thumbnail: url
    }
    const channelDetails: ChannelDetails = {
      channel,
      country,
      subscriberCount,
      videoCount,
      viewCount
    }
    return channelDetails
  } catch (error) {
    console.log(error)
    return null
  }
}
