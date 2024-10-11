import React, { forwardRef } from 'react';
import styles from './Card.module.scss';

const Card = forwardRef(({ title, description }, ref) => {
    return (
        <div ref={ref} className={styles.card}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
});

Card.displayName = 'Card';
export default Card;