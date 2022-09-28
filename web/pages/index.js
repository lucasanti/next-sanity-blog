import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'
import groq from 'groq'
import client from '../client'

const Home = ({posts}) => {
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

        <div className={styles.grid}>
        {posts.length > 0 && posts.map(
          ({ _id, title = '', slug = '', publishedAt = '' }) =>
            slug && (
              <li key={_id} className={styles.card}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  <a><h3>{title}</h3></a>
                </Link>{' '}
                ({new Date(publishedAt).toDateString()})
              </li>
            )
        )}
        </div>


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


export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post"] | order(publishedAt desc)
  `)
  return {
    props: {
      posts
    }
  }
}

export default Home;