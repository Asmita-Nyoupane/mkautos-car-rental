
"use client"
import React from 'react';

import Image from 'next/image';
import { carbrandImg } from './car-brand';


const CarBrands = () => {


    return (
        <div className="flex flex-wrap justify-center space-x-8 px-6 py-10">
            <div className="flex overflow-hidden space-x-16 group   mx-auto">
                <div className="flex space-x-16 animate-loop-scroll  group-hover:paused"   >
                    {
                        carbrandImg.map((brand, index) => (

                            <Image
                                key={index}
                                src={brand.image}
                                alt={brand.name}
                                width={100}
                                height={100}
                                loading='lazy'
                                className="max-w-none"
                            />

                        ))
                    }

                </div>
                <div

                    className="flex space-x-16 animate-loop-scroll  group-hover:paused" aria-hidden="true"  >
                    {
                        carbrandImg.map((brand, index) => (

                            <Image
                                key={index}
                                src={brand.image}
                                alt={brand.name}
                                width={100}
                                height={100}
                                loading='lazy'
                                className="max-w-none"
                            />

                        ))
                    }


                </div>
            </div>
        </div>
    );
};

export default CarBrands;
