import axios from "axios";
import {traerGrupoByIdBackend} from "./GrupoService.js";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}`;

export const traerSubGruposBackend = async ()=>{
    try{
        const response = await axios.get(`${BASE_URL}/sub_grupos`);
        return response.data;
    } catch (e){
        console.error(e);
    }

}

export const traerSubGrupoByIdBackend = async (id)=>{
    try{
        const response = await axios.get(`${BASE_URL}/sub_grupos/${id}`);
        console.log(response.data);
        return response.data;
    } catch (e){
        console.error(e);
    }

}

export const traerSubGrupoByGrupoBackend = async (id)=>{
    try{
        const response = await axios.get(`${BASE_URL}/sub_grupos/lista_grupo/${id}`);
        console.log(response.data);
        return response.data;
    } catch (e){
        console.error(e);
    }
}

export const guardarSubGrupoBackend = async (subGrupo)=>{
    const {nombreSubgrupo,grupo} = subGrupo
    const grupoAux = traerGrupoByIdBackend(grupo)
    try{
        const response = await axios.post(`${BASE_URL}/sub_grupos/save`,{
            nombreSubgrupo,grupoAux
        });
        console.log(response.data);
        return response.data;
    } catch (e){
        console.error(e);
    }

}

export const actualizarSubGrupoBackend = async (subGrupo)=>{
    const {id,nombreSubgrupo,grupo} = subGrupo
    try{
        const response = await axios.put(`${BASE_URL}/sub_grupos/update/${id}`,{
            nombreSubgrupo,grupo
        });
        console.log(response.data);
        return response.data;
    } catch (e){
        console.error(e);
    }

}

export const eliminarSubGrupoByIdBackend = async (id)=>{
    try{
        await axios.delete(`${BASE_URL}/sub_grupos/delete/${id}`);
    } catch (e){
        console.error(e);
    }

}