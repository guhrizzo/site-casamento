"use client";
import React from "react";


export default function Brincadeira({ nome, preco, imagem }) {

  async function pagar() {
    const precoNumerico = Number(preco.replace(",", "."));

    const res = await fetch("/api/create-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: nome,
        price: precoNumerico,
      }),
    });

    const data = await res.json();

    if (data.init_point) {
      window.location.href = data.init_point;
    } else {
      alert("Erro ao iniciar o pagamento!");
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
