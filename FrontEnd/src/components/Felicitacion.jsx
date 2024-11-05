import "../css/Felicitacion.css"

function Felicitacion(props){
    return(<>
        <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet"></link>
        <div className ={props.className} >
            <h1>¡Genial!</h1>
            <p>Bien hecho, sigue trabajando así.</p>
            <img src="https://media.tenor.com/30Q2AgaXvBgAAAAC/minions-animo.gif" alt="Muy bien"></img>
        </div>   
        </>    

    );
}

export default Felicitacion