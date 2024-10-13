import React from "react";
import Hero from "../components/hero/Hero"
import Head from 'next/head';
import { metadata } from '../utils/metadata';
import TextImageSection from "../components/NewSections/TextImageSection";
import CardSection from "../components/NewSections/CardSection";
import SnappingScrollSection from "../components/NewSections/SnappingScrollSection";
import BeforeAfterSection from "../components/NewSections/BeforeAfterSection";
import TestimonialsSection from "../components/NewSections/TestimonialsSection";
import PartnerUsSection from "../components/NewSections/PartnerUsSection";
import GetInTouchForm from "../components/NewSections/GetInTouchForm";
import styles from "../components/NewSections/landing.module.scss";

const HomePage = () => {
  return (
    <>
    <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.home.description} />
        <title>{metadata.home.title}</title>
      </Head>

      <div className={styles.landingPage}>
        <Hero/>
        <TextImageSection/>
        <CardSection/>
        <SnappingScrollSection/>
        <BeforeAfterSection/>
        <TestimonialsSection/>
        <PartnerUsSection/>
        <GetInTouchForm/>
        {/*<section style={sectionStyles}>*/}

        {/*  <h1 style={headingStyles}>Welcome to LEXI Construction Services</h1>*/}

        {/*  <p style={paragraphStyles}>Your dream home is just a renovation away! We provide home, office, and apartment*/}
        {/*    renovation services including electrical work, painting, and plastering. Our services are ideal for*/}
        {/*    landlords, investors, and property owners looking to refresh or renovate their spaces.*/}
        {/*  </p>*/}

        {/*  <p style={ctaStyles}>Get in touch for a free quote today!</p>*/}

        {/*  <div style={divStyle}>Brown</div>*/}

        {/*  <div style={letterStyle}>This is a letters color</div>*/}

        {/*  <div style={darkBrownStyle}>This is a dark brown color</div>*/}

        {/*  <div style={greyStyle}>This is a grey color with dark grey letters</div>*/}
        {/*</section>*/}
      </div>
      </>
  );
}

const sectionStyles = {
  padding: '50px',
  backgroundColor: '#FFFFFF' /* '#FFA500' */,
  // color: '#FFF8DC',
  // textAlign: 'center',
};

const headingStyles = {
  color: '#EFA92F',
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const paragraphStyles = {
  color: '#4C3C2E',
  fontSize: '18px',
  lineHeight: '1.6',
};

const ctaStyles = {
  color: '#F8E370',
  fontSize: '24px',
  fontWeight: 'bold',
  marginTop: '40px',
};

const divStyle = {
  backgroundColor: '#75563C',
  fontSize: '100px',
};

const letterStyle = {
  backgroundColor: '#FFFFFF',
  color: '#EFA92F',
  fontSize: '100px',
};

const darkBrownStyle = {
  backgroundColor: '#4C3C2E',
  fontSize: '100px',
  color: '#F8E370',
};

const greyStyle = {
  backgroundColor: '#ADADAD',
  color: '#848484',
  fontSize: '100px',
};

export default HomePage;


// import React from "react";
// import Hero from "../components/hero/Hero"

// const HomePage = () => {
//   return (
//     <>
//     <Hero />

//     <section style={sectionStyles}>

//         <h1 style={headingStyles}>Welcome to LEXI Construction Services</h1>

//           <p style={paragraphStyles}>Your dream home is just a renovation away!  We provide home, office, and apartment renovation services including electrical work, painting, and plastering. Our services are ideal for landlords, investors, and property owners looking to refresh or renovate their spaces.
//           </p>

//           <p style={ctaStyles}>Get in touch for a free quote today!</p>

//           <div style={divStyle}>Brown</div>

//           <div style={letterStyle}>This is a letters color</div>

//           <div style={darkBrownStyle}>This is a dark brown color</div>

//           <div style={greyStyle}>This is a grey color with dark grey letters</div>
//     </section>
//     </>
//   );
// }

// const sectionStyles = {
//   padding: '50px',
//   backgroundColor: '#FFFFFF' /* '#FFA500' */,
//   // color: '#FFF8DC',
//   // textAlign: 'center',
// };

// const headingStyles = {
//   color: '#EFA92F',
//   fontSize: '36px',
//   fontWeight: 'bold',
//   marginBottom: '20px',
// };

// const paragraphStyles = {
//   color: '#4C3C2E',
//   fontSize: '18px',
//   lineHeight: '1.6',
// };

// const ctaStyles = {
//   color: '#F8E370',
//   fontSize: '24px',
//   fontWeight: 'bold',
//   marginTop: '40px',
// };

// const divStyle = {
//   backgroundColor: '#75563C',
//   fontSize: '100px',
// };

// const letterStyle = {
//   backgroundColor: '#FFFFFF',
//   color: '#EFA92F',
//   fontSize: '100px',
// };

// const darkBrownStyle = {
//   backgroundColor: '#4C3C2E',
//   fontSize: '100px',
//   color: '#F8E370',
// };

// const greyStyle = {
//   backgroundColor: '#ADADAD',
//   color: '#848484',
//   fontSize: '100px',
// };

// export default HomePage;