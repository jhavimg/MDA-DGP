import Cabecera from "../components/Cabecera";
import Buscador from "../components/Buscador";
import CompVer from "../components/CompVer";
import { useEffect, useState } from "react";

function AlumnoList(){

    const [alumnos, setAlumnos] = useState([]);

    async function getAlumnos(){
        let promise = await fetch("https://especialeduca.jmarin.dev/api/alumnos");
        let response = await promise.json();
        setAlumnos(response.data);
    }
    useEffect(()=>{
        getAlumnos();
        
    }, [])

    return(<>
        <Cabecera nombre = "Alumnos" route = "/admin"/>
        <Buscador route = "/alumno_form"/>
        
        {alumnos.map(alumno=>
            <CompVer nombre = {alumno.nickname} route = "/alumno_perfil"/>
        )
        }
        </>
        
    );
}

export default AlumnoList