import MenuComp from '../components/MenuComp';
import '../css/Alumno_Comandas.css'
import { useState } from 'react';

function AlumnoComandas(props){

    const productNames = {
        1: "menu",
        2: "carne",
        3: "sinCarne",
        4: "fruta",
        5: "trituradoSinCarne",
        6: "triturado",
        7: "noLentejas",
        8: "yogurNatillas"
    };

    var quantities = {}

    const [cants, SetCants] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
    
    function increment(number) {
        SetCants(cants[number]-1);
        console.log(cants);

    }

    // Decrementar la cantidad
    function decrement(number) {
        if (cants[number] > 0)
            SetCants(cants[number]-1);
    }

    function submitSelection() {
        // Crear un nuevo objeto con los nombres de los productos
        const result = {};
        for (const [key, value] of Object.entries(quantities)) {
            if (value > 0) { // Solo incluir productos con cantidad > 0
                result[productNames[key]] = value;
            }
        }
        alert(`Cantidades seleccionadas: ${JSON.stringify(result)}`);
    }
    return(<>
    <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet"></link>
        <div className = "cuerpo_comandas">
            <div className="menu-container">
                <h1>MENÚS</h1>
            <div className="numbers-grid">
                <MenuComp   image="../images/menu.png" alt = "1" cant = {cants[0]} onClickSub={decrement} onClickAdd={increment}/>
                <MenuComp   image ="../images/carne.png" alt = "2" cant = {cants[1]} onClickSub={decrement} onClickAdd={increment}/>
                <MenuComp   image ="../images/sinCarne.png" alt = "3" cant = {cants[2]} onClickSub={decrement} onClickAdd={increment}/>
                <MenuComp   image ="../images/fruta.png" alt = "4" cant = {cants[3]} onClickSub={decrement} onClickAdd={increment}/>
                <MenuComp   image ="../images/trituradoSinCarne.png" alt = "5" cant = {cants[4]} onClickSub={decrement} onClickAdd={increment}/>
                <MenuComp   image ="../images/triturado.png" alt = "6" cant = {cants[5]} onClickSub={decrement} onClickAdd={increment}/>
                <MenuComp   image ="../images/noLentejas.png" alt = "7" cant = {cants[6]} onClickSub={decrement} onClickAdd={increment}/>
                <MenuComp   image ="../images/yogurNatillas.png" alt = "8" cant = {cants[7]} onClickSub={decrement} onClickAdd={increment}/>
                
                
            </div>
                <button className="done-button" >Hecho ✔</button>
            </div>
        </div>
    </>
        
    );
}

export default AlumnoComandas