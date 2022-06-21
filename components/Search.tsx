import { useCallback, useRef, useState } from 'react'
import debounce from 'just-debounce-it'
import { getResultsByChannel } from 'services/api'
import { Channel } from 'types'
import { IconSearch } from './Icon'
import ListResults from './ListResults'
import styles from 'styles/Search.module.css'

const Search = () => {
  const channelInputRef = useRef<HTMLInputElement>(null)
  const [results, setResults] = useState<Channel[]>([])
  // FIXME: Consider to use useMemo, see this thread: https://github.com/facebook/react/issues/19240#issuecomment-652945246
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const autocompleteDebounce = useCallback(
    debounce(async () => {
      const q = channelInputRef.current?.value
      const results = await getResultsByChannel(q!)
      setResults(results)
    }, 150),
    []
  )

  const setValue = (channelSelected: string) => {
    channelInputRef.current!.value = channelSelected
  }

  const getValue = () => channelInputRef.current?.value
  // console.log(results)
  const handleSearch = () => {
    const q = getValue()
    if (!q) {
      // Clear results because the user has cleared the input
      setResults([])
      return
    }

    autocompleteDebounce()
  }

  return (
    <>
      <form className={styles.form}>
        <div
          className={`${styles['form__label']} ${
            Boolean(results.length) && styles['dynamic-border']
          }`}
        >
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
        <ListResults results={results} setValue={setValue} />
      </form>
    </>
  )
}

export default Search
