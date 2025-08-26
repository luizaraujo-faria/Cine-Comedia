// import icons from '../../assets/importAssets';

const Footer = ({ icons }) => {

    return <footer className="footerLayout">

        <section className="socialFooter">
            <h3>Fique por dentro de nossas redes!</h3>

            <div>
                <a href="" ><img className="footerIcons" src={icons.Instagram} alt="Icone-Instagram" loading="lazy" /></a>
                <a href="" ><img className="footerIcons" src={icons.Twitter} alt="Icone-Twitter" loading="lazy" /></a>
                <a href="" ><img className="footerIcons" src={icons.Facebook} alt="Icone-Facebook" loading="lazy" /></a>
                <a href="" ><img className="footerIcons" src={icons.Youtube} alt="Icone-Youtube" loading="lazy" /></a>
            </div>
        </section>

        <section className="sumaryFooter">

            <div className='sumaryColumn'>

                <h4>Sobre nós</h4>

                <ul>
                    <li>Quem somos</li>
                    <li>Serviços</li>
                    <li>Carreiras</li>
                    <li>Cinema</li>
                </ul>
            </div>

            <div className='sumaryColumn'>

                <h4>Assinaturas</h4>

                <ul>
                    <li>Premium</li>
                    <li>Estudante</li>
                    <li>Anual / Mensal</li>
                    <li>Contratos</li>
                </ul>
            </div>

            <div className='sumaryColumn'>

                <h4>Suporte</h4>

                <ul>
                    <li>Contate-nos</li>
                    <li>Localização</li>
                    <li>Pagamentos</li>
                    <li>Segurança</li>
                </ul>
            </div>

            <div className='sumaryColumn'>

                <h4>Lançamentos</h4>

                <ul>
                    <li>Filmes</li>
                    <li>Comédia</li>
                    <li>Eventos</li>
                    <li>Produção</li>
                </ul>
            </div>

        </section>

        <section className="copyFooter">

            <div className="credits">
                <h2>©2025 - CineComédia.</h2>
                
                <div>
                    <h3>Feira Cultural - Etec Basilides de Godoy.</h3>
                    <h3>Por: Laura Xavier, Sammuel Alves, Nicolas Lima e Luiz Henrique.</h3>
                </div>

                <hr />
            </div>

            <section>
                <h4>CINE COMÉDIA</h4>
            </section>
        </section>

    </footer>
}

export default Footer;