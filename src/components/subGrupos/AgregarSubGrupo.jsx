import {useState} from "react";
import {useSubGrupo} from "../../hooks/useSubGrupo.js";

export const AgregarSubGrupo =()=> {
    const {
        seleccionarFormulario,
        guardarSubGrupo,
        CargarSubGrupo,
    } = useSubGrupo();

    const [subGrupoInfo, setSubGrupoInfo] = useState(
        {
            ...seleccionarFormulario,
            id: 0,
            nombreSubgrupo: "",
            grupo: 0

        }
    )
    const {nombreSubgrupo, grupo} = subGrupoInfo;


    const handleChange = ({target}) => {
        const {name, value} = target;
        setSubGrupoInfo({...subGrupoInfo, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombreSubgrupo || !grupo) {
            alert("Llene los espacios");
        } else {
            guardarSubGrupo(subGrupoInfo);
            CargarSubGrupo();
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className=" w-96 mx-auto">
                <h2 className="text-xl font-semibold mb-4">Agregar Sub Grupo</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Nombre del sub Grupo</label>
                        <input
                            type="text"
                            name="nombreSubgrupo"
                            value={nombreSubgrupo || ''}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Id del Grupo</label>
                        <input
                            type="number"
                            name="grupo"
                            value={grupo || ''}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Guardar sub Grupo
                    </button>
                </form>
            </div>
        </div>
    );

}