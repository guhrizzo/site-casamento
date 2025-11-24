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
                <p className="text-black text-3xl font-bold p-8 pt-6 pb-6 lg:text-4xl lg:p-12">
                    Escolha um presente físico para os noivos!
                </p>

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
