"use client";
import React, { useState } from "react";

export default function Brincadeira({ nome, preco, imagem }) {
  const [loading, setLoading] = useState(false);

  async function pagar() {
    if (loading) return; // evita clique duplo

    setLoading(true); // desativa botão

    const precoNumerico = Number(preco.replace(",", "."));

    const res = await fetch("/api/create-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: nome,
        preco: precoNumerico,
        imagem: imagem,
      }),
    });

    const data = await res.json();

    if (data.checkout_url) {
      window.location.href = data.checkout_url;
    } else {
      alert("Erro ao gerar link!");
      console.log("Erro:", data);
      setLoading(false); // reativa se der erro
    }
  }

  return (
    <div className="w-full bg-white rounded-2xl border shadow-xl max-w-[400px] mx-auto">


      <div className="w-full h-[190px]">
        <img
          src={imagem}
          alt={nome}
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>

      <div className="p-3 flex h-[150px] flex-col gap-2">
        <p className="text-[14px] font-semibold text-[#00000094]">{nome}</p>
        <p className="text-green-600 font-medium text-sm">R$ {preco}</p>

        <button
          onClick={pagar}
          disabled={loading}
          className={`mt-auto py-3 rounded-xl transition cursor-pointer text-white
            ${loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
            }
          `}
        >
          {loading ? "Processando..." : "Enviar Presente"}
        </button>
      </div>
    </div>
  );
}
