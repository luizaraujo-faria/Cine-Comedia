const TopicDiv = ({ title }) => {

    return(
        <div className="w-full h-28 flex justify-center items-center bg-fixed bg-cover bg-center bg-no-repeat relative before:absolute before:content-[''] before:left-0 before:top-0 before:w-full before:h-full before:bg-black/40" style={{ backgroundImage: "url('./assets/images/Banner-Div.webp')" }}>

            <div className="w-full h-full flex items-center justify-center gap-12 relative z-10">
                <hr className="w-1/16 h-px border-white bg-white"/>
                <h4 className="text-2xl text-white lg:text-3xl">{ title }</h4>
                <hr className="w-1/16 h-px border-white bg-white"/>
            </div>
        </div>
    );
}

export default TopicDiv;