const TopicDiv = ({ title }) => {

    return(
        <div className="w-full h-28 flex justify-center items-center gap-12 bg-fixed bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('./assets/images/Banner-Div.webp')" }}>
            <hr className="w-1/16 h-px border-black bg-black"/>
            <h4 className="text-2xl text-black lg:text-3xl">{ title }</h4>
            <hr className="w-1/16 h-px border-black bg-black"/>
        </div>
    );
}

export default TopicDiv;