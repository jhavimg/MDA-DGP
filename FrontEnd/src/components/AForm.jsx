import "../css/AForm.css"
import Accesibilidad from "./Accesibilidad";
import Boton from "./Boton";

//Formulario para crear un alumno, se envía a la ruta /api/alumnos por el método POST
function AForm(props){

    function handleSubmit(){
        const obj = {};
        fetch("https://especialeduca.jmarin.dev/api/alumnos", {

            method: 'POST', 
            mode: 'cors', 
            body: JSON.stringify(obj)      
          })
    }
    
    return(
        <div className = "container">
        <h1>Crear Alumno</h1>
        <form id="studentForm">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required/>

            <label for="password">Contraseña:</label>
            <input type="text" id="password" name="password" required/>

            <label for="fecha_nacimiento">Fecha de nacimiento:</label>
            <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" required/>

            <label for="foto">Foto:</label>
            <input type="file" id="foto" name="foto" accept="image/*"/>

            <Accesibilidad />

            <Boton nombre = "Crear Alumno" onClickAlto={handleSubmit} />
        </form>
        </div>
            


        
        
    );
}

export default AForm