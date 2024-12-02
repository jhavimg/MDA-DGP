import { Link } from "react-router-dom";
import "../css/Comp.css"

function ClaseComp({ nombre, route }) {
    return (
        <Link className="enlace-clase" to={route} state={{ aula: nombre }}>
            <div className="aula-box">{nombre}</div>
        </Link>
    );
}

export default ClaseComp;