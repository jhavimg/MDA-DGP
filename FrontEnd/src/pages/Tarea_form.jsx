import "../css/Tarea-form.css"
import TForm from "../components/TForm"
import Boton from "../components/Boton";
import Cabecera from "../components/Cabecera";

function Tareaform(props){
    return(<>
        <Cabecera nombre = "Crear Tarea Por Pasos" route = "/tarea_list"/>
            
        <TForm/>
        </>
        
    );
}

export default Tareaform