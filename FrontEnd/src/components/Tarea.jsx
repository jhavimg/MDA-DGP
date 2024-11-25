import Boton from "./Boton";
import '../css/Tarea.css'
import Felicitacion from "./Felicitacion";
import { useState, useEffect } from 'react';

//Componente que muestra los detalles de una tarea
function Tarea(props){

    const [tarea, setTarea] = useState({});
    console.log(props.ident);

    async function getTarea(){
        let promise = await fetch(`http://localhost:8000/api/tareas/${props.ident}/`);
        let response = await promise.json();
        setTarea(response);
    }

    useEffect(()=>{
        getTarea();
        
    }, []);

    console.log(tarea);

    //Función que oculta o muestra la tarea
    var oculto = false;
    function completedTask(){
        if (!oculto){
            document.querySelector(".tarea_container").style.display = "none";
            const element = document.querySelector(".felicitacion-hidden");
            element.classList.remove("felicitacion-hidden");
            element.classList.add("felicitacion");
            
        }
            
        else{
            document.querySelector(".tarea_container").style.display = "block";
            const element = document.querySelector(".felicitacion");
            element.classList.remove("felicitacion");
            element.classList.add("felicitacion-hidden");
        }
        oculto = !oculto;
    }
    useEffect(()=>{

    }, [oculto])

    //Retorna la estructura de la tarea
    return(<>
        <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet"></link>
        <Felicitacion id = "feli" className = "felicitacion-hidden"/>
        <div className = "tarea_container">
            <h1 className = "Tarea_tit">Detalles de la Tarea</h1>
            
            <h2 id="titulo">Título: <span> {tarea.nombre}</span></h2>
            <p><strong>Fecha límite:</strong> <span id="fecha_limite">{tarea.fecha}</span></p>
            <p><strong>Descripción:</strong></p>
            <p id="descripcion">{tarea.descripcion}</p>

            <h3>Archivos Multimedia:</h3>
            <div id="archivos">
                {props.archivos}
            </div>
 
            <Boton className = "boton-terminar" nombre = "Terminar Tarea" onClickAlto ={completedTask}/>
        </div>
        </>
        
    );
}

export default Tarea