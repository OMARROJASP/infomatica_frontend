import {useSubGrupo} from "../../hooks/useSubGrupo.js";
import {useEffect, useState} from "react";
import {SubGrupos} from "./SubGrupos.jsx";
import {NavLink} from "react-router-dom";
import {VerSubGrupos} from "../grupos/VerSubGrupos.jsx";
import {VerProductos} from "./VerProductos.jsx";

export const ListSubGrupos =()=> {

    const {subgrupos, CargarSubGrupo} = useSubGrupo();
    const [ver, setVer] =useState(true)
    const [id, setId] =useState(0)
    const cargar =()=> {
        CargarSubGrupo();
    }
    const actualizarVer = (numero) => {
        setId(numero);
        setVer(!ver);
    };

    useEffect(() => {
        cargar()
    }, []);
    return(
        <>
            <p className={"text-center font-bold text-2xl "}>Lista de Sub Grupos</p>
            <div className="bg-gray-100 grid grid-cols-2 sm:grid-cols-4">

                {
                    subgrupos.map(g =>
                        <ul key={g.id} className="text-center list-none p-4 rounded-md shadow-sm">
                            <li className="bg-white p-4">
                                <SubGrupos
                                        sub={g}
                                           actualizarVer={actualizarVer}/>
                            </li>
                        </ul>
                    )
                }
            </div>
            <div>
                <NavLink
                    className={"bg-green-400 text-white m-2 p-2 rounded-xl hover:bg-green-500"}
                    to={'agregar'}
                >Agregar Sub Grupo</NavLink>
            </div>

            {
                ver || (
                    <VerProductos
                        id={id}
                    />
                )

            }
        </>
    )
}