import Cabecera from "../components/Cabecera";
import Tarea from "../components/Tarea";

function Tarea_Detail(props){

    
    return(<>
        <Cabecera nombre = "Tarea" route = "/alumno"/>
            <Tarea ident={props.ident}/>
        </>
        
    );
}

export default Tarea_Detail