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
        <div className="w-full h-140 overflow-hidden relative flex flex-col items-start justify-around p-5 md:flex-row xl:h-[80vh] bg-center bg-cover bg-fixed bg-no-repeat" style={{ backgroundImage: 'url("./assets/images/Wallpaper.webp")' }}>
            {/* Imagem */}
            <div className="w-2/4 md:w-2/5 md:h-full md:flex md:items-center md:justify-center overflow-hidden">
              <img src={slides[current].image} alt={slides[current].title} className="w-full h-70 bg-amber-200 object-cover rounded-sm md:h-3/4 lg:h-5/6 lg:w-3/4 xl:w-3/5"/>
            </div>

            <div className="w-2/4 shadow-neutral-500 shadow-[2px_5px_10px] bg-[#fffffffa] md:h-full md:flex md:mt-12 md:items-start md:justify-around md:flex-col md:p-5 xl:w-2/5 xl:h-4/5">
              {/* Conteúdo */}
              <div>
                  <h3 className="text-lg text-primary font-bold uppercase mb-2 md:text-2xl lg:text-5xl">{slides[current].title}</h3>
                  <p className="text-sm text-neutral-600 mb-4 md:text-lg lg:text-xl">{slides[current].description}</p>

                  {/* Botão Read More */}
                  <a href={slides[current].link} className="inline-flex items-center gap-2 text-base font-light text-black transition-all duration-300 hover:gap-3 hover:font-normal hover:text-primary md:text-xl lg:text-2xl">Saber mais<span className="ml-1">&rarr;</span></a>
              </div>

              {/* Paginação (bolinhas) */}
              <div className="w-1/6 flex justify-start items-center space-x-2 pb-4">
                  {slides.map((_, index) => (
                  <button key={index} onClick={() => setCurrent(index)} className={`w-2 h-2 rounded-full cursor-pointer md:size-2 ${current === index ? "bg-primary" : "bg-black"}`}/>
                  ))}
              </div>
            </div>

        </div>
    );
}

export default MovieSlideshow;