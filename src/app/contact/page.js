
import AboutDescription from "@/components/aboutDescription/AboutDescription";
import ChooseUs from "@/components/chooseUs/ChooseUs";
import styles from './Contact.scss';
import ContactAbout from '../../components/ContactAbout/ContactAbout';
//
// export const metadata = {
//   title: "LEXI Construction Services - About Us",
//   description: "Learn about our company's mission, values, and team. Discover why we're the leading provider of Home, office, apartment renovation services",
// };

export default function About() {
  return (
      <>
        <section className="contact-hero">
          <div className="hero-background">
            <h1>Contact Us</h1>
          </div>
        </section>
        <ContactAbout />
      </>
  );
}

// "use client";
//
// import { useState } from 'react';
// import Image from 'next/image';
// import styles from './Contact.module.scss';
// import Head from 'next/head';
// import { metadata } from '../../utils/metadata';
//
// export default function ContactPage() {
//
//   const [partnerCountryCode, setPartnerCountryCode] = useState('+44');
//   const [partnerPhoneNumber, setPartnerPhoneNumber] = useState('');
//
//   const [clientCountryCode, setClientCountryCode] = useState('+44');
//   const [clientPhoneNumber, setClientPhoneNumber] = useState('');
//
//   const handlePhoneNumberInput = (e, setPhoneNumber) => {
//     const input = e.target.value.replace(/\D/g, '');
//     setPhoneNumber(input);
//   };
//
//   return (
//     <>
//     <Head>
//     <meta charSet="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//
//       <meta name="description" content={metadata.contact.description} />
//       <title>{metadata.contact.title}</title>
//     </Head>
//     <div className={styles.contactContainer}>
//       <div className={styles.heroImage}>
//         <Image
//           src="/images/contact-hero.PNG"
//           alt="Contact Us"
//           layout="fill"
//           objectFit="cover"
//           priority={true}
//         />
//         <div className={styles.heroText}>
//           <h1>Let&apos;s Build Together!</h1>
//           <p>
//             Whether you&apos;re a property owner in need of renovation or a partner ready to collaborate,
//             we&apos;d love to hear from you. Let&apos;s create something amazing together.
//           </p>
//         </div>
//       </div>
//
//       <div className={styles.formSection}>
//         <div className={styles.partnerForm}>
//           <h2>Contact for Partnership</h2>
//           <p>Together, let&apos;s make people happy by delivering top-quality cooperation.</p>
//
//           <form>
//             <input type="text" placeholder="Your Name" required />
//             <input type="email" placeholder="Leave your email - we&apos;ll send more details and a beneficial quote." required />
//
//             <div className={styles.phoneWrapper}>
//             <input
//               type="text"
//               className={styles.countryCode}
//               value={partnerCountryCode}
//               onChange={(e) => setPartnerCountryCode(e.target.value)}
//               placeholder="+44"
//               required
//             />
//             <input
//               type="tel"
//               className={styles.phoneNumber}
//               value={partnerPhoneNumber}
//               onChange={(e) => handlePhoneNumberInput(e, setPartnerPhoneNumber)}
//               placeholder="Leave your phone number - we&apos;re eager to meet you!"
//               required
//             />
//             </div>
//             <input type="text" placeholder="Company" />
//             <textarea placeholder="Leave a message or project details - Tell us how we can collaborate!" required></textarea>
//             <button type="submit">Send</button>
//           </form>
//         </div>
//
//         <div className={styles.clientForm}>
//           <h2>Contact for Services</h2>
//           <p>For home renovation services, we&apos;re here to help bring your vision to life.</p>
//
//           <form>
//             <input type="text" placeholder="Your Name" required />
//             <input type="email" placeholder="Leave your email - we&apos;ll share how we can help and send a tailored quote!" required />
//             <div className={styles.phoneWrapper}>
//               <input
//               type="text"
//               className={styles.countryCode}
//               value={clientCountryCode}
//               onChange={(e) => setClientCountryCode(e.target.value)}
//               placeholder="+44"
//               required
//               />
//             <input
//               type="tel"
//               className={styles.phoneNumber}
//               placeholder="Leave your phone number - we&apos;re eager to meet you!"
//               value={clientPhoneNumber}
//               onChange={(e) => handlePhoneNumberInput(e, setClientPhoneNumber)}
//               required
//             />
//             </div>
//             <input type="text" placeholder="Postcode of your development site" />
//             <textarea placeholder="Tell us more: Postcode, services you need, and any specific details - we&apos;ll follow up with solutions." required></textarea>
//             <button type="submit">Send</button>
//           </form>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }
// <div className={styles.hero}>
//     <div className={styles.image} />
//     <div className={styles.overlay}>
//         <h1 className={styles.header}>About Us</h1>
//         <p className={styles.description}>
//             We are a dedicated renovations company committed to quality and customer satisfaction.
//         </p>
//         <AboutDescription />
//         <ChooseUs />
//     </div>
// </div>