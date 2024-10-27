import Cabecera from "../components/Cabecera";
import BuscadorTareas from "../components/BuscadorTareas";
import TareaVer from "../components/TareaVer";
import Boton from "../components/Boton";

function AlumnoList(props){
    return(<>
        <Cabecera nombre = "Alumnos" route = "/admin"/>
        
        <Boton nombre = "Crear Alumno" route = "/Alumno_form"/>
        </>
        
    );
}

export default AlumnoList