import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image:"https://images.unsplash.com/photo-1606813907291-12d0d2f7c5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title:"Gente Grande",
    description:"Prévia do Gente Grande",
    link: "#",
  },
  {
    id: 2,
    image:"https://images.unsplash.com/photo-1616627988859-10dbf8ff38ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Ace Ventura",
    description:"Prévia Ace Ventura",
    link: "#",
  }
];

const MovieSlideshow = () => {

    const [current, setCurrent] = useState(0);

    // Troca automática dos slides
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000); // 5 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full mx-auto h-120 bg-secondary border rounded-sm overflow-hidden relative flex flex-col items-start justify-around p-5">
            {/* Imagem */}
            <img src={slides[current].image} alt={slides[current].title} className="w-full h-52 bg-amber-200 object-cover"/>

            {/* Conteúdo */}
            <div>
                <h2 className="text-lg text-white font-bold uppercase mb-2">{slides[current].title}</h2>
                <p className="text-sm text-gray-300 mb-4">{slides[current].description}</p>

                {/* Botão Read More */}
                <a href={slides[current].link} className="inline-flex items-center text-base font-semibold text-white hover:underline">Saber mais<span className="ml-1">&rarr;</span></a>
            </div>

            {/* Paginação (bolinhas) */}
            <div className="w-1/6 flex justify-start items-center space-x-2 pb-4">
                {slides.map((_, index) => (
                <button key={index} onClick={() => setCurrent(index)} className={`w-2 h-2 rounded-full ${current === index ? "bg-black" : "bg-primary"}`}/>
                ))}
            </div>

        </div>
    );
}

export default MovieSlideshow;