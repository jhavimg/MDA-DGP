import { Link } from "react-router-dom";
import "../css/Boton.css"

function Boton(props){
    return(
        <Link to = {props.route}>
            <button className = "button-17" id = {props.className} href = {props.route}>{props.nombre}</button>
        </Link>
        
        
    );
}

export default Boton