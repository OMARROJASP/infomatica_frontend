import axios from "axios";
import {traerGrupoByIdBackend} from "./GrupoService.js";
import {traerSubGrupoByIdBackend} from "./SubGrupoService.js";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}`;

export const traerProductosBackend = async ()=>{
    try{
        const response = await axios.get(`${BASE_URL}/productos`);
        return response.data;
    } catch (e){
        console.error(e);
    }

}

export const traerProductoByIdBackend = async (id)=>{
    try{
        const response = await axios.get(`${BASE_URL}/productos/${id}`);
        console.log(response.data);
        return response.data;
    } catch (e){
        console.error(e);
    }
}

export const traerProductosBySubGrupoBackend = async (id)=>{
    try{
        const response = await axios.get(`${BASE_URL}/productos/lista_grupo/${id}`);
        console.log(response.data);
        return response.data;
    } catch (e){
        console.error(e);
    }
}

export const guardarProductoBackend = async (producto)=>{
    const {nombre,precio,subGrupo,grupo} = producto

    const sg =  traerSubGrupoByIdBackend(subGrupo);
    const g = traerGrupoByIdBackend(grupo);

    try{
        const response = await axios.post(`${BASE_URL}/productos/save`,{
            nombre,precio,sg
        });
        console.log(response.data);
        return response.data;
    } catch (e){
        console.error(e);
    }
}

export const actualizarProductoBackend = async (producto)=>{
    const {id,nombre,precio,subGrupo} = producto
    try{
        const response = await axios.put(`${BASE_URL}/productos/update/${id}`,{
            nombre,precio,subGrupo
        });
        console.log(response.data);
        return response.data;
    } catch (e){
        console.error(e);
    }

}

export const eliminarProductoByIdBackend = async (id)=>{
    try{
        await axios.delete(`${BASE_URL}/productos/delete/${id}`);
    } catch (e){
        console.error(e);
    }

}