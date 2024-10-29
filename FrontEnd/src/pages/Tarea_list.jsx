import Cabecera from "../components/Cabecera";
import BuscadorTareas from "../components/BuscadorTareas";
import TareaVer from "../components/TareaVer";
import { useEffect, useState } from "react";

function TareaList(props){

    const [tareas, setTareas] = useState([]);

    const tar = ["Tarea de matemáticas", "Tarea de Historia"]
    useEffect(()=>{
        tar.map(tareilla=> setTareas(tareas=>
            [...tareas, tareilla]
        ))
        
    }, [])
    return(<>
        <Cabecera nombre = "Tareas" route = "/admin"/>
        <BuscadorTareas />
        
        {tareas.map(tarea=>
            <TareaVer nombre = {tarea} />
        )
        }
        </>
        
    );
}

export default TareaList