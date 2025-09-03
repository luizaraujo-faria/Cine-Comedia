function CardPessoa({ nome, desc, img}){
return(
<section className=" w-[265px] h-[380px] rounded-[4px] flex flex-col items-center overflow-hidden relative group cursor-pointer">
   <img src = {img} className= "w-full h-full object-cover group-hover:scale-[1.1] transition-transform duration-300 "/>
   <div className ="absolute flex flex-col bg-black/70 w-full h-[190px] items-center translate-y-[500px] group-hover:translate-y-[240px] transition-transform duration-300" >
        <h2 className ="text-[25px] text-white font-regular uppercase">{nome}</h2>
        <p className ="text-[14px] text-white font-light text-justify text-gray-800 px-[20px]">{desc}</p>
   </div>
</section>
);
}
export default CardPessoa;