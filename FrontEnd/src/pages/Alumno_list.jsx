import Cabecera from "../components/Cabecera";
import Buscador from "../components/Buscador";
import CompVer from "../components/CompVer";
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
        
    }, [])
*/
    return(<>
        <Cabecera nombre = "Alumnos" route = "/admin"/>
        <Buscador route = "/alumno_form"/>
        <TareaVer nombre = "Alumno1" route = "alumno_perfil"/>
        <TareaVer nombre = "Alumno2"/>
        <TareaVer nombre = "Alumno3"/>
        
        {alumnos.map(alumno=>
            <TareaVer nombre = {alumno.nombre} />
        )
        }
        </>
    );
}

export default AlumnoList;