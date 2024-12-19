import { Link } from "react-router-dom";
import "../css/Boton.css"

//Botón que redirige a la ruta especificada en route
function BotonClase(props){

    return(
        <Link to = {props.route} state={{ aula: props.nombre }}>
            <div className="boton-con-foto">
                <img src={props.foto} className = "foto_boton" alt=""></img>
                <button className = {props.className ?? "button-17"} href = {props.route} onClick={props.onClickAlto}>{props.nombre}</button>
            </div>
        </Link>       
    );
}

export default BotonClase