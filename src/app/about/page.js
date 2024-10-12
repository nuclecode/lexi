import AboutDescription from "@/components/aboutDescription/AboutDescription";
import ChooseUs from "@/components/chooseUs/ChooseUs";
import styles from './About.module.scss';


export const metadata = {
    title: "LEXI Construction Services - About Us",
    description: "Learn about our company&apos;s mission, values, and team. Discover why we&apos;re the leading provider of Home, office, apartment renovation services",
};

export default function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>About Us</h1>
            <p className={styles.article}>We are a dedicated renovations company committed to quality and customer satisfaction.</p>

            <AboutDescription />

            <ChooseUs />
        </div>
    );
}