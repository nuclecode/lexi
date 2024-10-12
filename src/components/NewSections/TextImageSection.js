"use client";

import { useEffect, useRef } from "react";
import styles from "./landing.module.scss";
import Image from 'next/image';

const TextImageSection = () => {
    const scrollRef = useRef(null);
    const imageRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                const rect = scrollRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (rect.top < windowHeight && rect.bottom >= 0) {
                    imageRefs.current.forEach((img, index) => {
                        if (img) {
                            img.style.transform = `translateY(${Math.max(-50 + (index * 20), 0)}px)`;
                            img.style.opacity = '1';
                        }
                    });
                } else {
                    imageRefs.current.forEach((img) => {
                        if (img) {
                            img.style.transform = 'translateY(50px)';
                            img.style.opacity = '0';
                        }
                    });
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); // Only run this effect once, on mount

    return (
        <section className={styles.textImageSection}>
            <div className={styles.text}>
                <h1>Your dream home Title Here</h1>
                <p>is just a renovation away. We provide home, office, and apartment renovation services including electrical work, painting, and plastering. Our services are ideal for
                    landlords, investors, and property owners looking to refresh or renovate their spaces.</p>
            </div>
            <div className={styles.imageContainer} ref={scrollRef}>
                <div
                    className={styles.imagePlaceholder}
                    ref={(el) => (imageRefs.current[0] = el)}
                >
                    <Image
                        src="/london-houses-2.jpg"
                        alt="Description of image 1"
                        className={styles.image}
                        width={200}
                        height={200}
                    />
                </div>
                <div
                    className={styles.imagePlaceholder}
                    ref={(el) => (imageRefs.current[1] = el)}
                >
                    <Image
                        src="/london-houses-stock.jpg"
                        alt="Description of image 2"
                        className={styles.image}
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </section>
    );
};

export default TextImageSection;
