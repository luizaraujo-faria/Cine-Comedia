import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import CardAtores from "../components/ui/CardAtores";
import InfoCards from "../components/ui/InfoCards";
import TopicDiv from '../components/ui/TopicDiv';

const contentAceVentura = {
    title: 'Filme - Ace Ventura',
    text: 'Ace Ventura é um detetive nada convencional: excêntrico, atrapalhado e completamente apaixonado por animais. Sua vida é cercada por bichos e pequenos casos, mas quase nunca se depara com algo realmente desafiador. Isso muda quando o mascote do time de futebol americano Miami Dolphins, o golfinho Snowflake, desaparece misteriosamente, abalando não só os torcedores, mas também a reputação do time.',
    text2: 'Determinando a resolver o caso, Ace mergulha de cabeça em uma investigação repleta de situações absurdas, pistas improváveis e muito humor. No caminho, precisa lidar com jogadores desconfiados, dirigentes nervosos e figuras excêntricas, além de contar com a ajuda de Melissa (Courtney Cox). Até mesmo o famoso ex-quarterback Dan Marino acaba envolvido nessa aventura inusitada.',
    text3: 'Com métodos nada ortodoxos — que vão de disfarces hilários a intuições improváveis — Ace avança cada vez mais perto da verdade. Entre trapalhadas e momentos de pura genialidade, ele prova que seu jeito único, por mais estranho que pareça, pode ser exatamente a chave para solucionar o mistério e trazer Snowflake de volta.'
};

const contentAceVentura2 = {
    title: 'Filme - Ace Ventura',
    text: 'Depois de falhar em uma missão traumática, Ace Ventura decide se retirar para um mosteiro no Tibete, buscando paz interior e tentando se afastar do caos de sua vida como detetive de animais. Porém, sua reputação única logo o alcança: ele é chamado para resolver um caso delicado que pode decidir o destino de duas tribos rivais na África.',
    text2: 'O animal em questão é Shikaka, um morcego sagrado prometido como parte de um dote matrimonial que selaria a paz entre as tribos. Quando o animal desaparece misteriosamente, a tensão cresce e a guerra entre os povos se torna inevitável caso não seja encontrado a tempo. Ace, a contragosto e com seu jeito nada convencional, aceita a missão.',
    text3: 'O que se segue é uma investigação repleta de situações bizarras, disfarces improváveis e o humor escrachado que marca o estilo do detetive. Entre perseguições na selva, encontros com animais selvagens e tradições tribais que ele claramente não entende, Ace precisa provar novamente que sua loucura esconde uma genialidade capaz de salvar o dia — e, dessa vez, até mesmo impedir uma guerra.'
};

const contentCuriosidades = {
    title: 'Curiosidades - Ace Ventura',
    text: 'O papel de protagonista foi proposto a Rick Moranis, Judd Nelson ou Whoopi Goldberg, mas só Carrey aceitou a proposta e ajudou a reescrever o roteiro, como a participação do Cannibal Corse foi escolha de Carrey, e eles até tiveram cronograma alterado para filmarem.',
    text2: 'Ao contrário do primeiro filme, que se passou em Miami, a sequência foi gravada em áreas naturais da África e em recriações de estúdio, trazendo mais desafios para a equipe e o elenco. Jim Carrey recebeu um cachê de US$15 milhões, tornando-se um dos atores mais bem pagos dos anos 90.'
};

const atoresAceVentura = [
    { name: '1', image: '', about: 'Shaolin' },
    { name: '2', image: '', about: 'Shaolin' },
    { name: '3', image: '', about: 'Shaolin' },
    { name: '4', image: '', about: 'Shaolin' },
    { name: '5', image: '', about: 'Shaolin' },
    { name: '6', image: '', about: 'Shaolin' }
];

const AceVenturaPage = () => {

    return <>

        <div className="w-full flex flex-col gap-5 p-5 bg-gradient-to-b from-stone-900 from-5% to-transparent to-95% fixed z-20">
            <Header page={'› Ace Ventura'}/>
        </div>
        <main className="w-full h-fit relative">

            <section className="w-full h-screen flex items-center justify-center bg-center bg-cover bg-no-repeat relative overflow-hidden" style={{ backgroundImage: 'url("./assets/images/Banner-AV.webp")' }}>
                <div class="absolute inset-0 bg-black/85" ></div>

                <div class="relative flex flex-col items-center justify-center h-full w-full ">

                    <h1 class="w-full h-full absolute bottom-0 pb-48 pl-18 leading-28 flex items-end justify-start text-[11rem] 2xl:text-[15rem] 2xl:pb-60 font-extrabold text-transparent bg-clip-text bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("./assets/images/Banner-AV.webp")' }}>
                    ACE
                    </h1>
                    <h1 class="w-full h-full absolute bottom-0 pb-18 pl-18 leading-28 flex items-end justify-start text-[11rem] 2xl:text-[15rem] font-extrabold text-transparent bg-clip-text bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("./assets/images/Banner-AV.webp")' }}>
                    VENTURA
                    </h1>
                </div>
            </section>

            <section className="w-full h-fit">
                <InfoCards content={contentAceVentura} className={'hidden'}/>
            </section>

            
            <section className="w-full h-[50vh] flex items-center justify-center bg-top bg-cover bg-no-repeat relative overflow-hidden" style={{ backgroundImage: 'url("./assets/images/Banner-AV-2.webp")' }}>
                <div class="absolute inset-0 bg-black/85" ></div>
            
                <div class="relative flex flex-col items-center justify-center h-full w-full ">
                    <h1 class="w-full h-full leading-28 flex items-center justify-center text-[9rem] 2xl:text-[11rem] font-extrabold text-transparent bg-clip-text bg-cover bg-top bg-no-repeat" style={{ backgroundImage: 'url("./assets/images/Banner-AV-2.webp")' }}>
                    ACE VENTURA 2
                    </h1>
                </div>
            </section>
            
            <section className="w-full h-fit">
                <InfoCards content={contentAceVentura2} className={'hidden'}/>
            </section>
            
            <TopicDiv title={'CURIOSIDADES'} />
            
            <section className="w-full h-fit">
                <InfoCards content={contentCuriosidades}/>
            </section>
            
            <TopicDiv title={'ATORES'} />

            <section>
                <CardAtores atores={atoresAceVentura} />
            </section>

        </main>
        <Footer/>
    </>
}

export default AceVenturaPage;