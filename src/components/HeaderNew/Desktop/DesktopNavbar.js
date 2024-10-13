'use client'

import React, { useState, useEffect } from 'react';
import { FaPhoneVolume } from 'react-icons/fa6';
import styles from './DesktopNavbar.module.scss';

const DesktopNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.navContent}>
                <h1 className={styles.logo}>Logo</h1>
                <ul className={styles.navLinks}>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/solutions">Solutions</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <div className={styles.contactInfo}>
                    <FaPhoneVolume className={`${styles.phoneIcon} ${styles.ringing}`} />
                    <span className={styles.phoneNumber}>+1 (234) 567-8901</span>
                </div>
            </div>
        </nav>
    );
};

export default DesktopNavbar;
