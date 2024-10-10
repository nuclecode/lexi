"use client";


import { useEffect, useRef, useState } from 'react';
import styles from './caseRenovation.module.scss';

const CaseRenovation = ({ orderText, beforePhoto, doneText, afterPhoto }) => {
  const beforeRef = useRef(null);
  const doneTextRef = useRef(null);
  const afterRef = useRef(null);
  const [beforeSticky, setBeforeSticky] = useState(false);
  const [doneSticky, setDoneSticky] = useState(false);
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const beforeEl = beforeRef.current;
      const doneTextEl = doneTextRef.current;
      const afterEl = afterRef.current;

      const beforeRect = beforeEl.getBoundingClientRect();
      const doneTextRect = doneTextEl.getBoundingClientRect();
      const afterRect = afterEl.getBoundingClientRect();

      // Stick "before" photo at the top
      if (beforeRect.top <= 0 && doneTextRect.top > window.innerHeight / 2) {
        setBeforeSticky(true);
      } else {
        setBeforeSticky(false);
      }

      // Stick "done text" in the middle
      if (doneTextRect.top <= window.innerHeight / 2 && beforeRect.top <= 0) {
        setDoneSticky(true);
      } else {
        setDoneSticky(false);
      }

      // Show "after" photo when "done text" reaches the top
      if (doneTextRect.top <= 0) {
        setShowAfter(true);
      } else {
        setShowAfter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.caseRenovation}>
      <div className={styles.orderText}>{orderText}</div>

      <div
        className={`${styles.beforePhoto} ${beforeSticky ? styles.sticky : ''}`}
        ref={beforeRef}
      >
        <img src={beforePhoto} alt="Before renovation" />
        <div className={styles.overlayText}>{orderText}</div>
      </div>

      <div
        className={`${styles.doneText} ${doneSticky ? styles.sticky : ''}`}
        ref={doneTextRef}
      >
        {doneText}
      </div>

      <div
        className={`${styles.afterPhoto} ${showAfter ? styles.sticky : ''}`}
        ref={afterRef}
      >
        <img src={afterPhoto} alt="After renovation" />
        <div className={styles.overlayText}>{doneText}</div>
      </div>
    </div>
  );
};

export default CaseRenovation;


// import { useEffect, useRef, useState } from 'react';
// import styles from './caseRenovation.module.scss';

// const CaseRenovation = ({ orderText, beforePhoto, doneText, afterPhoto }) => {
//   const beforeRef = useRef(null);
//   const doneTextRef = useRef(null);
//   const afterRef = useRef(null);
//   const footerRef = useRef(null);

//   const [beforeSticky, setBeforeSticky] = useState(false);
//   const [doneSticky, setDoneSticky] = useState(false);
//   const [showAfter, setShowAfter] = useState(false);
//   const [unstickAll, setUnstickAll] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const beforeEl = beforeRef.current;
//       const doneTextEl = doneTextRef.current;
//       const afterEl = afterRef.current;
//       const footerEl = document.querySelector('footer');

//       const beforeRect = beforeEl.getBoundingClientRect();
//       const doneTextRect = doneTextEl.getBoundingClientRect();
//       const afterRect = afterEl.getBoundingClientRect();
//       const footerRect = footerEl.getBoundingClientRect();

//       const footerInView = footerRect.top < window.innerHeight && footerRect.bottom >= 0;

//       // When footer is visible, unstick everything
//       if (footerInView) {
//         setUnstickAll(true);
//         return;
//       } else {
//         setUnstickAll(false);
//       }

//       // Stick "before" photo at the top
//       if (beforeRect.top <= 0 && doneTextRect.top > 0 && !footerInView) {
//         setBeforeSticky(true);
//       } else if (beforeRect.top > 0) {
//         setBeforeSticky(false);
//       }

//       // Stick "done text" in the middle
//       if (doneTextRect.top <= window.innerHeight / 2 && beforeRect.top <= 0 && !footerInView) {
//         setDoneSticky(true);
//       } else if (doneTextRect.top > window.innerHeight / 2) {
//         setDoneSticky(false);
//       }

//       // Show "after" photo when "done text" reaches the top
//       if (doneTextRect.top <= 0 && !footerInView) {
//         setShowAfter(true);
//       } else if (afterRect.top > window.innerHeight) {
//         setShowAfter(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className={styles.caseRenovation}>
//       <div className={styles.orderText}>{orderText}</div>

//       <div
//         className={`${styles.beforePhoto} ${beforeSticky && !unstickAll ? styles.sticky : ''}`}
//         ref={beforeRef}
//       >
//         <img src={beforePhoto} alt="Before renovation" />
//         <div className={styles.overlayText}>{orderText}</div>
//       </div>

//       <div
//         className={`${styles.doneText} ${doneSticky && !unstickAll ? styles.sticky : ''}`}
//         ref={doneTextRef}
//       >
//         {doneText}
//       </div>

//       <div
//         className={`${styles.afterPhoto} ${showAfter && !unstickAll ? styles.sticky : ''}`}
//         ref={afterRef}
//       >
//         <img src={afterPhoto} alt="After renovation" />
//         <div className={styles.overlayText}>{doneText}</div>
//       </div>
//     </div>
//   );
// };

// export default CaseRenovation;




// // import { useEffect, useRef, useState } from 'react';
// // import styles from './caseRenovation.module.scss';

// // const CaseRenovation = ({ orderText, beforePhoto, doneText, afterPhoto }) => {
// //   const beforeRef = useRef(null);
// //   const doneTextRef = useRef(null);
// //   const afterRef = useRef(null);
// //   const footerRef = useRef(null);

// //   const [beforeSticky, setBeforeSticky] = useState(false);
// //   const [doneSticky, setDoneSticky] = useState(false);
// //   const [showAfter, setShowAfter] = useState(false);
// //   const [unstickAll, setUnstickAll] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const beforeEl = beforeRef.current;
// //       const doneTextEl = doneTextRef.current;
// //       const afterEl = afterRef.current;
// //       const footerEl = document.querySelector('footer');

// //       const beforeRect = beforeEl.getBoundingClientRect();
// //       const doneTextRect = doneTextEl.getBoundingClientRect();
// //       const afterRect = afterEl.getBoundingClientRect();
// //       const footerRect = footerEl.getBoundingClientRect();

// //       // Check if the footer is visible to unstick everything
// //       const footerInView = footerRect.top < window.innerHeight && footerRect.bottom >= 0;

// //       if (footerInView) {
// //         setUnstickAll(true);
// //         return;
// //       } else {
// //         setUnstickAll(false);
// //       }

// //       // Stick "before" photo when it reaches the top
// //       if (beforeRect.top <= 0 && !showAfter && !footerInView) {
// //         setBeforeSticky(true);
// //       } else if (beforeRect.top > 0) {
// //         setBeforeSticky(false);
// //       }

// //       // Stick "doneText" when it reaches half the screen height
// //       if (doneTextRect.top <= window.innerHeight / 2 && beforeRect.top <= 0 && !footerInView) {
// //         setDoneSticky(true);
// //       } else if (doneTextRect.top > window.innerHeight / 2) {
// //         setDoneSticky(false);
// //       }

// //       // Show "after" photo when doneText reaches the top
// //       if (doneTextRect.top <= 0 && !footerInView) {
// //         setShowAfter(true);
// //       } else if (afterRect.top > window.innerHeight) {
// //         setShowAfter(false);
// //       }
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, [showAfter]);

// //   return (
// //     <div className={styles.caseRenovation}>
// //       <div className={styles.orderText}>{orderText}</div>

// //       <div
// //         className={`${styles.beforePhoto} ${beforeSticky && !unstickAll ? styles.sticky : ''}`}
// //         ref={beforeRef}
// //       >
// //         <img src={beforePhoto} alt="Before renovation" />
// //         <div className={styles.overlayText}>{orderText}</div>
// //       </div>

// //       <div
// //         className={`${styles.doneText} ${doneSticky && !unstickAll ? styles.sticky : ''}`}
// //         ref={doneTextRef}
// //       >
// //         {doneText}
// //       </div>

// //       <div
// //         className={`${styles.afterPhoto} ${showAfter && !unstickAll ? styles.sticky : ''}`}
// //         ref={afterRef}
// //       >
// //         <img src={afterPhoto} alt="After renovation" />
// //         <div className={styles.overlayText}>{doneText}</div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CaseRenovation;



// // // import { useEffect, useRef, useState } from 'react';
// // // import styles from './caseRenovation.module.scss';

// // // const CaseRenovation = ({ orderText, beforePhoto, doneText, afterPhoto }) => {
// // //   const beforeRef = useRef(null);
// // //   const doneTextRef = useRef(null);
// // //   const afterRef = useRef(null);
// // //   const footerRef = useRef(null);

// // //   const [beforeSticky, setBeforeSticky] = useState(false);
// // //   const [doneSticky, setDoneSticky] = useState(false);
// // //   const [showAfter, setShowAfter] = useState(false);
// // //   const [unstickAll, setUnstickAll] = useState(false); // Control to unstick all elements

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       const beforeEl = beforeRef.current;
// // //       const doneTextEl = doneTextRef.current;
// // //       const afterEl = afterRef.current;
// // //       const footerEl = document.querySelector('footer'); // Detect the footer

// // //       const beforeRect = beforeEl.getBoundingClientRect();
// // //       const doneTextRect = doneTextEl.getBoundingClientRect();
// // //       const afterRect = afterEl.getBoundingClientRect();
// // //       const footerRect = footerEl.getBoundingClientRect();

// // //       // Detect if footer is in view to unstick everything
// // //       const footerInView = footerRect.top < window.innerHeight && footerRect.bottom >= 0;

// // //       if (footerInView) {
// // //         setUnstickAll(true);
// // //         return; // Exit early to avoid further sticky calculations
// // //       } else {
// // //         setUnstickAll(false);
// // //       }

// // //       // Before photo becomes sticky when it reaches the top
// // //       if (beforeRect.top <= 0 && !showAfter && !footerInView) {
// // //         setBeforeSticky(true);
// // //       } else if (beforeRect.top > 0) {
// // //         setBeforeSticky(false);
// // //       }

// // //       // Done text becomes sticky when it reaches half the screen height
// // //       if (doneTextRect.top <= window.innerHeight / 2 && beforeRect.top <= 0 && !footerInView) {
// // //         setDoneSticky(true);
// // //       } else if (doneTextRect.top > window.innerHeight / 2) {
// // //         setDoneSticky(false);
// // //       }

// // //       // Show "after" photo when doneText reaches the top
// // //       if (doneTextRect.top <= 0 && !footerInView) {
// // //         setShowAfter(true);
// // //       } else if (afterRect.top > window.innerHeight) {
// // //         setShowAfter(false);
// // //       }
// // //     };

// // //     window.addEventListener('scroll', handleScroll);
// // //     return () => window.removeEventListener('scroll', handleScroll);
// // //   }, [showAfter]);

// // //   return (
// // //     <div className={styles.caseRenovation}>
// // //       <div className={styles.orderText}>{orderText}</div>

// // //       <div
// // //         className={`${styles.beforePhoto} ${beforeSticky && !unstickAll ? styles.sticky : ''}`}
// // //         ref={beforeRef}
// // //       >
// // //         <img src={beforePhoto} alt="Before renovation" />
// // //       </div>

// // //       <div
// // //         className={`${styles.doneText} ${doneSticky && !unstickAll ? styles.sticky : ''}`}
// // //         ref={doneTextRef}
// // //       >
// // //         {doneText}
// // //       </div>

// // //       <div
// // //         className={`${styles.afterPhoto} ${showAfter && !unstickAll ? styles.sticky : ''}`}
// // //         ref={afterRef}
// // //       >
// // //         <img src={afterPhoto} alt="After renovation" />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CaseRenovation;


// // // // import { useEffect, useRef, useState } from 'react';
// // // // import styles from './caseRenovation.module.scss';

// // // // const CaseRenovation = ({ orderText, beforePhoto, doneText, afterPhoto }) => {
// // // //   const beforeRef = useRef(null);
// // // //   const doneTextRef = useRef(null);
// // // //   const afterRef = useRef(null);
// // // //   const footerRef = useRef(null); // Ref for detecting the footer

// // // //   const [beforeSticky, setBeforeSticky] = useState(false);
// // // //   const [doneSticky, setDoneSticky] = useState(false);
// // // //   const [showAfter, setShowAfter] = useState(false);

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       const beforeEl = beforeRef.current;
// // // //       const doneTextEl = doneTextRef.current;
// // // //       const afterEl = afterRef.current;
// // // //       const footerEl = document.querySelector('footer'); // Detect the footer

// // // //       const beforeRect = beforeEl.getBoundingClientRect();
// // // //       const doneTextRect = doneTextEl.getBoundingClientRect();
// // // //       const afterRect = afterEl.getBoundingClientRect();
// // // //       const footerRect = footerEl.getBoundingClientRect();

// // // //       // Unstick photos if footer appears
// // // //       const footerInView = footerRect.top < window.innerHeight && footerRect.bottom >= 0;

// // // //       // Before photo becomes sticky when it reaches the top and unstick if footer is visible
// // // //       if (beforeRect.top <= 0 && !showAfter && !footerInView) {
// // // //         setBeforeSticky(true);
// // // //       } else if (beforeRect.top > 0 || footerInView) {
// // // //         setBeforeSticky(false); // Unstick when footer appears or scrolling up
// // // //       }

// // // //       // Done text becomes sticky when it reaches half the screen height and unstick if footer is visible
// // // //       if (doneTextRect.top <= window.innerHeight / 2 && beforeRect.top <= 0 && !footerInView) {
// // // //         setDoneSticky(true);
// // // //       } else if (doneTextRect.top > window.innerHeight / 2 || footerInView) {
// // // //         setDoneSticky(false);
// // // //       }

// // // //       // Show "after" photo when doneText reaches the top and hide it if scrolling back up or footer in view
// // // //       if (doneTextRect.top <= 0 && !footerInView) {
// // // //         setShowAfter(true);
// // // //       } else if (afterRect.top > window.innerHeight || footerInView) {
// // // //         setShowAfter(false); // Hide after photo when scrolling up or footer is visible
// // // //       }
// // // //     };

// // // //     window.addEventListener('scroll', handleScroll);
// // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // //   }, [showAfter]);

// // // //   return (
// // // //     <div className={styles.caseRenovation}>
// // // //       <div className={styles.orderText}>{orderText}</div>

// // // //       <div
// // // //         className={`${styles.beforePhoto} ${beforeSticky ? styles.sticky : ''}`}
// // // //         ref={beforeRef}
// // // //         style={{ display: showAfter ? 'none' : 'block' }} // Hide the before photo when the after photo is shown
// // // //       >
// // // //         <img src={beforePhoto} alt="Before renovation" />
// // // //       </div>

// // // //       <div className={`${styles.doneText} ${doneSticky ? styles.sticky : ''}`} ref={doneTextRef}>
// // // //         {doneText}
// // // //       </div>

// // // //       <div
// // // //         className={`${styles.afterPhoto} ${showAfter ? styles.sticky : ''}`}
// // // //         ref={afterRef}
// // // //         style={{ display: showAfter ? 'block' : 'none' }} // Show the after photo when needed
// // // //       >
// // // //         <img src={afterPhoto} alt="After renovation" />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CaseRenovation;




// // // // // import { useEffect, useRef, useState } from 'react';
// // // // // import styles from './caseRenovation.module.scss';

// // // // // const CaseRenovation = ({ orderText, beforePhoto, doneText, afterPhoto }) => {
// // // // //   const beforeRef = useRef(null);
// // // // //   const doneTextRef = useRef(null);
// // // // //   const afterRef = useRef(null);

// // // // //   const [beforeSticky, setBeforeSticky] = useState(false);
// // // // //   const [doneSticky, setDoneSticky] = useState(false);
// // // // //   const [showAfter, setShowAfter] = useState(false);
// // // // //   const [scrollDirection, setScrollDirection] = useState(null); // Track scroll direction

// // // // //   useEffect(() => {
// // // // //     let lastScrollY = window.scrollY;

// // // // //     const handleScroll = () => {
// // // // //       const beforeEl = beforeRef.current;
// // // // //       const doneTextEl = doneTextRef.current;
// // // // //       const afterEl = afterRef.current;

// // // // //       const beforeRect = beforeEl.getBoundingClientRect();
// // // // //       const doneTextRect = doneTextEl.getBoundingClientRect();
// // // // //       const afterRect = afterEl.getBoundingClientRect();

// // // // //       // Determine scroll direction
// // // // //       const currentScrollY = window.scrollY;
// // // // //       const direction = currentScrollY > lastScrollY ? 'down' : 'up';
// // // // //       setScrollDirection(direction);
// // // // //       lastScrollY = currentScrollY;

// // // // //       // Before photo becomes sticky when it reaches the top of the screen
// // // // //       if (beforeRect.top <= 0 && direction === 'down' && !showAfter) {
// // // // //         setBeforeSticky(true);
// // // // //       } else if (beforeRect.top > 0 && direction === 'up') {
// // // // //         setBeforeSticky(false); // Unstick when scrolling up
// // // // //       }

// // // // //       // Done text becomes sticky when it reaches half the screen height
// // // // //       if (doneTextRect.top <= window.innerHeight / 2 && beforeRect.top <= 0) {
// // // // //         setDoneSticky(true);
// // // // //       } else if (doneTextRect.top > window.innerHeight / 2 && direction === 'up') {
// // // // //         setDoneSticky(false); // Unstick done text when scrolling up
// // // // //       }

// // // // //       // Show the "after" photo when doneText reaches the top
// // // // //       if (doneTextRect.top <= 0 && direction === 'down') {
// // // // //         setShowAfter(true);
// // // // //       } else if (afterRect.top > window.innerHeight && direction === 'up') {
// // // // //         setShowAfter(false); // Hide after photo when scrolling up
// // // // //       }
// // // // //     };

// // // // //     window.addEventListener('scroll', handleScroll);
// // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // //   }, [showAfter]);

// // // // //   return (
// // // // //     <div className={styles.caseRenovation}>
// // // // //       <div className={styles.orderText}>{orderText}</div>

// // // // //       <div
// // // // //         className={`${styles.beforePhoto} ${beforeSticky ? styles.sticky : ''}`}
// // // // //         ref={beforeRef}
// // // // //         style={{ display: showAfter ? 'none' : 'block' }} // Hide the before photo when the after photo is shown
// // // // //       >
// // // // //         <img src={beforePhoto} alt="Before renovation" />
// // // // //       </div>

// // // // //       <div className={`${styles.doneText} ${doneSticky ? styles.sticky : ''}`} ref={doneTextRef}>
// // // // //         {doneText}
// // // // //       </div>

// // // // //       <div
// // // // //         className={`${styles.afterPhoto} ${showAfter ? styles.sticky : ''}`}
// // // // //         ref={afterRef}
// // // // //         style={{ display: showAfter ? 'block' : 'none' }} // Show the after photo when needed
// // // // //       >
// // // // //         <img src={afterPhoto} alt="After renovation" />
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CaseRenovation;




// // // // // // import { useEffect, useRef, useState } from 'react';
// // // // // // import styles from './caseRenovation.module.scss';

// // // // // // const CaseRenovation = ({ orderText, beforePhoto, doneText, afterPhoto }) => {
// // // // // //   const beforeRef = useRef(null);
// // // // // //   const doneTextRef = useRef(null);
// // // // // //   const afterRef = useRef(null);

// // // // // //   const [beforeSticky, setBeforeSticky] = useState(false);
// // // // // //   const [doneSticky, setDoneSticky] = useState(false);
// // // // // //   const [showAfter, setShowAfter] = useState(false);

// // // // // //   useEffect(() => {
// // // // // //     const handleScroll = () => {
// // // // // //       const beforeEl = beforeRef.current;
// // // // // //       const doneTextEl = doneTextRef.current;
// // // // // //       const afterEl = afterRef.current;

// // // // // //       const beforeRect = beforeEl.getBoundingClientRect();
// // // // // //       const doneTextRect = doneTextEl.getBoundingClientRect();
// // // // // //       const afterRect = afterEl.getBoundingClientRect();

// // // // // //       // Before photo becomes sticky when it reaches the top
// // // // // //       if (beforeRect.top <= 0 && !showAfter) {
// // // // // //         setBeforeSticky(true);
// // // // // //       } else if (beforeRect.top > 0) {
// // // // // //         setBeforeSticky(false);
// // // // // //       }

// // // // // //       // Done text becomes sticky when it reaches half the screen height
// // // // // //       if (doneTextRect.top <= window.innerHeight / 2 && beforeRect.top <= 0) {
// // // // // //         setDoneSticky(true);
// // // // // //       } else {
// // // // // //         setDoneSticky(false);
// // // // // //       }

// // // // // //       // Show "after" photo when doneText reaches the top
// // // // // //       if (doneTextRect.top <= 0) {
// // // // // //         setShowAfter(true);
// // // // // //       } else {
// // // // // //         setShowAfter(false);
// // // // // //       }
// // // // // //     };

// // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // //   }, [showAfter]);

// // // // // //   return (
// // // // // //     <div className={styles.caseRenovation}>
// // // // // //       <div className={styles.orderText}>{orderText}</div>

// // // // // //       <div
// // // // // //         className={`${styles.beforePhoto} ${beforeSticky ? styles.sticky : ''}`}
// // // // // //         ref={beforeRef}
// // // // // //         style={{ display: showAfter ? 'none' : 'block' }} // Hide the before photo when the after photo is shown
// // // // // //       >
// // // // // //         <img src={beforePhoto} alt="Before renovation" />
// // // // // //       </div>

// // // // // //       <div className={`${styles.doneText} ${doneSticky ? styles.sticky : ''}`} ref={doneTextRef}>
// // // // // //         {doneText}
// // // // // //       </div>

// // // // // //       <div
// // // // // //         className={`${styles.afterPhoto} ${showAfter ? styles.sticky : ''}`}
// // // // // //         ref={afterRef}
// // // // // //         style={{ display: showAfter ? 'block' : 'none' }} // Show the after photo when needed
// // // // // //       >
// // // // // //         <img src={afterPhoto} alt="After renovation" />
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default CaseRenovation;



// // // // // // // import { useEffect, useRef, useState } from 'react';
// // // // // // // import styles from './caseRenovation.module.scss';

// // // // // // // const CaseRenovation = ({ orderText, beforePhoto, doneText, afterPhoto }) => {
// // // // // // //   const beforeRef = useRef(null);
// // // // // // //   const doneTextRef = useRef(null);
// // // // // // //   const afterRef = useRef(null);

// // // // // // //   const [beforeSticky, setBeforeSticky] = useState(false);
// // // // // // //   const [doneSticky, setDoneSticky] = useState(false);
// // // // // // //   const [showAfter, setShowAfter] = useState(false);

// // // // // // //   useEffect(() => {
// // // // // // //     const handleScroll = () => {
// // // // // // //       const beforeEl = beforeRef.current;
// // // // // // //       const doneTextEl = doneTextRef.current;
// // // // // // //       const afterEl = afterRef.current;

// // // // // // //       const beforeRect = beforeEl.getBoundingClientRect();
// // // // // // //       const doneTextRect = doneTextEl.getBoundingClientRect();
// // // // // // //       const afterRect = afterEl.getBoundingClientRect();

// // // // // // //       // Sticky before photo logic
// // // // // // //       if (beforeRect.top <= 0 && !showAfter) {
// // // // // // //         setBeforeSticky(true);
// // // // // // //       } else {
// // // // // // //         setBeforeSticky(false);
// // // // // // //       }

// // // // // // //       // Move doneText over the before photo and make it sticky
// // // // // // //       if (doneTextRect.top <= window.innerHeight / 2 && beforeRect.top <= 0) {
// // // // // // //         setDoneSticky(true);
// // // // // // //       } else {
// // // // // // //         setDoneSticky(false);
// // // // // // //       }

// // // // // // //       // Switch to after photo when doneText reaches the top
// // // // // // //       if (doneTextRect.top <= 0 && afterRect.top > 0) {
// // // // // // //         setShowAfter(true);
// // // // // // //       } else {
// // // // // // //         setShowAfter(false);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // //   }, [showAfter]);

// // // // // // //   return (
// // // // // // //     <div className={styles.caseRenovation}>
// // // // // // //       <div className={styles.orderText}>{orderText}</div>

// // // // // // //       <div
// // // // // // //         className={`${styles.beforePhoto} ${beforeSticky ? styles.sticky : ''}`}
// // // // // // //         ref={beforeRef}
// // // // // // //         style={{ display: showAfter ? 'none' : 'block' }} // Hide the before photo once after photo is shown
// // // // // // //       >
// // // // // // //         <img src={beforePhoto} alt="Before renovation" />
// // // // // // //       </div>

// // // // // // //       <div className={`${styles.doneText} ${doneSticky ? styles.sticky : ''}`} ref={doneTextRef}>
// // // // // // //         {doneText}
// // // // // // //       </div>

// // // // // // //       <div
// // // // // // //         className={`${styles.afterPhoto} ${showAfter ? styles.sticky : ''}`}
// // // // // // //         ref={afterRef}
// // // // // // //         style={{ display: showAfter ? 'block' : 'none' }} // Show the after photo only when it should appear
// // // // // // //       >
// // // // // // //         <img src={afterPhoto} alt="After renovation" />
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default CaseRenovation;

// // // // // // // // import { useEffect, useRef, useState } from 'react';
// // // // // // // // import styles from './caseRenovation.module.scss';

// // // // // // // // const CaseRenovation = ({ orderText, beforePhoto, doneText, afterPhoto }) => {
// // // // // // // //   const beforeRef = useRef(null);
// // // // // // // //   const doneTextRef = useRef(null);
// // // // // // // //   const afterRef = useRef(null);
  
// // // // // // // //   const [beforeSticky, setBeforeSticky] = useState(false);
// // // // // // // //   const [doneSticky, setDoneSticky] = useState(false);
// // // // // // // //   const [showAfter, setShowAfter] = useState(false);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const handleScroll = () => {
// // // // // // // //       const beforeEl = beforeRef.current;
// // // // // // // //       const doneTextEl = doneTextRef.current;
// // // // // // // //       const afterEl = afterRef.current;

// // // // // // // //       const beforeRect = beforeEl.getBoundingClientRect();
// // // // // // // //       const doneTextRect = doneTextEl.getBoundingClientRect();

// // // // // // // //       // Sticky before photo logic
// // // // // // // //       if (beforeRect.top <= 0 && !showAfter) {
// // // // // // // //         setBeforeSticky(true);
// // // // // // // //       } else {
// // // // // // // //         setBeforeSticky(false);
// // // // // // // //       }

// // // // // // // //       // Move doneText over the before photo and make it sticky
// // // // // // // //       if (doneTextRect.top <= window.innerHeight / 2) {
// // // // // // // //         setDoneSticky(true);
// // // // // // // //       } else {
// // // // // // // //         setDoneSticky(false);
// // // // // // // //       }

// // // // // // // //       // Switch to after photo when doneText reaches the top
// // // // // // // //       if (doneTextRect.top <= 0) {
// // // // // // // //         setShowAfter(true);
// // // // // // // //       } else {
// // // // // // // //         setShowAfter(false);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // //   }, [showAfter]);

// // // // // // // //   return (
// // // // // // // //     <div className={styles.caseRenovation}>
// // // // // // // //       <div className={styles.orderText}>{orderText}</div>

// // // // // // // //       <div 
// // // // // // // //         className={`${styles.beforePhoto} ${beforeSticky ? styles.sticky : ''}`} 
// // // // // // // //         ref={beforeRef}
// // // // // // // //         style={{ display: showAfter ? 'none' : 'block' }} // Hide the before photo once after photo is shown
// // // // // // // //       >
// // // // // // // //         <img src={beforePhoto} alt="Before renovation" />
// // // // // // // //       </div>

// // // // // // // //       <div className={`${styles.doneText} ${doneSticky ? styles.sticky : ''}`} ref={doneTextRef}>
// // // // // // // //         {doneText}
// // // // // // // //       </div>

// // // // // // // //       <div 
// // // // // // // //         className={`${styles.afterPhoto} ${showAfter ? styles.sticky : ''}`} 
// // // // // // // //         ref={afterRef}
// // // // // // // //         style={{ display: showAfter ? 'block' : 'none' }} // Show the after photo only when it should appear
// // // // // // // //       >
// // // // // // // //         <img src={afterPhoto} alt="After renovation" />
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default CaseRenovation;

// // // // // // // // // import { useEffect, useRef } from 'react';
// // // // // // // // // import styles from './caseRenovation.module.scss';

// // // // // // // // // const CaseRenovation = ({ orderText, beforePhoto, doneText, afterPhoto }) => {
// // // // // // // // //   const beforeRef = useRef(null);
// // // // // // // // //   const doneTextRef = useRef(null);
// // // // // // // // //   const afterRef = useRef(null);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const handleScroll = () => {
// // // // // // // // //       const beforeEl = beforeRef.current;
// // // // // // // // //       const doneTextEl = doneTextRef.current;
// // // // // // // // //       const afterEl = afterRef.current;

// // // // // // // // //       const scrollY = window.scrollY;
// // // // // // // // //       const beforeRect = beforeEl.getBoundingClientRect();
// // // // // // // // //       const doneTextRect = doneTextEl.getBoundingClientRect();
// // // // // // // // //       const afterRect = afterEl.getBoundingClientRect();

// // // // // // // // //       // When the before photo reaches the top of the screen
// // // // // // // // //       if (beforeRect.top <= 0 && doneTextRect.top > 0) {
// // // // // // // // //         beforeEl.classList.add(styles.sticky);
// // // // // // // // //       } else {
// // // // // // // // //         beforeEl.classList.remove(styles.sticky);
// // // // // // // // //       }

// // // // // // // // //       // When the done text reaches the center of the screen
// // // // // // // // //       if (doneTextRect.top <= window.innerHeight / 2 && beforeRect.top <= 0) {
// // // // // // // // //         doneTextEl.classList.add(styles.scrollOverBefore);
// // // // // // // // //       } else {
// // // // // // // // //         doneTextEl.classList.remove(styles.scrollOverBefore);
// // // // // // // // //       }

// // // // // // // // //       // Replace before photo with after photo when doneText reaches the top
// // // // // // // // //       if (doneTextRect.top <= 0 && afterRect.top > 0) {
// // // // // // // // //         beforeEl.classList.remove(styles.sticky);
// // // // // // // // //         afterEl.classList.add(styles.sticky);
// // // // // // // // //       } else {
// // // // // // // // //         afterEl.classList.remove(styles.sticky);
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // // //   }, []);

// // // // // // // // //   return (
// // // // // // // // //     <div className={styles.caseRenovation}>
// // // // // // // // //       <div className={styles.orderText}>{orderText}</div>
// // // // // // // // //       <div className={styles.beforePhoto} ref={beforeRef}>
// // // // // // // // //         <img src={beforePhoto} alt="Before renovation" />
// // // // // // // // //       </div>
// // // // // // // // //       <div className={styles.doneText} ref={doneTextRef}>{doneText}</div>
// // // // // // // // //       <div className={styles.afterPhoto} ref={afterRef}>
// // // // // // // // //         <img src={afterPhoto} alt="After renovation" />
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default CaseRenovation;



// // // // // // // // // // import { useEffect, useRef } from 'react';
// // // // // // // // // // import styles from './caseRenovation.module.scss';

// // // // // // // // // // const CaseRenovation = ({ orderText, beforePhoto, doneText, afterPhoto }) => {
// // // // // // // // // //   const beforeRef = useRef(null);
// // // // // // // // // //   const doneTextRef = useRef(null);
// // // // // // // // // //   const afterRef = useRef(null);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // //       const beforeEl = beforeRef.current;
// // // // // // // // // //       const doneTextEl = doneTextRef.current;
// // // // // // // // // //       const afterEl = afterRef.current;

// // // // // // // // // //       const scrollY = window.scrollY;
// // // // // // // // // //       const beforeRect = beforeEl.getBoundingClientRect();
// // // // // // // // // //       const doneTextRect = doneTextEl.getBoundingClientRect();
// // // // // // // // // //       const afterRect = afterEl.getBoundingClientRect();

// // // // // // // // // //       // When the before photo reaches the top of the screen
// // // // // // // // // //       if (beforeRect.top <= 0 && doneTextRect.top > 0) {
// // // // // // // // // //         beforeEl.classList.add(styles.sticky);
// // // // // // // // // //       } else {
// // // // // // // // // //         beforeEl.classList.remove(styles.sticky);
// // // // // // // // // //       }

// // // // // // // // // //       // Move doneText over the before photo until it reaches the top
// // // // // // // // // //       if (doneTextRect.top <= window.innerHeight / 2 && beforeRect.top <= 0) {
// // // // // // // // // //         doneTextEl.classList.add(styles.scrollOverBefore);
// // // // // // // // // //       } else {
// // // // // // // // // //         doneTextEl.classList.remove(styles.scrollOverBefore);
// // // // // // // // // //       }

// // // // // // // // // //       // Replace before with after photo
// // // // // // // // // //       if (doneTextRect.top <= 0) {
// // // // // // // // // //         beforeEl.classList.remove(styles.sticky);
// // // // // // // // // //         afterEl.classList.add(styles.sticky);
// // // // // // // // // //       } else {
// // // // // // // // // //         afterEl.classList.remove(styles.sticky);
// // // // // // // // // //       }
// // // // // // // // // //     };

// // // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // // // //   }, []);

// // // // // // // // // //   return (
// // // // // // // // // //     <div className={styles.caseRenovation}>
// // // // // // // // // //       <div className={styles.orderText}>{orderText}</div>
// // // // // // // // // //       <div className={styles.beforePhoto} ref={beforeRef}>
// // // // // // // // // //         <img src={beforePhoto} alt="Before renovation" />
// // // // // // // // // //       </div>
// // // // // // // // // //       <div className={styles.doneText} ref={doneTextRef}>{doneText}</div>
// // // // // // // // // //       <div className={styles.afterPhoto} ref={afterRef}>
// // // // // // // // // //         <img src={afterPhoto} alt="After renovation" />
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default CaseRenovation;
