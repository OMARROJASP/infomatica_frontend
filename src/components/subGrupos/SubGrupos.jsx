import {useState} from "react";

export const SubGrupos =({sub,actualizarVer})=> {


    const [subGrupo, setSubGrupo] = useState(sub)

    const handleEliminar =(id)=>{

    }
    const handleActualizar =(id)=>{

    }
    const handleSubGrupos =(id)=>{
        actualizarVer(id)
    }
    return (
        <>
            <div className="bg-white p-4 rounded-md shadow-md">
                <h1 className="text-xl font-semibold mb-2">ID del SubGrupo: {subGrupo.id}</h1>
                <h2 className="text-lg font-medium mb-2">Nombre del SubGrupo: {subGrupo.nombreSubgrupo}</h2>
                <div className="flex justify-between mt-4">
                    <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600" onClick={() => handleEliminar(subGrupo.id)}>Eliminar</button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" onClick={() => handleActualizar(subGrupo.id)}>Actualizar</button>
                    <button className="bg-amber-400 text-white py-2 px-4 rounded-md hover:bg-blue-600" onClick={() => handleSubGrupos(subGrupo.id)}>productos
                    </button>
                </div>
            </div>
        </>
    );

}