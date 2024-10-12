import './globals.css';
import styles from './layout.module.scss';
import Link from 'next/link';
import Head from 'next/head';

import localFont from "next/font/local";
import "../styles/globals.scss";

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import ParallaxWrapper from '../components/ParallaxWrapper/ParallaxWrapper';
import DesktopNavbar from '../components/HeaderNew/Desktop/DesktopNavbar';
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="LEXI Construction Services - Renovation services for home, office, appartments." />
      <title>LEXI Construction Services</title>
      
      <Link rel="icon" href="/favicon.ico" sizes="any" />

      <script
      dangerouslySetInnerHTML={{
        __html:`
            (function() {
              var tidioScript = document.createElement("script");
              tidioScript.src = "https://code.tidio.co/pw6cgje8ywzwekn7ougvgkukgbeiponl.js";
              tidioScript.async = true;
              document.head.appendChild(tidioScript);
            })();`,
      }}
      />
    </Head>
    <body className={`${geistSans.variable} ${geistMono.variable}`}>

      {/*<Header className={styles.header} />*/}
      <DesktopNavbar />
{/* 
    <header style={headerStyle}>
      <div style={logoStyle}>LEXI Construction Services</div> */}
{/*       
      <nav >
        <ul style={navStyle}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/solutions">Solutions</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/terms">Terms</Link></li>
          <li><Link href="/cookies">Cookies</Link></li>
        </ul>
      </nav>
    </header> */}
    <ParallaxWrapper>
    <main className={styles.main}>{children}</main>
    </ParallaxWrapper>

      {/*<FooterTop className={styles.footer} />*/}
    <Footer className={styles.footer} />
    {/* <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} LEXI Construction Services. All Rights Reserved.</p>
      <p className="footer-engineered">
        <a href="https://nuclecode.uk" target="_blank" rel="noopener noreferrer">
        Engineered by nuclecode
      </a></p>
    </footer> */}
    </body>
    </html>
  );
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
  backgroundColor: '#A52A2A',
  color: '#FFD700',
};

const navStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '15px',
};

const footerStyle = {
  backgroundColor: '#75563C',
  padding: '20px',
  color: '#F8E370',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.15)',
  backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMCIgd2lkdGg9IjEwMCI+PHJlY3Qgd2lkdGg9IjEwMCUgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNzU1NjNDIi8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSI1IiB5PSI1IiBmaWxsPSIjNEMzQzJFIiBvcGFjaXR5PSIwLjYiLz48L3N2Zz4=)`, // Flecks effect
  backgroundSize: 'contain',

  // textAlign: 'center',
  // padding: '10px',
  // backgroundColor: '#000080',
  // color: '#FFD700',
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
}