import Cabecera from "../components/Cabecera";
import Buscador from "../components/Buscador";
import TareaVer from "../components/TareaVer";
import { useEffect, useState } from "react";


function TareaList() {
    const [tareas, setTareas] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para controlar la carga

    async function getTareas(){
            try {
                const response = await fetch("http://localhost:8000/api/tareas/");
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
        };
    
    useEffect(() => {
        getTareas();
    }, []);

    if (loading) {
        return <div>Cargando tareas...</div>;
    }

    if (tareas.length === 0 && !loading) {
        return <div>No hay tareas disponibles.</div>;
    }
   
    return (
        <>
            <Cabecera nombre="Tareas" route="/admin" />
            <Buscador route="/Tarea_form" />
             {tareas.map((tarea) => (
                <TareaVer key={tarea.id} id={tarea.id} nombre={tarea.nombre}/>
            ))}
        </>
    );
}

export default TareaList;