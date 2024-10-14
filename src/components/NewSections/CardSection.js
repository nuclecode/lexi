import styles from "./landing.module.scss";

const CardSection = () => {
    const cards = [
        { title: "For Landlords", subtitle: "Landlords benefits", description: "Description" },
        { title: "For Investors", subtitle: "Investors benefits", description: "Description" },
        { title: "For Renovators", subtitle: "Renovators benefits", description: "Description" },
        { title: "For Property Developers", subtitle: "Property Developers benefits", description: "Description" },
    ];

    return (
        <section className={styles.cardSection}>
            {cards.map((card, index) => (
                <div key={index} className={styles.card}>
                    <h2 className={styles.cardTitle}>{card.title}</h2>
                    <h3 className={styles.cardSubtitle}>{card.subtitle}</h3>
                    <div className={styles.separator}></div>
                    <p>{card.description}</p>
                </div>
            ))}
        </section>
    );
};

export default CardSection;
