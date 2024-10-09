import React from "react";

const HomePage = () => {
  return (
    <section style={sectionStyles}> 
      
        <h1 style={headingStyles}>Welcome to LEXI Construction Services</h1>

          <p style={paragraphStyles}>Your dream home is just a renovation away!  We provide home, office, and apartment renovation services including electrical work, painting, and plastering. Our services are ideal for landlords, investors, and property owners looking to refresh or renovate their spaces.
          </p>

          <p style={ctaStyles}>Get in touch for a free quote today!</p>

          <div style={divStyle}>Brown</div>

          <div style={letterStyle}>This is a letters color</div>

          <div style={darkBrownStyle}>This is a dark brown color</div>

          <div style={greyStyle}>This is a grey color with dark grey letters</div>
    </section>  
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