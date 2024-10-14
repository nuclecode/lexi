"use client";
import React from 'react';
import './Button3D.scss';

const Button3D = ({ text }) => {
    // Render the button with the cloned text and span elements using JSX
    return (
        <div className="boton">
            <div className="botontext">{text}</div>
            <div className="botontext">{text}</div>
            {[...Array(4)].map((_, index) => (
                <span key={index} className="twist" />
            ))}
        </div>
    );
};

export default Button3D;
