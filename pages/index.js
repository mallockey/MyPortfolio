import Head from 'next/head'
import Main from '../components/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Joshua Melo - Portfolio</title>
        <link rel="icon" href="/static/favicon.ico" />
        <meta property="og:title" content="Joshua Melo - Portfolio" />
        <meta property="og:image" content="/images/pageImage.PNG" />
        <meta property="og:url" content="https://joshuamelo.vercel.app/" />
        <meta property="og:description" content="Joshua Melo's Perfolio site" />
      </Head>
      <Main />
    </>
  )
}
