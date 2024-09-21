"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Image from 'next/image';
import { navLinks } from './navlinks';
import { MessageCircleMore, Phone, } from 'lucide-react';


export type LinkItem = {
    name: string;
    link: string;
};

const TopHeader = () => {
    const path = usePathname();


    return (
        <div className={`sticky top-0 left-0 right-0 shadow-md z-50 transition-colors duration-300 bg-[#1E1E1E]`}>
            <div className="hidden md:flex justify-between items-center w-11/12 mx-auto h-16 px-2 py-2 lg:px-4">
                {/* Logo */}
                <Link href={'/'} className="flex items-center">
                    <Image
                        src={'/assets/logo/white-logo.png'}
                        alt="logo"
                        height={100}
                        width={140}
                        quality={100}
                        priority
                        className="h-[40px] w-auto object-contain"
                    />
                </Link>

                {/* Navigation Links */}
                <div className="flex text-sm gap-4 lg:text-md lg:gap-6 items-center justify-end">
                    {navLinks.map((link: LinkItem, i) => (
                        <Link
                            key={i}
                            href={link.link}
                            className={`text-md font-medium transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-primaryColor
                                ${path === link.link ? "text-primaryColor  text-base font-bold" : "text-gray-200"}
                            `}
                        >
                            {link.name}
                        </Link>
                    ))}
                    {/* Chat and Phone Icons */}
                    <div className='flex gap-4 items-center justify-center'>
                        <div className="flex items-center gap-2 cursor-pointer text-gray-200 hover:text-primaryColor transition-colors duration-300">
                            <Phone className="w-5 h-5" />
                            <span className="text-sm">Call Us</span>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer text-gray-200 hover:text-primaryColor transition-colors duration-300">
                            <MessageCircleMore className="w-5 h-5" />
                            <span className="text-sm">Chat</span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default TopHeader;
