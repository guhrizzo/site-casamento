"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function DropdownQtd({ qtd, setQtd }) {
  const [open, setOpen] = useState(false);

  const opcoes = [
    { label: "1 pessoa", value: 1 },
    { label: "2 pessoas", value: 2 },
    { label: "3 pessoas", value: 3 },
    { label: "4 pessoas", value: 4 },
    { label: "5 pessoas ou mais", value: 5 },
  ];

  function selecionar(opcao) {
    setQtd(opcao);
    setOpen(false);
  }

  return (
    <div className="relative font-poppins select-none">
      <label className="block text-sm font-semibold mb-1">
        Quantidade de Pessoas
      </label>

      <div
        className="bg-white border border-gray-300 rounded-xl p-3 cursor-pointer flex justify-between items-center shadow-sm hover:border-orange-400 transition-all"
        onClick={() => setOpen(!open)}
      >
        <span>{opcoes.find((o) => o.value === qtd).label}</span>
        <ChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          size={20}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 right-0 bg-white mt-2 rounded-xl shadow-lg border border-gray-200 z-20 overflow-hidden"
          >
            {opcoes.map((op) => (
              <li
                key={op.value}
                className={`p-3 cursor-pointer hover:bg-orange-100 transition-all ${
                  qtd === op.value ? "bg-orange-200 font-semibold" : ""
                }`}
                onClick={() => selecionar(op.value)}
              >
                {op.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
