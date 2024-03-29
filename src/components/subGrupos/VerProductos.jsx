
import {useEffect} from "react";
import {useProducto} from "../../hooks/useProducto.js";

export const VerProductos =({id})=> {
    const {productos,CargarProductosBySubGrupos} = useProducto();

    const cargar =()=> {
        CargarProductosBySubGrupos(id);
    }

    useEffect(() => {
        cargar()
    }, []);

    return(
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-lg font-semibold mb-4">Lista de Sub Grupos</h2>
            <div className="grid gap-4">
                {productos.map(subGrupo => (
                    <div key={subGrupo.id} className="bg-white p-4 rounded-md shadow-md">
                        <p className="text-lg font-semibold">ID producto: {subGrupo.id}</p>
                        <p className="text-base font-medium">Nombre del producto: {subGrupo.nombre}</p>
                        <p className="text-base font-medium">Precio del producto: {subGrupo.precio}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}