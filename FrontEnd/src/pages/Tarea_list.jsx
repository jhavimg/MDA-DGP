import Boton from "../components/Boton";
import Cabecera from "../components/Cabecera";

function Alumno(props){
    return(<>
        <Cabecera nombre = "Tareas" route = "/admin"/>
            
        <Boton nombre = "Crear Tarea" route = "/tarea_form" />
        </>
        
    );
}

export default Alumno