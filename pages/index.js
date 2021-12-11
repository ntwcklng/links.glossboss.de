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
        <div className={styles.grid}>
          <a href="https://glossboss-shop.de/Labocosmetica?ref=lgb" className={styles.card}>
            <h3>Labocosmetica Deutschland &rarr;</h3>
            <p>Wir sind <strong>offizieller</strong> Labocosmetica Händler - schau mal rein :)</p>
          </a>

          <a href="https://glossboss-shop.de/GLOSSBOSS-Crewneck-Pullover?ref=lgb" className={styles.card}>
            <h3>GLOSSBOSS Crewneck Pullover</h3>
            <p>Die kalte Jahreszeit ist da - gönne dir den GLOSSBOSS Crewneck Pullover</p>
          </a>

          <a href="https://glossboss-shop.de?ref=lgb" className={styles.card}>
            <h3>GLOSSBOSS Shop &rarr;</h3>
            <p>Unser Online Shop (Nanolex, Sonax, Menzerna und viele mehr)</p>
          </a>

          <a href="https://detailing.glossboss.de/nanolex" className={styles.card}>
            <h3>Nanolex Zertifizierung durch GLOSSBOSS &rarr;</h3>
            <p>Du möchtest ein Nanolex Approved Detailer werden?</p>
          </a>

          <a href="https://ad.glossboss.de/#shoppen" className={styles.card}>
            <h3>Termin buchen GLOSSBOSS Shop &rarr;</h3>
            <p>Buche hier einen Termin um vor Ort in 46284 Dorsten zu shoppen!</p>
          </a>
          
          <a href="https://www.youtube.com/watch?v=4aJY30Ybz-4" className={styles.card}>
          <h3>Aktuelles Video &rarr;</h3>
          <p>991.2 Turbo S Exterior & Interior Detailing | Labocosmetica #SAM + #HPC</p>
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
          <img src="https://logo-gradient-png.ntwcklng.now.sh/Gradient-Cut-small.png" alt="GLOSSBOSS Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
