import "../css/Cabecera.css"
import Boton from "./Boton";

function Cabecera(props){
    return(
        <div className = "cabecera">
            <Boton className = "back-button" nombre = " ↩" route = {props.route}></Boton>    
            <h2 className = "titulo">{props.nombre}</h2>
        </div>
        
        
    );
}

export default Cabecera