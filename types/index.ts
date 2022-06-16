export interface Channel {
  id: string
  title: string
  description: string
  publishTime: string
  thumbnail: string
}

export interface ChannelDetails {
  channel: Channel
  country: string
  subscriberCount: number
  videoCount: number
  viewCount: number
}
