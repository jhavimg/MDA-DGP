import "../css/LoginMain.css"

function LoginItem(props){
    const altText = `Imagen de ${props.nombre}`
    return(
        <>
            <a href= {props.route} className="photo-card">
                <img src={props.imagen} alt={altText}/>
                <p>{props.nombre}</p>
            </a>
        </>
    );
}

export default LoginItem