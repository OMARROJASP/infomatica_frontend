import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}`;

export const traerGruposBackend = async ()=>{
    try{
        const response = await axios.get(`${BASE_URL}/grupos`);
        return response.data;
    } catch (e){
        console.error(e);
    }

}

export const traerGrupoByIdBackend = async (id)=>{
    try{
        const response = await axios.get(`${BASE_URL}/grupos/${id}`);
        console.log(response.data);
        return response.data;
    } catch (e){
        console.error(e);
    }

}



export const guardarGrupoBackend = async (grupo)=>{
    const {nombreGrupo} = grupo
    try{
        const response = await axios.post(`${BASE_URL}/grupos/save`,{
            nombreGrupo
        });
        console.log(response.data);
        return response.data;
    } catch (e){
        console.error(e);
    }

}

export const actualizarGrupoBackend = async (grupo)=>{
    const {id,nombreGrupo} = grupo
    try{
        const response = await axios.put(`${BASE_URL}/grupos/update/${id}`,{
            nombreGrupo
        });
        console.log(response.data);
        return response.data;
    } catch (e){
        console.error(e);
    }

}

export const eliminarGrupoByIdBackend = async (id)=>{
    try{
        await axios.delete(`${BASE_URL}/grupos/delete/${id}`);
    } catch (e){
        console.error(e);
    }

}