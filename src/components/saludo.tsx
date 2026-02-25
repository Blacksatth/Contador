interface SaludoProps {
    nombre: string;
}

export default function Saludo ({nombre}: SaludoProps)
{
    return <h1 className="text-2xl font-bold text-white"> su nombre es {nombre}</h1>
}