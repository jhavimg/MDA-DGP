import Cabecera from "../components/Cabecera";
import Buscador from "../components/Buscador";
import CompVer from "../components/CompVer";
import { useEffect, useState } from "react";

function TareaList(){

    const [tareas, setTareas] = useState([]);
    

    async function getTareas(){
        let promise = await fetch("https://especialeduca.jmarin.dev/api/tareas");
        let response = await promise.json();
        setTareas(response.data);
    }
    useEffect(()=>{
        getTareas();
        
    }, [])
    return(<>
        <Cabecera nombre = "Tareas" route = "/admin"/>
        <Buscador route = "/Tarea_form"/>
        <CompVer nombre = "Hacer Inventario"/>
        <CompVer nombre = "Reponer material"/>
        <CompVer nombre = "Tomar Comandas"/>
        
        {tareas.map(tarea=>
            <CompVer nombre = {tarea.nombre} route = "/tarea_detail"/>
        )
        }
        </>
        
    );
}

export default TareaList