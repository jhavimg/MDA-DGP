import "../css/TareaVer.css"

//Componente que muestra una tarea
function TareaVer(props){
    return(<>
            <div class="task">
                <h3>{props.nombre}</h3>
            </div>
        </>
        
    );
}

export default TareaVer
