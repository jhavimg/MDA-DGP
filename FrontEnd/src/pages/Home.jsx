import Boton from "../components/Boton";
import Cabecera from "../components/Cabecera";

function Home(props){
    return(<>
        <Cabecera nombre = "Home"/>
            
        <Boton nombre = "Administrador" route = "/admin" />
        <Boton nombre = "Profesor" route = "/profesor" />
        <Boton nombre = "Alumno" route = "/alumno" />
        </>
        
    );
}

export default Home