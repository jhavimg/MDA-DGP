import "../css/Comp.css"

//Componente que muestra una tarea
function ClaseComp(props){
    return(<>
           <a className="number-box" href = {props.route}>
                {props.nombre}
            </a>
        </>
        
    );
}

export default ClaseComp