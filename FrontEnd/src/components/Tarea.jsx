import Boton from "./Boton";
import '../css/Tarea.css'
import Felicitacion from "./Felicitacion";
import { useEffect, useState } from 'react';

//Componente que muestra los detalles de una tarea
function Tarea(props) {

    const [tarea, setTarea] = useState({});

    async function getTarea() {
        let promise = await fetch(`http://localhost:8000/api/tareas/${props.ident}/`);
        let response = await promise.json();
        setTarea(response);
    }

    useEffect(() => {
        getTarea();
    }, []);

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

    async function completedTask() {
        try {
            // Realiza una solicitud POST para marcar la tarea como completada
            const response = await fetch(`https://especialeduca.jmarin.dev/api/tareas/${props.ident}/modificar/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ completada: true }),
            });

            if (response.ok) {
                const updatedTarea = await response.json();
                setTarea(updatedTarea.data); // Actualiza el estado de la tarea
            } else {
                console.error("Error al marcar la tarea como completada.");
            }
        } catch (error) {
            console.error("Error al conectar con el backend:", error);
        }
    }

    // Retorna la estructura de la tarea
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet"></link>
            <Felicitacion id = "feli" className = "felicitacion-hidden"/>
                <div className="tarea_container">
                    <h1 className="Tarea_tit">Detalles de la Tarea</h1>

                    <h2 id="titulo">Título: <span>{tarea.nombre}</span></h2>
                    <p><strong>Fecha límite:</strong> <span id="fecha_limite">{tarea.fecha}</span></p>
                    <p><strong>Descripción:</strong></p>
                    <p id="descripcion">{tarea.descripcion}</p>
                    <p><strong>Estado de la tarea: </strong> <span>{tarea.estado}</span></p>
                    <p><strong>Prioridad: </strong><span>{tarea.prioridad}</span></p>
                    <p><strong>Alumno asignado:</strong>{tarea.alumnoAsignado}</p>

                    <h3>Archivos Multimedia:</h3>
                    <div id="archivos">
                        {props.archivos}
                    </div>

                    <Boton className="boton-terminar" nombre="Terminar Tarea" onClickAlto={completedTask} />
                </div>
        </>
        
    );
}

export default Tarea