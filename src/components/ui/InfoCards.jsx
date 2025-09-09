const InfoCards = ({ content, className }) => {

    const { title, text, text2, text3, text4, image } = content;

    return(
        <div id="intro" className={`w-full h-140 flex flex-col items-center justify-start  gap-5 md:grid  ${className ? 'md:grid-cols-1' : 'md:grid-cols-2'} md:place-items-center md:items-start xl:pt-25 xl:h-screen 2xl:h-[80vh] bg-center bg-fixed bg-cover bg-no-repeat`} style={{ backgroundImage: "url('./assets/images/Wallpaper.webp')" }}>

            <article className="w-full flex flex-col items-center justify-start gap-10 shadow-neutral-500 shadow-[2px_5px_10px] bg-white/95 md:items-start md:w-4/5 lg:h-fit lg:pt-16 xl:p-5 xl:w-[95%] rounded-sm">

                <h3 className="text-2xl text-primary font-anton lg:text-5xl 2xl:text-7xl">{ title }</h3>

                <div className="text-justify text-xl text-black flex flex-col gap-3 2xl:text-3xl">
                    <p>{text}</p>
                    <p>{text2}</p>
                    <p>{text3}</p>
                    <p>{text4}</p>
                </div>
            </article>

            <div className={`${className} w-full h-2/4 bg-primary shadow-neutral-400 shadow-[2px_5px_10px] md:h-3/4 lg:h-5/6 lg:w-3/5 xl:w-2/5`}>
                <img src={image} className="w-full h-full object-cover rounded-sm" alt="IMAGEM" />
            </div>
        </div>
    )
}

export default InfoCards;