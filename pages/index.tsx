import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../components/Container'
import Search from '../components/Search'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>YutuRank</title>
      </Head>
      <Container>
        <Search />
      </Container>
    </>
  )
}

export default Home
