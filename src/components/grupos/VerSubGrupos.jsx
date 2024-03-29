import {useEffect} from "react";
import {useSubGrupo} from "../../hooks/useSubGrupo.js";

export const VerSubGrupos =({id})=> {
    const {subgrupos,cargarSubGruposByGrupo} = useSubGrupo();

    const cargar =()=> {
        cargarSubGruposByGrupo(id);
    }

    useEffect(() => {
        cargar()
    }, []);

    return(
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-lg font-semibold mb-4">Lista de Sub Grupos</h2>
            <div className="grid gap-4">
                {subgrupos.map(subGrupo => (
                    <div key={subGrupo.id} className="bg-white p-4 rounded-md shadow-md">
                        <p className="text-lg font-semibold">ID del Sub Grupo: {subGrupo.id}</p>
                        <p className="text-base font-medium">Nombre del Sub Grupo: {subGrupo.nombreSubgrupo}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}