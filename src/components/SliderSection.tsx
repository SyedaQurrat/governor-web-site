"use client";

import { useState, useEffect } from 'react';

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images = [
  '/images/slide-1.jpg',
  '/images/slide-2.jpg', 
  '/images/slide-3.jpg',
  '/images/slide-4.jpg',
  '/images/slide-5.jpg',
  '/images/slide-6.jpg',
  '/images/slide-7.jpg',
  '/images/slide-8.jpg',
] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide + 1 >= images.length ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[550px] overflow-hidden mx-auto mt-10 mb-10 xl:w-[1300px] lg:w-[90%] w-[95%]">
      <div 
        className="flex transition-transform duration-500 gap-2" 
        style={{ transform: `translateX(-${currentSlide * 50}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-1/2 flex-shrink-0 p-1"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center p-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              currentSlide === index ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
