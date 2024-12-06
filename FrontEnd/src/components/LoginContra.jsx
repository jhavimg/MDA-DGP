import "../css/LoginAlumno.css"
import Boton from "./Boton";

//Componente que muestra el perfil de un usuario
function LoginContra(props){

    function submit(){
        console.log("jajjajajaj");
    }
    return(<>
        <div className="form-group">
                <label Htmlfor="contraseña">Contraseña:</label>
                <input type="password" id="contraseña" name="contraseña" required/>
        </div>
        <div className="btn-container">
            <Boton className = "btn btn-primary" onClickAlto = {submit} nombre = "Iniciar Sesión" />
            <Boton className = "btn btn-secondary" route = "/" nombre = "No Soy Yo" />
        </div>
    </>    
    );
}

export default LoginContra