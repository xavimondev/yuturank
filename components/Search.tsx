import { useCallback, useRef, useState } from 'react'
import debounce from 'just-debounce-it'
import { getResultsByChannel } from 'services/api'
import IconSearch from './Icon'
import styles from 'styles/Search.module.css'
import ListResults from './ListResults'

const Search = () => {
  const channelInputRef = useRef<HTMLInputElement>(null)
  const [results, setResults] = useState<any[]>([])
  // FIXME: Consider to use useMemo, see this thread: https://github.com/facebook/react/issues/19240#issuecomment-652945246
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const autocompleteDebounce = useCallback(
    debounce((channelQuery: string) => getResultsByChannel(channelQuery), 250),
    []
  )

  const handleSearch = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const q = e.currentTarget.value
    autocompleteDebounce(q)
  }

  return (
    <>
      <form className={styles.form}>
        <div className={styles.form__label}>
          <IconSearch className={styles.input__icon} />
          <input
            type='search'
            name='search'
            className={styles.input__field}
            ref={channelInputRef}
            onChange={handleSearch}
            placeholder='Search your favorite youtube channel'
          />
        </div>
        <ListResults results={[]} />
      </form>
    </>
  )
}

export default Search
