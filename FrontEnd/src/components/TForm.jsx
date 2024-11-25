/* import React, { useState } from "react";
import "../css/TForm.css";
import Boton from "./Boton";

function TForm(props) {
    const [pasos, setPasos] = useState([]);

    const agregarPaso = () => {
        setPasos([...pasos, { nombre: "", descripcion: "", audio: null, imagenes: [], videos: [] }]);
    };

    const manejarCambioPaso = (index, campo, valor) => {
        const nuevosPasos = [...pasos];
        nuevosPasos[index][campo] = valor;
        setPasos(nuevosPasos);
    };

    const manejarArchivoPaso = (index, campo, archivos) => {
        const nuevosPasos = [...pasos];
        nuevosPasos[index][campo] = archivos;
        setPasos(nuevosPasos);
    };

    const quitarPaso = (index) => {
        const nuevosPasos = pasos.filter((_, pasoIndex) => pasoIndex !== index);
        setPasos(nuevosPasos);
    };

    const manejarSubmit = async () => {
        // Obtiene los datos del formulario
        const nombre = document.getElementById("titulo").value;
        const descripcion = document.getElementById("descripcion").value;
        const estado = document.getElementById("estado").value;
        const fecha = document.getElementById("fecha_limite").value;
        const prioridad = document.getElementById("prioridad").value;
        const alumnoAsignado = document.getElementById("alumno").value;

        // Construye el objeto para enviar
        const tarea = {
            nombre,
            descripcion,
            estado,
            fecha,
            prioridad,
            alumnoAsignado,
            tipo: "tarea_por_pasos",
            pasos: pasos.map((paso) => ({
                nombre: paso.nombre,
                descripcion: paso.descripcion,
            })),
        };

        try {
            const response = await fetch("http://localhost:8000/api/tareas_por_pasos/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(tarea),
            });

            if (response.ok) {
                const data = await response.json();
                alert("Tarea creada exitosamente!");
                console.log("Respuesta del servidor:", data);
            } else {
                const errorData = await response.json();
                alert("Error al crear la tarea: " + JSON.stringify(errorData));
                console.error("Error del servidor:", errorData);
            }
        } catch (error) {
            console.error("Error al enviar los datos:", error);
            alert("Ocurrió un error al enviar los datos.");
        }
    };

    return (
        <div className="container">
            <form>
                <label htmlFor="titulo">Título de la tarea:</label>
                <input className="input-form" type="text" id="titulo" name="titulo" required />

                <label htmlFor="fecha_limite">Fecha límite:</label>
                <input className="input-form" type="date" id="fecha_limite" name="fecha_limite" required />

                <label htmlFor="descripcion">Descripción de la tarea:</label>
                <textarea id="descripcion" name="descripcion" rows="5" required></textarea>

                <label htmlFor="estado">Estado de la tarea:</label>
                <select id="estado" name="estado" required>
                    <option value="pendiente">Pendiente</option>
                    <option value="en progreso">En progreso</option>
                    <option value="completada">Completada</option>
                </select>

                <label htmlFor="prioridad">Prioridad:</label>
                <select id="prioridad" name="prioridad" required>
                    <option value="alta">Alta</option>
                    <option value="media">Media</option>
                    <option value="baja">Baja</option>
                </select>

                <label htmlFor="alumno">Asignar a un alumno:</label>
                <input className="input-form" type="text" id="alumno" name="alumno" placeholder="ID del alumno" required />

                <label htmlFor="audio">Subir audio general (opcional):</label>
                <input className="input-form" type="file" id="audio" name="audio" accept="audio/*" />

                <label htmlFor="imagenes">Subir imágenes generales (opcional):</label>
                <input className="input-form" type="file" id="imagenes" name="imagenes" accept="image/*" multiple />

                <label htmlFor="videos">Subir videos generales (opcional):</label>
                <input className="input-form" type="file" id="videos" name="videos" accept="video/*" multiple />

                <label htmlFor="pictogramas">Subir pictogramas (opcional):</label>
                <input className="input-form" type="file" id="pictogramas" name="pictogramas" accept="image/*" multiple />

                <h3>Pasos de la tarea</h3>
                {pasos.map((paso, index) => (
                    <fieldset key={index}>
                        <legend>Paso {index + 1}</legend>
                        <label htmlFor={`paso_nombre_${index}`}>Nombre del paso:</label>
                        <input
                            className="input-form"
                            type="text"
                            id={`paso_nombre_${index}`}
                            name={`paso_nombre_${index}`}
                            value={paso.nombre}
                            onChange={(e) => manejarCambioPaso(index, "nombre", e.target.value)}
                            placeholder="Nombre del paso"
                            required
                        />

                        <label htmlFor={`paso_descripcion_${index}`}>Descripción del paso:</label>
                        <textarea
                            id={`paso_descripcion_${index}`}
                            name={`paso_descripcion_${index}`}
                            rows="3"
                            value={paso.descripcion}
                            onChange={(e) => manejarCambioPaso(index, "descripcion", e.target.value)}
                            placeholder="Descripción del paso"
                        ></textarea>

                        <label htmlFor={`paso_audio_${index}`}>Subir audio del paso (opcional):</label>
                        <input
                            className="input-form"
                            type="file"
                            id={`paso_audio_${index}`}
                            name={`paso_audio_${index}`}
                            accept="audio/*"
                            onChange={(e) => manejarArchivoPaso(index, "audio", e.target.files[0])}
                        />

                        <label htmlFor={`paso_imagenes_${index}`}>Subir imágenes del paso (opcional):</label>
                        <input
                            className="input-form"
                            type="file"
                            id={`paso_imagenes_${index}`}
                            name={`paso_imagenes_${index}`}
                            accept="image/*"
                            multiple
                            onChange={(e) => manejarArchivoPaso(index, "imagenes", Array.from(e.target.files))}
                        />

                        <label htmlFor={`paso_videos_${index}`}>Subir videos del paso (opcional):</label>
                        <input
                            className="input-form"
                            type="file"
                            id={`paso_videos_${index}`}
                            name={`paso_videos_${index}`}
                            accept="video/*"
                            multiple
                            onChange={(e) => manejarArchivoPaso(index, "videos", Array.from(e.target.files))}
                        />

                        <button
                            type="button"
                            onClick={() => quitarPaso(index)}
                            className="remove-step-button"
                        >
                            Quitar Paso
                        </button>
                    </fieldset>
                ))}
                <div className="contenedor-boton-añadir-paso">
                    <button type="button" onClick={agregarPaso} className="add-step-button">
                        Añadir Paso
                    </button>
                </div>

                <Boton nombre="Crear Tarea" onClickAlto={manejarSubmit} />
            </form>
        </div>
    );
}

export default TForm; */

///////////////////////////////////////////////////////////////////////////////

/* import React, { useState, useEffect } from "react";
import "../css/TForm.css";
import Boton from "./Boton";

function TForm(props) {
    const [pasos, setPasos] = useState([]);
    const [alumnos, setAlumnos] = useState([]); // Estado para almacenar la lista de alumnos
    const [alumnoAsignado, setAlumnoAsignado] = useState(""); // Estado para el alumno seleccionado

    useEffect(() => {
        // Obtener la lista de alumnos al cargar el formulario
        const fetchAlumnos = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/alumnos/");
                if (response.ok) {
                    const data = await response.json();
                    setAlumnos(data.data); // Actualiza el estado con los alumnos obtenidos
                } else {
                    console.error("Error al obtener la lista de alumnos");
                }
            } catch (error) {
                console.error("Error al hacer la solicitud:", error);
            }
        };

        fetchAlumnos();
    }, []);

    const agregarPaso = () => {
        setPasos([...pasos, { nombre: "", descripcion: "", audio: null, imagenes: [], videos: [] }]);
    };

    const manejarCambioPaso = (index, campo, valor) => {
        const nuevosPasos = [...pasos];
        nuevosPasos[index][campo] = valor;
        setPasos(nuevosPasos);
    };

    const manejarArchivoPaso = (index, campo, archivos) => {
        const nuevosPasos = [...pasos];
        nuevosPasos[index][campo] = archivos;
        setPasos(nuevosPasos);
    };

    const quitarPaso = (index) => {
        const nuevosPasos = pasos.filter((_, pasoIndex) => pasoIndex !== index);
        setPasos(nuevosPasos);
    };

    const manejarSubmit = async () => {
        const nombre = document.getElementById("titulo").value;
        const descripcion = document.getElementById("descripcion").value;
        const estado = document.getElementById("estado").value;
        const fecha = document.getElementById("fecha_limite").value;
        const prioridad = document.getElementById("prioridad").value;

        const tarea = {
            nombre,
            descripcion,
            estado,
            fecha,
            prioridad,
            alumnoAsignado,
            tipo: "tarea_por_pasos",
            pasos: pasos.map((paso) => ({
                nombre: paso.nombre,
                descripcion: paso.descripcion,
            })),
        };

        try {
            const response = await fetch("http://localhost:8000/api/tareas_por_pasos/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(tarea),
            });

            if (response.ok) {
                const data = await response.json();
                alert("Tarea creada exitosamente!");
                console.log("Respuesta del servidor:", data);
            } else {
                const errorData = await response.json();
                alert("Error al crear la tarea: " + JSON.stringify(errorData));
                console.error("Error del servidor:", errorData);
            }
        } catch (error) {
            console.error("Error al enviar los datos:", error);
            alert("Ocurrió un error al enviar los datos.");
        }
    };

    return (
        <div className="container">
            <form>
                <label htmlFor="titulo">Título de la tarea:</label>
                <input className="input-form" type="text" id="titulo" name="titulo" required />

                <label htmlFor="fecha_limite">Fecha límite:</label>
                <input className="input-form" type="date" id="fecha_limite" name="fecha_limite" required />

                <label htmlFor="descripcion">Descripción de la tarea:</label>
                <textarea id="descripcion" name="descripcion" rows="5" required></textarea>

                <label htmlFor="estado">Estado de la tarea:</label>
                <select id="estado" name="estado" required>
                    <option value="pendiente">Pendiente</option>
                    <option value="en progreso">En progreso</option>
                    <option value="completada">Completada</option>
                </select>

                <label htmlFor="prioridad">Prioridad:</label>
                <select id="prioridad" name="prioridad" required>
                    <option value="alta">Alta</option>
                    <option value="media">Media</option>
                    <option value="baja">Baja</option>
                </select>

                <label htmlFor="alumno">Asignar a un alumno:</label>
                <select
                    id="alumno"
                    name="alumno"
                    value={alumnoAsignado}
                    onChange={(e) => setAlumnoAsignado(e.target.value)}
                    required
                >
                    <option value="">Seleccione un alumno</option>
                    {alumnos.map((alumno) => (
                        <option key={alumno.id} value={alumno.id}>
                            {alumno.nickname}
                        </option>
                    ))}
                </select>

                <h3>Pasos de la tarea</h3>
                {pasos.map((paso, index) => (
                    <fieldset key={index}>
                        <legend>Paso {index + 1}</legend>
                        <label htmlFor={`paso_nombre_${index}`}>Nombre del paso:</label>
                        <input
                            className="input-form"
                            type="text"
                            id={`paso_nombre_${index}`}
                            name={`paso_nombre_${index}`}
                            value={paso.nombre}
                            onChange={(e) => manejarCambioPaso(index, "nombre", e.target.value)}
                            placeholder="Nombre del paso"
                            required
                        />

                        <label htmlFor={`paso_descripcion_${index}`}>Descripción del paso:</label>
                        <textarea
                            id={`paso_descripcion_${index}`}
                            name={`paso_descripcion_${index}`}
                            rows="3"
                            value={paso.descripcion}
                            onChange={(e) => manejarCambioPaso(index, "descripcion", e.target.value)}
                            placeholder="Descripción del paso"
                        ></textarea>

                        <button
                            type="button"
                            onClick={() => quitarPaso(index)}
                            className="remove-step-button"
                        >
                            Quitar Paso
                        </button>
                    </fieldset>
                ))}
                <div className="contenedor-boton-añadir-paso">
                    <button type="button" onClick={agregarPaso} className="add-step-button">
                        Añadir Paso
                    </button>
                </div>

                <Boton nombre="Crear Tarea" onClickAlto={manejarSubmit} />
            </form>
        </div>
    );
}

export default TForm; */

import React, { useState, useEffect } from "react";
import "../css/TForm.css";
import Boton from "./Boton";

function TForm(props) {
    const [pasos, setPasos] = useState([]);
    const [alumnos, setAlumnos] = useState([]); // Estado para almacenar la lista de alumnos
    const [alumnoAsignado, setAlumnoAsignado] = useState(""); // Estado para el alumno seleccionado

    useEffect(() => {
        const fetchAlumnos = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/alumnos/");
                if (response.ok) {
                    const data = await response.json();
                    setAlumnos(data.data); // Actualiza el estado con los alumnos obtenidos
                } else {
                    console.error("Error al obtener la lista de alumnos");
                }
            } catch (error) {
                console.error("Error al hacer la solicitud:", error);
            }
        };

        fetchAlumnos();
    }, []);

    const agregarPaso = () => {
        setPasos([
            ...pasos,
            { nombre: "", descripcion: "", audio: null, imagenes: [], videos: [] },
        ]);
    };

    const manejarCambioPaso = (index, campo, valor) => {
        const nuevosPasos = [...pasos];
        nuevosPasos[index][campo] = valor;
        setPasos(nuevosPasos);
    };

    const manejarArchivoPaso = (index, campo, archivos) => {
        const nuevosPasos = [...pasos];
        nuevosPasos[index][campo] = archivos;
        setPasos(nuevosPasos);
    };

    const quitarPaso = (index) => {
        const nuevosPasos = pasos.filter((_, pasoIndex) => pasoIndex !== index);
        setPasos(nuevosPasos);
    };

    const manejarSubmit = async () => {
        const nombre = document.getElementById("titulo").value;
        const descripcion = document.getElementById("descripcion").value;
        const estado = document.getElementById("estado").value;
        const fecha = document.getElementById("fecha_limite").value;
        const prioridad = document.getElementById("prioridad").value;

        const tarea = {
            nombre,
            descripcion,
            estado,
            fecha,
            prioridad,
            alumnoAsignado,
            tipo: "tarea_por_pasos",
            pasos: pasos.map((paso) => ({
                nombre: paso.nombre,
                descripcion: paso.descripcion,
                audio: paso.audio || [],
                imagenes: paso.imagenes || [],
                videos: paso.videos || [],
            })),
        };

        try {
            const response = await fetch("http://localhost:8000/api/tareas_por_pasos/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(tarea),
            });

            if (response.ok) {
                const data = await response.json();
                alert("Tarea creada exitosamente!");
                console.log("Respuesta del servidor:", data);
            } else {
                const errorData = await response.json();
                alert("Error al crear la tarea: " + JSON.stringify(errorData));
                console.error("Error del servidor:", errorData);
            }
        } catch (error) {
            console.error("Error al enviar los datos:", error);
            alert("Ocurrió un error al enviar los datos.");
        }
    };

    return (
        <div className="container">
            <form>
                <label htmlFor="titulo">Título de la tarea:</label>
                <input className="input-form" type="text" id="titulo" name="titulo" required/>

                <label htmlFor="fecha_limite">Fecha límite:</label>
                <input className="input-form" type="date" id="fecha_limite" name="fecha_limite" required />

                <label htmlFor="descripcion">Descripción de la tarea:</label>
                <textarea id="descripcion" name="descripcion" rows="5" required></textarea>

                <label htmlFor="estado">Estado de la tarea:</label>
                <select id="estado" name="estado" required>
                    <option value="pendiente">Pendiente</option>
                    <option value="en progreso">En progreso</option>
                    <option value="completada">Completada</option>
                </select>

                <label htmlFor="prioridad">Prioridad:</label>
                <select id="prioridad" name="prioridad" required>
                    <option value="alta">Alta</option>
                    <option value="media">Media</option>
                    <option value="baja">Baja</option>
                </select>

                <label htmlFor="audio">Subir audio (opcional):</label>
                <input className="input-form" type="file" id="audio" name="audio" accept="audio/*" />

                <label htmlFor="imagenes">Subir imágenes (opcional):</label>
                <input className="input-form" type="file" id="imagenes" name="imagenes" accept="image/*" multiple />

                <label htmlFor="videos">Subir videos (opcional):</label>
                <input className="input-form" type="file" id="videos" name="videos" accept="video/*" multiple />

                <label htmlFor="pictogramas">Subir pictogramas (opcional):</label>
                <input className="input-form" type="file" id="pictogramas" name="pictogramas" accept="image/*" multiple />

                <label htmlFor="alumno">Asignar a un alumno:</label>
                <select
                    id="alumno"
                    name="alumno"
                    value={alumnoAsignado}
                    onChange={(e) => setAlumnoAsignado(e.target.value)}
                    required
                >
                    <option value="">Seleccione un alumno</option>
                    {alumnos.map((alumno) => (
                        <option key={alumno.id} value={alumno.id}>
                            {alumno.nickname}
                        </option>
                    ))}
                </select>

                <h3>Pasos de la tarea</h3>
                {pasos.map((paso, index) => (
                    <fieldset key={index}>
                        <legend>Paso {index + 1}</legend>
                        <label htmlFor={`paso_nombre_${index}`}>Nombre del paso:</label>
                        <input
                            className="input-form"
                            type="text"
                            id={`paso_nombre_${index}`}
                            name={`paso_nombre_${index}`}
                            value={paso.nombre}
                            onChange={(e) => manejarCambioPaso(index, "nombre", e.target.value)}
                            placeholder="Nombre del paso"
                            required
                        />

                        <label htmlFor={`paso_descripcion_${index}`}>Descripción del paso:</label>
                        <textarea
                            id={`paso_descripcion_${index}`}
                            name={`paso_descripcion_${index}`}
                            rows="3"
                            value={paso.descripcion}
                            onChange={(e) => manejarCambioPaso(index, "descripcion", e.target.value)}
                            placeholder="Descripción del paso"
                        ></textarea>

                        <label htmlFor={`paso_audio_${index}`}>Subir audio del paso (opcional):</label>
                        <input
                            className="input-form"
                            type="file"
                            id={`paso_audio_${index}`}
                            name={`paso_audio_${index}`}
                            accept="audio/*"
                            onChange={(e) => manejarArchivoPaso(index, "audio", e.target.files[0])}
                        />

                        <label htmlFor={`paso_imagenes_${index}`}>Subir imágenes del paso (opcional):</label>
                        <input
                            className="input-form"
                            type="file"
                            id={`paso_imagenes_${index}`}
                            name={`paso_imagenes_${index}`}
                            accept="image/*"
                            multiple
                            onChange={(e) => manejarArchivoPaso(index, "imagenes", Array.from(e.target.files))}
                        />

                        <label htmlFor={`paso_videos_${index}`}>Subir videos del paso (opcional):</label>
                        <input
                            className="input-form"
                            type="file"
                            id={`paso_videos_${index}`}
                            name={`paso_videos_${index}`}
                            accept="video/*"
                            multiple
                            onChange={(e) => manejarArchivoPaso(index, "videos", Array.from(e.target.files))}
                        />

                        <button
                            type="button"
                            onClick={() => quitarPaso(index)}
                            className="remove-step-button"
                        >
                            Quitar Paso
                        </button>
                    </fieldset>
                ))}
                <div className="contenedor-boton-añadir-paso">
                    <button type="button" onClick={agregarPaso} className="add-step-button">
                        Añadir Paso
                    </button>
                </div>

                <Boton nombre="Crear Tarea" onClickAlto={manejarSubmit} />
            </form>
        </div>
    );
}

export default TForm;
