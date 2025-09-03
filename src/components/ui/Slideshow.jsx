import React, { useState } from "react";

const slides = [
  {
    id: 1,
    src: "",
    title: "First slide label",
    text: "Some representative placeholder content for the first slide.",
  },
  {
    id: 2,
    src: "",
    title: "Second slide label",
    text: "Some representative placeholder content for the second slide.",
  },
  {
    id: 3,
    src: "",
    title: "Third slide label",
    text: "Some representative placeholder content for the third slide.",
  },
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
    <section className="relative w-full h-100 bg-secondary rounded-sm overflow-hidden">
        {/* Slides */}
        <div className="flex transition-transform duration-700 ease-in-out"style={{ transform: `translateX(-${current * 100}%)` }}>

            {slides.map((slide) => (
                <div key={slide.id} className="min-w-full relative">
                    <img src={slide.src} alt={slide.title} className="block w-full" />
                        <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-xl">{slide.title}</h5>
                            <p>{slide.text}</p>
                        </div>
                </div>
            ))}
        </div>

        {/* Controles */}
        <button onClick={prevSlide} className="absolute text-4xl bottom-1/4 left-8 -translate-y-1/2 text-white rounded-full">‹</button>
        <button onClick={nextSlide} className="absolute text-4xl bottom-1/4 right-8 -translate-y-1/2 text-white rounded-full">›</button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
            <button key={index} onClick={() => goToSlide(index)} className={`w-7 h-1 ${current === index ? "bg-white" : "bg-gray-400"}`}/>
            ))}
        </div>
    </section>
  );
}

export default Slideshow;