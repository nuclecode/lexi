"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './Contact.module.scss';
import Head from 'next/head';

export default function ContactPage() {
  
  const [partnerCountryCode, setPartnerCountryCode] = useState('+44');
  const [partnerPhoneNumber, setPartnerPhoneNumber] = useState('');

  const [clientCountryCode, setClientCountryCode] = useState('+44');
  const [clientPhoneNumber, setClientPhoneNumber] = useState('');

  const handlePhoneNumberInput = (e, setPhoneNumber) => {
    const input = e.target.value.replace(/\D/g, ''); 
    setPhoneNumber(input);
  };

  return (
    <>
    <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Contact Us - LEXI Construction Services</title>
      <meta name="description" content="Get in touch with us for partnership or renovation services." />
    </Head>
    <div className={styles.contactContainer}>
      <div className={styles.heroImage}>
        <Image
          src="/images/contact-hero.PNG"
          alt="Contact Us"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
        <div className={styles.heroText}>
          <h1>Let's Build Together!</h1>
          <p>
            Whether you're a property owner in need of renovation or a partner ready to collaborate, 
            we'd love to hear from you. Let's create something amazing together.
          </p>
        </div>
      </div>

      <div className={styles.formSection}>
        <div className={styles.partnerForm}>
          <h2>Contact for Partnership</h2>
          <p>Together, let's make people happy by delivering top-quality cooperation.</p>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Leave your email - we'll send more details and a beneficial quote." required />
            
            <div className={styles.phoneWrapper}>
            <input
              type="text"
              className={styles.countryCode}
              value={partnerCountryCode}
              onChange={(e) => setPartnerCountryCode(e.target.value)}
              placeholder="+44"
              required 
            />  
            <input 
              type="tel" 
              className={styles.phoneNumber}
              value={partnerPhoneNumber}
              onChange={(e) => handlePhoneNumberInput(e, setPartnerPhoneNumber)}
              placeholder="Leave your phone number - we're eager to meet you!" 
              required 
            />
            </div>
            <input type="text" placeholder="Company" />
            <textarea placeholder="Leave a message or project details - Tell us how we can collaborate!" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

        <div className={styles.clientForm}>
          <h2>Contact for Services</h2>
          <p>For home renovation services, we're here to help bring your vision to life.</p>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Leave your email - we'll share how we can help and send a tailored quote!" required />
            <div className={styles.phoneWrapper}>
              <input 
              type="text"
              className={styles.countryCode}
              value={clientCountryCode}
              onChange={(e) => setClientCountryCode(e.target.value)}
              placeholder="+44"
              required
              />
            <input 
              type="tel" 
              className={styles.phoneNumber}
              placeholder="Leave your phone number - we're eager to meet you!" 
              value={clientPhoneNumber}
              onChange={(e) => handlePhoneNumberInput(e, setClientPhoneNumber)}
              required 
            />
            </div>
            <input type="text" placeholder="Postcode of your development site" />
            <textarea placeholder="Tell us more: Postcode, services you need, and any specific details - we'll follow up with solutions." required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
