import React from 'react';
import { Button } from '../../ui/button';


const bannervideo = '/assets/hero-video.mp4';

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen">

            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={bannervideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            >
                <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-60 text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-center leading-snug">
                    Experience the Power of
                    <span className="text-primaryColor ml-3">Precision</span>
                </h1>
                <p className="mt-4 text-center md:text-xl">
                    Discover a new era of luxury, performance, and design.
                </p>

                <div className="flex space-x-4 mt-6">
                    {/* Primary Button */}
                    <Button
                        className="text-white bg-red-600 hover:bg-red-800 transition-all duration-300 ease-in-out transform hover:scale-105 px-8 py-3 rounded-md shadow-lg"
                        size="lg"
                    >
                        Book Now
                    </Button>

                    {/* Secondary Button */}
                    <Button
                        className="text-white bg-transparent border-2 border-secondaryColor hover:bg-secondaryColor transition-all duration-300 ease-in-out transform hover:scale-105 px-8 py-3 rounded-md shadow-lg"
                        size="lg"
                    >
                        Browse Cars
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
