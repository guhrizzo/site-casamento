"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import Input from "../input";
import Brincadeira from "../listaBrincadeiras";
import Footer from "../rodape";

import { useState } from "react";
import { BRINCADEIRAS } from "@/data/brincadeiras";
import FiltroPreco from "../FiltroPreço";
import Navbar from "../NavBar";

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
        <div className={`${poppins.className} relative overflow-x-hidden`}>
            <Navbar />
            {/* TOPO */}
            
            
            {/* LISTA DE PRESENTES */}
            <div className="bg-[#f2f2f2] w-full h-auto lg:mt-[11vh] mt-[20dvh]">
                <div className="lg:flex lg:justify-between lg:items-center ">
                    <p className="text-black text-3xl font-bold p-8 pt-6 pb-6 lg:text-4xl lg:p-12">Envie um presente para os noivos!</p>


                    <div className="p-6 pt-0 pb-6 lg:pr-14">
                        <FiltroPreco onChange={handleFiltro} />
                    </div>
                </div>


                {/* LISTA DINÂMICA */}
                <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 pb-12  ">
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
