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
          GLOSSBOSS Quicklinks
        </h1>

        <p className={styles.description}>
        </p>

        <div className={styles.grid}>
          <a href="https://glossboss-shop.de" className={styles.card}>
            <h3>GLOSSBOSS Shop &rarr;</h3>
            <p>Unser Online Shop (Nanolex, Sonax, Menzerna und viele mehr)</p>
          </a>

          <a href="https://ad.glossboss.de/#shoppen" className={styles.card}>
            <h3>Termin buchen GLOSSBOSS Shop &rarr;</h3>
            <p>Buche hier einen Termin um vor Ort in 46284 Dorsten zu shoppen!</p>
          </a>
          
          <a href="https://www.youtube.com/watch?v=fUqAdbOtNjk" className={styles.card}>
          <h3>Aktuelles Video &rarr;</h3>
          <p>Hier ist unser können gefragt 🚀 Tiefe Kratzer am Porsche 991.2 entfernen 🔥 SONAX CC EVO GLOSSBOSS</p>
          </a>

          <a href="https://glossboss.de/impressum" className={styles.card}>
            <h3>Impressum</h3>
            <p></p>
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
          <img src="https://logo-gradient-png.ntwcklng.now.sh/Gradient-Cut-small.png" alt="GLOSSBOSS Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
