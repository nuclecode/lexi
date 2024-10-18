import React from 'react';
import Link from 'next/link';
import styles from './HeroOld.module.scss';

const HeroOld = () => {
    return (
        <div className={styles.hero}>
            <video autoPlay loop muted className={styles.hero__video}>
                <source src="/hero__video.mp4" type="video/mp4" />
                <source src="/hero__video.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.hero__overlay}></div>
            <div className={styles.hero__content}>
                <h1 className={styles.hero__title}>Transforming Spaces, Elevating Lives</h1>
                <p className={styles.hero__subtitle}>
                    High-quality renovations and electrical services tailored to your needs.
                </p>
                <Link href="/contact">
                    <button className={styles.hero__button}>Get Started</button>
                </Link>
            </div>
        </div>
    );
};

export default HeroOld;



// import React from 'react';
// import styles from './Hero.module.scss';
//
// const Hero = () => {
//     return (
//         <div className={styles.hero}>
//             <video autoPlay loop muted className={styles.hero__video}>
//                 <source src="/hero__video.mp4" type="video/mp4" />
//                 <source src="/hero__video.webm" type="video/webm" />
//                 Your browser does not support the video tag.
//             </video>
//             <div className={styles.hero__overlay}></div>
//             <div className={styles.hero__content}>
//                 <h1 className={styles.hero__title}>Transforming Spaces, Elevating Lives</h1>
//                 <p className={styles.hero__subtitle}>
//                     High-quality renovations and electrical services tailored to your needs.
//                 </p>
//                 <button className={styles.hero__button}>Get Started</button>
//             </div>
//         </div>
//     );
// };
//
// export default Hero;
