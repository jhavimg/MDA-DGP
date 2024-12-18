import { Link } from "react-router-dom";
import "../css/Boton.css"

//Botón que redirige a la ruta especificada en route
function Boton(props){

    if(props.foto)
    return(
        <Link to = {props.route}>
            <div className="boton-con-foto">
                <img src={props.foto} className = "foto_boton" alt=""></img>
                <button className = {props.className ?? "button-17"} href = {props.route} onClick={props.onClickAlto}>{props.nombre}</button>
            </div>
        </Link>       
    );
    else{
        return(
            <Link to = {props.route}>
                <button className = {props.className ?? "button-17"} href = {props.route} onClick={props.onClickAlto}>{props.nombre}</button>
            </Link> 
        );
    }
}

export default Boton