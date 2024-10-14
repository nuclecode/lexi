'use client'
import styles from './Footer.module.scss';
import Link from 'next/link';
import footerlinks from './footerlinks';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../../public/Business card-LEXI_02_for PRINT-02.jpg';
import Image from 'next/image';
import React from "react";
// import Head from 'next/head';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const companyName = "Lexi. All Rights Reserved.";
  const developerLink = 'https://nuclecode.uk';

    const copyToClipboard = (text) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text)
                .then(() => alert('Email address copied to clipboard'))
                .catch(err => console.error('Failed to copy: ', err));
        } else {
            const tempInput = document.createElement('input');
            tempInput.value = text;
            document.body.appendChild(tempInput);
            tempInput.select();
            try {
                document.execCommand('copy');
                alert('Email address copied to clipboard');
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
            document.body.removeChild(tempInput);
        }
    };

    return (
        <>
        {/* <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Contact form of LEXI Construction Services - Renovation services for home, office, appartments." />
      <title>Footer LEXI Construction Services</title>
       </Head> */}
      <footer className={styles.footer}>
          <div className={styles.topSection}>
              <div>
              <h3>Open to Partnerships</h3>
              <p>
                  with Architects, Designers, Real Estate Agencies.
              </p>
              </div>
              <div>
                  <h3>Our Vision</h3>
                  <p>
                      At Lexi, our passion is to transform spaces into functional, beautiful environments, ensuring
                      safety and innovation through exceptional craftsmanship and sustainable practices that enhance the
                      lives of our clients.
                  </p>
              </div>
          </div>

          {footerlinks.map((column, index) => (
              <div key={index} className={styles.column}>
                  <div className={styles.title}>{column.title}</div>
                  {column.links ? (
                      <ul>
                      {column.links.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                  <Link href={link.href}>
                                      {link.name}
                                  </Link>
                              </li>
                          ))}
                      </ul>
                  ) : (
                      <div>
                          <p>
                              <strong>Phone:</strong>{' '}
                              <a href={`tel:${column.contact.phone}`} className={styles.contactLink}>
                                  {column.contact.phone}
                              </a>
                          </p>
                          <p>
                              <strong>Email:</strong>{' '}
                              <a
                                  href="#"
                                  className={styles.contactLink}
                                  onClick={(e) => {
                                      e.preventDefault();
                                      copyToClipboard(column.contact.email);
                                  }}
                              >
                                  {column.contact.email}
                              </a>
                          </p>
                          <p>
                              <strong>Address:</strong>{' '}
                              {column.contact.address}
                          </p>
                      </div>


                  )}
              </div>
          ))}

          <div className={`${styles.column} ${styles.lastColumn}`}>
              <div className={styles.logo}>
                  <Image
                      src='/lexi-logot.svg'
                      alt="Lexi Logo"
                      width={80}
                      height={40}
                  />
              </div>
              <div className={styles.cta}>
                  <Link href="/contact">Contact Us</Link>
              </div>
          </div>

          <div className={styles.bottomLinksContainer}>
              <div className={styles.socialLinks}>
                  <Link href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                      <FaFacebookF aria-hidden="true"/>
                  </Link>
                  <Link href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                      <FaInstagram aria-hidden="true"/>
                  </Link>
                  <Link href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn aria-hidden="true"/>
                  </Link>
              </div>
              <div className={styles.yearAndLinks}>
                  <div className={styles.year}>
                      {currentYear} © {companyName}
                  </div>
                  <div className={styles.footerLinks}>
                      <Link href="/terms">Terms and Conditions</Link>
                      <span> | </span>
                      <Link href="/cookies">Cookies</Link>
                      <span> | </span>
                      <Link  className={styles.sitemap} href="/sitemap.xml">Sitemap</Link>
                  </div>
              </div>
              <div className={styles.developerContainer}>
                  <div className={styles.developer}>
                      <Link href={developerLink} target="_blank" rel="noopener noreferrer">
                          Developed by Nuclecode
                      </Link>
                  </div>
              </div>
          </div>

      </footer>
      </>
    );
};

export default Footer;
