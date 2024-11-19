import { useEffect } from 'react';
import MenuComp from '../components/MenuComp';
import '../css/Alumno_Comandas.css'

function AlumnoComandas(props){

    var menus;
    var comanda = "";

    useEffect(()=>{menus = [0, 0, 0, 0];
    }, []);
    
    function selectNumber(number) {
        menus[number-1]+=1    
    }

    function submitSelection() {
        for (let i = 0; i < menus.length; i++){
            comanda+=`Menus de tipo ${i+1}: ${menus[i]}\n`
        }
        console.log(comanda);
    }
    return(<>
    <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet"></link>
        <div className = "cuerpo_comandas">
            <div className="menu-container">
                <h1>MENÚS</h1>
            <div className="numbers-grid">
                <MenuComp  nombre = "1" onClickAlto = {()=>{selectNumber(1)}}/>
                <MenuComp  nombre = "2" onClickAlto = {()=>{selectNumber(2)}}/>
                <MenuComp  nombre = "3" onClickAlto = {()=>{selectNumber(3)}}/>
                <MenuComp  nombre = "4" onClickAlto = {()=>{selectNumber(4)}}/>
                
                
            </div>
                <button className="done-button" onClick={submitSelection}>Hecho ✔</button>
            </div>
        </div>
    </>
        
    );
}

export default AlumnoComandas