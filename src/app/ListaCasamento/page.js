import { Poppins } from "next/font/google";
import Image from "next/image";
import Input from "../input";
import Brincadeira from "../listaBrincadeiras";
import footer from "../Footer";
import Footer from "../Footer";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function listacasamento() {
    return (
        <div className={`${poppins.className} overflow-x-hidden`}>
            <div className="bg-[#f2f2f2] w-screen min-h-[9vh] text-black justify-center items-center flex flex-col shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill text-orange-300" viewBox="0 0 16 16">
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                </svg>
                <h1 className="text-3xl font-bold uppercase text-orange-300">Lista de Presente</h1>
                <h2 className="text-2xl uppercase text-orange-300">Pro Casamento</h2>
            </div>
            <div className="bg-[#f0e4cb] w-screen min-h-[60vh] ">
                <div className="w-[60vw] bg-[#f2f2f2] min-h-[50vh] absolute m-12 right-0 rounded-2xl shadow-xl p-6">
                    <Input
                        label="Nome do Casal"
                        placeholder="Digite o nome..."
                        type="text"
                        className=""
                    />
                    <Input
                        label="Mensagem"
                        placeholder="Escreva sua mensagem..."
                        big={true}
                        className=""
                    />
                    <button className="w-[57vw] bg-orange-300 mt-6 rounded-4xl p-2.5 flex items-center justify-center font-bold text-xl ease-in-out delay-75 transition-all hover:bg-orange-400 hover:cursor-pointer hover:scale-[101%]">Enviar<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-send ml-2" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                    </svg></button>
                </div>
                <div className="w-[30vw] min-h-[50vh] bg-[#f2f2f2] rounded-2xl absolute m-12 flex items-center justify-center shadow-xl flex-col">
                    <Image src={"/rings.png"} width={70} height={70} className="absolute top-4" />
                    <p className="text-black text-3xl mt-2 font-medium">Isabelle Rizzatto</p>
                    <p className="text-black text-3xl">&</p>
                    <p className="text-black text-3xl mb-2 font-medium">Otávio Moretto</p>
                    <div className="flex flex-col absolute bottom-4 items-center">
                        <p className="text-black text-[18px] mt-6"> Te convidam pro casamento!</p>
                        <div className="w-[500px] h-0.5 bg-[#00000025] rounded-2xl mt-2 mb-2"></div>
                        <p className="text-black text-2xl font-bold"> Em Janeiro de 2026!</p>
                    </div>

                </div>
            </div>
            <div className="bg-[#f2f2f2] w-screen h-auto">
                <p className="text-black text-4xl font-bold p-12 pt-6 pb-6">Envie um presente para os noivos!</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 pb-12">
                    <Brincadeira nome="Um Kilo de Café" preco="350,00" imagem="/cafekg.jpg" />
                    <Brincadeira nome="Academia para os noivos depois da lua de mel" preco="280,00" imagem="/academia.jpg" />
                    <Brincadeira nome="Acessório para o noivo cortar as unhas" preco="150,00" imagem="/lixadeira.jpg" />
                    <Brincadeira nome="Balança para os noivos verem o estrago" preco="220,00" imagem="/balanca.jpeg" />
                    <Brincadeira nome="Bolo de cenoura semanal para a noiva" preco="110,00" imagem="/bolo-de-cenoura.png" />
                    <Brincadeira nome="Camisa de time para a alegria do noivo" preco="130,00" imagem="/camisatime.jpg" />
                    <Brincadeira nome="Capacete anti rolo de macarrão" preco="500,00" imagem="/capacete.jpg" />
                    <Brincadeira nome="2 semanas de almoço garantido em casa" preco="500,00" imagem="/comida.jpg" />
                    <Brincadeira nome="Coleção de jogos para a alegria do noivo e tristeza da noiva" preco="500,00" imagem="/jogos.jpg" />
                    <Brincadeira nome="Conjunto de controles remotos para não ter briga" preco="500,00" imagem="/controle.jpeg" />
                    <Brincadeira nome="Coleção de livros (de RPG)" preco="500,00" imagem="/livros.jpg" />
                    <Brincadeira nome="Conjunto de sabres de luzes para o casal" preco="500,00" imagem="/sabres-luz.jpg" />
                    <Brincadeira nome="Cota para pagar o prejuizo da viagem" preco="500,00" imagem="/viagem.jpg" />
                    <Brincadeira nome="Crédito para os noivos ligarem pros familiares" preco="500,00" imagem="/creditocelular.jpg" />
                    <Brincadeira nome="Almofada anti ronco (não funciona)" preco="500,00" imagem="/antironco.jpg" />
                </div>
                <Footer />


            </div>
        </div>
    )
}