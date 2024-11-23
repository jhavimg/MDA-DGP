import "../css/CompVer.css"
import Boton from "./Boton";
import Modal from "./Modal";
//Componente que muestra una tarea
function TareaVer(props){
    function handleDelete(){
        console.log("jajajaj");
    }
    return(<>
            <div className="task">
                <a href = {props.route}>
                    {props.nombre} 
                </a>
                <Boton nombre = "Modificar Tarea" route = "/Tarea_form"/>
                <Modal onClickAlto = {handleDelete}/>
            </div>
        </>
        
    );
}

export default TareaVer
