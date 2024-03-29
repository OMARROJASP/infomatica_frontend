import {Navigate, Route, Routes} from "react-router-dom";
import {InfomaticaPage} from "../pages/InfomaticaPage.jsx";
import {AgregarProducto} from "../components/productos/AgregarProducto.jsx";
import {ActualizarProducto} from "../components/productos/ActualizarProducto.jsx";
import {AgregarGrupo} from "../components/grupos/AgregarGrupo.jsx";
import {AgregarSubGrupo} from "../components/subGrupos/AgregarSubGrupo.jsx";
import {ListaProductos} from "../components/productos/ListProductos.jsx";
import {ListGrupos} from "../components/grupos/ListGrupos.jsx";
import {ListSubGrupos} from "../components/subGrupos/ListSubGrupos.jsx";
import {Navbar} from "../components/Navbar.jsx";

export const InfomaticaRoutes =()=> {
    return(
      <>
          <Navbar/>
          <div className="flex flex-col min-h-screen">

              <div className="flex-grow">
                  <Routes>
                      <Route path={"tienda"} element={<InfomaticaPage/>} />

                      <Route path={"tienda/productos"} element={<ListaProductos/>} />
                      <Route path={"tienda/productos/agregar"} element={<AgregarProducto/>} />
                      <Route path={"tienda/productos/actualizar"} element={<ActualizarProducto/>} />

                      <Route path={"tienda/grupos"} element={<ListGrupos/>} />
                      <Route path={"tienda/grupos/agregar"} element={<AgregarGrupo/>} />

                      <Route path={"tienda/sub_grupos"} element={<ListSubGrupos/>} />
                      <Route path={"tienda/sub_grupos/agregar"} element={<AgregarSubGrupo/>} />
                      <Route path={"/"} element={<Navigate to={"/tienda"}/> } />
                  </Routes>
              </div>
          </div>
      </>
    )
}