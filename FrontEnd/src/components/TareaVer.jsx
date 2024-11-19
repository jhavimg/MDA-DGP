import "../css/TareaVer.css"

//Componente que muestra una tarea
function TareaVer(props){
    return(<>
            <div class="task">
                <a href = {props.route}>{props.nombre} </a>
            </div>
        </>
        
    );
}

export default TareaVer
