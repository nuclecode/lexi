import React, { useEffect, useRef } from 'react';
import './Button3D.scss';

const Button3D = ({ text }) => {
    const buttonRef = useRef(null);

    useEffect(() => {
        // Clone button text
        const buttonText = buttonRef.current.querySelector('.botontext');
        const clonedText = buttonText.cloneNode(true);
        buttonRef.current.appendChild(clonedText);

        // Append twist spans
        for (let i = 0; i < 4; i++) {
            const twist = document.createElement('span');
            twist.className = 'twist';
            twist.style.width = '25%';
            buttonRef.current.appendChild(twist);
        }
    }, []);

    return (
        <div className="boton" ref={buttonRef}>
            <div className="botontext">{text}</div>
        </div>
    );
};

export default Button3D;
