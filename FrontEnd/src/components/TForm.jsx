import "../css/TForm.css"
import Boton from "./Boton";

function TForm(props){
    return(
        <div className = "container">
        <form className >
            <label for="titulo">Título de la tarea:</label>
            <input type="text" id="titulo" name="titulo" required/>

            <label for="fecha_limite">Fecha límite:</label>
            <input type="date" id="fecha_limite" name="fecha_limite" required/> 

            <label for="alumno">Asignar tarea a:</label>
            <select id="alumno" name="alumno" required>
            </select>

            <label for="descripcion">Descripción de la tarea:</label>
            <textarea id="descripcion" name="descripcion" rows="5" required></textarea>

            <label for="audio">Subir audio (opcional):</label>
            <input type="file" id="audio" name="audio" accept="audio/*"/>

            <label for="imagenes">Subir imágenes (opcional):</label>
            <input type="file" id="imagenes" name="imagenes" accept="image/*" multiple/>

            <label for="videos">Subir videos (opcional):</label>
            <input type="file" id="videos" name="videos" accept="video/*" multiple/>

            <label for="pictogramas">Subir pictogramas (opcional):</label>
            <input type="file" id="pictogramas" name="pictogramas" accept="image/*" multiple/>

            <Boton nombre = "Crear Tarea"/>
        </form>
        </div>
            


        
        
    );
}

export default TForm