import Boton from "../components/Boton";
import "../css/Alumno.css"

function Alumno(props){
    return(<>
        <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet"></link>
        <div className ="cuerpo"> 
            <div class="agenda">
            <div class="titulo">Tareas de Hoy</div> 
            <div class="dia">Lunes</div>
                <Boton className = "tarea" nombre = "Coger Materiales" route = "/tarea_detail" />
                <Boton className = "tarea" nombre = "Poner Microondas" route = "/tarea_detail" />   
            </div>
        </div>
        </>
        
    );
}

export default Alumno