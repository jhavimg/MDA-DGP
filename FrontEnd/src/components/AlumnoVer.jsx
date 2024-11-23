import "../css/CompVer.css"

//Componente que muestra una tarea
function AlumnoVer(props){
    return(<>
            <div class="task">
                <a href = {props.route}>{props.nombre} </a>
            </div>
        </>
        
    );
}

export default AlumnoVer
