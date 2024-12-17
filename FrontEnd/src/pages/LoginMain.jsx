import "../css/LoginMain.css"
import LoginCabecera from "../components/CabeceraLogin";
import LoginItem from "../components/LoginItem";
import { useEffect } from "react";
import Boton from "../components/Boton";

import alberto from "../images/alberto.jpg"
import ana from "../images/ana.jpg"
import carla from "../images/carla.jpg"
import carlos from "../images/carlos.jpg"
import juan from "../images/juan.jpg"
import javier from "../images/javier.jpeg"
import lucas from "../images/lucas.jpg"
import luisa from "../images/luisa.jpg"
import maria from "../images/maria.jpg"
import marta from "../images/marta.jpg"
import pedro from "../images/pedro.jpg"
import sofia from "../images/sofia.jpg"
function LoginMain(){
    //CSS

    let more = false;  

    function pageFlip(number) {
        
        let page = number;

        const page1 = document.getElementById("photo-page_1");
        const page2 = document.getElementById("photo-page_2");

        if (!more && page === 0) {
            page1.style.display = 'block';
            page2.style.display = 'none';
            more = true;
        } else if(more && page === 1) {
            page1.style.display = 'none';
            page2.style.display = 'block';
            more = false;
        }
    }
    
    return(<>
    <div className = "body">
        <div className="container-login">
        <LoginCabecera className = "header" route = "" />
        <main>
            <h2>Elige tu foto</h2>
            <div id="photo-gallery">
                <div id="photo-page_1">
                    <LoginItem route = "login_alumno/Carlos/contra" imagen = {carlos} nombre = "Carlos" />
                    <LoginItem route = "login_alumno/Maria/picto" imagen = {maria} nombre = "Maria" />
                    <LoginItem route = "login_alumno/Juan/contra" imagen = {juan} nombre = "Juan" />
                    <LoginItem route = "login_alumno/Ana/picto" imagen = {ana} nombre = "Ana" />
                    <LoginItem route = "login_alumno/Pedro/picto" imagen = {pedro} nombre = "Pedro" />
                    <LoginItem route = "login_alumno/Luisa/contra" imagen = {luisa} nombre = "Luisa" />
                    
                </div>
                <div id="photo-page_2">
                <LoginItem route = "login_alumno/Javier/contra" imagen = {javier} nombre = "Javier" />
                <LoginItem route = "login_alumno/Sofia/picto" imagen = {sofia} nombre = "Sofia" />
                <LoginItem route = "login_alumno/Alberto/picto" imagen = {alberto} nombre = "Alberto" />
                <LoginItem route = "login_alumno/Carla/contra" imagen = {carla} nombre = "Carla" />
                <LoginItem route = "login_alumno/Lucas/picto" imagen = {lucas} nombre = "Lucas" />
                <LoginItem route = "login_alumno/Marta/contra" imagen = {marta} nombre = "Marta" />
                </div>
            </div>
            <div className="pagination">
                <button aria-label="Página Anterior" className = "arrow" onClick = {()=>{pageFlip(1)}}>⟵</button>
                <button aria-label="Siguiente Página" className = "arrow" onClick = {()=>{pageFlip(0)}}>⟶</button>
            </div>
        </main>
    </div>
    </div>
    </>
        
    );
}

export default LoginMain