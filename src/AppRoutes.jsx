import {Route, Routes} from "react-router-dom";
import {InfomaticaRoutes} from "./router/InfomaticaRoutes.jsx";

export const AppRoutes =()=> {
    return(
        <Routes>
            <Route path={'/*'} element={<InfomaticaRoutes/>}/>
        </Routes>
    )
}