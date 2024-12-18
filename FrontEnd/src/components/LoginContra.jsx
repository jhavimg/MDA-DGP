import "../css/LoginAlumno.css"
import Boton from "./Boton";
import { useNavigate } from "react-router-dom";

//Componente que muestra el perfil de un usuario
function LoginContra(props){
    const navigate = useNavigate();

    function submit(){
        var value = document.getElementById('contraseña').value;
        if (value === props.user.password){
            navigate("/alumno");
            
        }
        else{
            alert("¡Inténtalo de nuevo! :)")
        }
    }

    if (props.salir ==="contra"){
        return(<>
         <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet"></link>
            <div className="form-group">
                    <label htmlFor="contraseña">Contraseña:</label>
                    <input type="password" id="contraseña" name="contraseña" required/>
            </div>
            <div className="btn-container">
                <button className="btn-primary" onClick={submit} >Entrar  ✔</button>
                <Boton className = "btn-secondary" route = "/" nombre = " Salir  X" />
            </div>
        </>    
        );
    }
    else{
        return (<></>);
    }
}

export default LoginContra