import Cabecera from "../components/Cabecera";
import Buscador from "../components/Buscador";
import TareaVer from "../components/TareaVer";
import { useEffect, useState } from "react";

function AlumnoList() {
    const [alumnos, setAlumnos] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para controlar la carga

    useEffect(() => {
        const getAlumnos = async () => {
            try {
                const promise = await fetch("https://especialeduca.jmarin.dev/api/alumnos");
                const response = await promise.json();
                if (response.success) {
                    setAlumnos(response.data);
                } else {
                    console.error("Error al procesar alumnos:", response.message);
                }
            } catch (error) {
                console.error("Error al procesar los alumnos:", error);
            } finally {
                setLoading(false);
            }
        };

        getAlumnos();
    }, []);


    if (loading) {
        return <div>Cargando alumnos...</div>;
    }

    return (
        <>
            <Cabecera nombre="Alumnos" route="/admin" />
            <Buscador route="/alumno_form" />
            {alumnos.map(alumno => (
                <TareaVer key={alumno.id} nombre={alumno.nickname} route={`/alumno_perfil/${alumno.id}`} /> // Agrega key y usa nickname
            ))}
        </>
    );
}

export default AlumnoList;