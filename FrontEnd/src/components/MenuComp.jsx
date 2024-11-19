import "../css/Comp.css"

//Componente que muestra una tarea
function MenuComp(props){

    return(<>
           <button className="number-box" onClick={props.onClickAlto}>
                {props.nombre}
            </button>
        </>
        
    );
}

export default MenuComp