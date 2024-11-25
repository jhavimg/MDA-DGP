import "../css/CompVer.css";
import Boton from "./Boton";
import Modal from "./Modal";
import { Link } from "react-router-dom"; // Importamos Link para la navegación interna

function TareaVer(props) {
    async function handleDelete(close) {
        try {
            const response = await fetch(`http://localhost:8000/api/tareas/${props.id}/eliminar/`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                console.log("Tarea eliminada exitosamente:", props.id);
                props.actualizarTareas(); // Llama a la función para actualizar las tareas en el padre
                close(); // Cierra el modal
            } else {
                const errorData = await response.json();
                console.error("Error al eliminar la tarea:", errorData);
                alert("No se pudo eliminar la tarea. Verifique los detalles.");
            }
        } catch (error) {
            console.error("Error al eliminar la tarea:", error);
            alert("Ocurrió un error al eliminar la tarea.");
        }
    }

    return (
        <>
            <div className="task">
                <Link to={`/tarea_detail/${props.id}`} className="task-link">
                    {props.nombre}
                </Link>
                <div className="botones">
                    <Boton nombre="Modificar Tarea" route="/Tarea_form" />
                    {<Modal onClickAlto={(close) => handleDelete(close)} />} {/* Pasa close al handler */}
                </div>
            </div>
        </>
    );
}
export default TareaVer;
