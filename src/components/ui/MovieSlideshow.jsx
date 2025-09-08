import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image:"./assets/images/Cartaz-GG.webp",
    title:"Gente Grande",
    description:"Passados 30 anos, cinco amigos se encontram no funeral do antigo treinador de basquete da escola em que estudaram juntos. Após a cerimônia Lenny (Adam Sandler), Kurt (Chris Rock), Eric (Kevin James), Marcus (David Spade) e Rob (Rob Schneider) e suas respectivas famílias se reúnem na casa do lago em que iam juntos na época de escola para relembrar os velhos tempos e curtir o fim de semana.",
    link: "/gentegrande",
  },
  {
    id: 2,
    image:"./assets/images/Cartaz-AV.webp",
    title: "Ace Ventura",
    description:"Ace Ventura é um excêntrico e atrapalhado detetive especializado em casos envolvendo animais. Apesar de viver cercado de bichos, raramente encontra um grande desafio em seu dia a dia. Isso muda quando o mascote do time de futebol americano Miami Dolphins, um golfinho chamado Snowflake, é misteriosamente sequestrado. Determinado a resolver o caso, Ace mergulha em uma investigação repleta de situações absurdas, pistas improváveis e muito bom humor.",
    link: "/aceventura",
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
        <div className="w-full h-140 overflow-hidden relative flex flex-col items-start justify-around p-5 md:grid md:grid-cols-2 md:place-content-center xl:h-screen xl:w-[95%] 2xl:h-[80vh] bg-center bg-cover bg-fixed bg-no-repeat" style={{ backgroundImage: 'url("./assets/images/Wallpaper.webp")' }}>

            <div className="w-2/4 md:w-full md:h-screen md:flex md:items-center md:justify-center overflow-hidden">
              <img src={slides[current].image} alt={slides[current].title} className="w-full h-full shadow-neutral-500 shadow-[2px_5px_10px] bg-amber-200 object-cover rounded-sm md:h-3/4 lg:h-5/6 lg:w-3/4 xl:w-3/5"/>
            </div>

            <div className="w-2/4 shadow-neutral-500 shadow-[2px_5px_10px] bg-[#fffffffa] md:h-screen md:flex md:mt-12 md:items-start md:justify-around md:flex-col md:p-5 xl:w-[95%] xl:h-4/5">
              <div>
                  <h3 className="text-lg text-primary font-bold uppercase mb-2 md:text-2xl lg:text-5xl">{slides[current].title}</h3>
                  <p className="text-sm text-justify text-neutral-600 mb-4 md:text-lg lg:text-xl">{slides[current].description}</p>

                  <Link to={slides[current].link} className="inline-flex items-center gap-2 text-base font-light text-black transition-all duration-300 hover:gap-3 hover:font-normal hover:text-primary md:text-xl lg:text-2xl">Saber mais<span className="ml-1">&rarr;</span></Link>
              </div>

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