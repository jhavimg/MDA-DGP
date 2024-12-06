import "../css/LoginAlumno.css"
import Boton from "./Boton";

//Componente que muestra el perfil de un usuario
function LoginPicto(props){

    function checkAnimal(){
        console.log("jajjajajaj");
    }
    return(<>
        <div className="animal-grid">
            <button onClick= {()=> checkAnimal('elefante')}>
                <img src="elefante.jpg" alt="Elefante"/>
            </button>
            <button onClick= {()=> checkAnimal('perro')}>
                <img src="perro.jpg" alt="Perro"/>
            </button>
            <button onClick= {()=> checkAnimal('vaca')}>
                <img src="vaca.jpg" alt="Vaca"/>
            </button>
            <button onClick= {()=> checkAnimal('cerdo')}>
                <img src="cerdo.jpg" alt="Cerdo"/>
            </button>
        </div>

        <div className="btn-container">
            <Boton className = "btn btn-secondary" route = "/" nombre = "No Soy Yo" />
        </div>
    </>    
    );
}

export default LoginPicto