"use client";

import styles from './RenovationProject.module.scss';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function RenovationProject() {
  const beforeImageRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  
  const handleScroll = () => {
    setScrollY(window.scrollY);
    const beforeImageHeight = beforeImageRef.current.offsetHeight;

    if (scrollY >= beforeImageHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const beforeImageHeight = beforeImageRef.current.offsetHeight; // Get height of the "before" image

      // Sticky logic for "before" image and "done" text
      if (window.scrollY >= beforeImageHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return (
    <div className={styles.renovationProject}>
      <section className={styles.clientRequest}>
        <h2>Что хотел заказчик</h2>
        <p>Это то, что клиент изначально запросил: полная реконструкция кухни с новыми шкафами, столешницами и полами.</p>
      </section>

      <div className={styles.imageContainer}>

        <Image

          ref={beforeImageRef} 
          src="/images/bathroom_before.PNG" 
          alt="Before Renovation" 
          className={`${styles.beforeImage} ${isSticky ? styles.sticky : ''}`}

          width={500} 
          height={300}

        />

        {/* Текст "Что мы сделали" */}
        <p className={`${styles.madeText} ${isSticky ? styles.madeTextSticky : ''}`}>
          Это то, что мы сделали для достижения ремонта: мы установили новые шкафы на заказ, гранитные столешницы и полы высокого класса.
        </p>
      </div>

      <Image
        src="/images/bathroom_after.PNG" 
        alt="After Renovation" 
        className={styles.afterImage}
        width={500}
        height={300}
    />
    </div>
  );
}