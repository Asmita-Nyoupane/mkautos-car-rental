
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { contacts, footerLink } from '../Header/navlinks'
import { LinkItem } from '../Header/header'
import { SendHorizontal } from 'lucide-react'

const TopFooter = () => {
    return (
        <div className='py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
            {/* Logo and description */}
            <section className='space-y-6'>
                <Link href={'/'}>
                    <Image
                        src={'/assets/logo/white-logo.png'}
                        alt="logo"
                        height={140}
                        width={140}
                        quality={100}
                        priority={true}
                        className="h-[60px] w-auto object-contain"
                    />
                </Link>
                <p className='text-sm text-gray-400'>
                    Discover premium car rentals with our world-class fleet. Experience the best of luxury travel with hassle-free bookings and exceptional service. Travel in style across the UAE.
                </p>
            </section>

            {/* Useful Links */}
            <section className='space-y-6'>
                <h2 className='text-xl font-bold text-white'>Useful Links</h2>
                <div className='flex flex-col gap-2 text-gray-400'>
                    {footerLink.map((link: LinkItem, i) => (
                        <Link
                            key={i}
                            href={link.link}
                            className='text-sm font-medium transition-all duration-200 ease-in-out hover:text-primaryColor'
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </section>

            {/* Contact Info */}
            <section className='space-y-6'>
                <h2 className='text-xl font-bold text-white'>Contact Us</h2>
                <div className='flex flex-col gap-4'>
                    {contacts.map((contact, i) => (
                        <div key={i} className="flex gap-4 items-center">
                            <div className="text-primaryColor text-lg">{<contact.icon />}</div>
                            <div className="text-sm text-gray-400">{contact.info}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter */}
            <section className='space-y-6'>
                <h2 className='text-xl font-bold text-white'>Stay Updated</h2>
                <p className="text-sm text-gray-400">
                    Subscribe to our newsletter for exclusive offers, the latest news, and updates straight to your inbox.
                </p>
                <div className='flex bg-gray-800 px-4 py-2 rounded-full items-center'>

                    <input type="email" placeholder="Enter Email" className=" bg-gray-800  w-full focus-visible:ring-0  border-none focus-visible:outline-0 h-full placeholder:text-gray-400 placeholder:text-sm text-gray-400" />

                    <button className="text-primaryColor font-semibold ml-2 hover:-rotate-12 transition-transform duration-200">
                        <SendHorizontal />
                    </button>
                </div>
            </section>
        </div>
    )
}

export default TopFooter
