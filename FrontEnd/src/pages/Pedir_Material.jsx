import Cabecera from "../components/Cabecera";
import Buscador from "../components/Buscador";
import TareaVer from "../components/TareaVer";
import { useEffect, useState } from "react";

function PedirMaterial(){

    const [tareas, setTareas] = useState([]);
    

    async function getTareas(){
        let promise = await fetch("https://especialeduca.jmarin.dev/api/tareas");
        let response = await promise.json();
        setTareas(response);
        console.log(tareas);
    }
    useEffect(()=>{
        getTareas();
        
    }, [])
    return(<>
        <Cabecera nombre = "Pedir Material" route = "/profesor"/>
        <Buscador />
        <TareaVer nombre = "Hacer Inventario"/>
        <TareaVer nombre = "Reponer material"/>
        <TareaVer nombre = "Tomar Comandas"/>
        
        {tareas.map(tarea=>
            <TareaVer nombre = {tarea.nombre} />
        )
        }
        </>
        
    );
}

export default PedirMaterial