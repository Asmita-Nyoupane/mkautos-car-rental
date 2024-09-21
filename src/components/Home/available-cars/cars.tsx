import React from 'react'
import Image from 'next/image'
import { cars } from './car'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'

const AvailableCars = () => {
    return (
        <div className='py-12 space-y-12 w-11/12 mx-auto'>

            {/* Title and description section */}
            <div className='flex flex-col gap-4 items-center justify-center'>
                <h2 className="text-center uppercase  font-semibold text-gray-700">
                    Our Fleet
                </h2>
                <h1 className='title capitalize text-center'>
                    Explore the <span className='text-primaryColor'>Perfect Ride</span> for Every Journey
                </h1>
                <p className='text-center text-md text-gray-500'>
                    Choose from a diverse range of premium vehicles for your adventures.
                </p>
            </div>

            {/* Cars listing section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>

                {cars.map((car) => (
                    <Card
                        key={car.name}
                        className='rounded-lg p-4 transform transition-all duration-500 md:hover:scale-105 hover:shadow-2xl space-y-4'
                    >

                        <div className='relative  overflow-hidden h-[160px] bg-gray-100  rounded-lg flex items-center justify-center'>
                            <Image
                                src={car.image}
                                alt={car.name}
                                height={300}
                                width={300}
                                quality={100}
                                priority={true}
                                className='object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 '
                            />
                        </div>

                        <h2 className='text-xl font-semibold '>{car.name}</h2>

                        <section className='flex flex-wrap gap-6 py-4 '>
                            <div className='flex gap-3 items-center bg-gray-100 py-2 px-2 w-fit rounded-lg shadow-sm'>
                                <Image src='/assets/car-icon-image/gas-pump.png' alt='fuel type' height={100} width={100} className='size-5' />
                                <span className='text-gray-700 font-semibold text-sm'>{car.fuelType}</span>
                            </div>
                            <div className='flex gap-3 items-center bg-gray-100 py-2 px-2 w-fit rounded-lg shadow-sm'>
                                <Image src='/assets/car-icon-image/speedometer.png' alt='speed' height={100} width={100} className='size-5' />
                                <span className='text-gray-700 font-semibold text-sm'>{car.speed} km/hr</span>
                            </div>
                            <div className='flex gap-3 items-center bg-gray-100 py-2 px-2 w-fit rounded-lg shadow-sm'>
                                <Image src='/assets/car-icon-image/seat.png' alt='seats' height={100} width={100} className='size-5' />
                                <span className='text-gray-700 font-semibold text-sm'>{car.seats} Seats</span>
                            </div>
                            <div className='flex gap-3 items-center bg-gray-100 py-2 px-2 w-fit rounded-lg shadow-sm'>
                                <Image src='/assets/car-icon-image/money.png' alt='price per day' height={100} width={100} className='size-5' />
                                <span className='text-gray-700 font-semibold text-sm'>{car.pricePerDay} per Day</span>
                            </div>
                        </section>

                        <div className='flex justify-between items-center px-4'>
                            <Button
                                className='bg-green-600 text-white hover:bg-green-700 font-semibold transition-transform duration-300 '
                                size='sm'
                            >
                                Book Now
                            </Button>
                            <Button
                                className='bg-transparent border-2 border-primaryColor text-primaryColor hover:text-white hover:bg-primaryColor font-semibold transition duration-300 '
                                size='sm'
                            >
                                View Details
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>

            {/* View all button */}
            <div className='flex justify-center items-center mt-10'>

                <Button
                    className='bg-transparent border-2 border-primaryColor text-primaryColor hover:text-white hover:bg-primaryColor font-semibold transition hover:duration-300 ease-in-out '
                    size='lg'
                >
                    <span className='mr-2'>View All Cars</span>
                    <MoveRight className='text-2xl' />
                </Button>
            </div>
        </div>
    )
}

export default AvailableCars
