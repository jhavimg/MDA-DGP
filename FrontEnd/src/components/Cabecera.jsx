import "../css/Cabecera.css"
import Boton from "./Boton";

//Cabecera de la página, con un botón de retroceso y un título
function Cabecera(props){
    return(
        <div className = "cabecera">
            <Boton className = "back-btn" nombre = " ↩" route = {props.route}></Boton>    
            <h2 className = "titulo-cabecera">{props.nombre}</h2>
        </div>
        
        
    );
}

export default Cabecera