import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js and Sanity.io Blog Example</title>
        <meta name="description" content="General Blog created by using Next.js combined with Sanity.io" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a> with <a href="https://www.sanity.io">Sanity.io</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.lucasanti.net"
          target="_blank"
          
        >
          &copy;Luca Santi
        </a>
      </footer>
    </div>
  )
}
