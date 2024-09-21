import AboutSection from "@/components/Home/about/about";
import AvailableCars from "@/components/Home/available-cars/cars";
import CarBrands from "@/components/Home/Brand/brand";
import CarTypes from "@/components/Home/CarTypes/car-types";
import DocumentRequirements from "@/components/Home/Document/document-required";
import Testimonials from "@/components/Home/Testimonial/testimonial";

import HeroSection from "@/components/Home/top-section/hero-section";


export default function Home() {
  return (
    <div className="flex flex-col gap-20">

      <HeroSection />
      <AboutSection />
      {/* Car Types */}
      <section className="bg-gray-100 space-y-5 py-6">
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className="uppercase  font-bold text-gray-700">Car Types</h2>
          <h1 className="title capitalize">
            Discover Our <span className="text-primaryColor">Diverse Range </span> of Vehicles
          </h1>
          <p className="text-gray-500 text-md text-center">From compact cars to SUVs, find the perfect vehicle that suits your lifestyle and needs.</p>
        </div>
        <CarTypes />
      </section>
      <AvailableCars />
      <section className="bg-gray-100 space-y-5 py-6">
        <DocumentRequirements />
      </section>
      <Testimonials />
      {/* Car Brands */}
      <section className="bg-gray-100 space-y-5 py-6">
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className="uppercase font-bold text-gray-700 ">Car Brands</h2>
          <h1 className="title capitalize">
            Explore Our <span className="text-primaryColor">Premium Vehicle Selection</span>
          </h1>
          <p className="text-gray-500 text-md text-center">From sporty coupes to family-friendly SUVs, find the perfect car to elevate your driving experience.</p>
        </div>
        <CarBrands />
      </section>

    </div>
  );
}
