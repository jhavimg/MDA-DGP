/* import '../css/Alumno_Comandas.css';
import Boton from '../components/Boton';
import ClaseComp from '../components/ClaseComp';

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
            setOculto(true); // Oculta los detalles de la tarea
            setFelicitacionVisible(true); // Muestra la felicitación
        } else {
            console.error("Error al marcar la tarea como completada.");
        }
    } catch (error) {
        console.error("Error al conectar con el backend:", error);
    }
}

function ClasesComandas(props) {
    const tareaId = localStorage.getItem("tareaId"); // Recupera el ID de la tarea

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
                rel="stylesheet"
            ></link>

            <div className="cuerpo_comandas">
                <div className="menu-container">
                    <div className="cabecera-peticion">
                        <Boton className = "boton-volver-atras" nombre = "Volver atrás" route = ""/>
                        <h1>CLASES</h1>
                    </div>
                    <div className="numbers-grid">
                        <ClaseComp nombre="1" route={`/alumno_comandas/${tareaId}`} />
                        <ClaseComp nombre="2" route={`/alumno_comandas/${tareaId}`} />
                    </div>
                    <Boton className="boton-terminar" nombre="Terminar Tarea" onClickAlto={completedTask} />
                </div>
            </div>
        </>
    );
}

export default ClasesComandas;
 */

import '../css/Alumno_Comandas.css';
import Boton from '../components/Boton';
import Felicitacion from '../components/Felicitacion';
import ClaseComp from '../components/ClaseComp';
import { useState} from 'react';

function ClasesComandas(props) {
    const [tarea, setTarea] = useState(null);
    const [oculto, setOculto] = useState(false);
    const [felicitacionVisible, setFelicitacionVisible] = useState(false);
    const tareaId = localStorage.getItem("tareaId"); // Recupera el ID de la tarea

    // Función para marcar la tarea como completada
    async function completedTask() {
        try {
            const response = await fetch(
                `https://especialeduca.jmarin.dev/api/tareas/${tareaId}/modificar/`,
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
                setOculto(true); // Oculta los detalles de la tarea
                setFelicitacionVisible(true); // Muestra la felicitación
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

            {felicitacionVisible && <Felicitacion id="feli" className="felicitacion" />}
            {!oculto && (
                <div className="cuerpo_comandas">
                    <div className="menu-container">
                        <div className="cabecera-peticion">
                            <Boton
                                className="boton-volver-atras"
                                nombre="Volver atrás"
                                route=""
                            />
                            <h1>CLASES</h1>
                        </div>
                        <div className="numbers-grid">
                            <ClaseComp nombre="1" route={`/alumno_comandas/${tareaId}`} />
                            <ClaseComp nombre="2" route={`/alumno_comandas/${tareaId}`} />
                        </div>
                        
                            <Boton
                                className="boton-terminar"
                                nombre="Terminar Tarea"
                                onClickAlto={completedTask}
                            />
                        

                    </div>
                </div>
            )}

        </>
    );
}

export default ClasesComandas;
