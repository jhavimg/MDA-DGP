import "../css/Perfil.css"

//Componente que muestra el perfil de un usuario
function Perfil(props){
    return(
        <div className = "perfil">
            <img alt = "foto" className = "foto-perfil" src = {props.foto}/>
            <br/>
            <h2>{props.nombre}</h2>
        </div>
        
    );
}

export default Perfil
