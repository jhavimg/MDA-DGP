import "../css/LoginAlumno.css"
import Boton from "./Boton";
import { useNavigate } from "react-router-dom";

//Componente que muestra el perfil de un usuario
function LoginContra(props){
    const navigate = useNavigate();

    function submit(){
        var value = document.getElementById('contraseña').value;
        if (value === props.user.password){
            alert("¡Bienvenido! :D")
            navigate("/alumno");
        }
        else{
            alert("¡Inténtalo de nuevo! :)")
        }
    }

    if (props.salir ==="contra"){
        return(<>
            <div className="form-group">
                    <label htmlFor="contraseña">Contraseña:</label>
                    <input type="password" id="contraseña" name="contraseña" required/>
            </div>
            <div className="btn-container">
                <Boton className = "btn btn-primary" onClickAlto = {submit} nombre = "Iniciar Sesión" />
                <Boton className = "btn btn-secondary" route = "/" nombre = "No Soy Yo" />
            </div>
        </>    
        );
    }
    else{
        return (<></>);
    }
}

export default LoginContra