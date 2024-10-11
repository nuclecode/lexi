'use client'
import React, { useRef, useEffect, useState } from 'react';
import Card from '../../components/Card';
import Line from '../../components/Line';
import styles from './Solutions.module.scss';

const cardData = [
    { title: 'Card 1', description: 'Description for card 1.' },
    { title: 'Card 2', description: 'Description for card 2.' },
    { title: 'Card 3', description: 'Description for card 3.' },
    { title: 'Card 4', description: 'Description for card 4.' },
    { title: 'Card 5', description: 'Description for card 5.' },
    { title: 'Card 6', description: 'Description for card 6.' },
];

const Solutions = () => {
    const cardRefs = useRef([]);
    const [lines, setLines] = useState([]);

    useEffect(() => {
        const newLines = [];
        for (let i = 0; i < cardRefs.current.length - 1; i++) {
            const startCard = cardRefs.current[i].getBoundingClientRect();
            const endCard = cardRefs.current[i + 1].getBoundingClientRect();
            newLines.push({
                start: { x: startCard.right, y: startCard.top + startCard.height / 2 },
                end: { x: endCard.left, y: endCard.top + endCard.height / 2 },
            });
        }
        setLines(newLines);
    }, [cardRefs]);

    return (
        <div className={styles.solutions}>
            <h1>Our Solutions</h1>
            <div className={styles.cardGrid}>
                {cardData.map((card, index) => (
                    <Card key={index} title={card.title} description={card.description} ref={el => (cardRefs.current[index] = el)} />
                ))}
            </div>
            {lines.map((line, index) => (
                <Line key={index} start={line.start} end={line.end} />
            ))}
        </div>
    );
};

export default Solutions;



// export default function Solutions() {
//     return (
//         <div>
//             <h1>Our Solutions</h1>
//             <p>Tailored renovation solutions to meet your needs.</p>
//         </div>
//     );
// }