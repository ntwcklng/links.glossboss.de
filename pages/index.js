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
          <a href="https://glossboss-shop.de/Nanolex-Ultra-Cut-Polish-Schleifpolitur-1000ml?ref=lgb" className={styles.card}>
            <h3>Gewinne das Lila Ticket im Wert von 1200€ &rarr;</h3>
            <p>1 Liter Ultra Cut Polish kaufen und automatisch an der Verlosung teilnehmen</p>
          </a>

          <a href="https://glossboss-shop.de/Coast-HP7R-Taschenlampe-Entfetter?ref=lgb" className={styles.card}>
            <h3>COAST LED Taschenlampe (Set) mit Entfetter &rarr;</h3>
            <p>Kaufe unsere neue Coast LED Taschenlampe + Entfetter im Spar-Bundle</p>
          </a>

          <a href="https://glossboss-shop.de/Workshop-Berlin-2310-und-2410?ref=lgb" className={styles.card}>
            <h3>Tagesworkshop in Berlin (23.10.2021 / 24.10.2021) &rarr;</h3>
            <p>Buche hier ein Ticket zum Workshop am 23.10.2021 oder 24.10.2021 in Berlin</p>
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
