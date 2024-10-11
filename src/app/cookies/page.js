import styles from './Cookies.module.scss';

export const metadata = {
    title: "LEXI Construction Services - Cookies",
    description: "Information on how we use cookies to enhance your experience on our website",
};

export default function Cookies() {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Cookies on LEXI</h1>
            <p className={styles.text}>
                Cookies are files saved on your phone, tablet, or computer when you visit a website.
            </p>
            <p className={styles.text}>
                We use cookies to collect and store information about how you use the LEXI website and its digital services, such as the pages you visit. This page provides a brief explanation of each type of cookie we use. For more details, read our detailed cookie information.
            </p>

            <h2 className={styles.subHeader}>Cookie settings</h2>
            <p className={styles.text}>
                We use 4 types of cookies. You can choose which cookies you're happy for us to use.
            </p>

            <h3 className={styles.subHeader}>Cookies that measure website use</h3>
            <p className={styles.text}>
                We use Google Analytics cookies to measure how you use the LEXI website and services. These cookies collect information such as:
            </p>
            <ul className={styles.list}>
                <li>How you got to the site</li>
                <li>The pages you visit and how long you spend on each</li>
                <li>What you click on while you're visiting</li>
            </ul>
            <p className={styles.text}>
                We also use LUX Real User Monitoring software cookies to measure your web performance experience. These cookies collect information about page performance on your device, including performance bottlenecks or JavaScript errors.
            </p>
            <p className={styles.text}>
                We do not allow Google or SpeedCurve to use or share this data for their own purposes.
            </p>

            <button className={styles.button}>Use cookies that measure my website use</button>
            <button className={styles.button}>Do not use cookies that measure my website use</button>

            <h3 className={styles.subHeader}>Cookies that help with our communications and marketing</h3>
            <p className={styles.text}>
                These cookies may be set by third-party websites and help with things like measuring how you view videos on the site.
            </p>

            <button className={styles.button}>Use cookies that help with communications and marketing</button>
            <button className={styles.button}>Do not use cookies that help with communications and marketing</button>

            <h3 className={styles.subHeader}>Cookies that remember your settings</h3>
            <p className={styles.text}>
                These cookies remember your preferences and choices to personalize your experience using the site.
            </p>

            <button className={styles.button}>Use cookies that remember my settings</button>
            <button className={styles.button}>Do not use cookies that remember my settings</button>

            <h3 className={styles.subHeader}>Strictly necessary cookies</h3>
            <p className={styles.text}>
                These essential cookies do things like remember your progress through a form. They are always on.
            </p>

            <button className={styles.saveButton}>Save changes</button>

            <h2 className={styles.subHeader}>Government services</h2>
            <p className={styles.text}>
                LEXI may link to third-party services which set their own cookies and have their own cookie policies.
            </p>
        </div>
    );
}



// export default function Cookies() {
//     return (
//         <div>
//             <h1>Cookie Policy</h1>
//             <p>Information about cookies used on the site.</p>
//         </div>
//     );
// }
