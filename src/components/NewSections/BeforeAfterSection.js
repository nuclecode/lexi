"use client";

import { useEffect, useRef } from "react";
import styles from "./landing.module.scss"; // Ensure this points to your SCSS file

const NewTextImageSection = () => {
    const scrollRef = useRef(null); // Single ref for the overall scroll area

    return (
        <section className={styles.newTextImageSection} ref={scrollRef}>
            <div className={styles.newText}>
                <h1>Curating beautiful transformations across London</h1>
            </div>
            <div className={styles.newImageContainerWrapper}>
                {/* Box for Before and After images */}
                <div className={styles.newImageContainer}>
                    <div className={styles.newImagePlaceholder}>
                        <span className={styles.label}>Before</span>
                        <img
                            src="/london-houses-2.jpg"
                            alt="Description of image 1"
                            className={styles.newImage}
                        />
                    </div>
                    <div className={styles.newImagePlaceholder}>
                        <span className={styles.label}>After</span>
                        <img
                            src="/london-houses-stock.jpg"
                            alt="Description of image 2"
                            className={styles.newImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewTextImageSection;
