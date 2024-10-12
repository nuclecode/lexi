"use client";
import { useEffect } from "react";
import EmblaCarousel from "embla-carousel-react"; // Ensure this package is installed
import styles from "./landing.module.scss";

const TestimonialsSection = () => {
    const [emblaRef, emblaApi] = EmblaCarousel({
        loop: true, // Enable infinite scroll
        speed: 10, // Scroll speed (can be adjusted)
    });

    useEffect(() => {
        if (emblaApi) {
            emblaApi.scrollTo(0);
            const interval = setInterval(() => {
                emblaApi.scrollNext();
            }, 3000); // Auto scroll every 3 seconds
            return () => clearInterval(interval);
        }
    }, [emblaApi]);

    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.carousel} ref={emblaRef}>
                <div className={styles.carouselContainer}>
                    <div className={styles.testimonial}>Testimonial 1: "Great service!"</div>
                    <div className={styles.testimonial}>Testimonial 2: "Very satisfied with the results!"</div>
                    <div className={styles.testimonial}>Testimonial 3: "Highly recommend!"</div>
                    {/* You can add more testimonials here */}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
