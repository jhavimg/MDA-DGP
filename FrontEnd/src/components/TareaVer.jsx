import "../css/CompVer.css";
import Boton from "./Boton";
import Modal from "./Modal";
import { Link } from "react-router-dom"; // Importamos Link para la navegación interna

// Componente que muestra una tarea
function TareaVer(props) {
    function handleDelete() {
        console.log("Eliminar tarea:", props.id);
    }

    return (
        <>
            <div className="task">
                {/* Enlace interno para ir al detalle de la tarea */}
                <Link to={`/tarea_detail/${props.id}`} className="task-link">
                    {props.nombre}
                </Link>
                <div className="botones">
                    {/* Botón para modificar la tarea */}
                    <Boton nombre="Modificar Tarea" route="/Tarea_form" />
                    {/* Modal para acciones adicionales */}
                    {<Modal onClickAlto={handleDelete}/>}
                </div>
            </div>
        </>
    );
}

export default TareaVer;
