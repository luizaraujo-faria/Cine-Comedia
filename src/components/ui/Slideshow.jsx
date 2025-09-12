import React, { useState } from "react";
import { images } from '../../../public/assets/importAssets.js'

const { Banner1, Banner2, Banner3 } = images;

const slides = [
  {id: 1, src: Banner1},
  {id: 2, src: Banner2},
  {id: 3, src: Banner3}
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => setCurrent(index);

  return (
    <section className="relative w-full h-100 bg-secondary overflow-hidden lg:h-screen">

        <div className="flex transition-transform duration-700 ease-in-out"style={{ transform: `translateX(-${current * 100}%)` }}>

            {slides.map((slide) => (
                <div key={slide.id} className="min-w-full max-w-full max-h-screen relative">
                    <img src={slide.src} alt={slide.title} className="object-cover w-full h-screen" />
                        {/* <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-xl">{slide.title}</h5>
                            <p>{slide.text}</p>
                        </div> */}
                </div>
            ))}
        </div>

        <button onClick={prevSlide} className="absolute text-5xl bottom-1/4 left-8 cursor-pointer hover:text-primary -translate-y-1/2 text-white rounded-full">‹</button>
        <button onClick={nextSlide} className="absolute text-5xl bottom-1/4 right-8 cursor-pointer hover:text-primary -translate-y-1/2 text-white rounded-full">›</button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
            <button key={index} onClick={() => goToSlide(index)} className={`w-7 h-1 shadow-black shadow-2xl cursor-pointer hover:bg-primary ${current === index ? "bg-primary" : "bg-white"}`}/>
            ))}
        </div>
    </section>
  );
}

export default Slideshow;