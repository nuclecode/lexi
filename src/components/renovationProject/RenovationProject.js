"use client";

import styles from './RenovationProject.module.scss';
import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import Image from 'next/image';

export default function RenovationProject() {
    const beforeImageRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);

    // Memoizing the menuItems array to avoid redefinition on every render
    const menuItems = useMemo(() => [
        /* your menu items here */
    ], []);

    // Memoizing the handleScroll function to prevent recreation on every render
    const handleScroll = useCallback(() => {
        const beforeImageHeight = beforeImageRef.current.offsetHeight;

        if (window.scrollY >= beforeImageHeight) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    }, []); // Empty dependency array as it doesn't rely on external variables

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]); // Only runs when handleScroll changes, which it doesn't due to useCallback

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
