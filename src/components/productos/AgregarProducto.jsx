import {useProducto} from "../../hooks/useProducto.js";
import {useState} from "react";

export const AgregarProducto =()=> {

    const {seleccionarFormulario, guardarProducto,CargarProductos} = useProducto();

    const [productoInfo, setProductoInfo] = useState(
        {
            ...seleccionarFormulario,
            id:0,
            nombre: "",
            precio: 0,
            subGrupo:0,
            grupo:0
        }
    )
    const { nombre, precio,subGrupo,grupo } = productoInfo;

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setProductoInfo({ ...productoInfo, [name]: value });
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        if(!nombre || !precio || !subGrupo || !grupo){
            alert("Llene los espacios");
        }else{
            guardarProducto(productoInfo);
            CargarProductos();
        }


    };


    return (
        <div className="flex justify-center items-center h-screen">
            <div className=" w-96 mx-auto">
                <h2 className="text-xl font-semibold mb-4">Agregar Producto</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Nombre de la Producto</label>
                        <input
                            type="text"
                            name="nombre"
                            value={nombre || ''}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Precio de la Producto</label>
                        <input
                            type="number"
                            name="precio"
                            value={precio || ''}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Grupo de la Producto</label>
                        <input
                            type="number"
                            name="grupo"
                            value={grupo || ''}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Sub Grupo de la Producto</label>
                        <input
                            type="number"
                            name="subGrupo"
                            value={subGrupo || ''}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>


                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Guardar Producto
                    </button>
                </form>
            </div>
        </div>
    );
}