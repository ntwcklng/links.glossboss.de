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
          <a href="https://glossboss-shop.de/Sparsets__Aktueller-Deal?ref=lgb" className={styles.card}>
            <h3>Aktuelles Angebot (21.06.2021) &rarr;</h3>
            <p>Kaufe 4 bzw. 6 Polierpads und bekomme 250ml Politur <strong>gratis</strong> dazu</p>
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
          
          <a href="https://www.youtube.com/watch?v=qwFv4gbCj1s" className={styles.card}>
          <h3>Aktuelles Video &rarr;</h3>
          <p>Tesla Model 3 | Lack, Felgen und Glas langfristig versiegelt | GLOSSBOSS</p>
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
