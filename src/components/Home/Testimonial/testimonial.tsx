"use client"
import React from 'react'
import { Card } from '../../ui/card'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { customerTestimonials } from './testimonial-data'
import Star from './star'




const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        centerPadding: "30px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };
    return (

        <section className="w-11/12 mx-auto space-y-10">
            <div className='flex flex-col gap-3 items-center justify-center'>

                <h2 className=" text-center uppercase  font-bold text-gray-700">What Our Customers Are Saying</h2>
                <h1 className='title capitalize'>
                    See How Our Clients <span className=' text-primaryColor'>Love Their Rentals</span>
                </h1>
                <p className='text-md text-gray-500 md:w-[70%] text-center'>Read real feedback from our satisfied customers who have enjoyed our top-notch car rental services. Discover how we’ve made their journeys memorable and stress-free.</p>

            </div>
            <div className="slider-container   ">
                <Slider {...settings} className=''>
                    {customerTestimonials.map((testimonial, i) => (
                        <div key={i} className='px-4'>
                            <Card className='flex flex-col gap-4 py-4 px-6 shadow-lg rounded-xl bg-gray-50 h-[270px]'>
                                <div className="flex items-center gap-4">
                                    <div className='rounded-full'>
                                        <Image
                                            src={testimonial.image}
                                            height={300}
                                            width={300}

                                            alt={testimonial.name}
                                            className="object-cover w-20 h-20 rounded-full object-top"
                                        />

                                    </div>
                                    <div className="flex flex-col ">
                                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                        <span className="text-sm text-gray-500 font-light py-[2px]">{testimonial.location}</span>
                                        <Star stars={testimonial.rating} />
                                    </div>
                                </div>
                                <p className="mt-4 text-gray-600 text-sm  md:leading-relaxed ">
                                    {testimonial.description}
                                </p>
                                <span className="text-xs text-gray-400 mt-2 self-end">{new Date(testimonial.date).toLocaleDateString()}</span>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </div>

        </section>
    )
}

export default Testimonials