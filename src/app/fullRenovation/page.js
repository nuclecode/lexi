// v1

"use client";

import React, { useEffect } from 'react';
import styles from './FullRenovation.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FullRenovationPage = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

  return (
    <div className={styles.renovationContainer}>
      <section className={styles.introSection}>
        <h1>Full Renovation Services in London</h1>
        <p>LEXI Construction Services offers complete renovation solutions, transforming your home or commercial space into a stunning, functional environment.</p>
      </section>

      <section className={styles.stepsSection}>
        <div className={styles.step} data-aos="fade-up">
          <h2>1. Initial Consultation</h2>
          <p>We begin with a consultation to understand your vision and requirements for the renovation project.</p>
        </div>

        <div className={styles.step} data-aos="fade-up" data-aos-delay="200">
          <h2>2. Planning & Design</h2>
          <p>Our team works with you to create a detailed renovation plan, ensuring all design aspects meet your needs.</p>
        </div>

        <div className={styles.step} data-aos="fade-up" data-aos-delay="400">
          <h2>3. Demolition & Prep Work</h2>
          <p>We safely remove old structures and prepare the site for the new build, ensuring minimal disruption.</p>
        </div>

        <div className={styles.step} data-aos="fade-up" data-aos-delay="600">
          <h2>4. Construction</h2>
          <p>Our skilled builders work on bringing the new design to life, ensuring all construction is up to code.</p>
        </div>

        <div className={styles.step} data-aos="fade-up" data-aos-delay="800">
          <h2>5. Final Touches & Inspection</h2>
          <p>We add the finishing touches and conduct a thorough inspection to ensure everything meets our high standards.</p>
        </div>
      </section>
    </div>
  );
};

export default FullRenovationPage;
