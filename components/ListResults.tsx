import Image from 'next/image'
import Link from 'next/link'
import { Channel } from 'types'
import styles from 'styles/ListResults.module.css'

type Props = {
  results: Channel[]
  setValue: (channelSelected: string) => void
}

const ListResults = ({ results, setValue }: Props) => {
  const hasResults = Boolean(results.length)
  console.log(results)
  return (
    <div className={`${styles['container-results']} ${hasResults && styles['dynamic-border']}`}>
      {hasResults && (
        <ul className={styles['list-results']}>
          {results.map(({ id, title, description, thumbnail }: Channel) => (
            <li key={id} onClick={() => setValue(title)}>
              <Image
                src={thumbnail}
                alt={title}
                width='25px'
                height='25px'
                className={styles['result-image']}
              />
              <Link href={`/channel/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListResults
