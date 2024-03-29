import {ListaProductos} from "../components/productos/ListProductos.jsx";
import {ListGrupos} from "../components/grupos/ListGrupos.jsx";
import {ListSubGrupos} from "../components/subGrupos/ListSubGrupos.jsx";
import {Navbar} from "../components/Navbar.jsx";

export const InfomaticaPage =()=> {
    return(
        <>
            <ListGrupos/>
            <ListSubGrupos/>
            <ListaProductos/>
        </>
    )
}