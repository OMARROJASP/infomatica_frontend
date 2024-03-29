import {useGrupo} from "../../hooks/useGrupo.js";
import {Grupo} from "./Grupo.jsx";
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {useSubGrupo} from "../../hooks/useSubGrupo.js";
import {VerSubGrupos} from "./VerSubGrupos.jsx";

export const ListGrupos =()=> {

    const {grupos,CargarGrupo} = useGrupo();

    const [ver, setVer] =useState(true)
    const [id, setId] =useState(0)
    const actualizarVer = (numero) => {
        setId(numero);
        setVer(!ver);
    };


    const cargar =()=> {
        CargarGrupo();
    }

    useEffect(() => {
        cargar()
    }, []);

    return(
       <>
           <p className={"text-center font-bold text-2xl "}>Lista de Grupos</p>
           <div className="bg-gray-100 grid grid-cols-1 sm:grid-cols-2">

               {
                   grupos.map(g => (
                       <ul key={g.id} className="text-center list-none p-4 rounded-md shadow-sm">
                           <li className="bg-white p-4">
                               <Grupo
                                   g={g}
                                   actualizarVer={actualizarVer}
                               />
                           </li>
                       </ul>
                   ))
               }

           </div>
           <div>
               <NavLink
                   className={"bg-green-400 m-2 p-2 rounded-xl"}
                   to={'agregar'}
               >Agregar Grupo</NavLink>
           </div>

           {
               ver || (
                  <VerSubGrupos
                      id={id}
                  />
               )

           }


       </>
    )
}