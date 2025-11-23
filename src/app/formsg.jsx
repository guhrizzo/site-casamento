import Input from "./input"
import Image from "next/image"

export default function Formsg() {
    return (
        <div>
            <div className="bg-[#f0e4cb] w-screen min-h-[120dvh] lg:min-h-[60dvh]">
    
                    <div className="w-[91vw] bg-[#f2f2f2] min-h-[50vh] absolute m-5 mt-[450px] right-0 rounded-2xl shadow-xl p-6 lg:w-[60vw] lg:m-12">
                        <Input label="Nome do Casal" placeholder="Digite o nome..." type="text" />
                        <Input label="Mensagem" placeholder="Escreva sua mensagem..." big={true} />
                        <button className="w-[80dvw] bg-orange-400 mt-6 rounded-4xl p-2.5 flex items-center justify-center font-bold text-xl lg:w-[57vw] hover:bg-orange-500 hover:cursor-pointer hover:scale-[101%]">
                            Enviar
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-send ml-2" viewBox="0 0 16 16">
                                <path d="M15.854.146a.5.5 0 0 1 .11.54L10.145 15.233a.75.75 0 0 1-1.329.124L5.638 10.362 1.767 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576Zm6.787-8.201L1.591 6.602l4.339 2.76Z" />
                            </svg>
                        </button>
                    </div>
    
                    <div className="w-[91vw] min-h-[50vh] bg-[#f2f2f2] rounded-2xl absolute m-5 flex items-center justify-center lg:m-12 shadow-lg flex-col lg:w-[30dvw]">
                        <Image src={"/rings.png"} width={70} height={70} className="absolute top-4" />
                        <p className="text-black text-3xl mb-2 font-medium">Otávio Moretto</p>
                        <p className="text-black text-3xl">&</p>
                        <p className="text-black text-3xl mt-2 font-medium">Isabelle Rizzatto</p>
                        <div className="flex flex-col absolute bottom-4 items-center">
                            <p className="text-black text-[18px] mt-6"> Te convidam pro casamento!</p>
                            <div className="w-[300px] h-0.5 bg-[#00000025] rounded-2xl mt-2 mb-2 lg:w-[500px]"></div>
                            <p className="text-black text-xl font-bold"> Em 10 de Janeiro de 2026!</p>
                        </div>
                    </div>
                </div>
        </div>)

}