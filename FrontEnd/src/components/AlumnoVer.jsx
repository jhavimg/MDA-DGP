import { Link } from "react-router-dom";
import "../css/CompVer.css";

// Componente que muestra un alumno
function AlumnoVer({ id, nombre }) {
    return (
        <div className="task">
            <Link to={`/alumno_perfil/${id}`}>{nombre}</Link>
        </div>
    );
}

export default AlumnoVer;