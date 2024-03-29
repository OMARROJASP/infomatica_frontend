import {useNavigate} from "react-router-dom";

export const Navbar =()=> {
    //const { login, handlerLogout } = useAuth();
    const navigate = useNavigate()
    const verProductos =()=> {
        navigate("/tienda/productos")
    }

    const verGrupos =()=> {
        navigate("/tienda/grupos")
    }

    const verSubGrupo =()=> {
        navigate("/tienda/sub_grupos")
    }

    return(
        <nav className="bg-black grid grid-cols-4 py-4 px-6">
            <div className="col-span-1 flex items-center">
                <p className="text-white text-4xl">
                    <span className="text-amber-400">INFOM</span>ATICA
                </p>
            </div>

            <div className="col-span-3 flex justify-between items-center">
                <div className="flex space-x-4">
                    <button className="text-white hover:text-amber-400 transition duration-300" onClick={verGrupos}>Grupo</button>
                    <button className="text-white hover:text-amber-400 transition duration-300" onClick={verSubGrupo}>Sub Grupo</button>
                    <button className="text-white hover:text-amber-400 transition duration-300" onClick={verProductos}>Productos</button>
                </div>
            </div>
        </nav>


    )
}