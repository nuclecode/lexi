import React from 'react';
import Image from 'next/image';
import logo from '../../../public/Business card-LEXI_02_for PRINT-02.jpg'; 

const Header = () => {
  return (
    <header style={headerStyles}>
      <div style={logoContainer}>
        <Image src={logo} alt="LEXI Logo" width={160} height={90} />
      </div>
      <nav style={navStyles}>
        <a href="/" style={linkStyles}>Home</a>
        <a href="/about" style={linkStyles}>About Us</a>
        <a href="/services" style={linkStyles}>Services</a>
        <a href="/solutions" style={linkStyles}>Solutions</a>
        <a href="/contact" style={linkStyles}>Contact</a>
      </nav>
    </header>
  );
};

const headerStyles = {
  backgroundColor: '#75563C', // Light brown
  color: '#F8E370', // Light yellow
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 50px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
};

const logoContainer = {
  display: 'flex',
  alignItems: 'center',
};

const navStyles = {
  display: 'flex',
  gap: '20px',
};

const linkStyles = {
  color: '#FFFFFF', // White
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '16px',
};

export default Header;
