import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const HomePage = ({ icons }) => {
    return <>
       <Header />
       <main className="mainLayout">

            <section className="w-full h-dvh bg-black">
            </section>

       </main>
       <Footer icons={icons}/>
    </>
}

export default HomePage;