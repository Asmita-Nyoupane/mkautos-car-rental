import React from "react";
import { socialMedia } from "../Header/navlinks";
import Image from "next/image";
import Link from "next/link";

const BottomFooter = () => {
    return (
        <div className='w-full mx-auto flex flex-col md:flex-row justify-between items-center py-4 text-sm text-gray-400 border-t border-gray-700'>
            {/* Copyright Info */}
            <p className='mb-4 md:mb-0'>
                &copy; {new Date().getFullYear()}
                <span className="hover:text-secondaryColor cursor-pointer ml-1">
                    Tradevise International
                </span>
                . All rights reserved.
            </p>

            {/* Terms and Privacy */}
            <div className='flex flex-wrap items-center gap-4 md:gap-8 cursor-pointer mb-4 md:mb-0 '>
                <Link href="/terms" className="hover:text-secondaryColor transition-colors duration-200">
                    Terms & Conditions
                </Link>

                <Link href="/privacy" className="hover:text-secondaryColor transition-colors duration-200">
                    Privacy Policy
                </Link>
            </div>
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
                {socialMedia.map((media) => (
                    <Link href={media.link} key={media.name} className="hover:scale-110 transition-transform duration-200">
                        <Image
                            src={media.image}
                            alt={media.name}
                            height={24}
                            width={24}
                            className="w-6 h-6 object-contain"
                        />
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default BottomFooter;
