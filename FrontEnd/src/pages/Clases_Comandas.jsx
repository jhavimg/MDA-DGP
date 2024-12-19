import '../css/Alumno_Comandas.css';
import "../css/Alumno.css"
import Boton from '../components/Boton';
import Felicitacion from '../components/Felicitacion';
import ClaseComp from '../components/ClaseComp';
import { useState } from 'react';
import BotonClase from '../components/BotonClase';

function ClasesComandas(props) {
    const [tarea, setTarea] = useState(null);
    const tareaId = localStorage.getItem("tareaId"); // Recupera el ID de la tarea
    const [oculto, setOculto] = useState(true);

    // Función para marcar la tarea como completada
    async function completedTask() {
        console.log("Iniciando el proceso de marcar tarea como completada...");
        try {
            const response = await fetch(
                `http://localhost:8000/api/tareas/${tareaId}/modificar/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ completada: true }),
                }
            );
            if (response.ok) {
                const updatedTarea = await response.json();
                setTarea(updatedTarea.data); // Actualiza el estado de la tarea
                console.log("Tarea completada con éxito, mostrando felicitación...");
                setOculto(false); // Cambia el estado para mostrar la felicitación
            } else {
                console.error("Error al marcar la tarea como completada.");
            }
        } catch (error) {
            console.error("Error al conectar con el backend:", error);
        }
    };

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
                rel="stylesheet"
            ></link>

            <div className="cuerpo_comandas">
                <Boton
                    className="boton-volver-atras"
                    nombre="Volver atrás"
                    route="/alumno"
                />
                <div className={`menu-container ${oculto ? "" : "hidden"}`}>

                    <div className="cabecera-peticion">
                        <h1>CLASES</h1>
                    </div>
                    <div className="numbers-grid">
                        <BotonClase className = "tarea" nombre = "Albaicín" route = {`/alumno_comandas/${tareaId}`} foto="https://cdn-icons-png.flaticon.com/512/3197/3197877.png"/>
                        <BotonClase className = "tarea" nombre = "Granada" route = {`/alumno_comandas/${tareaId}`} foto="https://cdn-icons-png.flaticon.com/512/3197/3197877.png"/>
                    </div>

                    <Boton
                        className="boton-terminar"
                        nombre="Terminar Tarea"
                        onClickAlto={completedTask}
                    />
                </div>
                <Felicitacion className={oculto ? "felicitacion-hidden" : "felicitacion"} />
            </div>
            
        </>
    );
}

export default ClasesComandas;
