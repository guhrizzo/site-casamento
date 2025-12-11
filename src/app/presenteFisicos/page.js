
"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

import Navbar from "../NavBar";
import Footer from "../rodape";

// PRESENTES
import { PRESENTES_FISICOS } from "@/data/giftsFisicos";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

// CARD COMPONENT
function PresenteCard({ nome, imagem, link, onClick }) {
    return (
        <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition flex flex-col h-full">
            <div>
                <Image
                    src={imagem}
                    alt={nome}
                    width={300}
                    height={300}
                    className="rounded-lg w-full h-[200px] object-cover"
                />
            </div>

            <p className="text-lg font-semibold mt-3 text-black">{nome}</p>

            <div className="mt-auto">
                <button
                    onClick={onClick}
                    className="mt-3 w-full bg-[#ff7b00] text-white cursor-pointer p-3 text-center flex gap-2 items-center justify-center rounded-lg font-semibold hover:bg-[#e66f00] transition"
                >
                    <p>Enviar este presente</p>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gift-fill" viewBox="0 0 16 16">
                        <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default function ListaFisicos() {
    const [lista] = useState(PRESENTES_FISICOS);

    return (
        <div className={`${poppins.className} relative overflow-x-hidden`}>
            <Navbar />

            <div className="bg-[#f2f2f2] w-full h-auto lg:mt-[11vh] mt-[18dvh]">
                <p className="text-black text-3xl font-bold p-8 pt-6 pb-2 lg:text-4xl lg:p-8">
                    Escolha um presente físico para os noivos!
                </p>

                <div
                    className="mb-8 w-full max-w-[500px] lg:ml-6 scale-[89%] lg:scale-100"
                    onClick={() => {
                        navigator.clipboard.writeText(
                            "R. Luís Spirandeli, 120 - Jardim America - Jaú/SP · CEP 17210-720"
                        );
                        alert("Endereço copiado!");
                    }}
                >
                    <div className="bg-white shadow-md rounded-2xl p-4 flex items-center gap-4 border border-gray-200 cursor-pointer active:scale-[0.98] transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ff7b00"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="shrink-0"
                        >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>

                        <div>
                            <p className="text-lg text-black font-semibold">Recomendação de envio</p>
                            <p className="text-gray-600 -mt-1">Toque para copiar o endereço:</p>
                            <p className="text-[#ff7b00] font-bold text-lg">
                                R. Luís Spirandeli, 120 - Jardim America - Jaú/SP · CEP 17210-720
                            </p>
                        </div>
                    </div>
                </div>

                {/* LISTA DE PRESENTES */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 pb-12">
                    {lista.map((item, i) => (
                        <PresenteCard
                            key={i}
                            nome={item.nome}
                            imagem={item.imagem}
                            link={item.link}
                            onClick={() => {
                                if (item.link) window.open(item.link, "_blank");
                            }}
                        />
                    ))}
                </div>

                <Footer />
            </div>
        </div>
    );
}
