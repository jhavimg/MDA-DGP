import "../css/LoginAlumno.css"
import Boton from "./Boton";

import vaca from "../images/vaca.jpg"
import perro from "../images/perro.jpg"
import cerdo from "../images/cerdo.jpg"
import elefante from "../images/elefante.jpg"

//Componente que muestra el perfil de un usuario
function LoginPicto(props){

    function checkAnimal(){
        console.log("TODO");
    }
    
    if (props.salir ==="picto"){
        return(<>
            <div className="animal-grid">
                <button className = "boton-picto" onClick= {()=> checkAnimal('elefante')}>
                    <img className = "fotologin" src={elefante} alt="Elefante"/>
                </button>
                <button className = "boton-picto" onClick= {()=> checkAnimal('perro')}>
                    <img className = "fotologin" src={perro} alt="Perro"/>
                </button>
                <button className = "boton-picto" onClick= {()=> checkAnimal('vaca')}>
                    <img className = "fotologin" src={vaca} alt="Vaca"/>
                </button>
                <button className = "boton-picto" onClick= {()=> checkAnimal('cerdo')}>
                    <img className = "fotologin" src={cerdo} alt="Cerdo"/>
                </button>
            </div>
    
            <div className="btn-container">
                <Boton className = "btn btn-secondary" route = "/" nombre = "No Soy Yo" />
            </div>
        </>    
        );
    }
    else{
        return (<></>);
    }
}

export default LoginPicto