// app/landing/components/CardSection.js
import styles from "./landing.module.scss";

const CardSection = () => {
    const cards = [
        { title: "Card 1", subtitle: "Subtitle 1", description: "Description for card 1" },
        { title: "Card 2", subtitle: "Subtitle 2", description: "Description for card 2" },
        { title: "Card 3", subtitle: "Subtitle 3", description: "Description for card 3" },
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
