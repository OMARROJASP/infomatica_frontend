import {useState} from "react";

export const VentaPedido =()=> {
    const [productoInfo, setProductoInfo] = useState({
        id: '',
        nombre: '',
        cantidad: '',
        precioVenta: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductoInfo({ ...productoInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor o almacenarlos localmente
        console.log(productoInfo);
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="id" className="block text-sm font-medium text-gray-700">
                        ID del Producto
                    </label>
                    <input
                        type="text"
                        name="id"
                        id="id"
                        value={productoInfo.id}
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                        Nombre del Producto
                    </label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        value={productoInfo.nombre}
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <div>
                    <label htmlFor="cantidad" className="block text-sm font-medium text-gray-700">
                        Cantidad
                    </label>
                    <input
                        type="number"
                        name="cantidad"
                        id="cantidad"
                        value={productoInfo.cantidad}
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <div>
                    <label htmlFor="precioVenta" className="block text-sm font-medium text-gray-700">
                        Precio de Venta
                    </label>
                    <input
                        type="text"
                        name="precioVenta"
                        id="precioVenta"
                        value={productoInfo.precioVenta}
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
    );
}