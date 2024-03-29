import {createSlice} from "@reduxjs/toolkit";

export const formularioAgregarGrupo = {
    id:0,
    nombreGrupo:''
}



export const grupoSlice = createSlice({
    name:'grupos',
    initialState:{
        grupos:[],
        grupoSelecionado: formularioAgregarGrupo,
        visibleFormulario: false
    },
    reducers:{
        agregarGrupos:(state, action)=> {
            state.grupos = [
                ...state.grupos,
                {
                    ...action.payload
                }
            ];
        },
        cargarGrupos:(state,action)=> {
            state.grupos = action.payload;
        },
        removeGrupos:(state,action) => {
            state.grupos = state.grupos.filter(user => user.id !== action.payload);
        },
        updateGrupos:(state, action)=> {
            state.grupos = state.grupos.map(u => {
                if(u.id === action.payload.id){
                    return {
                        ...action.payload,
                    };
                }
                return u;
            })
        },
        loadingGrupos:(state, {payload}) => {
            state.grupos = payload;
        }
    }
})

export const {
    agregarGrupos,
    removeGrupos,
    updateGrupos,
    loadingGrupos,
    cargarGrupos
} = grupoSlice.actions;