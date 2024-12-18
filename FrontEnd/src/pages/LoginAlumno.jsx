import PerfilAlumno from "../components/PerfilAlumno";
import "../css/LoginAlumno.css"
import { useParams } from 'react-router-dom';
import LoginContra from "../components/LoginContra";
import LoginPicto from "../components/LoginPicto";

import alberto from "../images/alberto.jpg"
import ana from "../images/ana.jpg"
import carla from "../images/carla.jpg"
import carlos from "../images/carlos.jpg"
import juan from "../images/juan.jpg"
import javier from "../images/javier.jpeg"
import lucas from "../images/lucas.jpg"
import luisa from "../images/luisa.jpg"
import maria from "../images/maria.jpg"
import marta from "../images/marta.jpg"
import pedro from "../images/pedro.jpg"
import sofia from "../images/sofia.jpg"

function LoginAlumno(props){
    const {user, type} = useParams();

    // Asociar foto y nombre con el usuario
    const users = {
        "Carlos": { name: "Carlos", photo: alberto, password: "12345" },
        "Maria": { name: "Maria", photo: maria, picto: "Elefante" },
        "Juan": { name: "Juan", photo: juan, password: "abcde" },
        "Ana": { name: "Ana", photo: ana, picto: "Cerdo" },
        "Pedro": { name: "Pedro", photo: pedro, picto: "Perro" },
        "Luisa": { name: "Luisa", photo: luisa, password: "pqrst" },
        "Javier": { name: "Javier", photo: javier, password: "54321" },
        "Sofia": { name: "Sofia", photo: sofia, picto: "Cerdo" },
        "Alberto": { name: "Alberto", photo: alberto, picto: "Vaca" },
        "Carla": { name: "Carla", photo: carla, password: "jihgf" },
        "Lucas": { name: "Lucas", photo: lucas, picto: "Elefante" },
        "Marta": { name: "Marta", photo: marta, password: "tsrqp" }
    };

    return(<>
    <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet"></link>
    <div className = "body2">
        <div className="container">
            <PerfilAlumno nombre = {user} foto = {users[user].photo} />

            <LoginContra user = {users[user]} salir = {type}/>
            <LoginPicto user = {users[user]} salir = {type}/>
        </div>
    </div>
    </>
        
    );
}

export default LoginAlumno