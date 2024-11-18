import "../css/AForm.css"
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

            <div class="section">
                <h3>Accesibilidad:</h3>

                <div class="section">
                    <h4>Saturación:</h4>
                    <div class="radio-group">
                        <label><input type="radio" name="saturacion" value="baja"/> Baja</label>
                        <label><input type="radio" name="saturacion" value="alta"/> Alta</label>
                    </div>
                </div>

                <div class="section">
                    <h4>Contraste:</h4>
                    <div class="radio-group">
                        <label><input type="radio" name="contraste" value="bajo"/> Bajo</label>
                        <label><input type="radio" name="contraste" value="alto"/> Alto</label>
                    </div>
                </div>

                <div class="section">
                    <h4>Daltonismo:</h4>
                    <div class="radio-group">
                        <label><input type="radio" name="daltonismo" value="si"/> Sí</label>
                        <label><input type="radio" name="daltonismo" value="no"/> No</label>
                    </div>
                </div>

                <div class="section">
                    <h4>Visualización:</h4>
                    <div class="checkbox-group">
                        <label><input type="checkbox" name="visualizacion" value="pictogramas"/> Pictogramas</label>
                        <label><input type="checkbox" name="visualizacion" value="texto"/> Texto</label>
                        <label><input type="checkbox" name="visualizacion" value="videos"/> Videos</label>
                        <label><input type="checkbox" name="visualizacion" value="imagenes"/> Imágenes</label>
                        <label><input type="checkbox" name="visualizacion" value="audio"/> Audio</label>
                    </div>
                </div>

                <div class="section">
                    <h4>Navegación:</h4>
                    <div class="checkbox-group">
                        <label><input type="checkbox" name="navegacion" value="raton"/> Ratón</label>
                        <label><input type="checkbox" name="navegacion" value="teclado"/> Teclado</label>
                        <label><input type="checkbox" name="navegacion" value="pulsador"/> Pulsador</label>
                    </div>
                </div>
            </div>

            <Boton nombre = "Crear Alumno" type="submit" />
        </form>
        </div>
            


        
        
    );
}

export default AForm