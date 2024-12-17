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
