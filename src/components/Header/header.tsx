

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { navLinks } from "./navlinks";
import { Phone } from "lucide-react";

export type LinkItem = {
    name: string;
    link: string;
};

const TopHeader = () => {
    const path = usePathname();

    return (
        <header className="sticky top-0 left-0 right-0 z-50 bg-[#1E1E1E] shadow-md transition-colors duration-300">
            <div className="hidden md:flex justify-between items-center w-11/12 mx-auto h-16 px-2 py-2 lg:px-4">
                {/* Logo */}
                <Link href={"/"} className="flex items-center">
                    <Image
                        src={"/assets/logo/white-logo.png"}
                        alt="MK Autos logo"
                        height={40}
                        width={140}
                        quality={100}
                        priority
                        className="h-[40px] w-auto object-contain hover:scale-110 transition-transform duration-300 ease-in-out"
                    />
                </Link>

                {/* Navigation Links */}
                <nav className="flex items-center justify-end gap-6">
                    {navLinks.map((link: LinkItem, i) => (
                        <Link
                            key={i}
                            href={link.link}
                            className={`font-medium text-sm lg:text-md transition-all duration-300 ease-in-out transform hover:scale-110 ${path === link.link
                                ? "text-primaryColor font-semibold"
                                : "text-gray-200 hover:text-primaryColor"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    {/* Contact Info */}
                    <div className="flex items-center gap-2 text-gray-200">
                        <div className="flex items-center gap-2 border  border-primaryColor p-2  hover:scale-110 rounded-full transition-all duration-300 cursor-pointer 0">
                            <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div className="space-y-1 text-gray-100 text-[12px] text-left">
                            <p className="">Need Help?</p>
                            <p className="">+971-56-1234567</p>
                        </div>
                    </div>
                </nav>

            </div>
        </header>
    );
};

export default TopHeader;
