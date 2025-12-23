"use client";

import { motion } from "framer-motion";
import Navbar from "./NavBar";

export default function ProgCasamento() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center px-6 pt-28 pb-20  text-[#2e2e2e] lg:mt-0 mt-[9dvh]">
    
      {/* TÍTULO */}
      <motion.h1
        className="md:text-4xl font-bold mb-8 text-center text-[36px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Programação do Casamento
      </motion.h1>

      {/* CONTAINER PRINCIPAL */}
      <div className="w-full max-w-3xl flex flex-col gap-10">

        {/* ---------------- CERIMÔNIA ---------------- */}
        <motion.div
          className="bg-white rounded-2xl shadow-md border border-[#ffe6a7] p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold text-amber-700 mb-4">Cerimônia</h2>

          <p className="text-lg">
            <span className="font-semibold">Local:</span> CEBES — R. Víctor Spatti, 11 - Jardim Parati, Jaú | SP
          </p>

          <p className="text-lg mt-2">
            <span className="font-semibold">Horário:</span> 17:00
          </p>
        </motion.div>

        {/* ---------------- RECEPÇÃO ---------------- */}
        <motion.div
          className="bg-white rounded-2xl shadow-md border border-[#ffe6a7] p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-amber-700 mb-4">Recepção</h2>

          <p className="text-lg">
            <span className="font-semibold">Local:</span> Churrascaria Porteira do Sul
          </p>

          <p className="text-lg mt-2">
            <span className="font-semibold">Horário:</span> Após a cerimônia (aprox. 19h)
          </p>

          {/* LISTA DE ATIVIDADES */}
          <div className="mt-4">
            <p className="text-lg font-semibold mb-2">Atividades:</p>

            <ul className="list-disc pl-6 text-lg flex flex-col gap-1">
              <li>Janta</li>
              <li>Valsa</li>
              <li>Brinde com os padrinhos</li>
              <li>Bolo</li>
            </ul>
          </div>

          {/* VALOR */}
          <p className="text-lg mt-6 bg-amber-100 p-3 rounded-xl border border-amber-300 text-amber-800">
            <span className="font-semibold">Valor do rodízio:</span> R$ 89,90 por pessoa (valor médio)
          </p>
        </motion.div>
      </div>
    </div>
  );
}
