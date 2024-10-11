import React from 'react';
import styles from './Line.module.scss';

const Line = ({ start, end }) => {
    const lineStyle = {
        left: `${start.x}px`,
        top: `${start.y}px`,
        width: `${end.x - start.x}px`,
    };

    return <div className={styles.line} style={lineStyle} />;
};

export default Line;