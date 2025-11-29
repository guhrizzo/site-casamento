"use client";
import { useEffect, useState } from "react";
import Navbar from "../NavBar";

export default function ConfirmadosPage() {
  const [confirmados, setConfirmados] = useState([]);
  const [totalPessoas, setTotalPessoas] = useState(0);

  useEffect(() => {
    async function carregar() {
      const res = await fetch("/api/listarConfirmacoes");
      const data = await res.json();

      setConfirmados(data);

      // Soma total de pessoas confirmadas
      const soma = data.reduce((acc, item) => acc + Number(item.qtd || 0), 0);
      setTotalPessoas(soma);
    }
    carregar();
  }, []);

  return (
    <div className=" min-h-screen bg-gray-100 p-10 text-black font-poppins lg:mt-[9vh] mt-[16vh]">
      <Navbar />
      <h1 className="text-4xl font-bold mb-6">Lista de Confirmados</h1>

      <div className="mb-6 p-4 bg-white rounded-xl shadow border w-full lg:w-[95vw]">
        <p className="text-2xl font-semibold">
          Total de pessoas confirmadas: <span className="text-green-600">{totalPessoas}</span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {confirmados.map((c) => (
          <div key={c.id} className="bg-gray-50 rounded-xl shadow p-4 border w-full lg:w-[95vw]">
            <p className="text-xl font-bold">{c.nome}</p>
            <p className="mt-1">Quantidade: {c.qtd}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}
