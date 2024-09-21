import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { serviceData } from './service-data';

const Service = () => {
    return (
        <section className='space-y-12 py-12'>
            <div className='flex flex-col gap-4 items-center justify-center text-center'>
                <h2 className="text-center uppercase  font-semibold text-gray-700">
                    Why Choose Us?
                </h2>
                <h1 className='title capitalize text-center w-11/12 mx-auto'>
                    Discover the Perfect <span className='text-primaryColor'>Car Rental</span> Service for Your Journey
                </h1>
                <p className='text-md text-gray-600 w-11/12 mx-auto'>
                    Experience a seamless car rental service with a wide variety of premium cars, tailor-made for every occasion, be it business trips or family vacations.
                </p>
            </div>
            <div className='flex flex-wrap gap-8 justify-center items-center w-11/12 mx-auto'>
                {serviceData.map((service, i) => (

                    <Card key={i} className='flex flex-col gap-4 items-center py-3 justify-center bg-gray-50 shadow-md rounded-lg  w-[250px] sm:h-[300px] overflow-hidden transition transform hover:scale-105 hover:shadow-lg  duration-300 ease-in-out'>
                        <div className='flex justify-center items-center '>
                            <Image
                                src={service.image}
                                alt={service.title}
                                height={200}
                                width={200}
                                className='rounded-md size-20'
                            />
                        </div>
                        <h1 className='sm:text-lg font-semibold text-center'>
                            {service.title}
                        </h1>
                        <p className='text-sm text-gray-500  text-center px-3 '>
                            {service.subtitle}
                        </p>
                    </Card>

                ))}
            </div>
        </section>
    );
};

export default Service;
