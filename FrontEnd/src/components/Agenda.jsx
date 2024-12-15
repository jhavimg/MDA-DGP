import '../css/Agenda.css';
import { useState, useEffect } from 'react';

function Agenda({ alumnoId }) {
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        async function getTareas() {
            try {
                const response = await fetch(`https://especialeduca.jmarin.dev/api/alumnos/${alumnoId}/tareas/semana/`);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                setTareas(data.data || []);
            } catch (error) {
                console.error("Error fetching tareas:", error);
            }
        }

        getTareas();
    }, [alumnoId]);

    const daysOfWeek = ['DOMINGO', 'LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'];

    const tareasPorDia = {
        'LUNES': [],
        'MARTES': [],
        'MIÉRCOLES': [],
        'JUEVES': [],
        'VIERNES': [],
        'SÁBADO': [],
        'DOMINGO': [],
    };

    tareas.forEach((tarea) => {
        const fecha = new Date(tarea.fecha);
        const dayIndex = fecha.getDay(); // 0 (domingo) a 6 (sábado)
        const dayName = daysOfWeek[dayIndex];
        if (tareasPorDia[dayName]) {
            tareasPorDia[dayName].push(tarea);
        }
    });

    return (
        <div className="cuerpo_agenda">
            <div className="container">
                <div className="grid">
                    {daysOfWeek.map((dayName) => (
                        <div key={dayName} className="day-container">
                            <div className="day">{dayName}</div>
                            <div className="tasks">
                                {tareasPorDia[dayName].map((tarea) => (
                                    <div key={tarea.id} className={`task ${tarea.estado === 'hecho' ? 'done' : 'not-done'}`}>
                                        {tarea.nombre}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Agenda;