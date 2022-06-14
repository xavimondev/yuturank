import { MAX_RESULTS_SEARCH, YOUTUBE_API_SEARCH_ENDOINT } from 'constants/'

export const getResultsByChannel = async (channelQuery: string) => {
  const API_ENDPOINT = `${YOUTUBE_API_SEARCH_ENDOINT}?part=snippet&maxResults=${MAX_RESULTS_SEARCH}&q=${channelQuery}&type=channel&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
  try {
    const request = await fetch(API_ENDPOINT)
    const data = await request.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    return []
  }
}
