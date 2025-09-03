const InfoCards = ({ content }) => {

    const { title, text } = content;

    return(
        <div id="intro" className="w-full h-140 rounded-sm bg-secondary flex flex-col items-center justify-start p-5 gap-5 md:flex-row">

            <article className="w-full flex flex-col items-center justify-start gap-5 md:items-start">

                <h3 className="text-2xl text-primary font-anton">{ title }</h3>

                <div className="text-justify text-xl text-white flex flex-col gap-3">
                    <p className="">{ text }</p>
                </div>
            </article>

            <div className="w-full h-2/4 bg-amber-200 md:h-3/4 lg:h-5/6 lg:w-3/5">
                <img src="" alt="IMAGEM" />
            </div>
        </div>
    )
}

export default InfoCards;