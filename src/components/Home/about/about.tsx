
"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const AboutSection = () => {
    // Initialize state for numbers
    const [years, setYears] = useState(0);
    const [clients, setClients] = useState(0);
    const [cars, setCars] = useState(0);

    // Function to increment numbers
    useEffect(() => {
        const incrementNumber = (setFunction: React.Dispatch<React.SetStateAction<number>>, target: number, duration: number) => {
            let start = 0;
            const increment = target / (duration / 10); // Calculate step increment
            const interval = setInterval(() => {
                start += increment;
                if (start >= target) {
                    start = target;
                    clearInterval(interval);
                }
                setFunction(Math.ceil(start));
            }, 10);
        };

        // Increment each number to its target value
        incrementNumber(setYears, 10, 2000);   // 10 years
        incrementNumber(setClients, 5000, 2500); // 5000 clients
        incrementNumber(setCars, 100, 2000);    // 100 cars
    }, []);

    return (
        <div className='w-11/12 mx-auto flex   md:flex-row flex-col justify-center gap-10 items-center flex-wrap space-y-6'>


            {/* Left Section: Story and Content */}
            <div className='space-y-4 md:w-[48%] w-full'>
                <div className='space-y-2'>
                    <h2 className="uppercase  font-semibold text-gray-700 ">Our Journey</h2>
                    <h1 className="title capitalize">
                        A Commitment to <span className="text-primaryColor">Quality and Excellence</span>
                    </h1>
                </div>
                <p className="text-gray-500 text-md leading-relaxed">
                    MKAutos has been a trusted provider of luxury car rentals in the UAE for over a decade, offering an unparalleled experience to both residents and tourists. We believe in making every journey as extraordinary as the destination, providing a fleet of high-end vehicles for every occasion.
                    Our commitment to excellence ensures that every client enjoys the highest level of service, with flexible rental options, personalized booking, and a collection of luxury cars that redefine comfort and style.
                </p>


                <div className=' flex flex-col justify-center items-center space-y-8'>
                    <div className='flex flex-wrap gap-5 md:justify-between w-full'>
                        <div className='text-center'>
                            <h2 className="title text-primaryColor">{years}+</h2>
                            <p className="text-gray-500 text-sm mt-1">Years of Service</p>
                        </div>
                        <div className='text-center'>
                            <h2 className="title text-primaryColor">{cars}+</h2>
                            <p className="text-gray-500 text-sm mt-1">Luxury Cars</p>
                        </div>
                        <div className='text-center'>
                            <h2 className="title text-primaryColor">{clients}+</h2>
                            <p className="text-gray-500 text-sm mt-1">Happy Clients</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* {Right section:Image} */}
            <div className='flex-1 '>
                <Image
                    src="/assets/models/bugati-chiron.png"
                    alt="about-image"
                    height={800}
                    width={800}
                    quality={100}
                    className="transform scale-x-[-1] animate-slide-in"
                />
            </div>
        </div>
    );
};

export default AboutSection;
