import "../css/LoginAdmin.css"
import { useParams } from 'react-router-dom';


function LoginAdmin(props){
    //FALTA BBDD, CSS Y LÓGICA JS
    function submit(){
        console.log("jajajaj");
    }

    return(<>
    <div className = "body_login_admin">
        <div className="container_login_admin">
            <h1>Iniciar sesión</h1>
            <form>
                <div className="form-group">
                    <label for="correo">Correo:</label>
                    <input type="email" id="correo" name="correo" required/>
                </div>
                <div className="form-group">
                    <label for="contraseña">Contraseña:</label>
                    <input type="password" id="contraseña" name="contraseña" required/>
                </div>
                <button type="submit" className="btn">Iniciar sesión</button>
            </form>
            <a href="/" className="volver">Volver</a>
        </div>
    </div>
    </>
        
    );
}

export default LoginAdmin