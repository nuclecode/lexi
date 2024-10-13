"use client";
import Image from 'next/image';
import styles from "./landing.module.scss";

const PartnershipSection = () => {
    return (
        <section className={styles.partnershipSection}>
            <div className={styles.partnershipContainer}>
                <div className={styles.imageBox}>
                    <Image
                        src="/london-houses-stock.jpg"
                        alt="Partnership"
                        className={styles.partnershipImage}
                        width={200}
                        height={200}
                    />
                </div>
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
