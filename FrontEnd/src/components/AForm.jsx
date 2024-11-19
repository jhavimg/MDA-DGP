import "../css/AForm.css"
import Accesibilidad from "./Accesibilidad";
import Boton from "./Boton";


//Formulario para crear un alumno, se envía a la ruta /api/alumnos por el método POST
function AForm(props){
    return(
        <div className = "container">
        <h1>Crear Alumno</h1>
        <form id="studentForm" action="/api/alumnos" method="POST" enctype="multipart/form-data">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required/>

            <label for="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" name="apellidos" required/>

            <label for="fecha_nacimiento">Fecha de nacimiento:</label>
            <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" required/>

            <label for="foto">Foto:</label>
            <input type="file" id="foto" name="foto" accept="image/*"/>

            <Accesibilidad />

            <Boton nombre = "Crear Alumno" type="submit" />
        </form>
        </div>
            


        
        
    );
}

export default AForm