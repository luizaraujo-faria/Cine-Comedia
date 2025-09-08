import { useState } from 'react';
// import { icons } from '../../assets/importAssets.js';

const Footer = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const sumaryColumns = [
        { title: 'SOBRE', content: ['Quem somos', 'Equipe', 'Missão', 'Carreiras', 'Eventos'] },
        { title: 'SUPORTE', content: ['Contato', 'Reembolso', 'Pagamentos', 'Denuncias', 'Planos'] },
        { title: 'GÊNERO', content: ['Sobre', 'História', 'Astros', 'Filmes', 'Eventos'] },
        { title: 'SOCIAL', content: ['@cinecomedia.ofc', 'CineComédia_OFC', '@cine_comedia.X', 'Comédia&Cinema', 'Comédia@Cine.com'] },
    ];

    const toggleColumn = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    return <footer className="w-full h-fit bg-secondary relative flex flex-col items-center justify-start gap-8 overflow-hidden">
        <div className="w-full h-6 bg-primary flex items-center justify-between p-1">
            {/* <h4 className='text-xl font-anton'>Nossas redes</h4>

            <div className='flex gap-2'>
                <a href=""><img src={icons.Twitter} alt="" className='size-7' /></a>
                <a href=""><img src={icons.Instagram} alt="" className='size-7' /></a>
                <a href=""><img src={icons.Facebook} alt="" className='size-7' /></a>
                <a href=""><img src={icons.Youtube} alt="" className='size-7' /></a>
            </div> */}
        </div>

        <section id='sumaryFooter' className='w-full h-fit flex flex-col items-center justify-start lg:grid lg:grid-cols-4'>

            {sumaryColumns.map((column, index) => (

                <div key={index} className={`w-full h-18 flex flex-col items-center justify-end relative gap-20 overflow-hidden transition-all duration-300 ${activeIndex === index ? "h-68" : "h-18"} lg:h-fit lg:gap-10`}>
                    <header onClick={() => toggleColumn(index)} className='w-full h-18 flex items-center bg-secondary border-t-black border-t-[1px] justify-around gap-16 absolute top-0 cursor-pointer lg:relative lg:justify-start lg:pl-16'>

                        <h5 className='text-lg text-stone-300 font-light font-anton tracking-wide'>{column.title}</h5>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className={`size-6 text-white transition-transform duration-300 ${activeIndex === index ? "rotate-45" : "rotate-0"} md:hidden`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </header>

                    <ul className='w-full h-60 flex flex-col items-start justify-center gap-2 pl-15 pt-10 lg:h-fit lg:items-start lg:pl-16'>
                        {column.content.map((c, i) => (
                            <li key={i} className='text-white text-xl font-light cursor-pointer'>{c}</li>
                        ))}
                    </ul>

                </div>

            ))}
        </section>

        <div className="w-full h-18 flex justify-around items-center lg:justify-center lg:gap-10">
            <hr className="w-1/4 h-px border-primary bg-primary lg:w-1/8"/>
            {/* <h4 className="text-2xl font-anton font-thin text-white tracking-widest">Projeto</h4> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-white">
                <path fillRule="evenodd" d="M9.664 1.319a.75.75 0 0 1 .672 0 41.059 41.059 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.372 31.372 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 31.508 31.508 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.216 2.216 0 0 0 6 9.393v.38a31.293 31.293 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41.059 41.059 0 0 1 8.198-5.424ZM6 11.459a29.848 29.848 0 0 0-2.455-1.158 41.029 41.029 0 0 0-.39 3.114.75.75 0 0 0 .419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.547 26.547 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41.053 41.053 0 0 0-.39-3.114 29.925 29.925 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 0 1-1.084 3.45 26.503 26.503 0 0 0-1.281-.78A5.487 5.487 0 0 0 6 12v-.54Z" clipRule="evenodd" />
            </svg>

            <hr className="w-1/4 h-px border-primary bg-primary lg:w-1/8"/>
        </div>

        <section className='w-full h-50 flex flex-col items-center justify-center gap-5 bg-primary'>
            <h2 className='text-xl text-black font-anton'>©2025 - CineComédia.</h2>
            <hr className='w-3/5 h-0.5 border-black bg-black lg:w-1/5 lg:h-px'/>
            <article className='w-7/8 flex flex-col items-center justify-center text-[18px] font-medium'>
                <p className='text-center'>Mostra Cultural - Etec Basilides de Godoy</p>
                <p className='text-center'>Por: Laura Valentini, Sammuel Alves, Nicolas Lima e Luiz.</p>
            </article>
        </section>

        <section className='w-full h-40 flex items-end justify-center bg-secondary lg:h-75'>
            <h6 className='text-7xl text-neutral-950 transition-all duration-1000 cursor-pointer hover:text-primary font-anton lg:text-[17rem] leading-[15rem]'>CINECOMÉDIA</h6>
        </section>

    </footer>
}

export default Footer;