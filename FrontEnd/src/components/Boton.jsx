import { Link } from "react-router-dom";
import "../css/Boton.css"

function Boton(props){
    return(
        <Link to = {props.route}>
            <button className = {props.className ?? "button-17"} href = {props.route} onClick={props.onClickAlto}>{props.nombre}</button>
        </Link>       
    );
}

export default Boton