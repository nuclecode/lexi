import React from 'react';
import styles from './Painting.module.scss';

const PaintingPage = () => {
  return (
    <div className={styles.paintingPage}>
      <section className={styles.hero}>
        <h1>Professional Painting Services in London</h1>
        <p>Transform your space with high-quality painting services by LEXI Construction. We ensure excellent craftsmanship and attention to detail for all projects.</p>
      </section>

      <section className={styles.workingProcess}>
        <h2>Our Painting Process</h2>
        <div className={styles.step}>
          <h3>1. Understanding Client Needs</h3>
          <p>We work closely with you to understand your vision, preferences, and project requirements.</p>
        </div>
        <div className={styles.step}>
          <h3>2. Surface Preparation</h3>
          <p>We ensure all surfaces are prepared by cleaning, repairing, and priming for a flawless finish.</p>
        </div>
        <div className={styles.step}>
          <h3>3. Painting Execution</h3>
          <p>Our team applies high-quality paints in multiple coats, ensuring long-lasting results.</p>
        </div>
        <div className={styles.step}>
          <h3>4. Final Inspection & Touch-Ups</h3>
          <p>We inspect the project with you and make any necessary touch-ups for complete satisfaction.</p>
        </div>
        <div className={styles.step}>
          <h3>5. Clean-Up and Handover</h3>
          <p>After the painting is done, we clean the site and hand over a beautiful, ready-to-use space.</p>
        </div>
      </section>
    </div>
  );
};

export default PaintingPage;
