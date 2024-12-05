import "../css/LoginAlumnoTexto.css"
import { useParams } from 'react-router-dom';


function LoginAlumnoTexto(){

    const {user} = useParams();

    // Asociar foto y nombre con el usuario
    const users = {
        "Carlos": { name: "Carlos", photo: "carlos.jpg", password: "12345" },
        "Maria": { name: "Maria", photo: "maria.jpg", password: "67890" },
        "Juan": { name: "Juan", photo: "juan.jpg", password: "abcde" },
        "Ana": { name: "Ana", photo: "ana.jpg", password: "fghij" },
        "Pedro": { name: "Pedro", photo: "pedro.jpg", password: "klmno" },
        "Luisa": { name: "Luisa", photo: "luisa.jpg", password: "pqrst" }
    };

    if (user && users[user]) {
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
    });

    return(<>
    <div className = "body2">
        <div className="container">
            <img src="" alt="Foto del alumno" className="profile-pic" id="profile-pic"/>
            <h1 id="student-name">Nombre del alumno</h1>

                <div className="form-group">
                    <label for="contraseña">Contraseña:</label>
                    <input type="password" id="contraseña" name="contraseña" required/>
                </div>
                <div className="btn-container">
                    <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                    <button type="button" className="btn btn-secondary" onclick="">No soy yo</button>
                </div>
        </div>
    </div>
    </>
        
    );
}

export default LoginAlumnoTexto