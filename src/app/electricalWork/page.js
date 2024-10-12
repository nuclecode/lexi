// v4 

import styles from './ElectricalWork.module.scss';
import Head from 'next/head';
import Image from 'next/image'; 
import Snake from '@/components/Snake/Snake'; 

const ElectricalWork = () => {
  return (
    <>
      <Head>
        <title>Electrical Work by LEXI Construction Services</title>
        <meta
          name="description"
          content="Professional electrical services in London by LEXI Construction Services. Certified electricians for installations, rewiring, and system upgrades."
        />
      </Head>
      <div className={styles.electricalWorkPage}>
        
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <Image
            src="/bulbs.jpg"
            alt="Electrical bulbs"
            layout="fill"
            objectFit="cover"
            className={styles.heroImage}
          />
          <div className={styles.heroContent}>
            <h1>Electrical Work by LEXI</h1>
            <p>Reliable and professional electrical services for homes and businesses in London.</p>
          </div>
        </section>

        {/* Insert the Snake Component */}
        <section className={styles.snakeSection}>
          <h2>Our Services</h2>
          <Snake />
        </section>

        {/* Process Section */}
        <section className={styles.processSection}>
          <h2>Our Working Process</h2>
          <div className={styles.cardsContainer}>
            <div className={`${styles.card} ${styles.fadeIn}`}>
              <strong>Consultation</strong>
              <p>We assess your electrical needs and offer tailored solutions.</p>
            </div>
            <div className={`${styles.card} ${styles.fadeIn}`}>
              <strong>Planning and Design</strong>
              <p>Our team drafts a detailed electrical plan that meets all safety codes.</p>
            </div>
            <div className={`${styles.card} ${styles.fadeIn}`}>
              <strong>Installation</strong>
              <p>Certified electricians handle every aspect of installation, from wiring to lighting fixtures.</p>
            </div>
            <div className={`${styles.card} ${styles.fadeIn}`}>
              <strong>Testing and Certification</strong>
              <p>We ensure the system is safe, fully operational, and compliant, providing certification.</p>
            </div>
            <div className={`${styles.card} ${styles.fadeIn}`}>
              <strong>Ongoing Support</strong>
              <p>After project completion, we offer maintenance and repair services.</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.servicesSection}>
          <h2>Our Electrical Services</h2>
          <ul>
            <li>Full electrical installations and rewiring</li>
            <li>Lighting design and installation</li>
            <li>Switches, outlets, and circuit upgrades</li>
            <li>Electrical safety inspections and certifications</li>
            <li>Maintenance and emergency repairs</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default ElectricalWork;


// //  v3 straight snake

// // src/app/electricalWork/page.js

// import styles from './ElectricalWork.module.scss';
// import Head from 'next/head';
// import Image from 'next/image'; 
// import Snake from '@/components/Snake/Snake'; 

// const ElectricalWork = () => {
//   return (
//     <>
//       <Head>
//         <title>Electrical Work by LEXI Construction Services</title>
//         <meta
//           name="description"
//           content="Professional electrical services in London by LEXI Construction Services. Certified electricians for installations, rewiring, and system upgrades."
//         />
//       </Head>
//       <div className={styles.electricalWorkPage}>
        
//         {/* Hero Section */}
//         <section className={styles.heroSection}>
//           <Image
//             src="/bulbs.jpg"
//             alt="Electrical bulbs"
//             layout="fill"
//             objectFit="cover"
//             className={styles.heroImage}
//           />
//           <div className={styles.heroContent}>
//             <h1>Electrical Work by LEXI</h1>
//             <p>Reliable and professional electrical services for homes and businesses in London.</p>
//           </div>
//         </section>

//         {/* Insert the Snake Component */}
//         <section className={styles.snakeSection}>
//           <h2>Our Services</h2>
//           <Snake />
//         </section>

//         {/* Process Section */}
//         <section className={styles.processSection}>
//           <h2>Our Working Process</h2>
//           <div className={styles.cardsContainer}>
//             <div className={`${styles.card} ${styles.fadeIn}`}>
//               <strong>Consultation</strong>
//               <p>We assess your electrical needs and offer tailored solutions.</p>
//             </div>
//             <div className={`${styles.card} ${styles.fadeIn}`}>
//               <strong>Planning and Design</strong>
//               <p>Our team drafts a detailed electrical plan that meets all safety codes.</p>
//             </div>
//             <div className={`${styles.card} ${styles.fadeIn}`}>
//               <strong>Installation</strong>
//               <p>Certified electricians handle every aspect of installation, from wiring to lighting fixtures.</p>
//             </div>
//             <div className={`${styles.card} ${styles.fadeIn}`}>
//               <strong>Testing and Certification</strong>
//               <p>We ensure the system is safe, fully operational, and compliant, providing certification.</p>
//             </div>
//             <div className={`${styles.card} ${styles.fadeIn}`}>
//               <strong>Ongoing Support</strong>
//               <p>After project completion, we offer maintenance and repair services.</p>
//             </div>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section className={styles.servicesSection}>
//           <h2>Our Electrical Services</h2>
//           <ul>
//             <li>Full electrical installations and rewiring</li>
//             <li>Lighting design and installation</li>
//             <li>Switches, outlets, and circuit upgrades</li>
//             <li>Electrical safety inspections and certifications</li>
//             <li>Maintenance and emergency repairs</li>
//           </ul>
//         </section>
//       </div>
//     </>
//   );
// };

// export default ElectricalWork;




// // v2

// import styles from './ElectricalWork.module.scss';
// import Head from 'next/head';
// import Image from 'next/image'; // Import Image component

// const ElectricalWork = () => {
//   return (
//     <>
//       <Head>
//         <title>Electrical Work by LEXI Construction Services</title>
//         <meta
//           name="description"
//           content="Professional electrical services in London by LEXI Construction Services. Certified electricians for installations, rewiring, and system upgrades."
//         />
//       </Head>
//       <div className={styles.electricalWorkPage}>
        
//         {/* Hero Section */}
//         <section className={styles.heroSection}>
//           <Image
//             src="/bulbs.jpg"
//             alt="Electrical bulbs"
//             layout="fill"
//             objectFit="cover"
//             className={styles.heroImage}
//           />
//           <div className={styles.heroContent}>
//             <h1>Electrical Work by LEXI</h1>
//             <p>Reliable and professional electrical services for homes and businesses in London.</p>
//           </div>
//         </section>

//         {/* Process Section */}
//         <section className={styles.processSection}>
//           <h2>Our Working Process</h2>
//           <div className={styles.cardsContainer}>
//             <div className={`${styles.card} ${styles.fadeIn}`}>
//               <strong>Consultation</strong>
//               <p>We assess your electrical needs and offer tailored solutions.</p>
//             </div>
//             <div className={`${styles.card} ${styles.fadeIn}`}>
//               <strong>Planning and Design</strong>
//               <p>Our team drafts a detailed electrical plan that meets all safety codes.</p>
//             </div>
//             <div className={`${styles.card} ${styles.fadeIn}`}>
//               <strong>Installation</strong>
//               <p>Certified electricians handle every aspect of installation, from wiring to lighting fixtures.</p>
//             </div>
//             <div className={`${styles.card} ${styles.fadeIn}`}>
//               <strong>Testing and Certification</strong>
//               <p>We ensure the system is safe, fully operational, and compliant, providing certification.</p>
//             </div>
//             <div className={`${styles.card} ${styles.fadeIn}`}>
//               <strong>Ongoing Support</strong>
//               <p>After project completion, we offer maintenance and repair services.</p>
//             </div>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section className={styles.servicesSection}>
//           <h2>Our Electrical Services</h2>
//           <ul>
//             <li>Full electrical installations and rewiring</li>
//             <li>Lighting design and installation</li>
//             <li>Switches, outlets, and circuit upgrades</li>
//             <li>Electrical safety inspections and certifications</li>
//             <li>Maintenance and emergency repairs</li>
//           </ul>
//         </section>
//       </div>
//     </>
//   );
// };

// export default ElectricalWork;







// // //v0
// // // // import AboutDescription from "@/components/aboutDescription/AboutDescription";
// // // // import ChooseUs from "@/components/chooseUs/ChooseUs";
// // // import styles from './About.module.scss';

// // // export const metadata = {
// // //     title: "Electrical work by LEXI Construction Services",
// // //     description: "Ensure the safety and efficiency of your property with professional electrical services from LEXI Construction Services. Our certified electricians handle everything from rewiring, lighting installations, and circuit upgrades to full electrical system overhauls. Whether it&apos;s a residential renovation or commercial project, we deliver high-quality, reliable electrical work to meet all safety standards and your specific needs",
// // //   };

// // // export default function About() {
// // //     return (
// // //         <div>
// // //             <h1 className={styles.header}>Electrical work</h1>
// // //             <p className={styles.article}>We are a dedicated renovations company committed to quality and customer satisfaction.</p>
// // //         </div>
// // //     );
// // // }
// // // src/app/electricalWork/page.js



// // // v1
// // import styles from './ElectricalWork.module.scss';
// // import Head from 'next/head';

// // const ElectricalWork = () => {
// //   return (
// //     <>
// //       <Head>
// //         <title>Electrical Work by LEXI Construction Services</title>
// //         <meta
// //           name="description"
// //           content="Professional electrical services in London by LEXI Construction Services. Certified electricians for installations, rewiring, and system upgrades."
// //         />
// //       </Head>
// //       <div className={styles.electricalWorkPage}>
// //         <section className={styles.heroSection}>
// //           <h1>Electrical Work by LEXI</h1>
// //           <p>Reliable and professional electrical services for homes and businesses in London.</p>
// //         </section>

// //         <section className={styles.processSection}>
// //           <h2>Our Working Process</h2>
// //           <ol className={styles.processSteps}>
// //             <li>
// //               <strong>Consultation:</strong> We begin by assessing your specific electrical needs and offering tailored solutions.
// //             </li>
// //             <li>
// //               <strong>Planning and Design:</strong> Our team drafts a detailed electrical plan that meets all safety codes and regulations.
// //             </li>
// //             <li>
// //               <strong>Installation:</strong> Certified electricians handle every aspect of installation, from wiring to lighting fixtures.
// //             </li>
// //             <li>
// //               <strong>Testing and Certification:</strong> We ensure the system is safe, fully operational, and compliant with all regulations, providing certification.
// //             </li>
// //             <li>
// //               <strong>Ongoing Support:</strong> After project completion, we offer maintenance and repair services to ensure long-term reliability.
// //             </li>
// //           </ol>
// //         </section>

// //         <section className={styles.servicesSection}>
// //           <h2>Our Electrical Services</h2>
// //           <ul>
// //             <li>Full electrical installations and rewiring</li>
// //             <li>Lighting design and installation</li>
// //             <li>Switches, outlets, and circuit upgrades</li>
// //             <li>Electrical safety inspections and certifications</li>
// //             <li>Maintenance and emergency repairs</li>
// //           </ul>
// //         </section>
// //       </div>
// //     </>
// //   );
// // };

// // export default ElectricalWork;
