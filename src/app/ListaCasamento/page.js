"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import Input from "../input";
import Brincadeira from "../listaBrincadeiras";
import Footer from "../rodape";

import { useState } from "react";
import { BRINCADEIRAS } from "@/data/brincadeiras";
import FiltroPreco from "../FiltroPreço";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function listacasamento() {
    const [lista, setLista] = useState(BRINCADEIRAS);

    function handleFiltro(opcao) {
        const copiar = [...lista];

        if (opcao === "menor") {
            copiar.sort((a, b) => Number(a.preco.replace(",", ".")) - Number(b.preco.replace(",", ".")));
        }

        if (opcao === "maior") {
            copiar.sort((a, b) => Number(b.preco.replace(",", ".")) - Number(a.preco.replace(",", ".")));
        }

        if (opcao === "") {
            setLista(BRINCADEIRAS);
            return;
        }

        setLista(copiar);
    }

    return (
        <div className={`${poppins.className} overflow-x-hidden`}>
            {/* TOPO */}
            <div className="bg-[#f2f2f2] w-screen min-h-[9vh] text-black justify-center items-center flex flex-col shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill text-orange-300" viewBox="0 0 16 16">
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                </svg>
                <h1 className="text-3xl font-bold uppercase text-orange-300">Lista de Presente</h1>
                <h2 className="text-2xl uppercase text-orange-300">Pro Casamento</h2>
            </div>

            {/* FORMULÁRIO E CARTÃO */}
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

            {/* LISTA DE PRESENTES */}
            <div className="bg-[#f2f2f2] w-screen h-auto">
                <div className="lg:flex lg:justify-between lg:items-center">
                    <p className="text-black text-3xl font-bold p-8 pt-6 pb-6 lg:text-4xl lg:p-12">Envie um presente para os noivos!</p>


                    <div className="p-6 pt-0 pb-6 lg:pr-14">
                        <FiltroPreco onChange={handleFiltro} />
                    </div>
                </div>


                {/* LISTA DINÂMICA */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 pb-12">
                    {lista.map((item, i) => (
                        <Brincadeira
                            key={i}
                            nome={item.nome}
                            preco={item.preco}
                            imagem={item.imagem}
                        />
                    ))}
                </div>

                <Footer />
            </div>
        </div>
    );
}
