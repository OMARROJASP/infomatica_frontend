import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {
    actualizarSubGrupoBackend,
    eliminarSubGrupoByIdBackend,
    guardarSubGrupoBackend, traerSubGrupoByGrupoBackend,
    traerSubGruposBackend
} from "../services/SubGrupoService.js";
import {
    agregarSubGrupos,
    cargarSubGrupos,
    removeSubGrupos,
    updateSubGrupos
} from "../store/slices/subGrupo/subGrupoSlice.js";


export const useSubGrupo =()=> {
    const {
        subgrupos,
        seleccionarFormulario,
    } = useSelector(state => state.subgrupos);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const CargarSubGrupo = async ()=> {
        const result = await traerSubGruposBackend();
        dispatch(cargarSubGrupos(result))
    }

    const cargarSubGruposByGrupo =async (id)=> {
        const result = await traerSubGrupoByGrupoBackend(id);
        dispatch(cargarSubGrupos(result))
    }

    const guardarSubGrupo = async (subGrupo)=> {
        let response;

        try {
            if (subGrupo.id === 0) {
                response = await guardarSubGrupoBackend(subGrupo);
                dispatch(agregarSubGrupos(response))
            } else {
                response = await actualizarSubGrupoBackend(subGrupo);
                dispatch(updateSubGrupos(response))
            }

            navigate(`/tienda`);
        } catch (e) {
            console.error(e)
        }

    }

    const eliminarSubGrupo =async(id)=> {
        try{
            await eliminarSubGrupoByIdBackend(id);
            dispatch(removeSubGrupos(id))
        }catch (e) {
            console.error(e)
        }
    }


    return{
        subgrupos,
        seleccionarFormulario,
        CargarSubGrupo,
        guardarSubGrupo,
        eliminarSubGrupo,
        cargarSubGruposByGrupo
    }
}