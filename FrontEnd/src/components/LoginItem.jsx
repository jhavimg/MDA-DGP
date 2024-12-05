import "../css/LoginMain.css"

function LoginItem(props){
    return(
        <>
            <a href= {props.route} className="photo-card">
                <img src="carlos.jpg" alt={props.nombre}/>
                <p>{props.nombre}</p>
            </a>
        </>
    );
}

export default LoginItem