import MenuComp from '../components/MenuComp';
import '../css/Alumno_Comandas.css'

function AlumnoComandas(props){

    let selectedNumber = null;
    
    function selectNumber(number) {
        if (selectedNumber !== null) {
            var element = document.querySelector(`.number-box.selected`);
            element.classList.remove('selected');
        }
        selectedNumber = number;
        element = document.querySelector(`.number-box`);
        console.log(element);
        element.classList.add('selected');
    }

    function submitSelection() {
        if (selectedNumber !== null) {
            alert(` ${selectedNumber} `);
            // Aquí puedes añadir la lógica para enviar esta información a un servidor, si es necesario
            selectedNumber = null;
            document.querySelector(`.number-box.selected`).classList.remove('selected');
        } else {
            alert("Por favor, selecciona un número antes de continuar.");
        }
    }
    return(<>
    <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet"></link>
        <div className = "cuerpo_comandas">
            <div className="menu-container">
                <h1>MENÚS</h1>
            <div className="numbers-grid">
                <MenuComp className = "number-box-4" nombre = "4" onClickAlto = {()=>{selectNumber(4)}}/>
                <MenuComp className = "number-box-1" nombre = "1" onClickAlto = {()=>{selectNumber()}}/>
                
            </div>
                <button className="done-button" onClick={submitSelection}>Hecho ✔</button>
            </div>
        </div>
    </>
        
    );
}

export default AlumnoComandas