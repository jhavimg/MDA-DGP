import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/PCForm.css";

function PCForm() {
    const [alumnos, setAlumnos] = useState([]);
    const [alumnoSeleccionado, setAlumnoSeleccionado] = useState("");
    const [fecha, setFecha] = useState("");
    const navigate = useNavigate();

    // Cargar lista de alumnos
    useEffect(() => {
        async function fetchAlumnos() {
            try {
                const response = await fetch("http://localhost:8000/api/alumnos/");
                const data = await response.json();
                setAlumnos(data.data);
            } catch (error) {
                console.error("Error al cargar los alumnos:", error);
            }
        }

        fetchAlumnos();
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();

        const payload = {
            nombre: "Petición de comedor",
            descripcion: "Apuntar todos los menús de cada clase",
            estado: "pendiente",
            fecha,
            prioridad: "alta",
            tipo: "peticion_comedor",
            alumnoAsignado: alumnoSeleccionado,
            menus: [],
        };

        try {
            const response = await fetch("http://localhost:8000/api/peticiones_comedor/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                alert("Petición de comedor creada exitosamente");
                navigate("/tarea_list");
            } else {
                const errorData = await response.json();
                alert(`Error al crear la petición: ${errorData.detail || "Error desconocido"}`);
            }
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
            alert("Error al enviar la solicitud");
        }
    }

    return (
        <form className="pc-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="alumno">Seleccionar Alumno</label>
                <select
                    id="alumno"
                    value={alumnoSeleccionado}
                    onChange={(e) => setAlumnoSeleccionado(e.target.value)}
                    required
                >
                    <option value="">-- Seleccionar --</option>
                    {alumnos.map((alumno) => (
                        <option key={alumno.id} value={alumno.id}>
                            {alumno.nickname}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="fecha">Fecha</label>
                <input
                    id="fecha"
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    required
                />
            </div>

            <button type="submit" className="submit-button">
                Crear Petición
            </button>
        </form>
    );
}

export default PCForm;
