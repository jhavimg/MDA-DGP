import Boton from "../components/Boton";
import "../css/BuscadorTareas.css";

function BuscadorTareas(props){
    return(<>
    <div className = "search-bar">
        <input type="text" placeholder="Buscar tarea"></input> 
            <Boton className="search-btn" nombre = "Buscar" />
            <Boton className="create-task-btn" nombre = "Crear Tarea" route = "/Tarea_form"/>
            </div>
        </>
        
    );
}

export default BuscadorTareas