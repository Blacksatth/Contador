import Saludo from "./components/saludo";
import { useState } from "react";


function App() {
  const [contador, setContador]=useState(0);
  const [nombre, setNombre]=useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900">
      <h1 className="text-4xl font-bold text-cyan-400 items-center jus">Tailwind en TSX 🚀
        <p className="justify-center items-center flex text-white mt-4">Prueba 1</p>
      </h1>
       <div>
          <input className="px-4 py-2 mt-4 rounded text-white" 
            value={nombre}
            placeholder="Ingrese su nombre"
            onChange={(e)=> setNombre(e.target.value)}          
          />
        </div>
        
    <div className="mt-8 text-blue-300">
      <Saludo nombre="Santiago"/>
      <h1 className="flex justify-center mt-7">Hola {nombre}</h1>
    </div>

      <div className="mt-9 flex text-blue-700 text-3xl "><h1>Contador</h1></div>
      <div className="mt-4 flex gap-4">
        <p className="text-white text-2xl py-6 mt-6">Valor: {contador}</p><br />
        
      </div>
      <button className="px-5 py-2 bg-green-500 text-white rounded" 
          onClick={()=>setContador(contador+1)}>Incrementar

        </button>
        <button className="px-5 py-2 bg-red-500 text-white rounded mt-6"
          onClick={()=>setContador(contador-1)}>Restar
        </button>
    </div>

    
  )
}

export default App
