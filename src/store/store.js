import { configureStore } from "@reduxjs/toolkit";
import {productoSlice} from "./slices/producto/productoSlice.js";
import {userSlice} from "./slices/usuario/usuarioSlice.js";
import {subgrupoSlice} from "./slices/subGrupo/subGrupoSlice.js";
import {grupoSlice} from "./slices/grupo/grupoSlice.js";

export const store = configureStore({
    reducer:{
        subgrupos:subgrupoSlice.reducer,
        grupos:grupoSlice.reducer,
        productos: productoSlice.reducer,
        usuarios:userSlice.reducer
    }
})