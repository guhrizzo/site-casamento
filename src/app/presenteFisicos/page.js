// ListaFisicos CORRIGIDA COMPLETA COM SLUGIFY E FIRESTORE FUNCIONANDO

"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";

import Navbar from "../NavBar";
import Footer from "../rodape";

// FIREBASE
import { db } from "../firebase";
import {
    doc,
    getDoc,
    setDoc,
    updateDoc,
    arrayUnion,
    arrayRemove,
} from "firebase/firestore";

// PRESENTES
import { PRESENTES_FISICOS } from "@/data/presentesFisicos";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

// 🔧 Função segura para gerar IDs de documentos
function slugify(text) {
    return text
        .normalize("NFD")
        .replace(/[^a-zA-Z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "")
        .toLowerCase();
}

// CARD COMPONENT
function PresenteCard({ nome, imagem, count, link, onClick }) {
    return (
        <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition flex flex-col h-full">
            <div>
                <Image
                    src={imagem}
                    alt={nome}
                    width={300}
                    height={300}
                    className="rounded-lg w-full h-[200px] object-cover"
                />
            </div>

            <p className="text-lg font-semibold mt-3 text-black">{nome}</p>

            <p className="text-sm text-gray-600 mt-1">
                Já enviado <span className="font-bold text-[#ff7b00]">{count}</span> vezes
            </p>

            <div className="mt-auto">
                <button
                    onClick={onClick}
                    className="mt-3 w-full bg-[#ff7b00] text-white cursor-pointer p-2 text-center rounded-lg font-semibold hover:bg-[#e66f00] transition"
                >
                    Ver detalhes
                </button>
            </div>
        </div>
    );
}

export default function ListaFisicos() {
    const [lista] = useState(PRESENTES_FISICOS);
    const [modalOpen, setModalOpen] = useState(false);
    const [presenteSelecionado, setPresenteSelecionado] = useState(null);
    const [enviados, setEnviados] = useState({});
    const [meusPresentes, setMeusPresentes] = useState({});

    const userId = "user_temp_id";

    // 🔥 Carregar contadores corretos com slugify
    useEffect(() => {
        async function carregar() {
            const resultado = {};
            const enviadosUsuario = {};

            for (let item of lista) {
                const docId = slugify(item.nome);
                const ref = doc(db, "presentes_enviados", docId);
                const snap = await getDoc(ref);

                if (snap.exists()) {
                    const data = snap.data();
                    resultado[item.nome] = data.count || 0;
                    enviadosUsuario[item.nome] = data.usuarios?.includes(userId) || false;
                } else {
                    resultado[item.nome] = 0;
                    enviadosUsuario[item.nome] = false;
                }
            }

            setEnviados(resultado);
            setMeusPresentes(enviadosUsuario);
        }
        carregar();
    }, [lista]);

    // 🔥 Confirmar envio
    async function confirmarEnvio() {
        if (!presenteSelecionado) return;

        const nome = presenteSelecionado.nome;
        const docId = slugify(nome);
        const ref = doc(db, "presentes_enviados", docId);

        const usuarioRef = doc(db, "usuarios", userId);
        await setDoc(usuarioRef, { enviados: [] }, { merge: true });
        await updateDoc(usuarioRef, { enviados: arrayUnion(nome) });

        const snap = await getDoc(ref);

        try {
            if (snap.exists()) {
                await updateDoc(ref, {
                    count: snap.data().count + 1,
                    usuarios: arrayUnion(userId),
                });
            } else {
                await setDoc(ref, {
                    count: 1,
                    usuarios: [userId],
                });
            }

            setEnviados((prev) => ({ ...prev, [nome]: (prev[nome] || 0) + 1 }));
            setMeusPresentes((prev) => ({ ...prev, [nome]: true }));

            setModalOpen(false);
            if (presenteSelecionado.link) window.open(presenteSelecionado.link, "_blank");
        } catch (e) {
            console.error("Erro ao atualizar:", e);
            alert("Houve um erro ao registrar seu envio.");
        }
    }

    // 🔥 Retirar envio
    async function retirarResposta() {
        if (!presenteSelecionado) return;

        const nome = presenteSelecionado.nome;
        const docId = slugify(nome);
        const ref = doc(db, "presentes_enviados", docId);
        const snap = await getDoc(ref);

        const usuarioRef = doc(db, "usuarios", userId);
        await updateDoc(usuarioRef, { enviados: arrayRemove(nome) });

        if (snap.exists() && snap.data().count > 0) {
            await updateDoc(ref, {
                count: snap.data().count - 1,
                usuarios: arrayRemove(userId),
            });

            setEnviados((prev) => ({ ...prev, [nome]: Math.max((prev[nome] || 1) - 1, 0) }));
            setMeusPresentes((prev) => ({ ...prev, [nome]: false }));
        }

        setModalOpen(false);
    }

    return (
        <div className={`${poppins.className} relative overflow-x-hidden`}>
            <Navbar />

            <div className="bg-[#f2f2f2] w-full h-auto lg:mt-[11vh] mt-[18dvh]">
                <p className="text-black text-3xl font-bold p-8 pt-6 pb-2 lg:text-4xl lg:p-8">
                    Escolha um presente físico para os noivos!
                </p>

                <div
                    className="mb-8 w-full max-w-[500px] lg:ml-6 scale-[89%] lg:scale-100"
                    onClick={() => {
                        navigator.clipboard.writeText(
                            "R. Luís Spirandeli, 120 - Jardim America - Jaú/SP · CEP 17210-720"
                        );
                        alert("Endereço copiado!");
                    }}
                >
                    <div className="bg-white shadow-md rounded-2xl p-4 flex items-center gap-4 border border-gray-200 cursor-pointer active:scale-[0.98] transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ff7b00"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="shrink-0"
                        >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>

                        <div>
                            <p className="text-lg text-black font-semibold">Recomendação de envio</p>
                            <p className="text-gray-600 -mt-1">Toque para copiar o endereço:</p>
                            <p className="text-[#ff7b00] font-bold text-lg">
                                R. Luís Spirandeli, 120 - Jardim America - Jaú/SP · CEP 17210-720
                            </p>
                        </div>
                    </div>
                </div>

                {/* LISTA DE PRESENTES */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 pb-12">
                    {lista.map((item, i) => (
                        <PresenteCard
                            key={i}
                            nome={item.nome}
                            imagem={item.imagem}
                            link={item.link}
                            count={enviados[item.nome] || 0}
                            onClick={() => {
                                setPresenteSelecionado(item);
                                setModalOpen(true);
                            }}
                        />
                    ))}
                </div>

                <Footer />
            </div>

            {/* MODAL */}
            <Dialog
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                className="fixed inset-0 z-50 flex items-center justify-center"
            >
                <div className="fixed inset-0 bg-black/40" />

                <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg relative z-10">
                    <h2 className="text-xl font-semibold text-black">Você enviará este presente?</h2>
                    <p className="text-gray-700 mt-2">
                        Sua resposta será registrada!
                        <br />
                        Você poderá retirar sua resposta se desejar.
                    </p>

                    <p className="mt-4 font-bold text-xl text-[#ff7b00]">
                        {presenteSelecionado?.nome}
                    </p>

                    <div className="flex gap-4 mt-6">
                        <button
                            className="flex-1 cursor-pointer hover:bg-green-700 transition-all bg-green-600 text-white p-2 rounded-lg"
                            onClick={confirmarEnvio}
                        >
                            Confirmar
                        </button>

                        <button
                            className="flex-1 bg-gray-300 text-black hover:bg-gray-400 cursor-pointer p-2 rounded-lg"
                            onClick={retirarResposta}
                        >
                            Retirar resposta
                        </button>
                    </div>

                    <button
                        className="mt-4 text-sm text-gray-500 cursor-pointer w-full text-center"
                        onClick={() => setModalOpen(false)}
                    >
                        Cancelar
                    </button>
                </div>
            </Dialog>
        </div>
    );
}