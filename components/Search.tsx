import styles from '../styles/Search.module.css'
import IconSearch from './Icon'

const Search = () => {
  return (
    <>
      <form className={styles.form}>
        <div className={styles.form__label}>
          <IconSearch className={styles.input__icon} />
          <input
            type='search'
            name='search'
            className={styles.input__field}
            placeholder='Search your favorite youtube channel'
          />
        </div>
      </form>
    </>
  )
}

export default Search
