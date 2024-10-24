import Boton from "../components/Boton";
import Cabecera from "../components/Cabecera";

function Alumno(props){
    return(<>
        <Cabecera nombre = "Alumno" route = "/"/>
            
        <Boton nombre = "Ver Tarea" route = "/tarea_detail" />
        </>
        
    );
}

export default Alumno