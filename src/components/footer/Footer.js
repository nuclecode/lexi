'use client'
import styles from './Footer.module.scss';
import Link from 'next/link';
import footerlinks from './footerlinks';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../../public/Business card-LEXI_02_for PRINT-02.jpg';
import Image from 'next/image';


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
                                  <Link as="a" href={link.href}>
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
                  <Image src={logo} alt="Lexi Logo" width='auto' height={150}/>
              </div>
              <div className={styles.cta}>
                  <Link as="a" href="/contact">Contact Us</Link>
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
                      <Link  className={styles.sitemap} href="/sitemap">Sitemap</Link>
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
    );
};

export default Footer;

// 'use client'
// import styles from './Footer.module.scss';
// import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
// import { useState } from 'react';
//
// const Footer = () => {
//   const [year] = useState(new Date().getFullYear());
//
//   const handleCopy = (text) => {
//     navigator.clipboard.writeText(text);
//     alert(`Copied: ${text}`);
//   };
//
//   return (
//       <footer className={styles.footer}>
//         <div className={styles.footerContainer}>
//           {/* Column 1: Logo and Social Links */}
//           <div className={styles.logoSocialColumn}>
//             <img src="/logo.png" alt="Company Logo" className={styles.logo} />
//             <div className={styles.socialLinks}>
//               <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
//                 <FaLinkedin />
//               </a>
//               <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
//                 <FaInstagram />
//               </a>
//               <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
//                 <FaFacebook />
//               </a>
//             </div>
//             <button className={styles.ctaButton}>Contact Us</button>
//           </div>
//
//           {/* Column 2-5: Links */}
//           <div className={styles.footerColumn}>
//             <h4 className={styles.footerTitle}>FOR</h4>
//             <ul className={styles.footerList}>
//               <li className={styles.footerItem}>Landlords</li>
//               <li className={styles.footerItem}>Investors</li>
//               <li className={styles.footerItem}>Renovators</li>
//               <li className={styles.footerItem}>Property Developers</li>
//             </ul>
//           </div>
//           <div className={styles.footerColumn}>
//             <h4 className={styles.footerTitle}>SERVICES</h4>
//             <ul className={styles.footerList}>
//               <li className={styles.footerItem}>Electrical Work</li>
//               <li className={styles.footerItem}>Plastering</li>
//               <li className={styles.footerItem}>Painting</li>
//               <li className={styles.footerItem}>Full Renovation</li>
//             </ul>
//           </div>
//           <div className={styles.footerColumn}>
//             <h4 className={styles.footerTitle}>ABOUT US</h4>
//             <ul className={styles.footerList}>
//               <li className={styles.footerItem}>Our Team</li>
//               <li className={styles.footerItem}>Clients</li>
//               <li className={styles.footerItem}>Collaborations</li>
//               <li className={styles.footerItem}>Testimonials</li>
//             </ul>
//           </div>
//           <div className={styles.footerColumn}>
//             <h4 className={styles.footerTitle}>CONTACT US</h4>
//             <p className={styles.contactItem} onClick={() => handleCopy("+44 123 456 789")}>
//               +44 123 456 789 (click to copy)
//             </p>
//             <p className={styles.contactItem} onClick={() => handleCopy("info@lexi.com")}>
//               info@lexi.com (click to copy)
//             </p>
//             <p className={styles.contactItem}>123 Renovation Street</p>
//             <p className={styles.contactItem}>London, UK</p>
//           </div>
//         </div>
//
//         {/* Bottom Footer */}
//         <div className={styles.bottomFooter}>
//           <div className={styles.bottomLinks}>
//             <a href="/sitemap" className={styles.bottomLink}>Sitemap</a>
//             <a href="/cookies" className={styles.bottomLink}>Cookies</a>
//             <a href="/terms" className={styles.bottomLink}>Terms & Conditions</a>
//           </div>
//           <p className={styles.bottomText}>
//             © {year} LEXI Construction Services | All rights reserved
//           </p>
//           <p className={styles.bottomRightText}>Developed by nuclecode</p>
//         </div>
//       </footer>
//   );
// };

// export default Footer;

// import React from 'react';
//
// const Footer = () => {
//   return (
//     <footer style={footerStyles}>
//       <div style={footerContainerStyles}>
//         <div style={footerColumn}>
//           <h4 style={footerTitleStyles}>FOR</h4>
//           <ul style={listStyles}>
//             <li style={listItemStyles}>Landlords</li>
//             <li style={listItemStyles}>Investors</li>
//             <li style={listItemStyles}>Renovators</li>
//             <li style={listItemStyles}>Property Developers</li>
//           </ul>
//         </div>
//         <div style={footerColumn}>
//           <h4 style={footerTitleStyles}>SERVICES</h4>
//           <ul style={listStyles}>
//             <li style={listItemStyles}>Electrical Work</li>
//             <li style={listItemStyles}>Plastering</li>
//             <li style={listItemStyles}>Painting</li>
//             <li style={listItemStyles}>Full Renovation</li>
//           </ul>
//         </div>
//         <div style={footerColumn}>
//           <h4 style={footerTitleStyles}>ABOUT US</h4>
//           <ul style={listStyles}>
//             <li style={listItemStyles}>Our Team</li>
//             <li style={listItemStyles}>Clients</li>
//             <li style={listItemStyles}>Collaborations</li>
//             <li style={listItemStyles}>Testimonials</li>
//           </ul>
//         </div>
//         <div style={footerColumn}>
//           <h4 style={footerTitleStyles}>CONTACT US</h4>
//           <p style={contactStyles}>+44 123 456 789</p>
//           <p style={contactStyles}>info@lexi.com</p>
//           <p style={contactStyles}>123 Renovation Street</p>
//           <p style={contactStyles}>London, UK</p>
//         </div>
//       </div>
//       <div style={bottomFooterStyles}>
//         <p style={bottomTextStyles}>© 2024 LEXI Construction Services | All rights reserved</p>
//         <p style={bottomTextStyles}>Privacy Policy</p>
//       </div>
//     </footer>
//   );
// };
//
// const footerStyles = {
//   backgroundColor: '#75563C', // Light brown
//   padding: '50px 0',
//   color: '#FFFFFF', // White text color
// };
//
// const footerContainerStyles = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   padding: '0 50px',
//   maxWidth: '1200px',
//   margin: '0 auto',
//   textAlign: 'left',
// };
//
// const footerColumn = {
//   flex: '1',
// };
//
// const footerTitleStyles = {
//   color: '#F8E370', // Light yellow
//   fontSize: '18px',
//   marginBottom: '15px',
//   fontWeight: 'bold',
// };
//
// const listStyles = {
//   listStyle: 'none',
//   padding: '0',
// };
//
// const listItemStyles = {
//   color: '#EFA92F', // Dark yellow
//   marginBottom: '10px',
//   fontSize: '14px',
// };
//
// const contactStyles = {
//   color: '#FFFFFF', // White text for contact info
//   marginBottom: '10px',
// };
//
// const bottomFooterStyles = {
//   backgroundColor: '#4C3C2E', // Dark brown
//   padding: '20px 0',
//   textAlign: 'center',
// };
//
// const bottomTextStyles = {
//   color: '#FFFFFF', // White text for bottom section
//   fontSize: '12px',
// };
//
// export default Footer;
//



// import React from 'react';

// const Footer = () => {
//   return (
//     <footer style={footerStyles}>
//       <p style={footerTextStyles}>© 2024 LEXI Construction Services</p>
//     </footer>
//   );
// };

// const footerStyles = {
//   backgroundColor: '#75563C', // Light brown
//   padding: '20px',
//   color: '#F8E370', // Light yellow
//   position: 'relative',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   textAlign: 'center',
//   boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.15)',
//   backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMCIgd2lkdGg9IjEwMCI+PHJlY3Qgd2lkdGg9IjEwMCUgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNzU1NjNDIi8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSI1IiB5PSI1IiBmaWxsPSIjNEMzQzJFIiBvcGFjaXR5PSIwLjYiLz48L3N2Zz4=)`, // Flecks effect
//   backgroundSize: 'contain',
// };

// const footerTextStyles = {
//   color: '#FFFFFF', // White
// };

// export default Footer;
