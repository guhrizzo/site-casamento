"use client";

import { Poppins, Dancing_Script } from "next/font/google";
import ContadorNovo from "./contador";
import Navbar from "./NavBar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Image from "next/image";
import { useState } from "react";
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
  const [fotoAberta, setFotoAberta] = useState(null);

  const totalFotos = 7;

  function proximaFoto() {
    setFotoAberta((prev) => (prev === totalFotos ? 1 : prev + 1));
  }

  function fotoAnterior() {
    setFotoAberta((prev) => (prev === 1 ? totalFotos : prev - 1));
  }


  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <SpeedInsights />
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

              {"\n"}Com carinho <br /> <br />
              <strong className="lg:text-2xl">Otávio & Isabelle</strong>
            </p>
          </div>
        </div>
      </main>
      {/* GALERIA DE FOTOS */}
      <section className="w-full bg-[#f8f5ef] py-20 px-4">
        <h2
          className={`${dancing.className} text-4xl text-center text-[#b78c50] mb-12`}
        >
          Nossos Momentos
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <div
              key={num}
              onClick={() => setFotoAberta(num)}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
            >
              <Image
                src={`/foto-casamento-${num}.jpeg`}
                alt={`Foto do casal ${num}`}
                width={500}
                height={500}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </section>
      {/* LIGHTBOX */}
      {fotoAberta && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4"
          onClick={() => setFotoAberta(null)}
        >
          {/* Fechar */}
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:scale-110 transition"
            onClick={() => setFotoAberta(null)}
          >
            ✕
          </button>

          

          {/* IMAGEM */}
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/foto-casamento-${fotoAberta}.jpeg`}
              alt="Foto ampliada"
              width={1200}
              height={800}
              className="w-full h-auto rounded-2xl object-contain"
            />
          </div>
          {/* SETA ESQUERDA */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              fotoAnterior();
            }}
            className="absolute left-6 text-white text-5xl hover:scale-110 transition select-none"
          >
            ‹
          </button>
          {/* SETA DIREITA */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              proximaFoto();
            }}
            className="absolute right-6 text-white text-5xl hover:scale-110 transition select-none"
          >
            ›
          </button>
        </div>
      )}



      <LocalDoCasamento />
    </div>
  );
}
