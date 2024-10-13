import styles from "./landing.module.scss";

const SnappingScrollSection = () => {
    return (
        <div className={styles.snappingContainer}>
            <section className={styles.snappingSection}>
                <div className={styles.sectionNumber}>01</div>
                <div>Existing set of drawings review</div>
            </section>
            <section className={styles.snappingSection}>
                <div className={styles.sectionNumber}>02</div>
                <div>Your Idea</div>
            </section>
            <section className={styles.snappingSection}>
                <div className={styles.sectionNumber}>03</div>
                <div>Demolition</div>
            </section>
            <section className={styles.snappingSection}>
                <div className={styles.sectionNumber}>04</div>
                <div>Connecting the electric</div>
            </section>
            <section className={styles.snappingSection}>
                <div className={styles.sectionNumber}>05</div>
                <div>Final Steps - the structure</div>
            </section>
            <section className={styles.snappingSection}>
                <div className={styles.sectionNumber}>06</div>
                <div>Decorating</div>
            </section>
        </div>
    );
};

export default SnappingScrollSection;
