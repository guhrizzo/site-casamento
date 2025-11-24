"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

import Footer from "../rodape";
import Navbar from "../NavBar";

// IMPORTAR SEUS PRESENTES FÍSICOS
import { PRESENTES_FISICOS } from "@/data/presentesFisicos";

// COMPONENTE PARA CARD DE PRESENTE
function PresenteCard({ nome, imagem, link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer block"
        >
            <Image
                src={imagem}
                alt={nome}
                width={300}
                height={300}
                className="rounded-lg w-full h-[200px] object-cover"
            />

            <p className="text-lg font-semibold mt-3 text-black">{nome}</p>
        </a>
    );
}

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function ListaFisicos() {
    const [lista] = useState(PRESENTES_FISICOS);

    return (
        <div className={`${poppins.className} relative overflow-x-hidden`}>
            <Navbar />

            {/* SEÇÃO */}
            <div className="bg-[#f2f2f2] w-full h-auto lg:mt-[11vh] mt-[18dvh]">
                <p className="text-black text-3xl font-bold p-8 pt-6 pb-2 lg:text-4xl lg:p-8">
                    Escolha um presente físico para os noivos!
                </p>

                {/* RECOMENDAÇÃO – CARD CLICÁVEL */}
                <div
                    className=" mb-8 w-full max-w-[500px] lg:ml-6 scale-[89%] lg:scale-100 "
                    onClick={() => {
                        navigator.clipboard.writeText("R. Luís Spirandeli, 120 - Jardim America - Jaú/SP · CEP 17210-720");
                        alert("Endereço copiado!");
                    }}
                >
                    <div className="bg-white shadow-md rounded-2xl p-4 flex items-center gap-4 border border-gray-200 cursor-pointer active:scale-[0.98] transition">

                        {/* ÍCONE */}
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="32" height="32"
                            viewBox="0 0 24 24"
                            fill="none" stroke="#ff7b00"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="flex-shrink-0">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>

                        {/* TEXTO */}
                        <div>
                            <p className="text-lg text-black font-semibold">
                                Recomendação de envio
                            </p>
                            <p className="text-gray-600 -mt-1">
                                Toque para copiar o endereço:
                            </p>
                            <p className="text-[#ff7b00] font-bold text-lg">
                                R. Luís Spirandeli, 120 - Jardim America - Jaú/SP · CEP 17210-720
                            </p>
                        </div>

                    </div>
                </div>



                {/* LISTA DINÂMICA */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 pb-12">
                    {lista.map((item, i) => (
                        <PresenteCard
                            key={i}
                            nome={item.nome}
                            imagem={item.imagem}
                            link={item.link}
                        />
                    ))}
                </div>

                <Footer />
            </div>
        </div>
    );
}
