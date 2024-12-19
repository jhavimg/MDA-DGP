import '../css/Agenda.css'
import { useState, useEffect } from 'react';
function Agenda() {
  const [tareas, setTareas] = useState({});
  async function getTareas(){
    let promise = await fetch("https://especialeduca.jmarin.dev/api/alumnos");
    let response = await promise.json();
    setTareas(response);
    console.log(tareas);
}
/*
useEffect(()=>{
    getTareas();
    
}, [])
*/
  return (
    <>
    <div className = "cuerpo_agenda">
        <div className="container">
            <div className="grid">
                    <div className="day-container">
                        <div className="day">LUNES</div>
                        <div className="tasks">
                            <div className="task done">Coger materiales</div>
                            <div className="task not-done">Limpiar suelo</div> 
                        </div>
                    </div>
                
                    <div className="day-container">
                        <div className="day">MARTES</div>
                        <div className="tasks">
                            <div className="task not-done">Usar microondas</div>
                            <div className="task done">Doblar ropa</div>
                        </div>
                    </div>
                
                    <div className="day-container">
                        <div className="day">MIÉRCOLES</div>
                        <div className="tasks">
                            <div className="task done">Comanda de menú</div>
                        </div>
                    </div>
                
                    <div className="day-container">
                        <div className="day">JUEVES</div>
                        <div className="tasks">
                            <div className="task not-done">Comanda de menú</div>
                        </div>
                    </div>
                
                    <div className="day-container">
                        <div className="day">VIERNES</div>
                        <div className="tasks">
                            <div className="task done">Coger materiales</div>
                        </div>
                    </div>
                
                    <div className="day-container">
                        <div className="day">SÁBADO</div>
                        <div className="tasks">
                        </div>
                    </div>
                
                    <div className="day-container">
                        <div className="day">DOMINGO</div>
                        <div className="tasks">
                        </div>
                    </div>
                </div>        
        </div>
    </div>
    </>
  );
}
export default Agenda;