// import "../css/AForm.css"
// import Accesibilidad from "./Accesibilidad";
// import Boton from "./Boton";

// //Formulario para crear un alumno, se envía a la ruta /api/alumnos por el método POST
// function AForm(props){

//     function handleSubmit(){
//         const obj = {};
//         fetch("https://especialeduca.jmarin.dev/api/alumnos", {

//             method: 'POST', 
//             mode: 'cors', 
//             body: JSON.stringify(obj)      
//           })
//     }
    
//     return(
//         <div className = "container">
//         <h1>Crear Alumno</h1>
//         <form id="studentForm">
//             <label for="nombre">Nombre:</label>
//             <input type="text" id="nombre" name="nombre" required/>

//             <label for="password">Contraseña:</label>
//             <input type="text" id="password" name="password" required/>

//             <label for="fecha_nacimiento">Fecha de nacimiento:</label>
//             <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" required/>

//             <label for="foto">Foto:</label>
//             <input type="file" id="foto" name="foto" accept="image/*"/>

//             <Accesibilidad />

//             <Boton nombre = "Crear Alumno" onClickAlto={handleSubmit} />
//         </form>
//         </div>
            
//     );
// }

// export default AForm

import React, { useState } from "react";
import "../css/AForm.css";
import Accesibilidad from "./Accesibilidad";
import Boton from "./Boton";

function AForm(props) {
    const [formData, setFormData] = useState({
        email: "",
        contraseña: "",
        nickname: "",
        fechaNacimiento: "",
        accesibilidad: [],
        tareas: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://especialeduca.jmarin.dev/api/alumnos/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            console.log(JSON.stringify(formData));

            if (response.ok) {
                const result = await response.json();
                alert("Alumno creado con éxito");
                console.log("Respuesta del servidor:", result);
            } else {
                alert("Error al crear el alumno");
                console.error("Error:", response.statusText);
            }
        } catch (error) {
            console.error("Error al enviar los datos:", error);
            alert("Ocurrió un error al enviar los datos");
        }
    };

    return (
        <div className="container">
            <h1>Crear Alumno</h1>
            <form id="studentForm" onSubmit={handleSubmit}>
                <label htmlFor="email">Correo Electrónico:</label>
                <input
                    className="input-form"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="contraseña">Contraseña:</label>
                <input
                    className="input-form"
                    type="password"
                    id="contraseña"
                    name="contraseña"
                    value={formData.contraseña}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="nickname">Nickname:</label>
                <input
                    className="input-form"
                    type="text"
                    id="nickname"
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
                <input
                    className="input-form"
                    type="date"
                    id="fechaNacimiento"
                    name="fechaNacimiento"
                    value={formData.fechaNacimiento}
                    onChange={handleChange}
                    required
                />

                <Accesibilidad onChange={(values) => setFormData({ ...formData, accesibilidad: values })} />

                <Boton nombre="Crear Alumno" onClickAlto={handleSubmit} />
            </form>
        </div>
    );
}

export default AForm;
