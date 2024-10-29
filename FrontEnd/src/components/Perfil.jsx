import "../css/Perfil.css"

function Perfil(props){
    return(
        <div className = "perfil">
            <img alt = "foto" className = "foto-perfil" src = {props.foto}/>
            <br/>
            <h2>Nombre: {props.nombre}</h2>
        </div>
        
    );
}

export default Perfil
