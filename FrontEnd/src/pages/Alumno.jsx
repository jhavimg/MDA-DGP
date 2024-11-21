import Boton from "../components/Boton";
import "../css/Alumno.css"
import { useState, useEffect } from 'react';

function Alumno(props){

    const [tareas, setTareas] = useState([]);

    async function getTareas(){
        let promise = await fetch("https://especialeduca.jmarin.dev/api/alumnos/673b8729beb012def1172d0d/tareas/");
        let response = await promise.json();
        setTareas(response.data);
    }

    useEffect(()=>{
        getTareas();
        
    }, []);

    return(<>
        <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet"></link>
        <div className ="cuerpo"> 
            <div class="agenda">
            <div class="titulo">Tareas de Hoy</div> 
            <div class="dia">Lunes</div>
                <Boton className = "tarea" nombre = "Coger Materiales" route = "/tarea_detail" />
                <Boton className = "tarea" nombre = "Tomar Comandas" route = "/clases_comandas" />
                
                {tareas.map(tarea=>
                    <Boton className = "tarea" nombre = {tarea.nombre} ident = {tarea.id} route = "/tarea_detail" />
        )
        }   
            </div>
        </div>
        </>
        
    );
}

export default Alumno