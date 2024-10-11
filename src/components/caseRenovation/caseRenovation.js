import styles from './caseRenovation.module.scss';

const CaseRenovation = () => {
  return (
    <div className={styles.caseRenovation}>
      <div className={styles.beforePhoto}>
        <div className={styles.overlayText}>Before Renovation</div>
      </div>
      <div className={styles.doneText}>What we did to renovate this house...</div>
      <div className={styles.afterPhoto}>
        <div className={styles.overlayText}>After Renovation</div>
      </div>
    </div>
  );
};

export default CaseRenovation;



// 'use client';


// import { useEffect, useRef, useState } from 'react';
// import styles from './caseRenovation.module.scss';
// import Image from 'next/image';

// const CaseRenovation = ({ orderText, beforePhoto, doneText, afterPhoto }) => {
//   const beforeRef = useRef(null);
//   const doneTextRef = useRef(null);
//   const afterRef = useRef(null);
//   const footerRef = useRef(null);
//   const [beforeSticky, setBeforeSticky] = useState(false);
//   const [doneSticky, setDoneSticky] = useState(false);
//   const [showAfter, setShowAfter] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const beforeEl = beforeRef.current;
//       const doneTextEl = doneTextRef.current;
//       const afterEl = afterRef.current;
//       const footerEl = footerRef.current;

//       const beforeRect = beforeEl.getBoundingClientRect();
//       const doneTextRect = doneTextEl.getBoundingClientRect();
//       const afterRect = afterEl.getBoundingClientRect();
//       const footerRect = footerEl.getBoundingClientRect();

//       // Stick 'before' photo at the top
//       if (beforeRect.top <= 0 && doneTextRect.top > window.innerHeight / 2) {
//         setBeforeSticky(true);
//       } else {
//         setBeforeSticky(false);
//       }

//       // Stick 'done text' in the middle
//       if (doneTextRect.top <= window.innerHeight / 2 && beforeRect.top <= 0) {
//         setDoneSticky(true);
//       } else {
//         setDoneSticky(false);
//       }

//       // Show 'after' photo when 'done text' reaches the top
//       if (doneTextRect.top <= 0) {
//         setShowAfter(true);
//       } else {
//         setShowAfter(false);
//       }

//       if (footerRect && afterRect.bottom >= footerRect.top) {
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
//         className={`${styles.beforePhoto} ${beforeSticky ? styles.sticky : ''}`}
//         ref={beforeRef}
//       >
//         <Image 
//           src={beforePhoto} 
//           alt='Before renovation'
//           width={500}
//           height={300} 
//         />
//         <div className={styles.overlayText}>{orderText}</div>
//       </div>

//       <div
//         className={`${styles.doneText} ${doneSticky ? styles.sticky : ''}`}
//         ref={doneTextRef}
//       >
//         {doneText}
//       </div>

//       <div
//         className={`${styles.afterPhoto} ${showAfter ? styles.sticky : ''}`}
//         ref={afterRef}
//       >
//         <Image 
//           src={afterPhoto} 
//           alt='After renovation' 
//           width={500}
//           height={300}
//           />
//         <div className={styles.overlayText}>{doneText}</div>
//         </div>

//         <div className={styles.footer} ref={footerRef}>
//           Footer Content 
//         </div>
//       </div>
    
//   );
// };

// export default CaseRenovation;
