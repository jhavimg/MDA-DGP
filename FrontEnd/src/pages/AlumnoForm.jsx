
import AForm from "../components/AForm"
import Cabecera from "../components/Cabecera";

function Alumnoform(){
    return(<>
        <Cabecera nombre = "Crear Alumno" route = "/alumno_list"/>
            
        <AForm/>
        </>
        
    );
}

export default Alumnoform