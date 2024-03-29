import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {
    actualizarProductoBackend,
    eliminarProductoByIdBackend,
    guardarProductoBackend, traerProductoByIdBackend,
    traerProductosBackend, traerProductosBySubGrupoBackend
} from "../services/ProductoService.js";
import {
    actualizarProducto,
    agregarProducto,
    cargarProducto,
    eliminarProducto, onCerrarFormularioSeleccionado, onSeleccinarFormulario
} from "../store/slices/producto/productoSlice.js";

export const useProducto=()=> {

    const {
        productos,
        seleccionarFormulario,
    } = useSelector(state => state.productos);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const CargarProductos = async ()=> {
        const result = await traerProductosBackend();
        dispatch(cargarProducto(result))
    }


    const CargarProductosBySubGrupos = async (id)=> {
        const result = await traerProductosBySubGrupoBackend(id);
        dispatch(cargarProducto(result))
    }
    const guardarProducto = async (producto)=> {
        let response;

        try {
            if (producto.id === 0) {
                response = await guardarProductoBackend(producto);
                dispatch(agregarProducto(response))
            } else {
                response = await actualizarProductoBackend(producto);
                dispatch(actualizarProducto(response))
            }

            navigate(`/tienda`);
        } catch (e) {
            console.error(e)
        }

    }

    const eliminarProductos =async(id)=> {
        try{
            await eliminarProductoByIdBackend(id);
            dispatch(eliminarProducto(id))
        }catch (e) {
            console.error(e)
        }
    }

    const cargarFormulario = (producto) => {
        console.log(producto)
        dispatch(onSeleccinarFormulario(producto));
    }


    const limpiarFormulario =()=> {
        dispatch(onCerrarFormularioSeleccionado())
    }


    return{
        productos,
        seleccionarFormulario,
        CargarProductos,
        guardarProducto,
        eliminarProductos,
        cargarFormulario,
        limpiarFormulario,
        CargarProductosBySubGrupos
    }
}