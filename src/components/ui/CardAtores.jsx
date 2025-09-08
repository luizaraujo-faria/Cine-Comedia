import { useState } from "react";

const CardAtores = ({ atores }) => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const visibleCards = 3;

   const prevSlide = () => {
      setCurrentIndex((prev) => (prev === 0 ? atores.length - visibleCards : prev - 1));
   };

   const nextSlide = () => {
         setCurrentIndex((prev) =>
            prev >= atores.length - visibleCards ? 0 : prev + 1
         );
   };

   return (
      <div className="relative w-full h-[70vh] flex items-center justify-center p-5 overflow-hidden 2xl:h-[50vh]">

         <div className="w-full h-full pl-160 flex transition-transform duration-500 ease-in-out 2xl:pl-60 2xl:w-3/5" style={{transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`, width: `${(atores.length / visibleCards) * 100}%`,}}>
         {atores.map((ator, i) => (

            <div key={i} className="w-1/3 h-full flex-shrink-1 px-5">

               <div className="w-70 h-full flex flex-col items-center justify-start rounded-sm bg-secondaryn relative overflow-hidden group shadow-[2px_3px_10px] shadow-black/50">
               <img src={ator.image} alt={ator.name} className="w-full h-full object-cover bg-primary"/>

               <div className="w-full h-2/4 flex flex-col items-start justify-start p-5 bg-black/80 absolute z-10 bottom-[-50%] transition-all duration-300 group-hover:bottom-0">
                  <h3 className="text-white text-2xl font-light">{ator.name}</h3>
                  <p className="text-white text-xl font-light text-justify">{ator.about}</p>
               </div>

               </div>
            </div>
         ))}
         </div>

         <button onClick={prevSlide} className="absolute text-5xl bottom-1/4 left-8 cursor-pointer hover:text-primary -translate-y-1/2 text-white rounded-full bg-black/50 size-10 flex items-center justify-center pb-3">‹</button>
         <button onClick={nextSlide} className="absolute text-5xl bottom-1/4 right-8 cursor-pointer hover:text-primary -translate-y-1/2 text-white rounded-full bg-black/50 size-10 flex items-center justify-center pb-3">›</button>
      </div>
   );
};

export default CardAtores;