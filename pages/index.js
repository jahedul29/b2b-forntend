import Head from 'next/head'
import Image from 'next/image'
import PrivateRoute from '../components/PrivateRoute'
import styles from '../styles/Home.module.scss'

 const index = ()=> {
  return (
    <div className={styles.container}>
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

export default PrivateRoute(index);
