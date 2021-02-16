import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>B2B</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">B2B App</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://shopoth.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/assets/images/Shopoth-Logo.svg" alt="shopoth Logo" className={styles.logo} width="120px" height="80px"/>
        </a>
      </footer>
    </div>
  )
}
