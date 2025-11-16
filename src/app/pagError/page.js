import Image from "next/image";
import { Poppins } from "next/font/google";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export default function pagError() {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center bg-error-gradient">
      <div className="bg-[#f2f2f2] w-[90vw] min-h-[80vh] rounded-4xl flex text-black animate-slideUp ">
        <div className="flex bg-gray-300 w-[100px] h-[50px] rounded-4xl m-4 fixed
    justify-center items-center 
    hover:bg-gray-400 hover:cursor-pointer hover:text-[#f2f2f2]
    transition-all duration-200 delay-100 hover:scale-105 ease-in-out">

                    <a className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                        </svg>
                        <p className="font-medium ml-1">Voltar</p>
                    </a>
                </div>
        <div className="flex flex-col justify-center">
          <h1 className={`${poppins.className} text-[65px] font-bold m-8 mb-6 ml-12`}>
            Algo deu errado 😢
          </h1>

          <p className={`${dancing.className} text-[36px] m-6 mt-4 ml-12`}>
            Infelizmente, <strong className="font-bold text-red-600">não foi possível concluir</strong> o pagamento.  
            <br />  
            Isso pode ocorrer por instabilidade no cartão, conexão ou algum dado incorreto. 
            <br />
            <br />
            Se o problema persistir, pode ficar tranquilo:  
            <strong className="font-bold text-emerald-600"> estamos aqui para ajudar.</strong>  
          </p>
        </div>

        <div className="absolute right-[150px] top-[200px]">
          <Image src="/error.png" width={600} height={600} alt="erro" />
        </div>

      </div>
    </div>
  );
}
