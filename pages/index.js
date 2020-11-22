import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GLOSSBOSS Quicklinks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          GLOSSBOSS Links
        </h1>

        <p className={styles.description}>
        </p>

        <div className={styles.grid}>
          <a href="https://glossboss-shop.de" className={styles.card}>
            <h3>GLOSSBOSS Shop &rarr;</h3>
            <p>Unser Online Shop (Nanolex, Sonax, Menzerna und viele mehr)</p>
          </a>

          <a href="https://www.survio.com/survey/d/S3M9O2L7W1M8Q3B7B" className={styles.card}>
            <h3>Umfrage zum GLOSSBOSS Shop &rarr;</h3>
            <p>Nehme dir 2 Minuten Zeit um uns Feedback zum GLOSSBOSS Shop zu geben!</p>
          </a>

          
          <a href="https://www.youtube.com/watch?v=fUqAdbOtNjk" className={styles.card}>
          <h3>Aktuelles Video &rarr;</h3>
          <p>VW ID3 Detailing - Qualitätssicherung von VW übersieht heftige Schleifspuren | GLOSSBOSS</p>
          </a>

          <a href="https://live.glossboss.de" className={styles.card}>
            <h3>Livestream &rarr;</h3>
            <p>Unser Aktueller Livestream auf Youtube</p>
            </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://glossboss-shop.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="https://logo-gradient-png.ntwcklng.now.sh/Gradient-Cut-small.png" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
