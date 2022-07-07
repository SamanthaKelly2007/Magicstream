import Head from 'next/head'
import Player from '../components/Player'

export default function Home() {

  return (
    <>
      <Head>
        <title>Magic Stream</title>
      </Head>
      <div>
        <Player/>
      </div>
    </>
  )
}