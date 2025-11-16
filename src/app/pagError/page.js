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
      <div className="bg-[#f2f2f2] w-[90vw] min-h-[80vh] rounded-4xl flex text-black animate-slideUp">
        
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
