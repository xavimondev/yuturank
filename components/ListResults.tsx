import Link from 'next/link'
import styles from 'styles/ListResults.module.css'

type Props = {
  results: []
}

const ListResults = ({ results }: Props) => {
  console.log(results)
  return (
    <div className={styles['container-results']}>
      {Boolean(results.length) && (
        <ul className={styles['list-results']}>
          {results.map((result: any, index: number) => (
            <li key={index}>
              <Link href='/'>midudev</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListResults
