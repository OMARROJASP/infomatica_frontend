import {useState} from "react";

export const Grupo =({g,  actualizarVer,})=> {

   const [grupo, setGrupo] = useState(g)
    const handleEliminar =()=>{

    }
    const handleActualizar =()=>{

    }
    const handleSubGrupos =(id)=>{
        actualizarVer(id)
    }
    return (
        <>
            <div className="bg-white p-4 rounded-md shadow-md">
                {grupo.id && (
                    <h1 className="text-xl font-semibold mb-2">ID del Grupo: {grupo.id}</h1>
                )}
                <h2 className="text-lg font-medium mb-2">Nombre del Grupo: {grupo.nombreGrupo}</h2>
                <div className="flex justify-between mt-4">
                    <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600" onClick={() => handleEliminar()}>
                        Eliminar
                    </button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" onClick={() => handleActualizar()}>
                        Actualizar
                    </button>
                    <button className="bg-amber-400 text-white py-2 px-4 rounded-md hover:bg-blue-600" onClick={() => handleSubGrupos(grupo.id)}>
                        SubGrupos
                    </button>
                </div>
            </div>
        </>
    );
}