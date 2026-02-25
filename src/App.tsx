import Saludo from "./components/saludo";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-center">

      {/* Título */}
      <h1 className="text-4xl font-bold text-cyan-400">
        Tailwind en TSX 🚀
      </h1>

      {/* Input */}
      <input
        className="px-4 py-2 mt-6 rounded bg-slate-800 text-white outline-none"
        value={nombre}
        placeholder="Ingrese su nombre"
        onChange={(e) => setNombre(e.target.value)}
      />

      <p className="text-white mt-4">Prueba 1</p>

      {/* Saludo */}
      <div className="mt-6 text-yellow-300">
        <Saludo nombre="Santiago" />
        <h2 className="mt-4 text-xl">Hola {nombre}</h2>
      </div>

      {/* Contador */}
      <div className="mt-10 text-blue-400 text-3xl">
        <h2>Contador</h2>
      </div>

      <p className="text-white text-2xl mt-4">
        Valor: {contador}
      </p>

      <div className="flex gap-4 mt-6">
        <button
          className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
          onClick={() => setContador(contador + 1)}
        >
          Incrementar
        </button>

        <button
          className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
          onClick={() => setContador(contador - 1)}
        >
          Restar
        </button>
      </div>

    </div>
  );
}

export default App;