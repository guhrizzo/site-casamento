import { Poppins, Dancing_Script } from "next/font/google";
import ContadorNovo from "./contador";
import Navbar from "./NavBar";
import LocalDoCasamento from "./localCasamento/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Navbar />

      <main
        className="flex min-h-screen w-full flex-col justify-center items-center 
        bg-[linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url('/elegant-wedding-couple.png')]
        bg-cover bg-center px-4 py-16"
      >

        {/* CONTADOR */}
        <div className="flex flex-col justify-center items-center lg:mt-10 mt-[12dvh]">
          <ContadorNovo />

          {/* CARD ELEGANTE */}
          <div
            className="max-w-3xl mt-12 p-8 rounded-2xl bg-white/85 backdrop-blur-md shadow-xl 
            border border-[#d4b98f] relative animate-fadeIn"
          >
            {/* Corações Decorativos */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-red-400 text-3xl">
              ❤️ ❤️ ❤️
            </div>

            {/* Título */}
            <h2
              className={`${dancing.className} text-4xl text-[#b78c50] text-center mb-4`}
            >
              Bem-vindos ao nosso grande dia
            </h2>

            {/* Texto */}
            <p
              className={`${poppins.className} text-base text-gray-700 leading-relaxed text-center whitespace-pre-line`}
            >
              Queridos familiares e amigos,  

              É com imensa alegria que compartilhamos com vocês este momento tão especial de nossas vidas.  
              Criamos este espaço para reunir todas as informações sobre o nosso casamento e facilitar a organização de quem fará parte desse dia tão esperado.  

              Aqui, vocês encontrarão detalhes sobre a programação, opções de hospedagem, salões de beleza, sugestões de trajes e outras orientações importantes para que possam se preparar com tranquilidade.  

              A presença de cada um de vocês tornará nossa celebração ainda mais inesquecível.  
              Estamos contando os dias para viver esse sonho ao lado das pessoas que mais amamos.  

              {"\n"}Com carinho <br/> <br/>
              <strong className="lg:text-2xl">Otávio & Isabelle</strong>
            </p>
          </div>
        </div>
      </main>

      <LocalDoCasamento />
    </div>
  );
}
