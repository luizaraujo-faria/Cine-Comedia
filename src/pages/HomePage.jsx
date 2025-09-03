import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import MovieSlideshow from "../components/ui/MovieSlideshow";
import Slideshow from "../components/ui/Slideshow";

const HomePage = ({ icons }) => {
    return <>

        <div className="flex flex-col gap-5 p-3 relative">
            <Header />
        </div>
        <main className="w-full h-fit relative">

            <div className="flex flex-col gap-5 p-3 relative">
                <Slideshow />
            </div>
                    

            <div className="w-full h-18 flex justify-around items-center">
                <hr className="w-1/4 h-px border-black bg-black"/>
                <h4 className="text-2xl">CONFIRA</h4>
                <hr className="w-1/4 h-px border-black bg-black"/>
                </div>
                
            <div className="flex flex-col gap-5 p-3 relative">
                <section id="intro" className="w-full h-140 rounded-sm bg-secondary flex flex-col items-center justify-start p-5 gap-5">

                    <article className="w-full flex flex-col items-center justify-start gap-5">
                        <h3 className="text-2xl text-primary font-anton">Amante da comédia</h3>

                        <div className="text-justify text-xl text-white flex flex-col gap-3">
                            <p className="">Cine Comédia – O lugar onde o riso é sempre o protagonista!
                                Dos clássicos inesquecíveis às estreias mais hilárias, aqui você encontra um universo feito para quem ama gargalhar. Se a vida já é séria demais, dê o play e descubra sua nova dose diária de diversão!
                            </p>
                        </div>
                    </article>

                    <div className="w-full h-2/4 bg-amber-200">
                        <img src="" alt="IMAGEM" />
                    </div>
                </section>
            </div>
                    

            <div className="w-full h-28 flex justify-around items-center">
                <hr className="w-1/4 h-px border-black bg-black"/>
                <h4 className="text-2xl">GÊNERO</h4>
                <hr className="w-1/4 h-px border-black bg-black"/>
            </div>

            <section id="genero" className="w-full h-fit bg-secondary flex flex-col items-center justify-start p-5 gap-5">

                <article className="w-full flex flex-col items-center justify-start gap-5">
                    <h3 className="text-2xl text-primary font-anton">Comédia</h3>

                    <div className="text-justify text-xl text-white flex flex-col gap-3">
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, numquam commodi reiciendis voluptates temporibus veniam, molestiae ea qui atque odio eum esse fugit autem voluptatem tempore fugiat tenetur beatae saepe?
                        </p>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eius porro dignissimos doloremque, sapiente asperiores! Cumque distinctio harum, ea velit ipsum minima optio, maiores similique voluptates id saepe magnam error?
                        </p>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus magnam assumenda impedit.
                        </p>
                    </div>
                </article>

                <div className="w-full h-60 bg-amber-200">
                    <img src="" alt="IMAGEM" />
                </div>
            </section>

            <div className="w-full h-16 flex justify-around items-center bg-primary">
                <hr className="w-1/4 h-px border-black bg-black"/>
                <h4 className="text-2xl">FILMES</h4>
                <hr className="w-1/4 h-px border-black bg-black"/>
            </div>

            <MovieSlideshow />

            {/* <section id="filmes" className="w-full h-fit bg-secondary flex flex-col items-center justify-start p-5 gap-5">

                

                <article className="w-full flex flex-col items-center justify-start gap-5">

                    <div className="text-justify text-xl text-white flex flex-col gap-3">
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, numquam commodi reiciendis voluptates temporibus veniam, molestiae ea qui atque.
                        </p>
                    </div>
                </article>

                <div className="w-3/4 h-70 relative rounded-sm bg-white">

                    <img src="" className="w-full h-full" alt="IMAGEM-FILME" />
                </div>

                <div className="w-3/4 h-70 relative rounded-sm bg-white">

                    <img src="" className="w-full h-full" alt="IMAGEM-FILME" />
                </div> 
            </section> */}
        </main>
        <Footer icons={icons}/>
    </>
}

export default HomePage;