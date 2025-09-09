import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import InfoCards from "../components/ui/InfoCards";
import TopicDiv from '../components/ui/TopicDiv';
import CardAtores from "../components/ui/CardAtores";

const contentGenteGrande = {
    title: 'Gente Grande',
    text: 'Passados 30 anos, cinco amigos de infância — Lenny (Adam Sandler), Kurt (Chris Rock), Eric (Kevin James), Marcus (David Spade) e Rob (Rob Schneider) — se reencontram no funeral do antigo treinador de basquete da escola, uma figura que marcou profundamente suas vidas. O momento desperta lembranças adormecidas, trazendo à tona memórias das vitórias, derrotas e lições que receberam dentro e fora da quadra.',
    text2: 'Após a cerimônia, decidem prolongar o reencontro levando suas famílias para a antiga casa do lago, local onde passavam verões inesquecíveis juntos. O que seria apenas uma visita nostálgica transforma-se em um fim de semana cheio de desafios, gargalhadas e reflexões.',
    text3: 'Enquanto os adultos relembram histórias, competições bobas e momentos que moldaram quem são hoje, eles percebem o quanto mudaram com o tempo — e também o quanto continuam os mesmos. Suas personalidades contrastam, gerando situações cômicas e atrapalhadas: Eric tenta se provar como um pai responsável, Marcus continua agindo como o eterno solteirão imaturo, Rob busca equilíbrio em sua vida caótica, Kurt enfrenta dilemas familiares e Lenny descobre que, mesmo bem-sucedido, sente falta da simplicidade de antes.',
};

const contentGenteGrande2 = {
    title: 'Gente Grande 2',
    text: 'Lenny (Adam Sandler), Eric (Kevin James), Kurt (Chris Rock) e Marcus (David Spade) voltam a morar na mesma cidade, em busca de resgatar a proximidade que tiveram no passado. A vida adulta, no entanto, não facilita: cada um carrega seus próprios dilemas, desde filhos que não escutam até casamentos em crise e inseguranças pessoais. Ainda assim, o reencontro reacende a vontade de manter vivo aquele espírito leve da juventude.',
    text2: 'Nessa tentativa de reviver os velhos tempos, eles decidem visitar uma região que costumavam frequentar para nadar, brincar e beber. O que parecia apenas mais uma aventura nostálgica, porém, se complica quando descobrem que o local agora é dominado por um grupo de jovens arrogantes e barulhentos, que não têm a menor intenção de dividir espaço. O choque de gerações coloca os amigos em situações embaraçosas e hilárias, mas também desperta lembranças de antigas feridas.',
    text3: 'Confrontados com os fantasmas da época de escola — bullying, insegurança e a eterna luta para se impor diante dos outros — eles percebem que o verdadeiro desafio não está nos valentões de agora, mas na coragem de enfrentar suas próprias fragilidades. Entre confusões, brigas e momentos de ternura, o grupo aprende que amadurecer não significa perder a diversão, e que a amizade pode ser a maior força contra os medos que o tempo não apagou.'
};

const contentCuriosidades = {
    title: 'Curiosidades - Gente Grande',
    text: 'Durante as filmagens de Gente Grande, Maya Rudolph estava grávida e isso foi incluído no roteiro. Os executivos não queriam Salma Hayek no elenco, mas Adam Sandler defendeu sua participação. Com o sucesso, Sandler ainda presenteou os colegas protagonistas com carros Maserati de US$200 mil.',
    text2: 'Na continuação, Gente Grande 2, Rob Schneider não retornou ao papel de Rob Hilliard por conflitos de agenda. O longa foi ambientado na cidade natal de Sandler, Manchester, em New Hampshire, e contou com várias participações especiais, como Shaquille O’Neal, Stone Cold Steve Austin e Taylor Lautner.'
};

const atoresGenteGrande = [
    { name: '1', image: '', about: 'Adam Sandler' },
    { name: '2', image: '', about: 'Shaolin' },
    { name: '3', image: '', about: 'Shaolin' },
    { name: '4', image: '', about: 'Shaolin' },
    { name: '5', image: '', about: 'Shaolin' },
    { name: '6', image: '', about: 'Shaolin' }
];

const GenteGrandePage = () => {

    return <>

        <div className="w-full flex flex-col gap-5 p-5 bg-gradient-to-b from-stone-900 from-5% to-transparent to-95% fixed z-20">
            <Header page={'› Gente Grande'}/>
        </div>
        <main className="w-full h-fit relative">

            <section className="w-full h-screen flex items-center justify-center bg-center bg-cover bg-no-repeat relative overflow-hidden" style={{ backgroundImage: 'url("./assets/images/Banner-GG.webp")' }}>
                <div class="absolute inset-0 bg-black/85" ></div>

                <div class="relative flex flex-col items-center justify-center h-full w-full ">
                    {/* <h1 class="w-full h-full pb-10 leading-0 flex items-center justify-center text-[11rem] font-extrabold text-transparent bg-clip-text bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("./assets/images/Banner-GG.webp")' }}>
                    GENTE GRANDE
                    </h1> */}
                    <h1 class="w-full h-full absolute bottom-0 pb-48 pl-18 leading-28 flex items-end justify-start text-[11rem] 2xl:text-[15rem] 2xl:pb-60 font-extrabold text-transparent bg-clip-text bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("./assets/images/Banner-GG.webp")' }}>
                    GENTE
                    </h1>
                    <h1 class="w-full h-full absolute bottom-0 pb-18 pl-18 leading-28 flex items-end justify-start text-[11rem] 2xl:text-[15rem] font-extrabold text-transparent bg-clip-text bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("./assets/images/Banner-GG.webp")' }}>
                    GRANDE
                    </h1>
                </div>
            </section>

            <section className="w-full h-fit">
                <InfoCards content={contentGenteGrande} className={'hidden'}/>
            </section>

            <section className="w-full h-[50vh] flex items-center justify-center bg-top bg-cover bg-no-repeat relative overflow-hidden" style={{ backgroundImage: 'url("./assets/images/Banner-GG-2.webp")' }}>
                <div class="absolute inset-0 bg-black/85" ></div>

                <div class="relative flex flex-col items-center justify-center h-full w-full ">
                    <h1 class="w-full h-full leading-28 flex items-center justify-center text-[9rem] 2xl:text-[11rem] font-extrabold text-transparent bg-clip-text bg-cover bg-top bg-no-repeat" style={{ backgroundImage: 'url("./assets/images/Banner-GG-2.webp")' }}>
                    GENTE GRANDE 2
                    </h1>
                </div>
            </section>

            <section className="w-full h-fit">
                <InfoCards content={contentGenteGrande2} className={'hidden'}/>
            </section>

            <TopicDiv title={'CURIOSIDADES'} />

            <section className="w-full h-fit">
                <InfoCards content={contentCuriosidades}/>
            </section>

            <TopicDiv title={'ATORES'} />

            <section>
                <CardAtores atores={atoresGenteGrande} />
            </section>

        </main>
        <Footer/>
    </>
}

export default GenteGrandePage;