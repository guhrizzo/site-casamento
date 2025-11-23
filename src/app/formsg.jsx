"use client";
import { useState } from "react";
import Input from "./input";
import Image from "next/image";

export default function Formsg() {
    const [nome, setNome] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [loading, setLoading] = useState(false);

    async function enviar() {
        try {
            const res = await fetch("/api/enviarMensagem", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nome,
                    mensagem
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                alert("Erro ao enviar");
                return;
            }

            alert("Mensagem enviada com sucesso!");
            setNome("");
            setMensagem("");
        } catch (err) {
            alert("Erro no servidor");
        }
    }


    return (
        <div className="bg-[#f0e4cb] w-screen min-h-screen flex justify-center absolute pt-50">
            <div className="flex flex-col lg:flex-row gap-12 w-[92vw] ">

                {/* CARD DO CASAL */}
                <div className="bg-[#f2f2f2] rounded-2xl shadow-xl lg:w-[30vw] flex flex-col items-center justify-center h-[60vh] text-black  lg:max-h-[60vh]">
                    <Image src="/rings.png" width={70} height={70} alt="rings" className="mb-4" />
                    <p className="text-5xl mt-4 font-semibold">Otávio Moretto</p>
                    <p className="text-2xl mt-1">&</p>
                    <p className="text-5xl font-semibold mt-1 mb-4">Isabelle Rizzatto</p>

                    <div className="mt-6 text-center">
                        <p className="text-xl">Te convidam pro casamento!</p>
                        <div className="w-[350px] h-0.5 bg-gray-300 my-3 mx-auto" />
                        <p className="text-[21px] font-bold">Em 10 de Janeiro de 2026!</p>
                    </div>
                </div>

                {/* FORM */}
                <div className="bg-[#f2f2f2] rounded-2xl shadow-xl lg:m-0 p-6  lg:mb-0 mb-8 lg:max-h-[60vh] ">
                    <Input
                        label="Nome do Casal"
                        placeholder="Digite o nome..."
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <Input
                        label="Mensagem"
                        placeholder="Escreva sua mensagem..."
                        big={true}
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                    />

                    <button
                        onClick={enviar}
                        disabled={loading}
                        className={`w-full bg-orange-400 mt-6 rounded-3xl p-3 font-bold text-lg flex justify-center items-center transition-all
                            ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-orange-500 hover:scale-[101%]"}
                        `}
                    >
                        {loading ? "Enviando..." : "Enviar"}
                        {!loading && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-send ml-2" viewBox="0 0 16 16">
                                <path d="M15.854.146a.5.5 0 0 1 .11.54L10.145 15.233a.75.75 0 0 1-1.329.124L5.638 10.362 1.767 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576Zm6.787-8.201L1.591 6.602l4.339 2.76Z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
