import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import InfoCards from "../components/ui/InfoCards";
import MovieSlideshow from "../components/ui/MovieSlideshow";
import Slideshow from "../components/ui/Slideshow";
import TopicDiv from "../components/ui/TopicDiv";

const contentCardIntro = {
    title: 'Amante da comédia',
    text: 'Cine Comédia – O lugar onde o riso é sempre o protagonista! Dos clássicos inesquecíveis às estreias mais hilárias, aqui você encontra um universo feito para quem ama gargalhar Se a vida já é séria demais, dê o play e descubra sua nova dose diária de diversão!',
    image: './assets/images/cineComediaimg.webp'
};

const contentCardGen = {
    title: 'A Comédia',
    text: 'Comédia é um gênero de ficção, presente em diversas formas de arte como no teatro, cinema, televisão, livros, entre outros. Onde o objetivo desse gênero é divertir o público e induzir ao riso, mas também foi bastante usada para criticar os costumes da sociedade.',
    text2: 'A Comédia teve sua origem na Grécia antiga por volta do século V a.C, era ligada às festas religiosas da época em homenagem ao Deus Dionísio. Nessas festas, tinha procissões e apresentações que misturavam dança, música e sátira o que deu origem ao gênero, A palavra “Comédia” vem do grego kōmōidía que pode ser traduzido como “Canto Festivo”.',
    image: './assets/images/charlie-chaplin.webp'
};

const HomePage = () => {
    
    return <>

        <div className="w-full flex flex-col gap-5 p-5 bg-gradient-to-b from-stone-900 from-5% to-transparent to-95% fixed z-20">
            <Header page={'› Home'}/>
        </div>
        <main className="w-full h-fit relative">

            <div className="flex flex-col gap-5 relative">
                <Slideshow />
            </div>
                
            <section className="flex relative bg-center bg-fixed bg-cover bg-no-repeat" >
                <InfoCards content={contentCardIntro}/>
            </section>
                    
            <TopicDiv title={'GÊNERO'}/>

            <section id="genero" className="flex relative bg-center bg-fixed bg-cover bg-no-repeat" style={{ backgroundImage: "url('./assets/images/Wallpaper.webp')" }}>
                <InfoCards content={contentCardGen}/>
            </section>

            <TopicDiv title={'FILMES'}/>

            <section id="filmes" className="w-full h-fit flex flex-col items-center justify-start gap-5">
                <MovieSlideshow />
            </section>

        </main>
        <Footer/>
    </>
}

export default HomePage;