import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {
    actualizarGrupoBackend,
    eliminarGrupoByIdBackend,
    guardarGrupoBackend,
    traerGruposBackend
} from "../services/GrupoService.js";
import {agregarGrupos, cargarGrupos, removeGrupos, updateGrupos} from "../store/slices/grupo/grupoSlice.js";
import {traerSubGrupoByGrupoBackend} from "../services/SubGrupoService.js";

export const useGrupo =()=> {
    const {
        grupos,
        seleccionarFormulario,
    } = useSelector(state => state.grupos);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const CargarGrupo = async ()=> {
        const result = await traerGruposBackend();
        dispatch(cargarGrupos(result))
    }

    const guardarGrupo = async (grupo)=> {
        let response;

        try {
            if (grupo.id === 0) {
                response = await guardarGrupoBackend(grupo);
                dispatch(agregarGrupos(response))
            } else {
                response = await actualizarGrupoBackend(grupo);
                dispatch(updateGrupos(response))
            }

            navigate(`/tienda`);
        } catch (e) {
            console.error(e)
        }

    }



    const eliminarGrupo =async(id)=> {
        try{
            await eliminarGrupoByIdBackend(id);
            dispatch(removeGrupos(id))
        }catch (e) {
            console.error(e)
        }
    }


    return{
        grupos,
        seleccionarFormulario,
        CargarGrupo,
        guardarGrupo,
        eliminarGrupo
    }
}