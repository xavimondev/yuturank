import { GetServerSideProps } from 'next'
import { getDetailsByChannel } from 'services/api'
import { ChannelDetails } from 'types'

type Props = {
  channel: ChannelDetails
}

const ChannelDetail = ({ channel }: Props) => {
  console.log(channel)

  return <div>ChannelDetail</div>
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params) {
    const { id } = params
    const channel = await getDetailsByChannel(id as string)
    // console.log(channel)
    return {
      props: {
        channel
      }
    }
  }
  return {
    props: {}
  }
}

export default ChannelDetail
