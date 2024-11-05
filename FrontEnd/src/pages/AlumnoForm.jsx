
import AForm from "../components/AForm"
import Boton from "../components/Boton";
import Cabecera from "../components/Cabecera";

function Alumnoform(props){
    return(<>
        <Cabecera nombre = "Crear Alumno" route = "/Alumno_list"/>
            
        <AForm/>
        </>
        
    );
}

export default Alumnoform