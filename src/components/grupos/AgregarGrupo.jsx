
import {useState} from "react";
import {useGrupo} from "../../hooks/useGrupo.js";

export const AgregarGrupo =()=> {

    const {seleccionarFormulario,
        CargarGrupo,
        guardarGrupo,} = useGrupo();

    const [grupoInfo, setGrupoInfo] = useState(
        {
            ...seleccionarFormulario,
            id:0,
            nombreGrupo: "",

        }
    )
    const { nombreGrupo } = grupoInfo;

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setGrupoInfo({ ...grupoInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!nombreGrupo ){
            alert("Llene los espacios");
        }else{
            guardarGrupo(grupoInfo);
            CargarGrupo();
        }


    };
    return (
        <div className="flex justify-center items-center h-screen">
            <div className=" w-96 mx-auto">
                <h2 className="text-xl font-semibold mb-4">Agregar Grupo</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Nombre de la Grupo</label>
                        <input
                            type="text"
                            name="nombreGrupo"
                            value={nombreGrupo || ''}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Guardar Grupo
                    </button>
                </form>
            </div>
        </div>
    );

}