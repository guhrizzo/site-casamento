"use client";
import { useState } from "react";

export default function FiltroPreco({ onChange }) {
  const [open, setOpen] = useState(false);
  const [filtro, setFiltro] = useState("");

  const opcoes = [
    { label: "Filtrar por preço", value: "" },
    { label: "Menor preço", value: "menor" },
    { label: "Maior preço", value: "maior" },
  ];

  function selecionar(valor) {
    setFiltro(valor);
    onChange(valor);
    setOpen(false);
  }

  return (
    <div className="relative lg:w-60 w-[90dvw]">
      {/* Caixa principal */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-white border border-gray-300 rounded-xl py-3 px-4 text-gray-700 shadow-sm transition-all delay-75 ease-in-out cursor-pointer hover:bg-gray-100 flex justify-between items-center"
      >
        <span>
          {filtro === ""
            ? "Filtrar por preço"
            : filtro === "menor"
            ? "Menor preço"
            : "Maior preço"}
        </span>

        {/* Ícone embutido */}
        <div className="bg-gray-200 p-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="#6b7280"
            viewBox="0 0 16 16"
          >
            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z" />
          </svg>
        </div>
      </button>

      {/* Dropdown estilizado */}
      {open && (
        <div className="absolute cursor-pointer left-0 mt-2 w-full bg-white border border-gray-300 rounded-[5px] shadow-lg z-20">
          {opcoes.map((op) => (
            <button
              key={op.value}
              onClick={() => selecionar(op.value)}
              className="w-full cursor-pointer text-left px-4 py-3 text-gray-700 hover:bg-gray-100 transition-all delay-75 ease-in-out"
            >
              {op.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
