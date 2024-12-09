import { useEffect } from "react";
import "../css/LoginForm.css"
import { useParams } from "react-router-dom";
import { useState } from "react";


function LoginForm(props){

    //FALTA CSS, JS
    const {id} = useParams();

    const [alumno, setAlumno] = useState({});

    let selectedPictogram = null;

    useEffect(() => {
        async function getAlumno() {
            const response = await fetch(`https://especialeduca.jmarin.dev/api/alumnos/${id}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            setAlumno(data.data);
      };
      getAlumno();
    }, [id]);

    function handleLoginTypeChange() {
        const pictogramInput = document.getElementById('pictogram-section');
        const passwordInput = document.getElementById('text-password');

        if (document.getElementById('pictogram-option').checked) {
            pictogramInput.style.display = 'block';
            passwordInput.style.display = 'none';
        } else {
            pictogramInput.style.display = 'none';
            passwordInput.style.display = 'block';
        }
    }

    function addUploadedPictogram() {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = "Pictograma Subido";
                img.onclick = function() { togglePictogramSelection(img) };
                document.querySelector('.pictogramas').appendChild(img);
        }
    }

    function togglePictogramSelection(img) {
        const images = document.querySelectorAll('.pictogramas img');
        images.forEach(image => image.classList.remove('selected'));
        img.classList.add('selected');
        selectedPictogram = img.src;
    }

    function saveSettings() {
        const studentName = document.getElementById('student-name').textContent;
        const loginType = document.querySelector('input[name="login-type"]:checked').value;
        let settings = { studentName, loginType };

        if (loginType === 'pictogramas') {
            settings.pictogramPassword = selectedPictogram;
        } else {
            settings.textPassword = document.getElementById('password').value;
        }

        console.log('Configuración guardada:', settings);
        alert('Configuración guardada correctamente');
    }


    return(<>
    <div className = "body_login_form">
        <div className="container">
            <h1>Configurar Inicio de Sesión</h1>

            <p><strong>Alumno:</strong> <span id="student-name">{alumno.nickname}</span></p>

            <div className="input-group">
                <label>
                    <input type="radio" id="pictogram-option" name="login-type" value="pictogramas" onClick={handleLoginTypeChange} checked/>
                    Pictogramas
                </label>
                <label>
                    <input type="radio" id="text-option" name="login-type" value="teclado" onClick={handleLoginTypeChange}/>
                    Teclado
                </label>
            </div>
            <div id="pictogram-section">
                <p>Selecciona un pictograma:</p>
                <div className="pictogramas">
                    <img src="vaca.jpg" alt="Vaca" onclick={()=>togglePictogramSelection(this)}/>
                    <img src="cerdo.jpg" alt="Cerdo" onclick={()=>togglePictogramSelection(this)}/>
                    <img src="perro.jpg" alt="Perro" onclick={()=>togglePictogramSelection(this)}/>
                    <img src="elefante.jpg" alt="Elefante" onclick={()=>togglePictogramSelection(this)}/>
                </div>
                <input type="file" id="upload-pictogram" accept="image/*" onchange={()=>addUploadedPictogram()}/>
            </div>
            <div id="text-password">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" placeholder="Escribe la contraseña"/>
            </div>
            <button onclick={saveSettings}>Guardar</button>
            <a href={`/alumno_perfil/${id}`} className="volver">Volver</a>
        </div>
    </div>
    </>
        
    );
}

export default LoginForm