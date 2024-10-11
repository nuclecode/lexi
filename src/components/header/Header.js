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




// v12
// "use client";

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import logo from '../../../public/Business card-LEXI_02_for PRINT-02.jpg'; 
// import styles from './Header.module.scss';
// import { useRouter } from 'next/navigation';

// export default function Header() {
//   const [isTransparent, setIsTransparent] = useState(false);
//   // const [activeIndex, setActiveIndex] = useState(0);
//   const [currentPage, setCurrentPage] = useState('/');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [glowIndex, setGlowIndex] = useState(0);
  
//   const menuItems = ['/', '/about', '/services', '/solutions', '/contact'];
//   const router = useRouter();

//   // Handle scrolling for transparent header
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsTransparent(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Glowing effect for menu items
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setGlowIndex((prevIndex) => {
//         let newIndex;
//         do {
//           newIndex = Math.floor(Math.random() * menuItems.length);
//         } while (newIndex === prevIndex); // Avoid glowing the same item consecutively
//         return newIndex;
//       });
//     }, 2000); // Change the glowing item every 2 seconds

//     return () => clearInterval(interval);
//   }, []);

//   // Handle menu item click
//   const handleMenuItemClick = (page) => {
//     setCurrentPage(page);
//     router.push(page);
//     setIsMenuOpen(false); // Close the menu after selecting an item
//   };

//   // Toggle burger menu on mobile
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className={`${styles.header} ${isTransparent ? styles.transparent : ''}`}>
//       <div className={styles.logoContainer} onClick={() => handleMenuItemClick('/')}>
//         <Image src={logo} alt="LEXI Logo" width={160} height={90} />
//       </div>
//       <nav className={`${styles.navStyles} ${isMenuOpen ? styles.showNav : ''}`}>
//         {menuItems.map((item, index) => (
//           <a 
//             key={item}
//             className={`${styles.linkStyles} ${currentPage === item ? styles.active : ''} ${glowIndex === index ? styles.glow : ''}`}
//             onClick={() => handleMenuItemClick(item)}
//           >
//             {item === '/' ? 'Home' : item.charAt(1).toUpperCase() + item.slice(2)} {/* Capitalize the first letter */}
//           </a>
//         ))}
//       </nav>
//       <div 
//         className={styles.callButton} 
//         onClick={() => window.location.href = 'tel:+1234567890'} // Replace with your phone number
//       >
//         Call Us
//       </div>
//       <div className={styles.burgerMenu} onClick={toggleMenu}>☰</div> {/* Toggle burger menu */}
//     </header>
//   );
// };



// // "use client";

// // import { useEffect, useState } from 'react';
// // import styles from './Header.module.scss';

// // const Header = () => {
// //   const [glowingItem, setGlowingItem] = useState(null);
// //   const [menuOpen, setMenuOpen] = useState(false); // State to track burger menu

// //   // Random glowing effect logic
// //   useEffect(() => {
// //     const menuItems = document.querySelectorAll(`.${styles.nav} a`);
// //     const randomGlow = () => {
// //       const randomIndex = Math.floor(Math.random() * menuItems.length);
// //       setGlowingItem(randomIndex);
// //     };

// //     const interval = setInterval(randomGlow, 3000); // Change every 3 seconds

// //     return () => clearInterval(interval); // Clean up interval on unmount
// //   }, []);

// //   // Toggle burger menu on mobile
// //   const toggleMenu = () => {
// //     setMenuOpen(!menuOpen);
// //   };

// //   return (
// //     <header className={`${styles.header} ${menuOpen ? styles['show-nav'] : ''}`}>
// //       <div className={styles.logo}>Logo</div>
// //       <nav className={styles.nav}>
// //         <a className={glowingItem === 0 ? styles['random-glow'] : ''} href="#home">Home</a>
// //         <a className={glowingItem === 1 ? styles['random-glow'] : ''} href="#services">Services</a>
// //         <a className={glowingItem === 2 ? styles['random-glow'] : ''} href="#about">About</a>
// //         <a className={glowingItem === 3 ? styles['random-glow'] : ''} href="#contact">Contact</a>
// //       </nav>
// //       <button className={styles.callButton}>Call Us</button>
// //       <div className={styles['burger-menu']} onClick={toggleMenu}>☰</div> {/* Toggle burger menu */}
// //     </header>
// //   );
// // };

// // export default Header;



// // "use client";
// // import React, { useEffect, useState } from 'react';
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import logo from '../../../public/Business card-LEXI_02_for PRINT-02.jpg';
// // import styles from './Header.module.scss';

// // export default function Header() {
// //   const [isTransparent, setIsTransparent] = useState(false);
// //   const [activeIndex, setActiveIndex] = useState(0);

// //   const [glowingItem, setGlowingItem] = useState(null);

// //   useEffect(() => {
// //     const menuItems = document.querySelectorAll(`.${styles.nav} a`);
// //     const randomGlow = () => {
// //       const randomIndex = Math.floor(Math.random() * menuItems.length);
// //       setGlowingItem(randomIndex);
// //     };

// //     const interval = setInterval(randomGlow, 3000); // Change every 3 seconds

// //     return () => clearInterval(interval); // Clean up interval on unmount
// //   }, []);
  
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (window.scrollY > 200) {
// //         setIsTransparent(true);
// //       } else {
// //         setIsTransparent(false);
// //       }
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setActiveIndex((prevIndex) => (prevIndex + 1) % 5); // 5 is the number of menu items
// //     }, 2000); // Change every 2 seconds

// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <header className={`${styles.header} ${isTransparent ? styles.transparent : ''}`}>
// //       <div className={styles.logo}>
// //         <Link href="/">
// //           <Image src={logo} alt="LEXI Logo" width={160} height={90} />
// //         </Link>
// //       </div>
      
// //       <nav className={styles.nav}>
// //         {['Home', 'About Us', 'Services', 'Solutions', 'Contact'].map((item, index) => (
// //           <Link className={glowingItem === {item} ? styles['random-glow'] : ''} key={item} href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className={`${styles.link} ${activeIndex === index ? styles.active : ''}`}>
// //             {item}
// //           </Link>
// //         ))}
// //       </nav>

// //       <button className={styles.callButton} onClick={() => window.location.href = 'tel:+1234567890'}>
// //         Call Us
// //       </button>
// //       <div className={styles['burger-menu']}>☰</div>

// //     </header>
// //   );
// // }



// // //V6

// // "use client";
// // import React, { useEffect, useState } from 'react';
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import logo from '../../../public/Business card-LEXI_02_for PRINT-02.jpg';
// // import styles from './Header.module.scss';

// // export default function Header() {
// //   const [isTransparent, setIsTransparent] = useState(false);
// //   const [activeIndex, setActiveIndex] = useState(0);
  
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (window.scrollY > 200) {
// //         setIsTransparent(true);
// //       } else {
// //         setIsTransparent(false);
// //       }
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setActiveIndex((prevIndex) => (prevIndex + 1) % 5); // 5 is the number of menu items
// //     }, 2000); // Change every 2 seconds

// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <header className={`${styles.header} ${isTransparent ? styles.transparent : ''}`}>
// //       <div className={styles.logo}>
// //         <Link href="/">
// //           <Image src={logo} alt="LEXI Logo" width={160} height={90} />
// //         </Link>
// //       </div>
      
// //       <nav className={styles.nav}>
// //         {['Home', 'About Us', 'Services', 'Solutions', 'Contact'].map((item, index) => (
// //           <Link key={item} href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className={`${styles.link} ${activeIndex === index ? styles.active : ''}`}>{item}
// //           </Link>
// //         ))}
// //       </nav>

// //       <button className={styles.callButton} onClick={() => window.location.href = 'tel:+1234567890'}>
// //         Call Us
// //       </button>
// //     </header>
// //   );
// // }


// // //V5 GOOD_5 MENU ITEMS GLOW AND DEFINE THE PAGE - this is working model

// // "use client";
// // import React, { useEffect, useState } from 'react';
// // import Image from 'next/image';
// // // import Link from 'next/Link';
// // import logo from '../../../public/Business card-LEXI_02_for PRINT-02.jpg'; 
// // import styles from './Header.module.scss';
// // import { useRouter } from 'next/navigation';

// // export default function Header() {
// //   const [isTransparent, setIsTransparent] = useState(false);

// //   const [activeIndex, setActiveIndex] = useState(0);


// //   const [currentPage, setCurrentPage] = useState('/');
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [glowIndex, setGlowIndex] = useState(0);
// //   const menuItems = ['/', '/about', '/services', '/solutions', '/contact'];
// //   const router = useRouter();

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsTransparent(window.scrollY > 50);
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setGlowIndex((prevIndex) => {
// //         let newIndex;
// //         do {
// //           newIndex = Math.floor(Math.random() * menuItems.length);
// //         } while (newIndex === prevIndex); // Avoid glowing the same item consecutively
// //         return newIndex;
// //       });
// //     }, 2000); // Change the glowing item every 2 seconds

// //     return () => clearInterval(interval);
// //   }, []);

// //   const handleMenuItemClick = (page) => {
// //     setCurrentPage(page);
// //     router.push(page);
// //     setIsMenuOpen(false);
// //   };

  
// //   // Toggle burger menu on mobile
// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };


// //   return (
// //     <header className={`${styles.header} ${isTransparent ? styles.transparent : ''}`}>
// //       <div className={styles.logoContainer} onClick={() => handleMenuItemClick('/')}>
// //         <Image src={logo} alt="LEXI Logo" width={160} height={90} />
// //       </div>
// //       <nav className={`${styles.navStyles} ${isMenuOpen ? styles['show-nav'] : ''}`}>
// //         {menuItems.map((item, index) => (
// //           <a 
// //             key={item}
// //             className={`${styles.linkStyles} ${currentPage === item ? styles.active : ''} ${glowIndex === index ? styles.glow : ''}`}
// //             onClick={() => handleMenuItemClick(item)}
// //           >
// //             {item === '/' ? 'Home' : item.charAt(1).toUpperCase() + item.slice(2)} {/* Capitalize the first letter */}
// //           </a>
// //         ))}
// //       </nav>
// //       <div 
// //         className={styles.callButton} 
// //         onClick={() => window.location.href = 'tel:+1234567890'} // Replace with your phone number
// //       >
// //         Call Us
// //       </div>
// //       <div className={styles['burger-menu']} onClick={toggleMenu}>☰</div> {/* Toggle burger menu */}
      
// //     </header>
// //   );
// // };



// //V4


// // "use client";
// // import React, { useEffect, useState } from 'react';
// // import Image from 'next/image';
// // import logo from '../../../public/Business card-LEXI_02_for PRINT-02.jpg'; 
// // import styles from './Header.module.scss';
// // import { useRouter } from 'next/navigation';

// // export default function Header() {
// //   const [isTransparent, setIsTransparent] = useState(false);
// //   const [currentPage, setCurrentPage] = useState('/');
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [glowIndex, setGlowIndex] = useState(0);
// //   const menuItems = ['/', '/about', '/services', '/solutions', '/contact'];
// //   const router = useRouter();

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsTransparent(window.scrollY > 50);
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setGlowIndex((prevIndex) => {
// //         let newIndex;
// //         do {
// //           newIndex = Math.floor(Math.random() * menuItems.length);
// //         } while (newIndex === prevIndex); // Avoid glowing the same item consecutively
// //         return newIndex;
// //       });
// //     }, 2000); // Change the glowing item every 2 seconds

// //     return () => clearInterval(interval);
// //   }, []);

// //   const handleMenuItemClick = (page) => {
// //     setCurrentPage(page);
// //     router.push(page);
// //     setIsMenuOpen(false);
// //   };

// //   return (
// //     <header className={`${styles.header} ${isTransparent ? styles.transparent : ''}`}>
// //       <div className={styles.logoContainer} onClick={() => handleMenuItemClick('/')}>
// //         <Image src={logo} alt="LEXI Logo" width={160} height={90} />
// //       </div>
// //       <nav className={styles.navStyles}>
// //         {menuItems.map((item, index) => (
// //           <a 
// //             key={item}
// //             className={`${styles.linkStyles} ${currentPage === item ? styles.active : ''} ${glowIndex === index ? styles.glow : ''}`}
// //             onClick={() => handleMenuItemClick(item)}
// //           >
// //             {item === '/' ? 'Home' : item.charAt(1).toUpperCase() + item.slice(2)} {/* Capitalize the first letter */}
// //           </a>
// //         ))}
// //       </nav>
// //       <div 
// //         className={styles.callButton} 
// //         onClick={() => window.location.href = 'tel:+1234567890'} // Replace with your phone number
// //       >
// //         Call Us
// //       </div>
// //     </header>
// //   );
// // };


// //V3
// // "use client";
// // import React, { useEffect, useState } from 'react';
// // import Image from 'next/image';
// // import logo from '../../../public/Business card-LEXI_02_for PRINT-02.jpg'; 
// // import styles from './Header.module.scss';
// // import { useRouter } from 'next/navigation';

// // export default function Header() {
// //   const [isTransparent, setIsTransparent] = useState(false);
// //   const [currentPage, setCurrentPage] = useState('/');
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const router = useRouter();

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsTransparent(window.scrollY > 50);
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const handleMenuItemClick = (page) => {
// //     setCurrentPage(page);
// //     router.push(page);
// //     setIsMenuOpen(false);
// //   };

// //   return (
// //     <header className={`${styles.header} ${isTransparent ? styles.transparent : ''}`}>
// //       <div className={styles.logoContainer} onClick={() => handleMenuItemClick('/')}>
// //         <Image src={logo} alt="LEXI Logo" width={160} height={90} />
// //       </div>
// //       <div 
// //         className={styles.callButton} 
// //         onClick={() => window.location.href = 'tel:+1234567890'} // Replace with your phone number
// //       >
// //         Call Us
// //       </div>
// //       <div className={styles.burger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
// //         <div className={styles.burgerLine} />
// //         <div className={styles.burgerLine} />
// //         <div className={styles.burgerLine} />
// //       </div>
// //       <nav className={`${styles.navStyles} ${isMenuOpen ? styles.open : ''}`}>
// //         <a 
// //           className={`${styles.linkStyles} ${currentPage === '/' ? styles.active : ''}`}
// //           onClick={() => handleMenuItemClick('/')}
// //         >
// //           Home
// //         </a>
// //         <a 
// //           className={`${styles.linkStyles} ${currentPage === '/about' ? styles.active : ''}`}
// //           onClick={() => handleMenuItemClick('/about')}
// //         >
// //           About Us
// //         </a>
// //         <a 
// //           className={`${styles.linkStyles} ${currentPage === '/services' ? styles.active : ''}`}
// //           onClick={() => handleMenuItemClick('/services')}
// //         >
// //           Services
// //         </a>
// //         <a 
// //           className={`${styles.linkStyles} ${currentPage === '/solutions' ? styles.active : ''}`}
// //           onClick={() => handleMenuItemClick('/solutions')}
// //         >
// //           Solutions
// //         </a>
// //         <a 
// //           className={`${styles.linkStyles} ${currentPage === '/contact' ? styles.active : ''}`}
// //           onClick={() => handleMenuItemClick('/contact')}
// //         >
// //           Contact
// //         </a>
// //       </nav>
// //     </header>
// //   );
// // };




// // // GOOD_1 TRANSPARENT 
// // "use client";
// // import React, { useEffect, useState } from 'react';
// // import Image from 'next/image';
// // import logo from '../../../public/Business card-LEXI_02_for PRINT-02.jpg'; 
// // import styles from './Header.module.scss';
// // import { useRouter } from 'next/navigation';

// // export default function Header() {
// //   const [isTransparent, setIsTransparent] = useState(false);
// //   const [currentPage, setCurrentPage] = useState('/');
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const router = useRouter();

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsTransparent(window.scrollY > 50);
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const handleMenuItemClick = (page) => {
// //     setCurrentPage(page);
// //     router.push(page);
// //     setIsMenuOpen(false);
// //   };

// //   return (
// //     <header className={`${styles.header} ${isTransparent ? styles.transparent : ''}`}>
// //       <div className={styles.logoContainer} onClick={() => handleMenuItemClick('/')}>
// //         <Image src={logo} alt="LEXI Logo" width={160} height={90} />
// //       </div>
// //       <div className={styles.callButton} onClick={() => alert('Call us clicked!')}>
// //         Call Us
// //       </div>
// //       <div className={styles.burger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
// //         <div className={styles.burgerLine} />
// //         <div className={styles.burgerLine} />
// //         <div className={styles.burgerLine} />
// //       </div>
// //       <nav className={`${styles.navStyles} ${isMenuOpen ? styles.open : ''}`}>
// //         <a 
// //           className={`${styles.linkStyles} ${currentPage === '/' ? styles.active : ''}`}
// //           onClick={() => handleMenuItemClick('/')}
// //         >
// //           Home
// //         </a>
// //         <a 
// //           className={`${styles.linkStyles} ${currentPage === '/about' ? styles.active : ''}`}
// //           onClick={() => handleMenuItemClick('/about')}
// //         >
// //           About Us
// //         </a>
// //         <a 
// //           className={`${styles.linkStyles} ${currentPage === '/services' ? styles.active : ''}`}
// //           onClick={() => handleMenuItemClick('/services')}
// //         >
// //           Services
// //         </a>
// //         <a 
// //           className={`${styles.linkStyles} ${currentPage === '/solutions' ? styles.active : ''}`}
// //           onClick={() => handleMenuItemClick('/solutions')}
// //         >
// //           Solutions
// //         </a>
// //         <a 
// //           className={`${styles.linkStyles} ${currentPage === '/contact' ? styles.active : ''}`}
// //           onClick={() => handleMenuItemClick('/contact')}
// //         >
// //           Contact
// //         </a>
// //       </nav>
// //     </header>
// //   );
// // };




// // "use client";
// // import React, { useEffect, useState } from 'react';
// // import Image from 'next/image';
// // import { useRouter } from 'next/navigation';
// // import logo from '../../../public/Business card-LEXI_02_for PRINT-02.jpg'; 
// // import styles from './Header.module.scss';

// // export default function Header() {
// //   const [isTransparent, setIsTransparent] = useState(false);
// //   const [activeLink, setActiveLink] = useState('');
// //   const router = useRouter();

// //   const handleScroll = () => {
// //     if (window.scrollY > 200) {
// //       setIsTransparent(true);
// //     } else {
// //       setIsTransparent(false);
// //     }
// //   };

// //   const handleClick = (link) => {
// //     setActiveLink(link);
// //     router.push(link);
// //   };

// //   const handleCallUs = () => {
// //     window.location.href = 'tel:+1234567890'; // Replace with the actual phone number
// //   };

// //   useEffect(() => {
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   useEffect(() => {
// //     const currentPath = window.location.pathname;
// //     setActiveLink(currentPath); // Set active link on initial render
// //   }, []);

// //   return (
// //     <header className={`${styles.header} ${isTransparent ? styles.transparent : ''}`}>
// //       <div className={styles.logoContainer} onClick={() => handleClick('/')}>
// //         <Image src={logo} alt="LEXI Logo" width={160} height={90} />
// //       </div>
// //       <nav className={styles.navStyles}>
// //         <a 
// //           href="/" 
// //           className={`${styles.linkStyles} ${activeLink === '/' ? `${styles.active} ${styles.glow}` : styles.glow}`}
// //           onClick={() => handleClick('/')}
// //         >
// //           Home
// //         </a>
// //         <a 
// //           href="/about" 
// //           className={`${styles.linkStyles} ${activeLink === '/about' ? `${styles.active} ${styles.glow}` : styles.glow}`}
// //           onClick={() => handleClick('/about')}
// //         >
// //           About Us
// //         </a>
// //         <a 
// //           href="/services" 
// //           className={`${styles.linkStyles} ${activeLink === '/services' ? `${styles.active} ${styles.glow}` : styles.glow}`}
// //           onClick={() => handleClick('/services')}
// //         >
// //           Services
// //         </a>
// //         <a 
// //           href="/solutions" 
// //           className={`${styles.linkStyles} ${activeLink === '/solutions' ? `${styles.active} ${styles.glow}` : styles.glow}`}
// //           onClick={() => handleClick('/solutions')}
// //         >
// //           Solutions
// //         </a>
// //         <a 
// //           href="/contact" 
// //           className={`${styles.linkStyles} ${activeLink === '/contact' ? `${styles.active} ${styles.glow}` : styles.glow}`}
// //           onClick={() => handleClick('/contact')}
// //         >
// //           Contact
// //         </a>
// //       </nav>
// //       <button className={styles.callButton} onClick={handleCallUs}>
// //         Call Us
// //       </button>
// //     </header>
// //   );
// // }




// // // // // // // // // "use client";
// // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // import Image from 'next/image';
// // // // // // // // // import { useRouter } from 'next/navigation';
// // // // // // // // // import logo from '../../../public/Business card-LEXI_02_for PRINT-02.jpg'; 
// // // // // // // // // import styles from './Header.module.scss';

// // // // // // // // // export default function Header() {
// // // // // // // // //   const [isTransparent, setIsTransparent] = useState(false);
// // // // // // // // //   const [activeLink, setActiveLink] = useState('');
// // // // // // // // //   const router = useRouter();

// // // // // // // // //   const handleScroll = () => {
// // // // // // // // //     if (window.scrollY > 200) {
// // // // // // // // //       setIsTransparent(true);
// // // // // // // // //     } else {
// // // // // // // // //       setIsTransparent(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleClick = (link) => {
// // // // // // // // //     setActiveLink(link);
// // // // // // // // //     router.push(link);
// // // // // // // // //   };

// // // // // // // // //   const handleCallUs = () => {
// // // // // // // // //     window.location.href = 'tel:+1234567890'; // Replace with the actual phone number
// // // // // // // // //   };

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // // //   }, []);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const currentPath = window.location.pathname;
// // // // // // // // //     setActiveLink(currentPath); // Set active link on initial render
// // // // // // // // //   }, []);

// // // // // // // // //   return (
// // // // // // // // //     <header className={`${styles.header} ${isTransparent ? styles.transparent : ''}`}>
// // // // // // // // //       <div className={styles.logoContainer} onClick={() => handleClick('/')}>
// // // // // // // // //         <Image src={logo} alt="LEXI Logo" width={160} height={90} />
// // // // // // // // //       </div>
// // // // // // // // //       <nav className={styles.navStyles}>
// // // // // // // // //         <a 
// // // // // // // // //           href="/" 
// // // // // // // // //           className={`${styles.linkStyles} ${activeLink === '/' ? styles.active : ''}`}
// // // // // // // // //           onClick={() => handleClick('/')}
// // // // // // // // //         >
// // // // // // // // //           Home
// // // // // // // // //         </a>
// // // // // // // // //         <a 
// // // // // // // // //           href="/about" 
// // // // // // // // //           className={`${styles.linkStyles} ${activeLink === '/about' ? styles.active : ''}`}
// // // // // // // // //           onClick={() => handleClick('/about')}
// // // // // // // // //         >
// // // // // // // // //           About Us
// // // // // // // // //         </a>
// // // // // // // // //         <a 
// // // // // // // // //           href="/services" 
// // // // // // // // //           className={`${styles.linkStyles} ${activeLink === '/services' ? styles.active : ''}`}
// // // // // // // // //           onClick={() => handleClick('/services')}
// // // // // // // // //         >
// // // // // // // // //           Services
// // // // // // // // //         </a>
// // // // // // // // //         <a 
// // // // // // // // //           href="/solutions" 
// // // // // // // // //           className={`${styles.linkStyles} ${activeLink === '/solutions' ? styles.active : ''}`}
// // // // // // // // //           onClick={() => handleClick('/solutions')}
// // // // // // // // //         >
// // // // // // // // //           Solutions
// // // // // // // // //         </a>
// // // // // // // // //         <a 
// // // // // // // // //           href="/contact" 
// // // // // // // // //           className={`${styles.linkStyles} ${activeLink === '/contact' ? styles.active : ''}`}
// // // // // // // // //           onClick={() => handleClick('/contact')}
// // // // // // // // //         >
// // // // // // // // //           Contact
// // // // // // // // //         </a>
// // // // // // // // //       </nav>
// // // // // // // // //       <button className={styles.callButton} onClick={handleCallUs}>
// // // // // // // // //         Call Us
// // // // // // // // //       </button>
// // // // // // // // //     </header>
// // // // // // // // //   );
// // // // // // // // // }



// // // // // // // // // // "use client";
// // // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // // import Image from 'next/image';
// // // // // // // // // // import { useRouter } from 'next/navigation';
// // // // // // // // // // import logo from '../../../public/Business card-LEXI_02_for PRINT-02.jpg'; 
// // // // // // // // // // import styles from './Header.module.scss';

// // // // // // // // // // export default function Header() {
// // // // // // // // // //   const [isTransparent, setIsTransparent] = useState(false);
// // // // // // // // // //   const [activeLink, setActiveLink] = useState('');
// // // // // // // // // //   const router = useRouter();

// // // // // // // // // //   const handleScroll = () => {
// // // // // // // // // //     if (window.scrollY > 200) {
// // // // // // // // // //       setIsTransparent(true);
// // // // // // // // // //     } else {
// // // // // // // // // //       setIsTransparent(false);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleClick = (link) => {
// // // // // // // // // //     setActiveLink(link);
// // // // // // // // // //     router.push(link);
// // // // // // // // // //   };

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // // // //   }, []);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const currentPath = window.location.pathname;
// // // // // // // // // //     setActiveLink(currentPath); // Set active link on initial render
// // // // // // // // // //   }, []);

// // // // // // // // // //   return (
// // // // // // // // // //     <header className={`${styles.header} ${isTransparent ? styles.transparent : ''}`}>
// // // // // // // // // //       <div className={styles.logoContainer} onClick={() => handleClick('/')}>
// // // // // // // // // //         <Image src={logo} alt="LEXI Logo" width={160} height={90} />
// // // // // // // // // //       </div>
// // // // // // // // // //       <nav className={styles.navStyles}>
// // // // // // // // // //         <a 
// // // // // // // // // //           href="/" 
// // // // // // // // // //           className={`${styles.linkStyles} ${activeLink === '/' ? styles.active : ''}`}
// // // // // // // // // //           onClick={() => handleClick('/')}
// // // // // // // // // //         >
// // // // // // // // // //           Home
// // // // // // // // // //         </a>
// // // // // // // // // //         <a 
// // // // // // // // // //           href="/about" 
// // // // // // // // // //           className={`${styles.linkStyles} ${activeLink === '/about' ? styles.active : ''}`}
// // // // // // // // // //           onClick={() => handleClick('/about')}
// // // // // // // // // //         >
// // // // // // // // // //           About Us
// // // // // // // // // //         </a>
// // // // // // // // // //         <a 
// // // // // // // // // //           href="/services" 
// // // // // // // // // //           className={`${styles.linkStyles} ${activeLink === '/services' ? styles.active : ''}`}
// // // // // // // // // //           onClick={() => handleClick('/services')}
// // // // // // // // // //         >
// // // // // // // // // //           Services
// // // // // // // // // //         </a>
// // // // // // // // // //         <a 
// // // // // // // // // //           href="/solutions" 
// // // // // // // // // //           className={`${styles.linkStyles} ${activeLink === '/solutions' ? styles.active : ''}`}
// // // // // // // // // //           onClick={() => handleClick('/solutions')}
// // // // // // // // // //         >
// // // // // // // // // //           Solutions
// // // // // // // // // //         </a>
// // // // // // // // // //         <a 
// // // // // // // // // //           href="/contact" 
// // // // // // // // // //           className={`${styles.linkStyles} ${activeLink === '/contact' ? styles.active : ''}`}
// // // // // // // // // //           onClick={() => handleClick('/contact')}
// // // // // // // // // //         >
// // // // // // // // // //           Contact
// // // // // // // // // //         </a>
// // // // // // // // // //       </nav>
// // // // // // // // // //     </header>
// // // // // // // // // //   );
// // // // // // // // // // }




// // // // // // // // // // // "use client";
// // // // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // // // import Image from 'next/image';
// // // // // // // // // // // import { useRouter } from 'next/navigation'; // Use 'next/navigation' for client components
// // // // // // // // // // // import logo from '../../../public/Business card-LEXI_02_for PRINT-02.jpg'; 
// // // // // // // // // // // import styles from './Header.module.scss';

// // // // // // // // // // // export default function Header() {
// // // // // // // // // // //   const [isTransparent, setIsTransparent] = useState(false);
// // // // // // // // // // //   const router = useRouter(); // Call useRouter at the top level

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // // //       setIsTransparent(window.scrollY > 200);
// // // // // // // // // // //     };

// // // // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   return (
// // // // // // // // // // //     <header className={`${styles.header} ${isTransparent ? styles.transparent : ''}`}>
// // // // // // // // // // //       <div className={styles.logoContainer} onClick={() => router.push('/')}>
// // // // // // // // // // //         <Image src={logo} alt="LEXI Logo" width={160} height={90} />
// // // // // // // // // // //       </div>
// // // // // // // // // // //       <nav className={styles.navStyles}>
// // // // // // // // // // //         <a href="/" className={`${styles.linkStyles} ${router.pathname === '/' ? styles.active : ''}`}>Home</a>
// // // // // // // // // // //         <a href="/about" className={`${styles.linkStyles} ${router.pathname === '/about' ? styles.active : ''}`}>About Us</a>
// // // // // // // // // // //         <a href="/services" className={`${styles.linkStyles} ${router.pathname === '/services' ? styles.active : ''}`}>Services</a>
// // // // // // // // // // //         <a href="/solutions" className={`${styles.linkStyles} ${router.pathname === '/solutions' ? styles.active : ''}`}>Solutions</a>
// // // // // // // // // // //         <a href="/contact" className={`${styles.linkStyles} ${router.pathname === '/contact' ? styles.active : ''}`}>Contact</a>
// // // // // // // // // // //       </nav>
// // // // // // // // // // //       <button className={styles.callButton} onClick={() => alert('Call us at: 123-456-7890')}>
// // // // // // // // // // //         Call Us
// // // // // // // // // // //       </button>
// // // // // // // // // // //     </header>
// // // // // // // // // // //   );
// // // // // // // // // // // }



// // // // // // // // // // // // "use client";

// // // // // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // // // // import Image from 'next/image';
// // // // // // // // // // // // import { useRouter } from 'next/router';
// // // // // // // // // // // // import logo from '../../../public/Business card-LEXI_02_for PRINT-02.jpg'; 
// // // // // // // // // // // // import styles from './Header.module.scss';

// // // // // // // // // // // // export default function Header() {
// // // // // // // // // // // //   const [isTransparent, setIsTransparent] = useState(false);
// // // // // // // // // // // //   const [router, setRouter] = useState(null); // Create a state for the router

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     setRouter(useRouter()); // Set router only when mounted
// // // // // // // // // // // //   }, []);

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // // // //       if (window.scrollY > 200) {
// // // // // // // // // // // //         setIsTransparent(true);
// // // // // // // // // // // //       } else {
// // // // // // // // // // // //         setIsTransparent(false);
// // // // // // // // // // // //       }
// // // // // // // // // // // //     };

// // // // // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // // // // // //   }, []);

// // // // // // // // // // // //   const handleLogoClick = () => {
// // // // // // // // // // // //     if (router) {
// // // // // // // // // // // //       router.push('/'); // Navigate to HomePage.js
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   if (!router) return null; // Avoid rendering until router is set

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <header className={`${styles.header} ${isTransparent ? styles.transparent : ''}`}>
// // // // // // // // // // // //       <div className={styles.logoContainer} onClick={handleLogoClick}>
// // // // // // // // // // // //         <Image src={logo} alt="LEXI Logo" width={160} height={90} />
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //       <nav className={styles.navStyles}>
// // // // // // // // // // // //         <a href="/" className={`${styles.linkStyles} ${router.pathname === '/' ? styles.active : ''}`}>Home</a>
// // // // // // // // // // // //         <a href="/about" className={`${styles.linkStyles} ${router.pathname === '/about' ? styles.active : ''}`}>About Us</a>
// // // // // // // // // // // //         <a href="/services" className={`${styles.linkStyles} ${router.pathname === '/services' ? styles.active : ''}`}>Services</a>
// // // // // // // // // // // //         <a href="/solutions" className={`${styles.linkStyles} ${router.pathname === '/solutions' ? styles.active : ''}`}>Solutions</a>
// // // // // // // // // // // //         <a href="/contact" className={`${styles.linkStyles} ${router.pathname === '/contact' ? styles.active : ''}`}>Contact</a>
// // // // // // // // // // // //       </nav>
// // // // // // // // // // // //       <button className={styles.callButton} onClick={() => alert('Call us at: 123-456-7890')}>
// // // // // // // // // // // //         Call Us
// // // // // // // // // // // //       </button>
// // // // // // // // // // // //     </header>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }



// // // // // // // // // // // // // "use client";
// // // // // // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // // // // // import Image from 'next/image';
// // // // // // // // // // // // // import { useRouter } from 'next/router';
// // // // // // // // // // // // // import logo from '../../../public/Business card-LEXI_02_for PRINT-02.jpg'; 
// // // // // // // // // // // // // import styles from './Header.module.scss';

// // // // // // // // // // // // // export default function Header() {
// // // // // // // // // // // // //   const [isTransparent, setIsTransparent] = useState(false);
// // // // // // // // // // // // //   const router = useRouter();

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // // // // //       if (window.scrollY > 200) {
// // // // // // // // // // // // //         setIsTransparent(true);
// // // // // // // // // // // // //       } else {
// // // // // // // // // // // // //         setIsTransparent(false);
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     };

// // // // // // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // //   // Function to handle navigation
// // // // // // // // // // // // //   const handleLogoClick = () => {
// // // // // // // // // // // // //     router.push('/'); // Navigate to HomePage.js
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <header className={`${styles.header} ${isTransparent ? styles.transparent : ''}`}>
// // // // // // // // // // // // //       <div className={styles.logoContainer} onClick={handleLogoClick}>
// // // // // // // // // // // // //         <Image src={logo} alt="LEXI Logo" width={160} height={90} />
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //       <nav className={styles.navStyles}>
// // // // // // // // // // // // //         <a href="/" className={`${styles.linkStyles} ${router.pathname === '/' ? styles.active : ''}`}>Home</a>
// // // // // // // // // // // // //         <a href="/about" className={`${styles.linkStyles} ${router.pathname === '/about' ? styles.active : ''}`}>About Us</a>
// // // // // // // // // // // // //         <a href="/services" className={`${styles.linkStyles} ${router.pathname === '/services' ? styles.active : ''}`}>Services</a>
// // // // // // // // // // // // //         <a href="/solutions" className={`${styles.linkStyles} ${router.pathname === '/solutions' ? styles.active : ''}`}>Solutions</a>
// // // // // // // // // // // // //         <a href="/contact" className={`${styles.linkStyles} ${router.pathname === '/contact' ? styles.active : ''}`}>Contact</a>
// // // // // // // // // // // // //       </nav>
// // // // // // // // // // // // //       <button className={styles.callButton} onClick={() => alert('Call us at: 123-456-7890')}>
// // // // // // // // // // // // //         Call Us
// // // // // // // // // // // // //       </button>
// // // // // // // // // // // // //     </header>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }




// // // // // // // // // // // // // // "use client";
// // // // // // // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // // // // // // import Image from 'next/image';
// // // // // // // // // // // // // // import { useRouter } from 'next/router';
// // // // // // // // // // // // // // import logo from '../../../public/Business card-LEXI_02_for PRINT-02.jpg'; 
// // // // // // // // // // // // // // import styles from './Header.module.scss';

// // // // // // // // // // // // // // export default function Header() {
// // // // // // // // // // // // // //   const [isTransparent, setIsTransparent] = useState(false);
// // // // // // // // // // // // // //   const router = useRouter();

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // // // // // //       if (window.scrollY > 200) {
// // // // // // // // // // // // // //         setIsTransparent(true);
// // // // // // // // // // // // // //       } else {
// // // // // // // // // // // // // //         setIsTransparent(false);
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     };

// // // // // // // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // //   // Function to handle navigation
// // // // // // // // // // // // // //   const handleLogoClick = () => {
// // // // // // // // // // // // // //     router.push('/'); // Navigate to HomePage.js
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <header className={`${styles.header} ${isTransparent ? styles.transparent : ''}`}>
// // // // // // // // // // // // // //       <div className={styles.logoContainer} onClick={handleLogoClick}>
// // // // // // // // // // // // // //         <Image src={logo} alt="LEXI Logo" width={160} height={90} />
// // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // //       <nav className={styles.navStyles}>
// // // // // // // // // // // // // //         <a href="/" className={`${styles.linkStyles} ${router.pathname === '/' ? styles.active : ''}`}>Home</a>
// // // // // // // // // // // // // //         <a href="/about" className={`${styles.linkStyles} ${router.pathname === '/about' ? styles.active : ''}`}>About Us</a>
// // // // // // // // // // // // // //         <a href="/services" className={`${styles.linkStyles} ${router.pathname === '/services' ? styles.active : ''}`}>Services</a>
// // // // // // // // // // // // // //         <a href="/solutions" className={`${styles.linkStyles} ${router.pathname === '/solutions' ? styles.active : ''}`}>Solutions</a>
// // // // // // // // // // // // // //         <a href="/contact" className={`${styles.linkStyles} ${router.pathname === '/contact' ? styles.active : ''}`}>Contact</a>
// // // // // // // // // // // // // //       </nav>
// // // // // // // // // // // // // //       <button className={styles.callButton} onClick={() => alert('Call us at: 123-456-7890')}>
// // // // // // // // // // // // // //         Call Us
// // // // // // // // // // // // // //       </button>
// // // // // // // // // // // // // //     </header>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // }



// // // // // // // // // // // // // // // "use client";
// // // // // // // // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // // // // // // // import Image from 'next/image';
// // // // // // // // // // // // // // // import logo from '../../../public/Business card-LEXI_02_for PRINT-02.jpg'; 
// // // // // // // // // // // // // // // import styles from './Header.module.scss';


// // // // // // // // // // // // // // // export default function Header() {

// // // // // // // // // // // // // // //   const [isTransparent, setIsTransparent] = useState(false);
  
// // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // // // // // // //       if (window.scrollY > 200) {
// // // // // // // // // // // // // // //         setIsTransparent(true);
// // // // // // // // // // // // // // //       } else {
// // // // // // // // // // // // // // //         setIsTransparent(false);
// // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // // // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <header className={`${styles.header} ${isTransparent ? styles.transparent : ''}`}>
// // // // // // // // // // // // // // //       <div className={styles.logoContainer}>
// // // // // // // // // // // // // // //         <Image src={logo} alt="LEXI Logo" width={160} height={90} />
// // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // //       <nav className={`${styles.navStyles} ${isTransparent ? styles.transparent: ''}`}>
// // // // // // // // // // // // // // //         <a href="/" className={styles.linkStyles}>Home</a>
// // // // // // // // // // // // // // //         <a href="/about" className={styles.linkStyles}>About Us</a>
// // // // // // // // // // // // // // //         <a href="/services" className={styles.linkStyles}>Services</a>
// // // // // // // // // // // // // // //         <a href="/solutions" className={styles.linkStyles}>Solutions</a>
// // // // // // // // // // // // // // //         <a href="/contact" className={styles.linkStyles}>Contact</a>
// // // // // // // // // // // // // // //       </nav>
// // // // // // // // // // // // // // //     </header>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // };
