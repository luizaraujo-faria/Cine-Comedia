import { useState } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import img1quiz from '../../public/assets/images/img1quiz.webp';
import img2quiz from '../../public/assets/images/img2quiz.webp';
import img3quiz from '../../public/assets/images/img3quiz.webp';
import img4quiz from '../../public/assets/images/img4quiz.webp';
import img5quiz from '../../public/assets/images/img5quiz.webp';

const imagens = [
  { imagem: img1quiz, resposta: 'Ace Ventura', index: 1 },
  { imagem: img2quiz, resposta: 'Gente Grande 2', index: 2 },
  { imagem: img3quiz, resposta: 'Ace Ventura 2', index: 3 },
  { imagem: img4quiz, resposta: 'Ace Ventura 2', index: 4 },
  { imagem: img5quiz, resposta: 'Gente Grande', index: 5 },
];

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const startGame = () => {
    setGameStarted(true);
    setCurrentIndex(0);
    setScore(0);
    setUserAnswer("");
    setShowScore(false);
  };

  const handleNext = () => {
    // Verifica resposta
    if (userAnswer.trim().toLowerCase() === imagens[currentIndex].resposta.toLowerCase()) {
      setScore(score + 1);
    }
    setUserAnswer("");

    if (currentIndex < imagens.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setGameStarted(false); // faz desaparecer a seção
      setShowScore(true); // mostra a pontuação

      // Esconde a pontuação após 10 segundos
      setTimeout(() => {
        setShowScore(false);
      }, 10000);
    }
  };

  return (
    <>
      <div className="w-full flex flex-col gap-5 p-5 bg-gradient-to-b from-stone-900 from-5% to-transparent to-95% fixed z-20">
        <Header page={'› Quiz'}/>
      </div>

      <main className={`w-full ${gameStarted ? 'h-fit' : 'h-screen'} relative py-[130px] px-[50px] gap-[50px] flex flex-col`}>
        <section className="w-full h-fit flex flex-col items-center gap-5">
          <h1 className="text-center text-black afacad font-bold tracking-wider text-[35px]">Bem-vindo ao Quiz de imagens do Cine-Comédia!</h1>
          <h3 className="text-center text-gray-700 afacad font-light text-[20px]">Acerte qual imagem é de qual filme e veja sua pontuação final</h3>

          {showScore && (
            <h3 className="text-center text-yellow-300 afacad font-regular text-[20px]">Sua pontuação: {score}/{imagens.length}</h3>
          )}

          <button type="button" className="text-[20px] afacad bg-primary font-bold px-10 py-2 rounded-[10px] hover:bg-secondary hover:text-primary cursor-pointer transition-colors duration-200 shadow-lg" onClick={startGame}>Jogar</button>
          <div className="h-[3px] w-[80%] bg-primary"></div>
        </section>


        {gameStarted && (
          <section className="w-full h-fit flex flex-col items-center gap-5">

            <div className="w-full flex flex-row gap-2 justify-center">
              {imagens.map((item, i) => (
                <h1 key={i} className={`text-[30px] font-regular ${currentIndex === i ? "text-black" : "text-gray-400"}`}>
                  {item.index}
                </h1>
              ))}
            </div>

            <div className="w-full h-fit flex justify-center items-center overflow-hidden rounded-[4px]">
              <img src={imagens[currentIndex].imagem} className="lg:w-[70%] lg:h-fit lg:rounded-[6px]" />
            </div>

            <div className="w-full h-fit flex flex-col items-center gap-3 lg:gap-8">
              <input type="text" placeholder="Digite sua resposta aqui" className=" w-[80%] h-[40px] border-2 border-gray-300 rounded-[5px] px-3 py-2 focus:outline-none focus:border-primary transition-colors duration-200 lg:w-[50%] lg:h-[65px] lg:text-[22px]" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)}/>
              <input type="button" value="Próximo" className=" w-[40%] h-[40px] bg-primary text-black font-bold rounded-sm cursor-pointer hover:bg-secondary hover:text-primary transition-colors duration-200 lg:w-[20%] lg:h-12 lg:text-[20px]" onClick={handleNext}/>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Quiz;