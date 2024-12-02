import Boton from "./Boton";
import "../css/BuscadorTareas.css";

//Barra de búsqueda de tareas, con un campo de texto y un botón de búsqueda
function BuscadorTareas(props){
    return(<>
        <div className = "search-bar">
            <div className="botones-buscador">
                <Boton className="create-task-btn" nombre = "Crear Tarea Por Pasos" route = {props.route}/>
                <Boton className="create-task-btn" nombre = "Crear Peticion Comedor" route ="/crear-peticion-comedor"/>
            </div>
            <div className="buscador">
                <input className="input-buscador" type="text" placeholder="Introduzca..."></input> 
                <Boton className="search-btn" nombre = "Buscar" />
            </div>
        </div>
    </>
        
    );
}

export default BuscadorTareas