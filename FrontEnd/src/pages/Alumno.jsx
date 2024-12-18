import Boton from "../components/Boton";
import "../css/Alumno.css"
import { useState, useEffect } from 'react';

function Alumno(props){
    const [tareas, setTareas] = useState([]);

    async function getTareas(){
        let promise = await fetch("https://especialeduca.jmarin.dev/api/alumnos/67542efe9e8aba9166ad3559/tareas/");
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
                <div className="listado-tareas">
                    <Boton className = "tarea" nombre = "Coger Materiales" route = "/tarea_detail" foto = "https://cdn-icons-png.flaticon.com/512/603/603519.png" />
                    <Boton className = "tarea" nombre = "Tomar Comandas" route = "/clases_comandas" foto = "https://www.pictoeduca.com/config/timthumb-alt.php?src=https://www.pictoeduca.com/uploads/2017/06/comer-1.png&w=847&h=847"/>
                    
                    {tareas.map(tarea=>
                        <Boton className = "tarea" nombre = {tarea.nombre} ident = {tarea.id} route = {`/tarea_detail/${tarea.id}`} foto = "https://vectorified.com/images/check-icon-png-1.png" />
                    )}
                </div>   
            </div>
        </div>
        </>
        
    );
}

export default Alumno