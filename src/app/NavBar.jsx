"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`w-screen lg:min-h-[10vh] fixed top-0 z-50  transition-all duration-300  ${scrolled ? "bg-amber-100 border-b-2 border-[#ffeb9a70]" : "bg-gray-100"
                }`}
        >
            <nav className="flex items-center lg:justify-around py-3 justify-between px-6 lg:px-0">
                
                <Image
                    src="/casamentoLogo.png"
                    width={90}
                    height={100}
                    className="scale-130"
                    alt="Logo"
                />
                <div className="flex flex-col gap-2 ml-44">
                    <div className="bg-black w-10 rounded-full h-[3px]"></div>
                    <div className="bg-black w-10 rounded-full h-[3px]"></div>
                    <div className="bg-black w-10 rounded-full h-[3px]"></div>
                </div>
                <ul className="text-[#292929] flex gap-8 font-medium">
                    <a href="/ListaCasamento" target="_blank">
                     <li className="
  cursor-pointer opacity-60 hover:opacity-100 relative transition-all origin-right hidden
  after:content-[''] after:absolute after:left-0 after:-bottom-0.5 lg:block
  after:w-[80%] after:h-0.5 after:bg-[#292929]
  after:origin-left after:scale-x-0 hover:after:scale-x-100
  after:transition-all after:duration-400
">
                        Enviar Presentes
                    </li>
                    </a>
                   

                    <li className="
  cursor-pointer opacity-60 hover:opacity-100 relative transition-all origin-right hidden
  after:content-[''] after:absolute after:left-0 after:-bottom-0.5 lg:block
  after:w-[80%] after:h-0.5 after:bg-[#292929]
  after:origin-left after:scale-x-0 hover:after:scale-x-100
  after:transition-all after:duration-400
">
                        Enviar Mensagem
                    </li>
                    <li className="
  cursor-pointer opacity-60 hover:opacity-100 relative transition-all origin-right hidden
  after:content-[''] after:absolute after:left-0 after:-bottom-0.5 lg:block
  after:w-[80%] after:h-0.5 after:bg-[#292929]
  after:origin-left after:scale-x-0 hover:after:scale-x-100
  after:transition-all after:duration-400
">
                        Confirmar Presença
                    </li>
                </ul>
            </nav>
        </div>
    );
}
