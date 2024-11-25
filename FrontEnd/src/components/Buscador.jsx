import Boton from "./Boton";
import "../css/BuscadorTareas.css";

//Barra de búsqueda de tareas, con un campo de texto y un botón de búsqueda
function BuscadorTareas(props){
    return(<>
        <div className = "search-bar">
            <input className="input-buscador" type="text" placeholder="Introduzca..."></input> 
            <Boton className="search-btn" nombre = "Buscar" />
            <Boton className="create-task-btn" nombre = "Crear" route = {props.route}/>
        </div>
    </>
        
    );
}

export default BuscadorTareas