"use client";
import React from "react";
import styles from "./landing.module.scss"; // Ensure this points to your SCSS file

const GetInTouch = () => {
    return (
        <section className={styles.getInTouchSection}>
            <div className={styles.getInTouchText}>
                <h2>Get In Touch with Us!</h2>
            </div>
            <div className={styles.getInTouchForm}>
                <form>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    {/* Add the local class for the button */}
                    <button type="submit" className={styles.submitButton}>Send</button>
                </form>
            </div>
        </section>
    );
};

export default GetInTouch;
