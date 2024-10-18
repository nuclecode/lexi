import React from 'react';
import './VideoBannerHero.scss';
import Button3D from "@/components/VideoBannerHero/Button3D";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="hero-container">
            <video
                className="hero-video"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                src="/video-herosection.mp4"
                type="video/mp4"
            />

            <div className="hero-overlay">
                <h1 className="hero-headline">Passionate and Professional Renovation Specialists in London</h1>

                <div className="button-group">
                    <Link href="/partnerships">
                        <Button3D text="Partner with us" />
                    </Link>

                    <Link href="/quote">
                        <Button3D text="Get a Quote" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
