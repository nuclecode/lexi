"use client";

import styles from './RenovationProject.module.scss';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'

export default function RenovationProject() {
  const beforeImageRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
    const beforeImageHeight = beforeImageRef.current.offsetHeight;

    // Приклеивание фото "до" и переход текста "сделано"
    if (scrollY >= beforeImageHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return (
    <div className={styles.renovationProject}>
      <section className={styles.clientRequest}>
        <h2>Что хотел заказчик</h2>
        <p>Это то, что клиент изначально запросил: полная реконструкция кухни с новыми шкафами, столешницами и полами.</p>
      </section>

      <div className={styles.imageContainer}>
        {/* Фото "До" */}
        <Image 
          ref={beforeImageRef} 
          src="/images/bathroom_before.PNG" 
          alt="Before Renovation" 
          className={`${styles.beforeImage} ${isSticky ? styles.sticky : ''}`}
        />

        {/* Текст "Что мы сделали" */}
        <p className={`${styles.madeText} ${isSticky ? styles.madeTextSticky : ''}`}>
          Это то, что мы сделали для достижения ремонта: мы установили новые шкафы на заказ, гранитные столешницы и полы высокого класса.
        </p>
      </div>

      {/* Фото "После" */}
      <Image 
        src="/images/bathroom_after.PNG" 
        alt="After Renovation" 
        className={styles.afterImage}
      />
    </div>
  );
}



// "use client";

// import styles from './RenovationProject.module.scss';
// import { useEffect, useRef, useState } from 'react';

// export default function RenovationProject() {
//   const beforeImageRef = useRef(null);
//   const [isSticky, setIsSticky] = useState(false);
//   const [scrollY, setScrollY] = useState(0);

//   const handleScroll = () => {
//     setScrollY(window.scrollY);
//     const beforeImageHeight = beforeImageRef.current.offsetHeight;

//     if (scrollY >= beforeImageHeight - 100) { // Когда мы прокручиваем к фото "до"
//       setIsSticky(true);
//     } else {
//       setIsSticky(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [scrollY]);

//   return (
//     <div className={styles.renovationProject}>
//       <section className={styles.clientRequest}>
//         <h2>Что хотел заказчик</h2>
//         <p>Это то, что клиент изначально запросил: полная реконструкция кухни с новыми шкафами, столешницами и полами.</p>
//       </section>

//       {/* Фото "До" */}
//       <div className={styles.imageContainer}>
//         <Image 
//           ref={beforeImageRef} 
//           src="/images/bathroom_before.PNG" 
//           alt="Before Renovation" 
//           className={`${styles.beforeImage} ${isSticky ? styles.sticky : ''}`}
//         />

//         {/* Текст "Что мы сделали" */}
//         <p className={`${styles.madeText} ${isSticky ? styles.madeTextSticky : ''}`}>
//           Это то, что мы сделали для достижения ремонта: мы установили новые шкафы на заказ, гранитные столешницы и полы высокого класса.
//         </p>
//       </div>

//       {/* Фото "После" */}
//       <Image 
//         src="/images/bathroom_after.PNG" 
//         alt="After Renovation" 
//         className={styles.afterImage}
//       />
//     </div>
//   );
// }




// // "use client";

// // import styles from './RenovationProject.module.scss';
// // import { useEffect, useRef, useState } from 'react';

// // export default function RenovationProject() {
// //   const beforeImageRef = useRef(null);
// //   const afterImageRef = useRef(null);
// //   const [isSticky, setIsSticky] = useState(false);
// //   const [scrollY, setScrollY] = useState(0);

// //   const handleScroll = () => {
// //     setScrollY(window.scrollY);

// //     if (beforeImageRef.current) {
// //       const beforeImageHeight = beforeImageRef.current.offsetHeight;
// //       if (scrollY > beforeImageHeight) {
// //         setIsSticky(true);
// //       } else {
// //         setIsSticky(false);
// //       }
// //     }
// //   };

// //   useEffect(() => {
// //     window.addEventListener('scroll', handleScroll);
    
// //     return () => {
// //       window.removeEventListener('scroll', handleScroll);
// //     };
// //   }, []);

// //   return (
// //     <div className={styles.renovationProject}>
// //       <section className={styles.clientRequest}>
// //         <h2>Что хотел заказчик</h2>
// //         <p>Это то, что клиент изначально запросил: полная реконструкция кухни с новыми шкафами, столешницами и полами.</p>
// //       </section>
      
// //       {/* Фото "До" */}
// //       <div className={styles.imageContainer}>
// //         <Image 
// //           ref={beforeImageRef} 
// //           src="/images/bathroom_before.PNG" 
// //           alt="Before Renovation" 
// //           className={`${styles.beforeImage} ${isSticky ? styles.sticky : ''}`}
// //         />

// //         {/* Текст "Что мы сделали" */}
// //         <p className={`${styles.madeText} ${isSticky ? styles.madeTextSticky : ''}`}>
// //           Это то, что мы сделали для достижения ремонта: мы установили новые шкафы на заказ, гранитные столешницы и полы высокого класса.
// //         </p>
// //       </div>
      
// //       {/* Фото "После" */}
// //       <Image 
// //         ref={afterImageRef} 
// //         src="/images/bathroom_after.PNG" 
// //         alt="After Renovation" 
// //         className={styles.afterImage}
// //       />
// //     </div>
// //   );
// // }




// // // "use client";

// // // import styles from './RenovationProject.module.scss';
// // // import { useEffect, useRef, useState } from 'react';

// // // export default function RenovationProject() {
// // //   const beforeImageRef = useRef(null);
// // //   const afterImageRef = useRef(null);
// // //   const [isSticky, setIsSticky] = useState(false);
  
// // //   const handleScroll = () => {
// // //     const scrollY = window.scrollY;
// // //     const beforeImageHeight = beforeImageRef.current.offsetHeight;

// // //     if (scrollY > beforeImageHeight) {
// // //       setIsSticky(true);
// // //     } else {
// // //       setIsSticky(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     window.addEventListener('scroll', handleScroll);
    
// // //     return () => {
// // //       window.removeEventListener('scroll', handleScroll);
// // //     };
// // //   }, []);

// // //   return (
// // //     <div className={styles.renovationProject}>
// // //       <section className={styles.clientRequest}>
// // //         <h2>What the Client Wanted</h2>
// // //         <p>This is what the client originally requested: a complete kitchen renovation with new cabinets, countertops, and flooring.</p>
// // //       </section>
      
// // //       {/* Фото "До" */}
// // //       <Image 
// // //         ref={beforeImageRef} 
// // //         src="/images/bathroom_before.PNG" 
// // //         alt="Before Renovation" 
// // //         className={`${styles.beforeImage} ${isSticky ? styles.sticky : ''}`}
// // //       />

// // //       {/* Текст "Что мы сделали" */}
// // //       <section className={styles.whatWeDid}>
// // //         <h2>What We Did</h2>
// // //         <p className={`${styles.madeText} ${isSticky ? styles.madeTextSticky : ''}`}>
// // //           This is what we did to achieve the renovation: we installed new custom cabinetry, granite countertops, and high-end flooring.
// // //         </p>
// // //       </section>
      
// // //       {/* Фото "После" */}
// // //       <Image 
// // //         ref={afterImageRef} 
// // //         src="/images/bathroom_after.PNG" 
// // //         alt="After Renovation" 
// // //         className={styles.afterImage}
// // //       />
// // //     </div>
// // //   );
// // // }




// // // // "use client";

// // // // import styles from './RenovationProject.module.scss';
// // // // import { useEffect, useRef } from 'react';

// // // // export default function RenovationProject() {
// // // //   const beforeImageRef = useRef(null);
// // // //   const afterImageRef = useRef(null);

// // // //   useEffect(() => {
// // // //     const beforeImage = beforeImageRef.current;
// // // //     const afterImage = afterImageRef.current;
// // // //   }, []);

// // // //   return (
// // // //     <div className={styles.renovationProject}>
// // // //       {/* Отступ для текста под хедером */}
// // // //       <section className={styles.clientRequest}>
// // // //         <h2>What the Client Wanted</h2>
// // // //         <p>This is what the client originally requested: a complete kitchen renovation with new cabinets, countertops, and flooring.</p>
// // // //       </section>
      
// // // //       {/* Фото "До" */}
// // // //       <Image 
// // // //         ref={beforeImageRef} 
// // // //         src="/images/bathroom_before.PNG" 
// // // //         alt="Before Renovation" 
// // // //         className={styles.beforeImage}
// // // //       />

// // // //       {/* Текст "Что мы сделали" */}
// // // //       <section className={styles.whatWeDid}>
// // // //         <h2>What We Did</h2>
// // // //         <p>This is what we did to achieve the renovation: we installed new custom cabinetry, granite countertops, and high-end flooring.</p>
// // // //       </section>
      
// // // //       {/* Фото "После" */}
// // // //       <Image 
// // // //         ref={afterImageRef} 
// // // //         src="/images/bathroom_after.PNG" 
// // // //         alt="After Renovation" 
// // // //         className={styles.afterImage}
// // // //       />
// // // //     </div>
// // // //   );
// // // // }




// // // // // "use client"; // Компонент должен рендериться на клиентской стороне

// // // // // import styles from './RenovationProject.module.scss';
// // // // // import { useEffect, useRef } from 'react';

// // // // // export default function RenovationProject() {
// // // // //   const beforeImageRef = useRef(null);
// // // // //   const afterImageRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     const beforeImage = beforeImageRef.current;
// // // // //     const afterImage = afterImageRef.current;

// // // // //     // Здесь можно добавить эффекты прокрутки или переходов
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className={styles.renovationProject}>
// // // // //       {/* Текст "Что хотел заказчик" */}
// // // // //       <section className={styles.clientRequest}>
// // // // //         <h2>What the Client Wanted</h2>
// // // // //         <p>This is what the client originally requested: a complete kitchen renovation with new cabinets, countertops, and flooring.</p>
// // // // //       </section>
      
// // // // //       {/* Фото "До" */}
// // // // //       <Image 
// // // // //         ref={beforeImageRef} 
// // // // //         src="/images/bathroom_before.PNG" 
// // // // //         alt="Before Renovation" 
// // // // //         className={styles.beforeImage}
// // // // //       />

// // // // //       {/* Текст "Что мы сделали" */}
// // // // //       <section className={styles.whatWeDid}>
// // // // //         <h2>What We Did</h2>
// // // // //         <p>This is what we did to achieve the renovation: we installed new custom cabinetry, granite countertops, and high-end flooring.</p>
// // // // //       </section>
      
// // // // //       {/* Фото "После" */}
// // // // //       <Image 
// // // // //         ref={afterImageRef} 
// // // // //         src="/images/bathroom_after.PNG" 
// // // // //         alt="After Renovation" 
// // // // //         className={styles.afterImage}
// // // // //       />

// // // // //       {/* Другой контент, например, услуги и футер */}
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // // // "use client"; // Make sure the component runs on the client side

// // // // // // import styles from './RenovationProject.module.scss';
// // // // // // import { useEffect, useRef } from 'react';

// // // // // // export default function RenovationProject() {
// // // // // //   const beforeImageRef = useRef(null);
// // // // // //   const afterImageRef = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     const beforeImage = beforeImageRef.current;
// // // // // //     const afterImage = afterImageRef.current;

// // // // // //     // Add any scrolling or transition effects here if necessary
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <div className={styles.renovationProject}>
// // // // // //       <h2>What the Client Wanted</h2>
// // // // // //       <p>This is what the client originally requested...</p>
      
// // // // // //       {/* Before Image */}
// // // // // //       <Image 
// // // // // //         ref={beforeImageRef} 
// // // // // //         src="/images/bathroom_before.PNG" 
// // // // // //         alt="Before Renovation" 
// // // // // //         className={styles.beforeImage}
// // // // // //       />

// // // // // //       <div className={styles.madeText}>
// // // // // //         <h2>What We Did</h2>
// // // // // //         <p>This is what we did to achieve the renovation...</p>
// // // // // //       </div>
      
// // // // // //       {/* After Image */}
// // // // // //       <Image 
// // // // // //         ref={afterImageRef} 
// // // // // //         src="/images/bathroom_after.PNG" 
// // // // // //         alt="After Renovation" 
// // // // // //         className={styles.afterImage}
// // // // // //       />

// // // // // //       {/* Other content like services and footer */}
// // // // // //     </div>
// // // // // //   );
// // // // // // }




// // // // // // // "use client"; // This tells Next.js it's a Client Component

// // // // // // // import styles from './RenovationProject.module.scss';
// // // // // // // import { useEffect, useRef } from 'react';

// // // // // // // export default function RenovationProject() {
// // // // // // //   const beforeImageRef = useRef(null);
// // // // // // //   const doneTextRef = useRef(null);

// // // // // // //   useEffect(() => {
// // // // // // //     const handleScroll = () => {
// // // // // // //       const beforeImage = beforeImageRef.current;
// // // // // // //       const doneText = doneTextRef.current;

// // // // // // //       const scrollY = window.scrollY;
// // // // // // //       const windowHeight = window.innerHeight;

// // // // // // //       // Trigger the sliding effect when 'done' text touches the header
// // // // // // //       if (scrollY + windowHeight > beforeImage.offsetTop + beforeImage.offsetHeight) {
// // // // // // //         doneText.style.position = 'fixed';
// // // // // // //         doneText.style.top = '0';
// // // // // // //       } else {
// // // // // // //         doneText.style.position = 'absolute';
// // // // // // //         doneText.style.bottom = '0';
// // // // // // //       }
// // // // // // //     };

// // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // //     return () => {
// // // // // // //       window.removeEventListener('scroll', handleScroll);
// // // // // // //     };
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <div className={styles.container}>
// // // // // // //       <div className={styles.fixedHeader}> {/* Header here, with transparency */}
// // // // // // //         <h1>Customer Request</h1>
// // // // // // //       </div>
// // // // // // //       <div className={styles.description}>
// // // // // // //         <p className={styles.request}>
// // // // // // //           The client wanted a complete renovation of the bathroom, modern design, and new tiling.
// // // // // // //         </p>
// // // // // // //       </div>
      
// // // // // // //       <div ref={beforeImageRef} className={styles.before}></div> {/* "Before" image */}
      
// // // // // // //       <div className={styles.done} ref={doneTextRef}>
// // // // // // //         <p>We renovated the bathroom with modern fixtures and applied new marble tiles.</p>
// // // // // // //       </div>

// // // // // // //       <div className={styles.after}></div> {/* "After" image */}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }



// // // // // // // // "use cklient";
// // // // // // // // import styles from './RenovationProject.module.scss';
// // // // // // // // import { useEffect, useRef } from 'react';

// // // // // // // // export default function RenovationProject() {
// // // // // // // //   const beforeImageRef = useRef(null);
// // // // // // // //   const doneTextRef = useRef(null);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const handleScroll = () => {
// // // // // // // //       const beforeImage = beforeImageRef.current;
// // // // // // // //       const doneText = doneTextRef.current;

// // // // // // // //       const scrollY = window.scrollY;
// // // // // // // //       const windowHeight = window.innerHeight;

// // // // // // // //       // Trigger the sliding effect when 'done' text touches the header
// // // // // // // //       if (scrollY + windowHeight > beforeImage.offsetTop + beforeImage.offsetHeight) {
// // // // // // // //         doneText.style.position = 'fixed';
// // // // // // // //         doneText.style.top = '0';
// // // // // // // //       } else {
// // // // // // // //         doneText.style.position = 'absolute';
// // // // // // // //         doneText.style.bottom = '0';
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // //     return () => {
// // // // // // // //       window.removeEventListener('scroll', handleScroll);
// // // // // // // //     };
// // // // // // // //   }, []);

// // // // // // // //   return (
// // // // // // // //     <div className={styles.container}>
// // // // // // // //       <div className={styles.fixedHeader}> {/* Header here, with transparency */}
// // // // // // // //         <h1>Customer Request</h1>
// // // // // // // //       </div>
// // // // // // // //       <div className={styles.description}>
// // // // // // // //         <p className={styles.request}>
// // // // // // // //           The client wanted a complete renovation of the bathroom, modern design, and new tiling.
// // // // // // // //         </p>
// // // // // // // //       </div>
      
// // // // // // // //       <div ref={beforeImageRef} className={styles.before}></div> {/* "Before" image */}
      
// // // // // // // //       <div className={styles.done} ref={doneTextRef}>
// // // // // // // //         <p>We renovated the bathroom with modern fixtures and applied new marble tiles.</p>
// // // // // // // //       </div>

// // // // // // // //       <div className={styles.after}></div> {/* "After" image */}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }



// // // // // // // // // import styles from './RenovationProject.module.scss';

// // // // // // // // // export default function RenovationProject() {
// // // // // // // // //   return (
// // // // // // // // //     <div className={styles.renovationContainer}>
// // // // // // // // //       {/* Текст о запросе клиента */}
// // // // // // // // //       <section className={styles.clientRequest}>
// // // // // // // // //         <h2>Что хотел клиент</h2>
// // // // // // // // //         <p>Они хотели отремонтировать ванную комнату и сделать её более современной.</p>
// // // // // // // // //       </section>

// // // // // // // // //       {/* Фото "До" */}
// // // // // // // // //       <section className={styles.beforePhoto}>
// // // // // // // // //         <Image src="/images/bathroom_after.PNG" alt="Bathroom After Renovation" className={styles.image} />
// // // // // // // // //       </section>

// // // // // // // // //       {/* Текст о выполненных работах */}
// // // // // // // // //       <section className={styles.workDone}>
// // // // // // // // //         <h2>Что мы сделали</h2>
// // // // // // // // //         <p>Мы заменили плитку, установили новую сантехнику и добавили современное освещение.</p>
// // // // // // // // //       </section>

// // // // // // // // //       {/* Фото "После" */}
// // // // // // // // //       <section className={styles.afterPhoto}>
// // // // // // // // //         <Image src="/images/bathroom_after.PNG" alt="Bathroom After Renovation" className={styles.image} />
// // // // // // // // //       </section>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }



// // // // // // // // // // "use client";
// // // // // // // // // // import styles from './RenovationProject.module.scss';

// // // // // // // // // // export default function RenovationProject() {
// // // // // // // // // //   return (
// // // // // // // // // //     <div className={styles.renovationContainer}>
// // // // // // // // // //       {/* Текст о запросе клиента */}
// // // // // // // // // //       <section className={styles.clientRequest}>
// // // // // // // // // //         <h2>What the Client Wanted</h2>
// // // // // // // // // //         <p>They wanted us to fix their bathroom and make it more modern.</p>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* Фото "До" */}
// // // // // // // // // //       <section className={styles.beforePhoto}>
// // // // // // // // // //         <Image src="/images/bathroom_before.PNG" alt="Bathroom Before Renovation" className={styles.image} />
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* Текст о том, что было сделано */}
// // // // // // // // // //       <section className={styles.workDone}>
// // // // // // // // // //         <h2>What We Did</h2>
// // // // // // // // // //         <p>We replaced all the tiles, installed new plumbing, and added modern lighting.</p>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* Фото "После" */}
// // // // // // // // // //       <section className={styles.afterPhoto}>
// // // // // // // // // //         <Image src="/images/bathroom_after.PNG" alt="Bathroom After Renovation" className={styles.image}  />
// // // // // // // // // //       </section>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }




// // // // // // // // // // // import React, { useEffect, useRef, useState } from 'react';
// // // // // // // // // // // import styles from './RenovationProject.module.scss';

// // // // // // // // // // // export default function RenovationProject() {

// // // // // // // // // // //     const [isStuck, setIsStuck] = useState(false);
// // // // // // // // // // //     const [isAfterVisible, setIsAfterVisible] = useState(false);

// // // // // // // // // // //     const beforeImageRef = useRef(null);
// // // // // // // // // // //     const afterImageRef = useRef(null);
// // // // // // // // // // //     const textSectionRef = useRef(null);

// // // // // // // // // // //     // const whatWeDidTextRef = useRef(null);

// // // // // // // // // // //     useEffect(() => {
// // // // // // // // // // //         const handleScroll = () => {
// // // // // // // // // // //             const beforeImage = beforeImageRef.current;
// // // // // // // // // // //             const afterImage = afterImageRef.current;
// // // // // // // // // // //             const textSection = textSectionRef.current;

// // // // // // // // // // //             // const whatWeDidText = whatWeDidTextRef.current;

// // // // // // // // // // //             // if (!beforeImage || !whatWeDidText) return;

// // // // // // // // // // //             const beforeRect = beforeImage.getBoundingClientRect();
// // // // // // // // // // //             const textRect = textSection.getBoundingClientRect();
// // // // // // // // // // //             const afterRect = afterImage.getBoundingClientRect();

// // // // // // // // // // //             // const whatWeDidRect = whatWeDidText.getBoundingClientRect();

// // // // // // // // // // //             if (beforeRect.top <= 0 && !isStuck) {
// // // // // // // // // // //                 setIsStuck(true);
// // // // // // // // // // //             } else if (beforeRect.top > 0 && isStuck) {
// // // // // // // // // // //                 setIsStuck(false);
// // // // // // // // // // //             }

// // // // // // // // // // //             if (textRect.bottom <= window.innerHeight) {
// // // // // // // // // // //                 setIsAfterVisible(true);
// // // // // // // // // // //             } else {
// // // // // // // // // // //                 setIsAfterVisible(false);
// // // // // // // // // // //             }

// // // // // // // // // // //             // if (whatWeDidRect.top <= 0) {
// // // // // // // // // // //             //     setIsAfterVisible(true);
// // // // // // // // // // //             // } else {
// // // // // // // // // // //             //     setIsAfterVisible(false);
// // // // // // // // // // //             // }
// // // // // // // // // // //         };

// // // // // // // // // // //         window.addEventListener('scroll', handleScroll);
// // // // // // // // // // //         return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // // // // //     }, [isStuck]);

// // // // // // // // // // // //   const [scrollPosition, setScrollPosition] = useState(0);

// // // // // // // // // // // //   const handleScroll = () => {
// // // // // // // // // // // //     const position = window.pageYOffset;
// // // // // // // // // // // //     setScrollPosition(position);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     window.addEventListener('scroll', handleScroll, { passive: true });
// // // // // // // // // // // //     return () => {
// // // // // // // // // // // //       window.removeEventListener('scroll', handleScroll);
// // // // // // // // // // // //     };
// // // // // // // // // // // //   }, []);

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className={styles.RenovationProject}>
// // // // // // // // // // //     <section className={styles.requestSection}>
// // // // // // // // // // //         {/* <div className={styles.parallaxContainer}> */}
// // // // // // // // // // //       {/* <div className={styles.description}> */}
// // // // // // // // // // //         <h2>Client's Request: Bathroom Renovation</h2>
// // // // // // // // // // //         <p>
// // // // // // // // // // //           The client requested us to renovate an outdated bathroom with modern design and materials.
// // // // // // // // // // //         </p>
// // // // // // // // // // //       {/* </div> */}
// // // // // // // // // // //       </section>

// // // // // // // // // // //     <section className={styles.beforeSection}>
// // // // // // // // // // //       {/* <div className={`${styles.imageBefore} ${scrollPosition > 300 ? styles.fixed : ''}`}> */}
// // // // // // // // // // //       <div ref={beforeImageRef} className={`${styles.beforeImage} ${isStuck ? styles.stuck : ''}`}>
// // // // // // // // // // //         <Image src="/images/bathroom_before.PNG" alt="Bathroom Before Renovation"  />
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </section>

// // // // // // // // // // //     <section ref={textSectionRef} className={styles.whatWeDidSection}>
// // // // // // // // // // //       {/* <div className={`${styles.details} ${scrollPosition > 500 ? styles.fadeIn : ''}`}> */}
// // // // // // // // // // //       {/* <div className={styles.workDoneText}> */}
// // // // // // // // // // //         <h3>What We Did</h3>
// // // // // // // // // // //         <p>
// // // // // // // // // // //           We replaced the old tiles with modern porcelain, installed a new bathtub, upgraded the plumbing, and used waterproof grout.
// // // // // // // // // // //         </p>
// // // // // // // // // // //       {/* </div> */}
// // // // // // // // // // //       </section>

    
// // // // // // // // // // //        {/* <div className={`${styles.imageAfter} ${scrollPosition > 800 ? styles.fixed : ''}`}> */}

// // // // // // // // // // //     <section className={`${styles.afterSection} ${isAfterVisible ? styles.visible : ''}`}>
// // // // // // // // // // //         <Image ref={afterImageRef} src="/images/bathroom_after.PNG" alt="Bathroom After Renovation" />
// // // // // // // // // // //       {/* </div> */}
// // // // // // // // // // //       {/* </div> */}
// // // // // // // // // // //     </section>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // // export default RenovationProject;
