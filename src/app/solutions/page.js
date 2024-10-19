'use client';
import React from 'react';
import styles from './Solutions.module.scss';

const Contact = () => {
    return (
        <div className={styles['contact-page']}>
            <div className={styles['contact-hero']}>
                <div className={styles['hero-background']}>
                    <h1>See what solutions we have to offer</h1>
                </div>
            </div>
            <div className={styles['contact-info']}>
                <p>We draw up a clear plan and schedule for order fulfillment. We are in constant contact with the customer and keep them informed of all work processes. Quality and professionalism are the tools we use.</p>
                <p>We would love to hear from you! Whether you have a question about services, pricing, or anything else, our team is ready to answer all your questions.</p>
                <p>Feel free to fill out the form below, or reach us directly via our contact information listed here.</p>

            </div>
        </div>
    );
};

export default Contact;


// 'use client'
// import React, { useRef, useEffect, useState } from 'react';
// import Card from '../../components/Card';
// import Line from '../../components/Line';
// import styles from './Solutions.module.scss';
// import AboutPage from '../../components/AboutPage/AbouPage';
// // const cardData = [
// //     { title: 'Card 1', description: 'Description for card 1.' },
// //     { title: 'Card 2', description: 'Description for card 2.' },
// //     { title: 'Card 3', description: 'Description for card 3.' },
// //     { title: 'Card 4', description: 'Description for card 4.' },
// //     { title: 'Card 5', description: 'Description for card 5.' },
// //     { title: 'Card 6', description: 'Description for card 6.' },
// // ];
// //
// const Solutions = () => {
// //     const cardRefs = useRef([]);
// //     const [lines, setLines] = useState([]);
// //
// //     useEffect(() => {
// //         const newLines = [];
// //         for (let i = 0; i < cardRefs.current.length - 1; i++) {
// //             const startCard = cardRefs.current[i].getBoundingClientRect();
// //             const endCard = cardRefs.current[i + 1].getBoundingClientRect();
// //             newLines.push({
// //                 start: { x: startCard.right, y: startCard.top + startCard.height / 2 },
// //                 end: { x: endCard.left, y: endCard.top + endCard.height / 2 },
// //             });
// //         }
// //         setLines(newLines);
// //     }, [cardRefs]);
//
//     return (
//         <div className={styles.solutions}>
//             <AboutPage />
//             {/*<h1>Our Solutions</h1>*/}
//             {/*<div className={styles.cardGrid}>*/}
//             {/*    {cardData.map((card, index) => (*/}
//             {/*        <Card key={index} title={card.title} description={card.description} ref={el => (cardRefs.current[index] = el)} />*/}
//             {/*    ))}*/}
//             {/*</div>*/}
//             {/*{lines.map((line, index) => (*/}
//             {/*    <Line key={index} start={line.start} end={line.end} />*/}
//             {/*))}*/}
//         </div>
//     );
// };
//
// export default Solutions;


// export default function Solutions() {
//     return (
//         <div>
//             <h1>Our Solutions</h1>
//             <p>Tailored renovation solutions to meet your needs.</p>
//         </div>
//     );
// }
