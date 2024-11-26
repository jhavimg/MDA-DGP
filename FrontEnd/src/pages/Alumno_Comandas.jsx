import MenuComp from '../components/MenuComp';
import '../css/Alumno_Comandas.css'
import { useState } from 'react';

function AlumnoComandas(props){

    function submitSelection() {
        // TODO
    }
    return(<>
    <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet"></link>
        <div className = "cuerpo_comandas">
            <div className="menu-container">
                <h1>MENÚS</h1>
            <div className="numbers-grid">
                <MenuComp   image="../images/menu.png" alt = "1" />
                <MenuComp   image ="../images/carne.png" alt = "2"/>
                <MenuComp   image ="../images/sinCarne.png" alt = "3" />
                <MenuComp   image ="../images/fruta.png" alt = "4" />
                <MenuComp   image ="../images/trituradoSinCarne.png" alt = "5"/>
                <MenuComp   image ="../images/triturado.png" alt = "6" />
                <MenuComp   image ="../images/noLentejas.png" alt = "7" />
                <MenuComp   image ="../images/yogurNatillas.png" alt = "8" />
                
                
            </div>
                <button className="done-button" >Hecho ✔</button>
            </div>
        </div>
    </>
        
    );
}

export default AlumnoComandas