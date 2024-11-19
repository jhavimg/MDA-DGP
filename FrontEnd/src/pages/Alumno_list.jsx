import Cabecera from "../components/Cabecera";
import Buscador from "../components/Buscador";
import TareaVer from "../components/TareaVer";
import { useEffect, useState } from "react";

function AlumnoList(){

    const [alumnos, setAlumnos] = useState([]);

    async function getAlumnos(){
        let promise = await fetch("https://especialeduca.jmarin.dev/api/alumnos");
        let response = await promise.json();
        setAlumnos(response.success);
        console.log(response.data);
    }

/*    useEffect(()=>{
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

export default AlumnoList