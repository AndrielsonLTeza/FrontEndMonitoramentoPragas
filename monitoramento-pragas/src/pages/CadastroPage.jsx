import React from "react";
import { FaSeedling, FaHome, FaTractor, FaBug, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Cadastro() {
  return (
    <div className="flex min-h-screen bg-[#f5f8f2] text-gray-800">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r shadow-md p-4 space-y-4">
        <h2 className="text-2xl font-bold mb-6 text-green-800 flex items-center gap-2">
          <FaSeedling /> AgroSistema
        </h2>
        <nav className="space-y-3">
          <Link
            to="/cadastro"
            className="flex items-center gap-2 text-green-700 hover:font-semibold"
          >
            <FaHome /> Cadastro
          </Link>
          <Link
            to="/monitoramento"
            className="flex items-center gap-2 text-green-700 hover:font-semibold"
          >
            <FaTractor /> Monitoramento
          </Link>
          <Link
            to="/ocorrencias"
            className="flex items-center gap-2 text-green-700 hover:font-semibold"
          >
            <FaBug /> Ocorrências
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-10 text-green-900">Cadastro</h1>

        <div className="space-y-10">

          {/* Card - Propriedade */}
          <section className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Cadastrar Propriedade</h2>
            <div className="flex gap-4 flex-wrap">
              <input
                type="text"
                placeholder="Nome da propriedade"
                className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
              <button className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
                <FaCheck /> Salvar
              </button>
            </div>
          </section>

          {/* Card - Cultura */}
          <section className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Cadastrar Cultura</h2>
            <div className="flex gap-4 flex-wrap">
              <input
                type="text"
                placeholder="Nome da cultura"
                className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
              <button className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
                <FaCheck /> Salvar
              </button>
            </div>
          </section>

          {/* Card - Problema */}
          <section className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Cadastrar Tipo de Praga ou Doença</h2>
            <div className="flex gap-4 flex-wrap">
              <input
                type="text"
                placeholder="Nome do problema"
                className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
              <button className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
                <FaCheck /> Salvar
              </button>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
