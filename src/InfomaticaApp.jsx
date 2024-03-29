import { ListaProductos } from "./components/productos/ListProductos.jsx"
import {Provider} from "react-redux";
import {store} from "./store/store.js";
import {AppRoutes} from "./AppRoutes.jsx";

export const InfomaticaApp =()=> {

    return(
            <Provider store={store}>
                <AppRoutes />
            </Provider>

    )
}