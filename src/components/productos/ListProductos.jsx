
import { Producto } from "./producto.jsx"
import {useProducto} from "../../hooks/useProducto.js";
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";


export const ListaProductos =()=> {
    const { productos,CargarProductos} = useProducto();






    const cargar =()=> {
        CargarProductos();
    }



    useEffect(() => {
        cargar()
    }, []);

    return(
        
          <>
              <p className="text-center font-bold text-2xl mb-4">Lista de Productos</p>
              <div className="bg-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {productos.map(p =>
                      <div key={p.id} className="bg-white p-4 rounded-md shadow-sm">
                          <Producto pro={p} />
                      </div>
                  )}
              </div>
              <div>
                  <NavLink
                      className="bg-green-400 text-white m-2 p-2 rounded-xl hover:bg-green-500"
                      to="/tienda/productos/agregar"
                  >
                      Agregar Producto
                  </NavLink>
              </div>





         </>



    )
}