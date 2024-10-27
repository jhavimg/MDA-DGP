import Cabecera from "../components/Cabecera";
import BuscadorTareas from "../components/BuscadorTareas";
import TareaVer from "../components/TareaVer";

function TareaList(props){
    return(<>
        <Cabecera nombre = "Tareas" route = "/admin"/>
        <BuscadorTareas />
        <TareaVer nombre = "Tarea de matematicas"/>
        <TareaVer nombre = "Tarea de historia"/>
        </>
        
    );
}

export default TareaList