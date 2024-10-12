"use client";

import { useEffect, useRef } from "react";
import styles from "./landing.module.scss";

const TextImageSection = () => {
    const scrollRef = useRef(null);
    const imageRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                const rect = scrollRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Check if the section is in view
                if (rect.top < windowHeight && rect.bottom >= 0) {
                    // Animate images
                    imageRefs.current.forEach((img, index) => {
                        if (img) {
                            img.style.transform = `translateY(${Math.max(-50 + (index * 20), 0)}px)`; // Adjust the value for animation
                            img.style.opacity = '1'; // Fade in
                        }
                    });
                } else {
                    // Reset styles when not in view
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
    }, []);

    return (
        <section className={styles.textImageSection}>
            <div className={styles.text}>
                <h1>Your dream home Title Here</h1>
                <p>is just a renovation away! We provide home, office, and apartment renovation services including electrical work, painting, and plastering. Our services are ideal for
                    landlords, investors, and property owners looking to refresh or renovate their spaces.</p>
            </div>
            <div className={styles.imageContainer} ref={scrollRef}>
                <div
                    className={styles.imagePlaceholder}
                    ref={(el) => (imageRefs.current[0] = el)}
                >
                    <img
                        src="/london-houses-2.jpg"
                        alt="Description of image 1"
                        className={styles.image}
                    />
                </div>
                <div
                    className={styles.imagePlaceholder}
                    ref={(el) => (imageRefs.current[1] = el)}
                >
                    <img
                        src="/london-houses-stock.jpg"
                        alt="Description of image 2"
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
};

export default TextImageSection;
