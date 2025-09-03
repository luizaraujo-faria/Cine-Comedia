import { useState } from 'react';
import { icons } from '../../assets/importAssets.js';

const Footer = ( ) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const sumaryColumns = [
        { title: "Titulo 1", content: ["Conteudo", "Conteudo", "Conteudo", "Conteudo"] },
        { title: "Titulo 2", content: ["Conteudo", "Conteudo", "Conteudo", "Conteudo"] },
        { title: "Titulo 3", content: ["Conteudo", "Conteudo", "Conteudo", "Conteudo"] },
        { title: "Titulo 4", content: ["Conteudo", "Conteudo", "Conteudo", "Conteudo"] },
    ];

    const toggleColumn = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    return <footer className="w-full h-fit bg-secondary relative flex flex-col items-center justify-start gap-8">
        <div className="w-full h-10 bg-primary flex items-center justify-between p-1">
            <h4 className='text-xl font-anton'>Nossas redes</h4>

            <div className='flex gap-2'>
                <a href=""><img src={icons.Twitter} alt="" className='size-7' /></a>
                <a href=""><img src={icons.Instagram} alt="" className='size-7' /></a>
                <a href=""><img src={icons.Facebook} alt="" className='size-7' /></a>
                <a href=""><img src={icons.Youtube} alt="" className='size-7' /></a>
            </div>
        </div>

        <section id='sumaryFooter' className='w-full h-fit flex flex-col items-center justify-start'>

            {sumaryColumns.map((column, index) => (

                <div key={index} className={`w-full h-18 flex flex-col items-center justify-end relative gap-20 overflow-hidden transition-all duration-300 ${activeIndex === index ? "h-68" : "h-18"}`}>
                    <header onClick={() => toggleColumn(index)} className='w-full h-18 flex items-center bg-secondary  border-t-black border-t-[1px] justify-around gap-16 absolute top-0 cursor-pointer'>

                        <h5 className='text-xl text-white'>{column.title}</h5>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-7 text-white transition-transform duration-300 ${activeIndex === index ? "rotate-45" : "rotate-0"}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </header>

                    <ul className='w-full h-50 flex flex-col items-center justify-center gap-5'>
                        {column.content.map((c, i) => (
                            <li key={i} className='text-white text-xl'>{c}</li>
                        ))}
                    </ul>

                </div>

            ))}
        </section>

        <div className="w-full h-18 flex justify-around items-center">
            <hr className="w-1/4 h-px border-primary bg-primary"/>
            {/* <h4 className="text-2xl font-anton font-thin text-white tracking-widest">Projeto</h4> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 text-white">
                <path fillRule="evenodd" d="M6.28 5.22a.75.75 0 0 1 0 1.06L2.56 10l3.72 3.72a.75.75 0 0 1-1.06 1.06L.97 10.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Zm7.44 0a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 0 1 0-1.06ZM11.377 2.011a.75.75 0 0 1 .612.867l-2.5 14.5a.75.75 0 0 1-1.478-.255l2.5-14.5a.75.75 0 0 1 .866-.612Z" clipRule="evenodd" />
            </svg>

            <hr className="w-1/4 h-px border-primary bg-primary"/>
        </div>

        <section className='w-full h-50 flex flex-col items-center justify-center gap-5 bg-primary'>
            <h2 className='text-xl text-black font-anton'>©2025 - CineComédia.</h2>
            <hr className='w-3/5 h-0.5 border-black bg-black'/>
            <article className='w-7/8 flex flex-col items-center justify-center text-[18px] font-medium'>
                <p className='text-center'>Feira Cultural Etec Basilides de Godoy - 2025</p>
                <p className='text-center'>Por: Laura Valentini, Sammuel Alves, Nicolas Lima e Luiz.</p>
            </article>
        </section>

        <section className='w-full h-40 flex items-center justify-center bg-secondary'>
            <h6 className='text-7xl font-anton'>CINECOMÉDIA</h6>
        </section>

    </footer>
}

export default Footer;