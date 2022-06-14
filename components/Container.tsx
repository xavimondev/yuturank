import styles from 'styles/Container.module.css'

type Props = {
  children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.main__title}>
        <span className={styles.yutu__title}>Yutu</span>
        <span>Rank</span>
      </h1>
      {children}
    </main>
  )
}

export default Container
