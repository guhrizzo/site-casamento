"use client";

import Image from "next/image";
import { useEffect } from "react";
import confetti from "canvas-confetti";

import { Poppins } from "next/font/google";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
    subsets: ["latin"],
    variable: "--font-dancing",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function PagCerto() {

    useEffect(() => {
        const duration = 1500;
        const animationEnd = Date.now() + duration;

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: randomInRange(0.2, 0.8) }
            });

            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: randomInRange(0.2, 0.8) }
            });

            if (Date.now() < animationEnd) {
                requestAnimationFrame(frame);
            }
        })();
    }, []);


    return (
        <div className="bg-linear-to-bl from-[#74e079] to-[#4caf50] flex flex-col w-screen min-h-screen justify-center items-center overflow-x-hidden">

            <div className="bg-[#f2f2f2] w-[92vw] min-h-[80vh] rounded-4xl flex flex-col text-black overflow-hidden lg:relative lg:w-[80vw]">

                {/* Botão voltar */}
                <a className="
                    flex bg-gray-300 w-[140px] h-[45px] rounded-3xl m-4 
                    justify-center items-center 
                    hover:bg-gray-400 hover:cursor-pointer hover:text-[#f2f2f2]
                    transition-all duration-200 delay-100 hover:scale-105 ease-in-out
                    lg:w-[150px] lg:h-[50px]
                " href={"/ListaCasamento"} target="_blank">
                    <div className="flex items-center text-sm lg:text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                        </svg>
                        <p className="font-medium ml-1">Voltar</p>
                    </div>
                </a>

                {/* Conteúdo */}
                <div className="flex flex-col justify-center  lg:w-[80%]">

                    {/* Título */}
                    <h1 className={`${poppins.className} text-[32px] font-bold text-left mt-2 mb-0 ml-4
                        lg:text-left lg:text-[65px] lg:mt-2  lg:ml-8`}>
                        Presente Enviado 🎉
                    </h1>

                    {/* Texto */}
                    <p className={`${dancing.className} font-normal text-[26px] w-[90dvw] p-4 lg:text-[40px] lg:ml-4 lg:leading-24 lg:mt-4 `}>

                        Os <strong className="font-bold text-emerald-600">noivos agradecem</strong> muito por sua
                        <strong className="font-bold text-emerald-600"> contribuição</strong>
                        <span className="lg:hidden">, </span>
                        <br className="hidden lg:block" />

                        por <strong className="font-bold text-emerald-600">iluminar</strong> ainda mais este
                        <strong className="font-bold text-emerald-600"> momento tão importante.</strong>
                        <span className="lg:hidden">, </span>
                        <br className="hidden lg:block" />

                        <strong className="font-bold text-emerald-600">Cada presente</strong> recebido representa não apenas um
                        <strong className="font-bold text-emerald-600"> gesto de carinho</strong>
                        <span className="lg:hidden">, </span>
                        <br className="hidden lg:block" />

                        mas também um <strong className="font-bold text-emerald-600">pedaço de amor compartilhado</strong>.
                        <span className="lg:hidden">, </span>
                        <br className="hidden lg:block" />

                        <strong className="font-bold text-emerald-600">Obrigado</strong> por celebrar e fazer parte deste
                        <strong className="font-bold text-emerald-600"> capítulo tão lindo.</strong>

                    </p>

                </div>

                {/* Imagem */}
                <div className="flex justify-center mt-6 mb-6 lg:absolute lg:right-6 lg:top-[120px]">
                    <Image src="/check.png" width={500} height={500} alt="Check" className="w-[65vw] max-w-[500px] lg:w-[500px]" />
                </div>

            </div>
        </div>
    );
}
