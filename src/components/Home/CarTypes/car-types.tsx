
"use client"
import React from 'react';

import Image from 'next/image';
import { carTypesData } from './types';


const Cartypes = () => {


    return (
        <div className="flex flex-wrap justify-center space-x-8 px-6 py-10">
            <div className="flex overflow-hidden space-x-16 group   mx-auto">
                <div className="flex space-x-16 animate-loop-scroll  group-hover:paused"   >
                    {
                        carTypesData.map((type, index) => (
                            <div className=' bg-white py-4 text-black/80 px-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105' key={index}>

                                <Image
                                    src={type.image}
                                    alt={type.name}
                                    width={100}
                                    height={100}
                                    loading='lazy'
                                    className="max-w-none h-16 "
                                />
                                <h2 className='text-semibold text-center text-lg'>{type.name}</h2>
                                <p className='text-gray-500 text-center'>{type.number} cars</p>
                            </div>

                        ))
                    }

                </div>
                <div

                    className="flex space-x-16 animate-loop-scroll  group-hover:paused" aria-hidden="true"  >
                    {
                        carTypesData.map((type, index) => (

                            <div className='bg-white py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105' key={index}>

                                <Image
                                    src={type.image}
                                    alt={type.name}
                                    width={100}
                                    height={100}
                                    loading='lazy'
                                    className="max-w-none h-16"
                                />
                                <h2 className='text-semibold text-center text-lg'>{type.name}</h2>
                                <p className='text-gray-500 text-center'>{type.number} cars</p>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    );
};

export default Cartypes;
