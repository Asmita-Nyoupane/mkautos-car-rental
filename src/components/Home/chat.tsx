"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ChatNow = () => {
    // State to manage visibility
    const [visible, setVisible] = useState(false);

    // useEffect to delay the appearance of the ChatNow icon
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 5000); // Delay of 10 seconds

        // Cleanup the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`fixed bottom-10 right-4 z-50 transform transition-all duration-700 ease-in-out ${visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
        >
            <Link href={'/'} className="flex items-center bg-black/50 py-2 px-4 rounded-full shadow-lg hover:bg-black/70 transition-colors duration-300 ease-in-out">
                <Image
                    src={'/assets/social-media/chat.png'}
                    alt="Chat Now"
                    height={50}
                    width={50}
                    quality={100}
                    priority
                    className=" h-[28px] md:h-[40px] w-auto object-contain hover:scale-110 transition-transform duration-300 ease-in-out"
                />
                <span className="ml-2 text-white text-sm font-semibold ">Chat Now</span>
            </Link>
        </div>
    );
};

export default ChatNow;
