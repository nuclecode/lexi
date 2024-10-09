import React from 'react';
import Image from 'next/image';
import logo from '../../public/Business card-LEXI_02_for PRINT-02.jpg'; 


const Footer = () => {
  return (
    <footer style={footerStyles}>
       <div style={footerContainerStyles}>
        <div style={footerColumn}>
          <Image src={logo} alt="LEXI Logo" width={350} height={150}/>
        </div>
        <div style={footerColumn}>
          <h4 style={footerTitleStyles}>FOR </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>Landlords</li>
            <li style={listItemStyles}>Investors</li>
            <li style={listItemStyles}>Renovators</li>
            <li style={listItemStyles}>Property Developers</li>
          </ul>
        </div>
        <div style={footerColumn}>
          <h4 style={footerTitleStyles}>SERVICES</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>Electrical Work</li>
            <li style={listItemStyles}>Plastering</li>
            <li style={listItemStyles}>Painting</li>
            <li style={listItemStyles}>Full Renovation</li>
          </ul>
        </div>
        <div style={footerColumn}>
          <h4 style={footerTitleStyles}>ABOUT US</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>Our Team</li>
            <li style={listItemStyles}>Clients</li>
            <li style={listItemStyles}>Collaborations</li>
            <li style={listItemStyles}>Testimonials</li>
          </ul>
        </div>
        <div style={footerColumn}>
          <h4 style={footerTitleStyles}>CONTACT US</h4>
          <p style={contactStyles}>📞 Phone: <a href="tel:07482051203">07482051203</a></p>
          <p style={contactStyles}>info@lexi.ltd</p>
          <p style={contactStyles}>123 Renovation Street</p>
          <p style={contactStyles}>London, UK</p>
        </div>
      </div>
      <div style={bottomFooterStyles}>
        <p style={bottomTextStyles}>Privacy Policy</p>
      </div>
      <p>&copy; {new Date().getFullYear()} LEXI Construction Services. | All Rights Reserved. | Privacy Policy</p>
      <p className="footer-engineered">
        <a href="https://nuclecode.uk" target="_blank" rel="noopener noreferrer">
        Engineered by nuclecode
      </a></p>
    </footer>
  );
};

const footerStyles = {
  backgroundColor: '#75563C', // Light brown
  padding: '50px 0',
  color: '#FFFFFF', // White text color
  // boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.15)',
    backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMCIgd2lkdGg9IjEwMCI+PHJlY3Qgd2lkdGg9IjEwMCUgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNzU1NjNDIi8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSI1IiB5PSI1IiBmaWxsPSIjNEMzQzJFIiBvcGFjaXR5PSIwLjYiLz48L3N2Zz4=)`, // Flecks effect
  backgroundSize: 'contain',


};

const footerContainerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 50px 0 10px',
  margin: '0 3rem 0 3rem',
  textAlign: 'left',

};

const footerColumn = {
  flex: '1',
  margin: '1rem',
};

const footerTitleStyles = {
  color: '#F8E370', // Light yellow
  fontSize: '18px',
  marginBottom: '15px',
  fontWeight: 'bold',
};

const listStyles = {
  listStyle: 'none',
  padding: '0',
};

const listItemStyles = {
  color: '#FFFFFF', 
  marginBottom: '10px',
  fontSize: '14px',
};

const contactStyles = {
  color: '#FFFFFF', // White text for contact info
  marginBottom: '10px',
};

const bottomFooterStyles = {
  backgroundColor: '#4C3C2E', // Dark brown
  padding: '20px 0',
  textAlign: 'center',
  boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.15)',
   backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMCIgd2lkdGg9IjEwMCI+PHJlY3Qgd2lkdGg9IjEwMCUgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNzU1NjNDIi8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSI1IiB5PSI1IiBmaWxsPSIjNEMzQzJFIiBvcGFjaXR5PSIwLjYiLz48L3N2Zz4=)`, // Flecks effect
   backgroundSize: 'contain',

};

const bottomTextStyles = {
  color: '#FFFFFF', // White text for bottom section
  fontSize: '12px',
};

export default Footer;
