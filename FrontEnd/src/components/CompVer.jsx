import "../css/CompVer.css"

//Componente que muestra una tarea
function CompVer(props){
    return(<>
            <div class="task">
                <a href = {props.route}>{props.nombre} </a>
            </div>
        </>
        
    );
}

export default CompVer
