"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function handleNavClick(e, link) {
        if (pathname === link) {
            e.preventDefault();
            scrollToTop();
        }
        setIsOpen(false); // FECHA O MENU MOBILE
    }

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 10);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`w-screen lg:min-h-[10vh] fixed top-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-amber-100 border-b-2 border-[#ffeb9a70]"
                : "bg-gray-100"
                }`}
        >
            <nav className="flex items-center lg:justify-around py-3 justify-between px-6 lg:px-0">

                {/* LOGO */}
                <a href="/" className="cursor-pointer">
                    <Image
                        src="/casamentoLogo.png"
                        width={90}
                        height={100}
                        className="scale-130"
                        alt="Logo"
                    />
                </a>


                {/* BOTÃO HAMBÚRGUER - MOBILE */}
                <button
                    className="flex flex-col gap-1.5 lg:hidden ml-auto mr-3"
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    <div className={`bg-black w-10 h-[3px] rounded-full transition-all ${isOpen ? "rotate-45 bg-red-900 translate-y-2.5" : ""}`} />
                    <div className={`bg-black w-10 h-[3px] rounded-full transition-all ${isOpen ? "opacity-0" : ""}`} />
                    <div className={`bg-black w-10 h-[3px] rounded-full transition-all ${isOpen ? "-rotate-45 bg-red-900 -translate-y-2" : ""}`} />
                </button>

                {/* MENU DESKTOP */}
                <ul className="text-[#292929] gap-8 font-medium hidden lg:flex">

                    <a
                        href="/ListaCasamento"
                        onClick={(e) => handleNavClick(e, "/ListaCasamento")}
                        className={`relative transition-all 
        ${pathname === "/ListaCasamento" ? "opacity-100 font-semibold" : "opacity-60"}
        after:content-[''] after:absolute after:left-0 after:-bottom-1 
        after:h-0.5 after:bg-[#292929] 
        after:transition-all after:duration-400
        after:w-full 
        after:scale-x-0 
        after:origin-left
        origin-right
        ${pathname === "/ListaCasamento" ? "after:scale-x-100" : "hover:after:scale-x-100 hover:opacity-100"}
    `}
                    >
                        Enviar Presentes
                    </a>




                    <a
                        href="/msgNoivos"
                        onClick={(e) => handleNavClick(e, "/msgNoivos")}
                        className={`relative transition-all 
        ${pathname === "/msgNoivos" ? "opacity-100 font-semibold" : "opacity-60"}
        after:content-[''] after:absolute after:left-0 after:-bottom-1 
        after:h-0.5 after:bg-[#292929] 
        after:transition-all after:duration-400
        after:w-full 
        after:scale-x-0 
        after:origin-left
        origin-right
        ${pathname === "/Listacasamento" ? "after:scale-x-100" : "hover:after:scale-x-100 hover:opacity-100"}
    `}
                    >
                        Enviar Mensagem
                    </a>

                    <a
                        href="/confirmapresenca"
                        onClick={(e) => handleNavClick(e, "/confirmapresenca")}
                        className={`relative transition-all 
        ${pathname === "/confirmapresenca" ? "opacity-100 font-semibold" : "opacity-60"}
        after:content-[''] after:absolute after:left-0 after:-bottom-1 
        after:h-0.5 after:bg-[#292929] 
        after:transition-all after:duration-400
        after:w-full 
        after:scale-x-0 
        after:origin-left
        origin-right
        ${pathname === "/ListaCasamento" ? "after:scale-x-100" : "hover:after:scale-x-100 hover:opacity-100"}
    `}
                    >
                        Confirmar Presença
                    </a>

                </ul>
            </nav>

            {/* MENU MOBILE */}
            <div
                className={`lg:hidden flex flex-col gap-6 bg-amber-50 text-[#292929]
                p-6 shadow-md transition-all duration-300
                ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
            `}
            >
                <a
                    href="/ListaCasamento"
                    onClick={(e) => handleNavClick(e, "/ListaCasamento")}
                    className={pathname === "/ListaCasamento" ? "opacity-100 font-semibold" : "opacity-70"}
                >
                    Enviar Presentes
                </a>

                <a
                    href="/msgNoivos"
                    onClick={(e) => handleNavClick(e, "/msgNoivos")}
                    className={pathname === "/msgNoivos" ? "opacity-100 font-semibold" : "opacity-70"}
                >
                    Enviar Mensagem
                </a>

                <a
                    href="/confirmapresenca"
                    onClick={(e) => handleNavClick(e, "/confirmapresenca")}
                    className={pathname === "/confirmapresenca" ? "opacity-100 font-semibold" : "opacity-70"}
                >
                    Confirmar Presença
                </a>
            </div>
        </div>
    );
}
