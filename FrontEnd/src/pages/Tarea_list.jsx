import Cabecera from "../components/Cabecera";
import Buscador from "../components/Buscador";
import TareaVer from "../components/TareaVer";
import { useEffect, useState } from "react";

// Lista de tareas
function TareaList() {
    const [tareas, setTareas] = useState([]);
    const [loading, setLoading] = useState(true);

    // Función para obtener las tareas
    async function getTareas() {
        try {
            const response = await fetch("https://especialeduca.jmarin.dev/api/tareas/");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            if (data.success && data.data) {
                setTareas(data.data);
            } else {
                console.error("Error fetching data:", data.message || "Unknown error");
                setTareas([]);
            }
        } catch (error) {
            console.error("Error fetching tareas:", error);
            setTareas([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getTareas();
    }, []);

    if (loading) {
        return <div>Cargando tareas...</div>;
    }

    if (tareas.length === 0 && !loading) {
        return (
            <>
                <Cabecera nombre="Tareas" route="/admin" />
                <Buscador tarea = {true}  />
                <div>No hay tareas disponibles.</div>
            </>
        );
    }

    return (
        <>
            <Cabecera nombre="Tareas" route="/admin" />
            <Buscador tarea = {true} />
            {tareas.map(tarea => (
                <TareaVer
                    key={tarea.id}
                    id={tarea.id}
                    nombre={tarea.nombre}
                    actualizarTareas={getTareas} // Pasa la función para actualizar las tareas
                />
            ))}
        </>
    );
}

export default TareaList;