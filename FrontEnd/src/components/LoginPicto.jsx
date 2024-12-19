import "../css/LoginAlumno.css"
import Boton from "./Boton";

import vaca from "../images/vaca.jpg"
import perro from "../images/perro.jpg"
import cerdo from "../images/cerdo.jpg"
import elefante from "../images/elefante.jpg"
import { useNavigate } from "react-router-dom"

//Componente que muestra el perfil de un usuario
function LoginPicto(props){
    const navigate = useNavigate();

    function checkAnimal(animal){
        if (animal === props.user.picto){
            navigate("/alumno");
            
        }
        else{
            alert("¡Inténtalo de nuevo! :)")
        }
    }
    
    if (props.salir ==="picto"){
        return(<>
         <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet"></link>
            <div className="animal-grid">
                <button className = "boton-picto" onClick= {()=> checkAnimal('Elefante')}>
                    <img className = "fotologin" src={elefante} alt="Elefante"/>
                </button>
                <button className = "boton-picto" onClick= {()=> checkAnimal('Perro')}>
                    <img className = "fotologin" src={perro} alt="Perro"/>
                </button>
                <button className = "boton-picto" onClick= {()=> checkAnimal('Vaca')}>
                    <img className = "fotologin" src={vaca} alt="Vaca"/>
                </button>
                <button className = "boton-picto" onClick= {()=> checkAnimal('Cerdo')}>
                    <img className = "fotologin" src={cerdo} alt="Cerdo"/>
                </button>
            </div>
    
            <div className="btn-container">
            <Boton className = "btn-secondary" route = "/" nombre = " Salir  X" />
            </div>
        </>    
        );
    }
    else{
        return (<></>);
    }
}

export default LoginPicto