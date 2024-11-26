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
    return(
        <div>Coming soon!</div>
        );
}

export default PedirMaterial