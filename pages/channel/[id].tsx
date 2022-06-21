import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { formatDate, formatNumber } from 'utils/formatters'
import { getDetailsByChannel } from 'services/api'
import { ChannelDetails } from 'types'
import { CalendarIcon, UsersIcon, VideoIcon, ViewIcon } from 'components/Icon'
import styles from 'styles/Channel.module.css'

type Props = {
  channelDetails: ChannelDetails
}

const ChannelDetail = ({ channelDetails }: Props) => {
  console.log(channelDetails)
  const { channel, country, subscriberCount, viewCount, videoCount } = channelDetails
  const { title, description, thumbnail, publishTime } = channel
  // Resources: https://dribbble.com/shots/16894605/attachments/11959653?mode=media
  return (
    <>
      <main className={styles['container']}>
        <div className={styles['channel']}>
          <header className={styles['channel__header']}>
            <Image src={thumbnail} alt={title} width={140} height={140} />
            <div className={styles['channel__information']}>
              <h1 className='channel__title'>
                {title}({country})
              </h1>
              <h2 className={styles['channel__description']}>{description}</h2>
              <div className={styles['channel__stats']}>
                <div className={styles['stat__item']}>
                  <VideoIcon className={styles['item__icon']} />
                  <span className={styles['item__quantity']}>{formatNumber(videoCount)}</span>
                  <span className={styles['item__indicator']}>videos</span>
                </div>
                <div className={styles['stat__item']}>
                  <UsersIcon className={styles['item__icon']} />
                  <span className={styles['item__quantity']}>{formatNumber(subscriberCount)}</span>
                  <span className={styles['item__indicator']}>subscribers</span>
                </div>
                <div className={styles['stat__item']}>
                  <ViewIcon className={styles['item__icon']} />
                  <span className={styles['item__quantity']}>{formatNumber(viewCount)}</span>
                  <span className={styles['item__indicator']}>views</span>
                </div>
                <div className={styles['stat__item']}>
                  <CalendarIcon className={styles['item__icon']} />
                  <span className={styles['item__indicator']}>
                    Joined {formatDate(publishTime)}
                  </span>
                </div>
              </div>
            </div>
          </header>
          <section className={styles['channel__videos']}>
            <h1>Mostly Played</h1>
          </section>
        </div>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params) {
    const { id } = params
    const channelDetails = await getDetailsByChannel(id as string)
    // console.log(channel)
    return {
      props: {
        channelDetails
      }
    }
  }
  return {
    props: {}
  }
}

export default ChannelDetail
