import {useState} from "react";
import {useProducto} from "../../hooks/useProducto.js";
import {useNavigate} from "react-router-dom";

export const Producto =({pro})=> {

    const { eliminarProductos,cargarFormulario,seleccionarFormulario} = useProducto();

    const navigate = useNavigate();
    const [product, setProduct] = useState(pro);



    const {id, nombre, precio}= product;

    const handleEliminar =(id)=>{
        eliminarProductos(id)
    }
    const handleActualizar =(producto)=>{
        cargarFormulario(producto)
        navigate('actualizar')
    }
    return(
        <>
            <div className="bg-white p-4 rounded-md shadow-md">
                <h1 className="text-lg font-semibold mb-2">ID del Producto: {id}</h1>
                <h2 className="text-base font-medium mb-2">Nombre del Producto: {nombre}</h2>
                <p className="text-sm text-gray-600">Precio del Producto: ${precio}</p>
                <div className="flex justify-between mt-4">
                    <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600" onClick={() => handleEliminar(id)}>Eliminar</button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" onClick={() => handleActualizar(product)}>Actualizar</button>
                </div>
            </div>
        </>
    )
}