import Image from "next/image";
import Button from "./button";
import { Poppins } from "next/font/google";
import Link from "next/link";
import pagCerto from "./pagCerto/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex-col bg-white justify-center items-center bg-[url('/elegant-wedding-couple.png')] bg-cover bg-center">
        <Image
          src={"wedding cake-bro (2).svg"}
          width={600}
          height={200} 
          className="absolute left-0 ml-[15vw] z-50"/>
          <Image
          src={"wedding cake-bro (2).svg"}
          width={600}
          height={200} 
          className="absolute left-0 ml-[15vw] opacity-10 scale-[102%] blur-xl z-0"/>
        <div className="bg-[#fee68542] w-[40vw] min-h-screen absolute right-0 backdrop-blur-[10px] border-l-2 border-[#ffffff17] flex justify-center items-center flex-col">

          <div className="border-[#ffffff93] bg-[#ffffff80] border-2 rounded-[32px] w-[80%] h-[70vh] shadow-[0px_0px_16px_0px_rgba(0,_0,_0,_0.1)] flex flex-col justify-center">
            <h1 className={`${poppins.className} text-[31px] text-[#141414] font-bold text-center mt-2`}>
              Olá é muito bom ter você conosco!
            </h1>
            <p className={`${poppins.className} text-[#141414] font-medium text-center m-6 mt-2 mb-2 leading-8`}>Estamos muito felizes por dividir este capítulo tão especial da nossa história com você! Criamos este espaço com muito carinho para que você possa fazer parte deste momento único. Cada gesto seu, cada mensagem e cada presença tornam esse dia ainda mais especial. Seja bem-vindo(a) ao nosso cantinho de celebração!</p>
            <a href={"/pagCerto"} target="_blank"><Button /></a>
            
          </div>

        </div>

      </main>
    </div>
  );
}
