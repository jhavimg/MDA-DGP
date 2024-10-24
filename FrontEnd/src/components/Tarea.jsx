import Cabecera from "./Cabecera";
import Boton from "./Boton";
import '../css/Tarea.css'

function Tarea(props){
    return(<>
        <div className = "tarea_container">
            <h1 className = "Tarea_tit">Detalles de la Tarea</h1>
            
            <h2 id="titulo">Título: <span> {props.titulo}</span></h2>
            <p><strong>Fecha límite:</strong> <span id="fecha_limite">{props.limite}</span></p>
            <p><strong>Descripción:</strong></p>
            <p id="descripcion">{props.descripcion}</p>

            <h3>Archivos Multimedia:</h3>
            <div id="archivos">
                {props.archivos}
            </div>

            <Boton nombre = "Marcar Como Hecha" />
        </div>
        </>
        
    );
}

export default Tarea