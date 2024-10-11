"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/Business card-LEXI_02_for PRINT-02.jpg'; 

import styles from './Header.module.scss';
import { useRouter } from 'next/navigation';


export default function Header() {
  const [isTransparent, setIsTransparent] = useState(false);
  const [currentPage, setCurrentPage] = useState('/');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [glowIndex, setGlowIndex] = useState(0);
  const menuItems = ['/', '/about', '/services', '/solutions', '/contact'];
  const router = useRouter();

  const handleScroll = () => {
    setIsTransparent(window.scrollY > 50);
  };


  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIndex((prevIndex) => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * menuItems.length);
        } while (newIndex === prevIndex); // Avoid glowing the same item consecutively
        return newIndex;
      });
    }, 2000); // Change the glowing item every 2 seconds

    return () => clearInterval(interval);
  }, [menuItems]);

  const handleMenuItemClick = (page) => {
    setCurrentPage(page);
    router.push(page);
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isTransparent ? styles.transparent : ''}`}>
      <div className={styles.logoContainer} onClick={() => handleMenuItemClick('/')}>
        <Image src={logo} alt="LEXI Logo" width={160} height={90} />
      </div>
      <nav className={`${styles.navStyles} ${isMenuOpen ? styles.showNav : ''}`}>
        {menuItems.map((item, index) => (
          <a 
            key={item}
            className={`${styles.linkStyles} ${currentPage === item ? styles.active : ''} ${glowIndex === index ? styles.glow : ''}`}
            onClick={() => handleMenuItemClick(item)}
          >
            {item === '/' ? 'Home' : item.charAt(1).toUpperCase() + item.slice(2)} {/* Capitalize the first letter */}
          </a>
        ))}
        </nav>
      <div className={styles.callButton} onClick={() => window.location.href = 'tel:+44(0)7482051203'}>
        Call Us
      </div>
      <div className={styles.burgerMenu} onClick={toggleMenu}>☰</div>
    </header>
  );
}