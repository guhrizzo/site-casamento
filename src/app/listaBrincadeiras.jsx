"use client";
import React from "react";

export default function Brincadeira({ nome, preco, imagem }) {
  async function pagar() {
    const precoNumerico = Number(preco.replace(",", "."));

    const res = await fetch("/api/create-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: nome,
        preco: precoNumerico,
        imagem: imagem, // agora envia a imagem também
      }),
    });

    const data = await res.json();

    if (data.checkout_url) {
      window.location.href = data.checkout_url; // Redireciona pro link da InfinitePay
    } else {
      alert("Erro ao gerar link!");
      console.log("Erro:", data);
    }
  }

  return (
    <div className="w-[17vw] bg-white rounded-2xl overflow-hidden border shadow-xl">

      {/* Foto */}
      <div className="w-full h-[170px] overflow-hidden">
        <img
          src={imagem}
          alt={nome}
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-3 flex h-[150px] flex-col gap-2">
        <p className="text-[14px] font-semibold text-[#00000094]">{nome}</p>
        <p className="text-green-600 font-medium text-sm">R$ {preco}</p>

        <button
          onClick={pagar}
          className="mt-auto bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition cursor-pointer"
        >
          Enviar Presente
        </button>
      </div>
    </div>
  );
}
