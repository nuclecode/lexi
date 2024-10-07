import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <div style={footerContainerStyles}>
        <div style={footerColumn}>
          <h4 style={footerTitleStyles}>FOR</h4>
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
          <p style={contactStyles}>+44 123 456 789</p>
          <p style={contactStyles}>info@lexi.com</p>
          <p style={contactStyles}>123 Renovation Street</p>
          <p style={contactStyles}>London, UK</p>
        </div>
      </div>
      <div style={bottomFooterStyles}>
        <p style={bottomTextStyles}>© 2024 LEXI Construction Services | All rights reserved</p>
        <p style={bottomTextStyles}>Privacy Policy</p>
      </div>
    </footer>
  );
};

const footerStyles = {
  backgroundColor: '#75563C', // Light brown
  padding: '50px 0',
  color: '#FFFFFF', // White text color
};

const footerContainerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 50px',
  maxWidth: '1200px',
  margin: '0 auto',
  textAlign: 'left',
};

const footerColumn = {
  flex: '1',
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
  color: '#EFA92F', // Dark yellow
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
};

const bottomTextStyles = {
  color: '#FFFFFF', // White text for bottom section
  fontSize: '12px',
};

export default Footer;




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
