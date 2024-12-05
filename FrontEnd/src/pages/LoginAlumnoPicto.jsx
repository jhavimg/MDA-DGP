//import "../css/LoginAlumnoPicto.css"
import { useParams } from 'react-router-dom';


function LoginAlumnoPicto(){

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

        // Contraseña favorita del alumno
        window.favoriteAnimal = users[user].favoriteAnimal;
    } else {
        // Redirigir si no hay un usuario válido
        alert("Usuario no válido. Redirigiendo...");
        window.location.href = "main.html";
    }

    // Verificar el animal seleccionado
    function checkAnimal(selectedAnimal) {
        if (selectedAnimal === window.favoriteAnimal) {
            alert("¡Bienvenido! Has iniciado sesión correctamente.");
            // Redirigir LAS TAREAS DE HOY
            window.location.href = "agendaDiaria.html";
        } else {
            alert("Contraseña incorrecta. Intenta nuevamente.");
        }
    };

    return(<>
    <div className = "body3">
    <div className="container">
        <img src="" alt="Foto del alumno" className="profile-pic" id="profile-pic"/>
        <h1 id="student-name">Nombre del alumno</h1>

        <div className="animal-grid">
            <button onclick="checkAnimal('elefante')">
                <img src="elefante.jpg" alt="Elefante"/>
            </button>
            <button onclick="checkAnimal('perro')">
                <img src="perro.jpg" alt="Perro"/>
            </button>
            <button onclick="checkAnimal('vaca')">
                <img src="vaca.jpg" alt="Vaca"/>
            </button>
            <button onlick="checkAnimal('cerdo')">
                <img src="cerdo.jpg" alt="Cerdo"/>
            </button>
        </div>

        <div className="btn-container">
            <button className="btn-secondary" onclick="window.location.href='main.html'">No soy yo</button>
        </div>
    </div>
    </div>
    </>
        
    );
}

export default LoginAlumnoPicto