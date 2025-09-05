import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import InfoCards from "../components/ui/InfoCards";
import MovieSlideshow from "../components/ui/MovieSlideshow";
import Slideshow from "../components/ui/Slideshow";
import TopicDiv from "../components/ui/TopicDiv";

const contentCardIntro = {
    title: 'Amante da comédia',
    text: 'Cine Comédia – O lugar onde o riso é sempre o protagonista! Dos clássicos inesquecíveis às estreias mais hilárias, aqui você encontra um universo feito para quem ama gargalhar Se a vida já é séria demais, dê o play e descubra sua nova dose diária de diversão!',
    image: 'path_da_imagem'
};

const contentCardGen = {
    title: 'A Comédia',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, numquam commodi reiciendis voluptates temporibus veniam, molestiae ea qui atque odio eum esse fugit autem voluptatem tempore fugiat tenetur beatae saepe?',
    text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, numquam commodi reiciendis voluptates temporibus veniam, molestiae ea qui atque odio eum esse fugit autem voluptatem tempore fugiat tenetur beatae saepe?',
    image: 'path_da_imagem'
};

const HomePage = () => {
    
    return <>

        <div className="w-full flex flex-col gap-5 p-5 bg-gradient-to-b from-stone-900 from-5% to-transparent to-95% fixed z-20">
            <Header />
        </div>
        <main className="w-full h-fit relative">

            <div className="flex flex-col gap-5 relative">
                <Slideshow />
            </div>
                
            <section className="flex relative bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('./assets/images/Wallpaper.webp')" }}>
                <InfoCards content={contentCardIntro} className={'bg-neutral-100 text-black'}/>
            </section>
                    
            <TopicDiv title={'GÊNERO'}/>

            <section id="genero" className="w-full h-fit relative">
                <InfoCards content={contentCardGen} className={'bg-neutral-100 text-black'}/>
            </section>

            <TopicDiv title={'FILMES'}/>

            <section className="w-full h-fit flex flex-col items-center justify-start gap-5">
                <MovieSlideshow />
            </section>

        </main>
        <Footer/>
    </>
}

export default HomePage;