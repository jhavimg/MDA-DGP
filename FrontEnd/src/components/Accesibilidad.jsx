import "../css/AForm.css"

//Formulario para crear un alumno, se envía a la ruta /api/alumnos por el método POST
function Accesibilidad(){
    return(
        <div className="section">
                <h2>Accesibilidad:</h2>

                <div className="section">
                    <h4>Saturación:</h4>
                    <div className="radio-group">
                        <label><input type="radio" name="saturacion" value="baja"/> Baja</label>
                        <label><input type="radio" name="saturacion" value="alta"/> Alta</label>
                    </div>
                </div>

                <div className="section">
                    <h4>Contraste:</h4>
                    <div className="radio-group">
                        <label><input type="radio" name="contraste" value="bajo"/> Bajo</label>
                        <label><input type="radio" name="contraste" value="alto"/> Alto</label>
                    </div>
                </div>

                <div className="section">
                    <h4>Daltonismo:</h4>
                    <div className="radio-group">
                        <label><input type="radio" name="daltonismo" value="si"/> Sí</label>
                        <label><input type="radio" name="daltonismo" value="no"/> No</label>
                    </div>
                </div>

                <div className="section">
                    <h4>Visualización:</h4>
                    <div className="checkbox-group">
                        <label><input type="checkbox" name="visualizacion" value="pictogramas"/> Pictogramas</label>
                        <label><input type="checkbox" name="visualizacion" value="texto"/> Texto</label>
                        <label><input type="checkbox" name="visualizacion" value="videos"/> Videos</label>
                        <label><input type="checkbox" name="visualizacion" value="imagenes"/> Imágenes</label>
                        <label><input type="checkbox" name="visualizacion" value="audio"/> Audio</label>
                    </div>
                </div>

                <div className="section">
                    <h4>Navegación:</h4>
                    <div className="checkbox-group">
                        <label><input type="checkbox" name="navegacion" value="raton"/> Ratón</label>
                        <label><input type="checkbox" name="navegacion" value="teclado"/> Teclado</label>
                        <label><input type="checkbox" name="navegacion" value="pulsador"/> Pulsador</label>
                    </div>
                </div>
            </div>
            


        
        
    );
}

export default Accesibilidad