import PerfilAlumno from "../components/PerfilAlumno";
import "../css/LoginAlumno.css"
import { useParams } from 'react-router-dom';
import LoginContra from "../components/LoginContra";
import LoginPicto from "../components/LoginPicto";


function LoginAlumno(props){
    //FALTA BBDD Y LÓGICA JS(En Login Contra y Picto!!!)
    //FALTA ELIMINAR PAGINA PICTO (NO HACER AUN QUE QUEDAN FUNCIONES QUE IMPLEMENTAR)
    //FALTA FILTRAR PICTO O CONTRA
    //FALTA BBDD METER ID DEL ALUMNO
    const {user, type} = useParams();

    // Asociar foto y nombre con el usuario
    const users = {
        "Carlos": { name: "Carlos", photo: "carlos.jpg", password: "12345" },
        "Maria": { name: "Maria", photo: "maria.jpg", password: "67890" },
        "Juan": { name: "Juan", photo: "juan.jpg", password: "abcde" },
        "Ana": { name: "Ana", photo: "ana.jpg", password: "fghij" },
        "Pedro": { name: "Pedro", photo: "pedro.jpg", password: "klmno" },
        "Luisa": { name: "Luisa", photo: "luisa.jpg", password: "pqrst" }
    };

    /*if (user && users[user]) {
        document.getElementById('student-name').textContent = users[user].name;
        document.getElementById('profile-pic').src = users[user].photo;
    } else {
        alert("Usuario no válido. Redirigiendo...");
        window.location.href = "main.html";
    }

    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar envío del formulario

        const nombre = document.getElementById('nombre').value;
        const contraseña = document.getElementById('contraseña').value;

        if (users[user] && users[user].name === nombre && users[user].password === contraseña) {
            alert("¡Bienvenido, " + nombre + "!");
            window.location.href = "agendaDiaria.html";
        } else {
            alert("Usuario o contraseña incorrectos. Intenta nuevamente.");
        }
    });*/

    return(<>
    <div className = "body2">
        <div className="container">
            <PerfilAlumno nombre = {user} foto = "" />

            <LoginContra user = {users[user]} salir = {type}/>
            <LoginPicto user = {users[user]} salir = {type}/>
        </div>
    </div>
    </>
        
    );
}

export default LoginAlumno