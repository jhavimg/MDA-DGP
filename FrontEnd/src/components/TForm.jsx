import "../css/TForm.css"
import Boton from "./Boton";

//Formulario para crear una tarea, se envía a la ruta /api/tareas por el método POST
function TForm(props){
    return(
        <div className = "container">
        <form >
            <label htmlFor="titulo">Título de la tarea:</label>
            <input type="text" id="titulo" name="titulo" required/>

            <label htmlFor="fecha_limite">Fecha límite:</label>
            <input type="date" id="fecha_limite" name="fecha_limite" required/> 

            <label htmlFor="descripcion">Descripción de la tarea:</label>
            <textarea id="descripcion" name="descripcion" rows="5" required></textarea>

            <label htmlFor="audio">Subir audio (opcional):</label>
            <input type="file" id="audio" name="audio" accept="audio/*"/>

            <label htmlFor="imagenes">Subir imágenes (opcional):</label>
            <input type="file" id="imagenes" name="imagenes" accept="image/*" multiple/>

            <label htmlFor="videos">Subir videos (opcional):</label>
            <input type="file" id="videos" name="videos" accept="video/*" multiple/>

            <label htmlFor="pictogramas">Subir pictogramas (opcional):</label>
            <input type="file" id="pictogramas" name="pictogramas" accept="image/*" multiple/>

            <Boton nombre = "Crear Tarea"/>
        </form>
        </div>
            


        
        
    );
}

export default TForm