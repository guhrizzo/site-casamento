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

export default function pagCerto() {

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
        <div className="bg-linear-to-bl from-[#74e079] to-[#4caf50] flex flex-col w-screen min-h-screen justify-center items-center">
            <div className="bg-[#f2f2f2] w-[90vw] min-h-[80vh] rounded-4xl flex text-black relative">
                <div className="flex bg-gray-300 w-[100px] h-[50px] rounded-4xl m-4 
    justify-center items-center 
    hover:bg-gray-400 hover:cursor-pointer hover:text-[#f2f2f2]
    transition-all duration-200 delay-100 hover:scale-105 ease-in-out">

                    <a className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                        </svg>
                        <p className="font-medium ml-1">Voltar</p>
                    </a>
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className={`${poppins.className} text-[65px] font-bold m-8 mb-6 ml-12`}>
                        Presente Enviado 🎉
                    </h1>

                    <p className={`${dancing.className} font-normal text-[36px] m-6 mt-4 ml-12`}>
                        Os <strong className="font-bold text-emerald-600">noivos agradecem</strong> muito por sua
                        <strong className="font-bold text-emerald-600"> contribuição</strong>
                        <br /> e por <strong className="font-bold text-emerald-600">iluminar</strong> ainda mais este
                        <strong className="font-bold text-emerald-600"> momento tão importante.</strong>
                        <br /> <strong className="font-bold text-emerald-600">Cada presente</strong> recebido
                        representa não apenas um <strong className="font-bold text-emerald-600">gesto de carinho</strong>, <br></br>
                        mas também um <strong className="font-bold text-emerald-600">pedaço de amor compartilhado</strong>.
                        <br /> <strong className="font-bold text-emerald-600">Obrigado</strong> por celebrar
                        e fazer parte deste <strong className="font-bold text-emerald-600">capítulo tão lindo.</strong>
                    </p>
                </div>

                <div className="absolute right-[100px] top-[100px]">
                    <Image src={"/check.png"} width={600} height={600} alt="Check" />
                </div>
            </div>
        </div>
    );
}
