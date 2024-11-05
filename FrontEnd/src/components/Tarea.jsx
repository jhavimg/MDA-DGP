import Boton from "./Boton";
import '../css/Tarea.css'
import Felicitacion from "./Felicitacion";
import { useEffect } from 'react';

function Tarea(props){

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

    return(<>
        <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet"></link>
        <Felicitacion id = "feli" className = "felicitacion-hidden"/>
        <div className = "tarea_container">
            <h1 className = "Tarea_tit">Detalles de la Tarea</h1>
            
            <h2 id="titulo">Título: <span> {props.titulo}</span></h2>
            <p><strong>Fecha límite:</strong> <span id="fecha_limite">{props.limite}</span></p>
            <p><strong>Descripción:</strong></p>
            <p id="descripcion">{props.descripcion}</p>

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