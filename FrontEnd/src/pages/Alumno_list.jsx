import Cabecera from "../components/Cabecera";
import Buscador from "../components/Buscador";
import AlumnoVer from "../components/AlumnoVer";
import { useEffect, useState } from "react";

function AlumnoList() {
    const [alumnos, setAlumnos] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getAlumnos(){
        try {
            const response = await fetch("https://especialeduca.jmarin.dev/api/alumnos/");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            if (data.success && data.data) {
                setAlumnos(data.data);
            } else {
                console.error("Error fetching data:", data.message || "Unknown error");
                setAlumnos([]);
            }
        } catch (error) {
            console.error("Error fetching tareas:", error);
            setAlumnos([]);
        } finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        getAlumnos();    
    }, []);

    if (loading) {
        return <div>Cargando alumnos...</div>;
    }

    if (alumnos.length === 0 && !loading) {
        return <div>No hay alumnos disponibles.</div>;
    }

    return(<>
        <Cabecera nombre = "Alumnos" route = "/admin"/>
        <Buscador route = "/alumno_form"/>
        
        {alumnos.map(alumno=>
            <AlumnoVer nombre = {alumno.nickname} route = "/alumno_perfil"/>
        )
        }

        </>
    );
}

export default AlumnoList;