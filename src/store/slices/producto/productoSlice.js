import {createSlice} from "@reduxjs/toolkit";

export const formularioVacioProducto = {    
        "id": 0,
        "grupo":0,
        "subGrupo":0,
        "nombre": "",
        "precio": 0

}

export const productoSlice = createSlice({
    name: "productos",
    initialState: {
        productos:[],
        selecionarFormulario: formularioVacioProducto
    },
    reducers:{
        agregarProducto:(state, action)=> {
            state.productos = [
                ...state.productos,
                {
                    ...action.payload,
                }
            ];

        },
        eliminarProducto:(state, action)=> {
            state.productos = state.productos.filter(n => (n.id !== action.payload));
        },
        cargarProducto:(state,action)=> {
            state.productos = action.payload;
        },
        actualizarProducto:(state,action)=>{
            state.productos = state.productos.map(u=> {
                if(u.id === action.payload.id){
                    return {
                        ...action.payload
                    };
                }
                return u;
            })
        },
        filtrarProductos: (state, action) => {
            const productosFiltrados = state.productos.filter(producto => {
                return action.payload.some(marca => producto.marca.toLowerCase().includes(marca.toLowerCase()));
            });

            return {
                ...state,
                productos: productosFiltrados,
            };
        },
        filtrarProductosPorPrecio: (state, action) => {
            const productosFiltrados = state.productos.filter(producto => {
                return producto.precio >= action.payload[0] &&
                    producto.precio <= action.payload[1];
            });

            return {
                ...state,
                productos: productosFiltrados
            };
        },

        onSeleccinarFormulario:(state, {payload})=> {
            state.seleccionarFormulario = payload;
        },
        onCerrarFormularioSeleccionado:(state)=> {
            state.seleccionarFormulario = formularioVacioProducto;
        }
    }
})

export const {
    agregarProducto,
    eliminarProducto,
    cargarProducto,
    actualizarProducto,
    filtrarProductos,
    filtrarProductosPorPrecio,
    onSeleccinarFormulario,
    onCerrarFormularioSeleccionado
} = productoSlice.actions