import { MAX_RESULTS_SEARCH, YOUTUBE_API_SEARCH_ENDOINT } from 'constants/'
import { Channel } from 'types'

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
