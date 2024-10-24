import Boton from "../components/Boton";
import Cabecera from "../components/Cabecera";
import Tarea from "../components/Tarea";

function Tarea_Detail(props){
    return(<>
        <Cabecera nombre = "Tarea" route = "/alumno"/>
            <Tarea titulo= "Tarea de prueba" limite ="29-09-2025" descripcion= "Esta tarea es de prueba"/>
        </>
        
    );
}

export default Tarea_Detail