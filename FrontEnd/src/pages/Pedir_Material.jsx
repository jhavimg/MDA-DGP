import Cabecera from "../components/Cabecera";
import Buscador from "../components/Buscador";
import CompVer from "../components/CompVer";
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
        <CompVer nombre = "Hacer Inventario"/>
        <CompVer nombre = "Reponer material"/>
        <CompVer nombre = "Tomar Comandas"/>
        
        {tareas.map(tarea=>
            <CompVer nombre = {tarea.nombre} />
        )
        }
        </>
        
    );
}

export default PedirMaterial