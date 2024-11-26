import '../css/Alumno_Comandas.css'
import ClaseComp from '../components/ClaseComp';

function ClasesComandas(props){

    return(<>
    <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet"></link>

    <div className = "cuerpo_comandas">
        <div class="menu-container">
            <h1>CLASES</h1>
            <div class="numbers-grid">
                <ClaseComp nombre = "1" route = "/alumno_comandas" />
            </div>
        </div>
        </div>
        </>
        
    );
}

export default ClasesComandas