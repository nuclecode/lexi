"use client";
import React from "react";
import "./GetInTouch.scss"; // Ensure this points to your SCSS file

const GetInTouch = () => {
    return (
        <>
    <section className="contact-section-page">
        <div className="contact-info">
            <h2>Looking to start a new project or to partner?</h2>
            <p> Drop us a message and we will contact you.</p>
            <h3>Call us</h3>
            <p>+44(0)7482051203</p>
            <h3>Email us</h3>
            <p>olexii@lexi.ltd</p>
        </div>
        <div className="contact-form">
            <form>
                <input type="text" placeholder="Your name"/>
                <input type="email" placeholder="Your email"/>
                <input type="text" placeholder="Subject"/>
                <textarea placeholder="Message"></textarea>
                <div className="checkbox-container">
                    <input type="checkbox" id="partner"/>
                    <label htmlFor="partner">I am looking for a partnership</label>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    </section>
        </>
        // <section className={styles.getInTouchSection}>
        //     <div className={styles.getInTouchText}>
        //         <h2>Get In Touch with Us!</h2>
        //     </div>
        //     <div className={styles.getInTouchForm}>
        //         <form>
        //             <div className={styles.formGroup}>
        //                 <label htmlFor="name">Name:</label>
        //                 <input type="text" id="name" name="name" required />
        //             </div>
        //             <div className={styles.formGroup}>
        //                 <label htmlFor="email">Email:</label>
        //                 <input type="email" id="email" name="email" required />
        //             </div>
        //             <div className={styles.formGroup}>
        //                 <label htmlFor="message">Message:</label>
        //                 <textarea id="message" name="message" required></textarea>
        //             </div>
        //             {/* Add the local class for the button */}
        //             <button type="submit" className={styles.submitButton}>Send</button>
        //         </form>
        //     </div>
        // </section>
    );
};

export default GetInTouch;
