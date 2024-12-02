import PCForm from "../components/PCForm";
import Cabecera from "../components/Cabecera";

function PeticionComandasForm(props){
    return(
    <>
        <Cabecera nombre = "Crear Peticion de Comedor" route = "/tarea_list"/>

        <PCForm/>
    </>
    )
}

export default PeticionComandasForm;