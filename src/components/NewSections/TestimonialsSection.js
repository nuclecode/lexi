"use client";
import { useEffect } from "react";
import EmblaCarousel from "embla-carousel-react";
import styles from "./landing.module.scss";

const TestimonialsSection = () => {
    const [emblaRef, emblaApi] = EmblaCarousel({
        loop: true,
        speed: 10,
    });

    useEffect(() => {
        if (emblaApi) {
            emblaApi.scrollTo(0);
            const interval = setInterval(() => {
                emblaApi.scrollNext();
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [emblaApi]);

    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.carousel} ref={emblaRef}>
                <div className={styles.carouselContainer}>
                    <div className={styles.testimonial}>Testimonial 1 Great service</div>
                    <div className={styles.testimonial}>Testimonial 2 Very satisfied with the results</div>
                    <div className={styles.testimonial}>Testimonial 3 Highly recommend</div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
