"use client";

import styles from "./landing.module.scss"; // Ensure this points to your SCSS file

const PartnershipSection = () => {
    return (
        <section className={styles.partnershipSection}>
            <div className={styles.partnershipContainer}>
                {/* Left Box with Image */}
                <div className={styles.imageBox}>
                    <img
                        src="/london-houses-stock.jpg" // Replace with your image source
                        alt="Partnership"
                        className={styles.partnershipImage}
                    />
                </div>
                {/* Right Box with Text */}
                <div className={styles.textBox}>
                    <h2 className={styles.partnershipTitle}>Our Partnerships</h2>
                    <p className={styles.partnershipSubtitle}>
                        Collaborating for a better future.
                    </p>
                    <a href="/partnerships" className={styles.ctaButton}>
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PartnershipSection;
