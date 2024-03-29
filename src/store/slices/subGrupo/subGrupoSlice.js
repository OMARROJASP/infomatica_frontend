import {createSlice} from "@reduxjs/toolkit";

export const formularioAgregarSubGrupo = {
    id:0,
    nombreSubGrupo:'',
    grupo:{

    }
}



export const subgrupoSlice = createSlice({
    name:'subgrupos',
    initialState:{
        subgrupos:[],
        subGrupoSelecionado: formularioAgregarSubGrupo,
        visibleFormulario: false
    },
    reducers:{
        agregarSubGrupos:(state, action)=> {
            state.subgrupos = [
                ...state.subgrupos,
                {
                    ...action.payload
                }
            ];
        },
        cargarSubGrupos:(state,action)=> {
            state.subgrupos = action.payload;
        },
        removeSubGrupos:(state,action) => {
            state.subgrupos = state.subgrupos.filter(s => s.id !== action.payload);
        },
        updateSubGrupos:(state, action)=> {
            state.subgrupos = state.subgrupos.map(u => {
                if(u.id === action.payload.id){
                    return {
                        ...action.payload,
                    };
                }
                return u;
            })
        },
        loadingSubGrupos:(state, {payload}) => {
            state.subgrupos = payload;
        }
    }
})

export const {
    agregarSubGrupos,
    removeSubGrupos,
    updateSubGrupos,
    loadingSubGrupos,
    cargarSubGrupos
} = subgrupoSlice.actions;