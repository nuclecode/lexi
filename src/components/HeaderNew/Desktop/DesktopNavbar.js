'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { BiPhoneCall } from "react-icons/bi";import styles from './DesktopNavbar.module.scss';

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
                <Image
                    src='/lexi-logot.svg'
                    alt="Logo"
                    width={80}
                    height={40}
                />                <ul className={styles.navLinks}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/solutions">Solutions</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <div className={styles.contactInfo}>
                    <BiPhoneCall className={`${styles.phoneIcon} ${styles.ringing}`} />
                    <a href="tel:07482051203" className={styles.phoneNumber}>
                        07482051203
                    </a></div>
            </div>
        </nav>
    );
    };

export default DesktopNavbar;
