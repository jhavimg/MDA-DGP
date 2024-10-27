import { Link } from "react-router-dom";
import "../css/Boton.css"

function Boton(props){
    if(! props.className)
    return(
        <Link to = {props.route}>
            <button className = "button-17" href = {props.route}>{props.nombre}</button>
        </Link>       
    );
    else{
        return(
            <Link to = {props.route}>
                <button  className  = {props.className} href = {props.route}>{props.nombre}</button>
            </Link>       
        ); 
    }
}

export default Boton