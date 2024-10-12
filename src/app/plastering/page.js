import styles from './Plastering.module.scss';
import Head from 'next/head';

export default function Plastering() {
  return (
    <>
      <Head>
        <title>Plastering Services by LEXI Construction</title>
        <meta
          name="description"
          content="High-quality plastering services in London provided by LEXI Construction. Get smooth and durable finishes for your walls and ceilings."
        />
      </Head>
      
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Professional Plastering Services in London</h1>
          <p>At LEXI Construction, we provide top-notch plastering services to ensure smooth, durable finishes for your renovation projects.</p>
        </div>
      </section>

      <section className={styles.services}>
        <h2>Our Plastering Services</h2>
        <ul>
          <li>Wall and ceiling plastering</li>
          <li>Plasterboard installation</li>
          <li>Repairs and patchwork</li>
          <li>Skimming and rendering</li>
        </ul>
        <p>Our skilled team guarantees a flawless finish that enhances the appearance and durability of your property’s interiors.</p>
      </section>

      <section className={styles.cta}>
        <h3>Need Expert Plastering for Your Renovation?</h3>
        <p>Contact LEXI Construction today for reliable and professional plastering services in London.</p>
        <a href="/contact" className={styles.ctaButton}>Get in Touch</a>
      </section>
    </>
  );
}
