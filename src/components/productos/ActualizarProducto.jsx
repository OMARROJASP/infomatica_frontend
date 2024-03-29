import {useEffect, useState} from "react";
import {useProducto} from "../../hooks/useProducto.js";

export const ActualizarProducto =()=> {

    const {  guardarProducto,CargarProductos,seleccionarFormulario,limpiarFormulario} = useProducto();


    const [productoInfo, setProductoInfo] = useState(
        {
            ...seleccionarFormulario
        }
    )
    const { nombre, precio } = productoInfo;



    const cargar =()=> {
        console.log(seleccionarFormulario)
    }
    useEffect(() => {
        cargar()
    }, []);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setProductoInfo({ ...productoInfo, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if(!nombre || !precio ){
            alert("Llene los espacios");
        }else{
            guardarProducto(productoInfo);
            CargarProductos();
            limpiarFormulario
        }


    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className=" w-96 mx-auto">
                <h2 className="text-xl font-semibold mb-4">Actualizar Producto</h2>
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



                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Actualizar Producto
                    </button>
                </form>
            </div>
        </div>
    );
}