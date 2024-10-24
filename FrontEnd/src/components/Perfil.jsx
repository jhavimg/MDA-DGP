import "../css/Perfil.css"

function Perfil(props){
    return(
        <div className = "perfil">
            <img alt = "foto" className = "foto-perfil" src = "https://i.pinimg.com/736x/0b/2d/ae/0b2dae8928e178f368b6d152a1367b7f--cats-meowing-kitty-cats.jpg"/>
            <br/>
            <h2>Nombre: {props.nombre}</h2>
        </div>
        
    );
}

export default Perfil
