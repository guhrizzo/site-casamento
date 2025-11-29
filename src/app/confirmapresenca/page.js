"use client";
import { useState } from "react";
import Image from "next/image";
import Input from "../input";
import DropdownQtd from "../dropDown";
import Navbar from "../NavBar";

export default function ConfirmarPresenca() {
  const [nome, setNome] = useState("");
  const [qtd, setQtd] = useState(1);
  const [telefone, setTelefone] = useState("");
  const [loading, setLoading] = useState(false);

  async function enviarConfirmacao() {
    if (!nome) {
      alert("Por favor, preencha seu nome.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/confirmarPresenca", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, qtd, telefone }),
      });

      if (!res.ok) {
        alert("Erro ao enviar confirmação.");
        return;
      }

      alert("Presença confirmada com sucesso!");
      setNome("");
      setQtd(1);
      setTelefone("");
    } catch (err) {
      alert("Erro no servidor.");
    }

    setLoading(false);
  }

  return (
    <div className="bg-[#f0e4cb] w-screen min-h-[145vh] flex justify-center py-20 font-poppins">
      <Navbar />
      <div className="flex flex-col lg:flex-row gap-12 w-[92vw] absolute lg:top-[20vh] top-[25vh] ">

        {/* CARD DO CASAL */}
        <div className="bg-[#f2f2f2] rounded-2xl shadow-xl p-8 flex justify-center flex-col h-[60vh] items-center flex-1  text-black">
          <Image src="/rings.png" width={70} height={70} alt="rings" className="mb-4" />
          <p className="text-4xl font-semibold">Otávio Moretto</p>
          <p className="text-2xl">&</p>
          <p className="text-4xl font-semibold">Isabelle Rizzatto</p>

          <div className="mt-6 text-center">
            <p className="lg:text-[18px] text-[16px]">Você foi convidado(a) para um momento único!</p>
            <div className="w-[380px] h-0.5 bg-gray-300 my-3 mx-auto" />
            <p className="text-xl font-bold">Confirme sua presença ❤️</p>
          </div>
        </div>

        {/* FORMULÁRIO */}
        <div className="bg-[#f2f2f2] rounded-2xl shadow-xl p-8 h-[60vh] flex-1 text-black mb-4">
          <Input
            label="Nome das pessoas que irão comparecer"
            placeholder="Digite o nome das pessoas..."
            type="text"
            value={nome}
            className="h-16 mb-4"
            onChange={(e) => setNome(e.target.value)}
          />

          <DropdownQtd qtd={qtd} setQtd={setQtd} />


          <button
            onClick={enviarConfirmacao}
            disabled={loading}
            className={`w-full bg-orange-400 mt-6 rounded-3xl cursor-pointer p-3 font-bold text-lg flex justify-center text-[#f2f2f2] items-center transition-all
              ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-orange-500 hover:scale-[101%]"}
            `}
          >
            
            {loading ? "Enviando..." : "Confirmar Presença"}
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-send ml-2" viewBox="0 0 16 16">
                                <path d="M15.854.146a.5.5 0 0 1 .11.54L10.145 15.233a.75.75 0 0 1-1.329.124L5.638 10.362 1.767 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576Zm6.787-8.201L1.591 6.602l4.339 2.76Z" />
                            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
