import styles from './ChooseUs.module.scss';

export const metadata = {

    title: 'LEXI Construction Services - Choose Us',
    description: 'Learn about our company&apos;s mission, values, and team. Discover why we&apos;re the leading provider of Home, office, apartment renovation services',
  };

export default function ChooseUs() {
        return (
        <article className={styles.article}>

            <header className={styles.header}>Why Choose Our LEXI Team</header>
            <main className={styles.main}> 
              <p>  
                At LEXI, we understand that your property is one of your most valuable investments, and we are committed to delivering top-notch renovation and refurbishment services tailored to your needs. Here&apos;s why our team stands out:
              </p>
                <ul>
                <li><h3>Experienced Professionals</h3>
                    <p>
                        With a wealth of experience across all aspects of internal and external renovation, our skilled craftsmen bring expertise and attention to detail to every project.
                    </p>    
                </li>
                <li><h3>Comprehensive Services</h3>
                    <p>
                        From structural changes and kitchen upgrades to painting, flooring, and outdoor transformations, we handle everything, so you don&apos;t have to juggle multiple contractors.
                    </p>
                </li>
                <li><h3>Personalized Approach</h3>
                    <p>We work closely with you to understand your vision and provide customized solutions that fit your style and budget, ensuring results that exceed expectations.</p>
                </li>
                <li><h3>High-Quality Materials</h3>
                    <p>
                        We use only premium materials to guarantee durability, longevity, and a high-end finish that adds value to your property.
                    </p>    
                </li>
                <li><h3>Timely Completion</h3>
                    <p>
                        We respect your time and ensure that every project is completed on schedule without compromising on quality.
                    </p>
                </li>
                <li><h3>Client Satisfaction</h3>
                    <p>
                        Our success is measured by your satisfaction. With transparent communication and a focus on delivering exactly what you want, we strive to build long-lasting relationships with our clients.

                    </p>    
                </li>
                </ul>
        <p>

            Choose LEXI for reliable, high-quality renovations that transform your space into a home you&apos;ll love.
        </p>
        </main>    
        </article>
    );
};