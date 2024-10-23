'use client';
import React, { useState } from 'react';
import styles from './GetAQuote.module.scss';

const propertyTypes = [
    'Detached House',
    'Semi-Detached House',
    'Terraced House',
    'Flat / Apartment',
    'Bungalow',
    'Cottage',
];

const GetAQuote = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        partnership: false,
        budget: '',
        timeline: '',
        propertyType: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.subject) newErrors.subject = 'Subject is required';
        if (!formData.message) newErrors.message = 'Message is required';
        if (!formData.propertyType) newErrors.propertyType = 'Property type is required'; // Validation for property type
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Handle form submission (e.g., send to an API)
        console.log('Form submitted:', formData);
        setSubmitted(true);
        // Clear form after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            partnership: false,
            budget: '',
            timeline: '',
            propertyType: '',
        });
        setErrors({});
    };

    return (
        <div>
            <section className={styles['contact-hero-section']}>
                <div className={styles['hero-background']}>
                    <h1>Get a Quote</h1>
                </div>
            </section>

            <section className={styles['contact-section-page']}>
                <div className={styles['contact-info']}>
                    <h2>Request a Quote</h2>
                    <p>Fill out the form below and we will get back to you with a quote.</p>
                    <h3>Call us</h3>
                    <p>+44(0)7482051203</p>
                    <h3>Email us</h3>
                    <p>olexii@lexi.ltd</p>
                    {submitted && <p className={styles.success}>Thank you! Your request has been submitted.</p>}
                </div>
                <div className={styles['contact-form']}>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <span className={styles.error}>{errors.name}</span>}

                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className={styles.error}>{errors.email}</span>}

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                        {errors.subject && <span className={styles.error}>{errors.subject}</span>}

                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        {errors.message && <span className={styles.error}>{errors.message}</span>}

                        <div className={styles['checkbox-container']}>
                            <input
                                type="checkbox"
                                id="partnership"
                                name="partnership"
                                checked={formData.partnership}
                                onChange={handleChange}
                            />
                            <label htmlFor="partnership">I am looking for a partnership</label>
                        </div>

                        <select
                            name="propertyType"
                            value={formData.propertyType}
                            onChange={handleChange}
                            className={styles.select}
                        >
                            <option value="">Select Property Type</option>
                            {propertyTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                        {errors.propertyType && <span className={styles.error}>{errors.propertyType}</span>}

                        <input
                            type="text"
                            name="budget"
                            placeholder="Estimated Budget"
                            value={formData.budget}
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="timeline"
                            placeholder="Preferred Timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                        />

                        <button type="submit">Get Quote</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default GetAQuote;
