const InfoCards = ({ content, className }) => {

    const { title, text, text2, image } = content;

    return(
        <div id="intro" className={`w-full h-140 ${className} flex flex-col items-center justify-start p-5 gap-5 md:grid md:grid-cols-2 md:place-items-center md:items-start xl:pt-25 xl:h-[80vh]`}>

            <article className="w-full flex flex-col items-center justify-start gap-10 shadow-neutral-500 shadow-[2px_5px_10px] bg-[#fffffffa] md:items-start md:w-4/5 lg:h-fit lg:pt-16 xl:p-5 xl:w-[95%] rounded-sm">

                <h3 className="text-2xl text-primary font-anton lg:text-5xl">{ title }</h3>

                <div className="text-justify text-xl text-white flex flex-col gap-3">
                    <p className={`${className}`}>{ text }</p>
                    <p className={`${className}`}>{text2}</p>
                </div>
            </article>

            <div className="w-full h-2/4 bg-primary shadow-neutral-400 shadow-[2px_5px_10px] md:h-3/4 lg:h-5/6 lg:w-3/5 xl:w-2/5">
                <img src={image} className="w-full h-full object-cover" alt="IMAGEM" />
            </div>
        </div>
    )
}

export default InfoCards;