import "../css/LoginMain.css"
import LoginCabecera from "../components/CabeceraLogin";
import LoginItem from "../components/LoginItem";
import { useEffect } from "react";
import Boton from "../components/Boton";


function LoginMain(){
    //FALTA BBDD, CSS Y LÓGICA BOTONES 

    let more = false;  

    useEffect(()=>{
        const pages = document.querySelectorAll(".photo-page");
        function updateGallery() {
            console.log(pages[0].classList);
            /*if (!more){
                pages[0].classList.add("active");
                pages[1].classList.remove("active")         
            }
            else{
                pages[0].classList.remove("active");
                pages[1].classList.add("active")  
            }*/
        }
        updateGallery();
    }, [more]);
    
    return(<>
    <div className = "body">
        <div className="container-login">
        <LoginCabecera className = "header" route = "" />
        <main>
            <h2>Elige tu foto</h2>
            <div id="photo-gallery">
                <div className="photo-page active">
                    <LoginItem route = "login_alumno/Carlos/contra" nombre = "Carlos" />
                    <LoginItem route = "login_alumno/Maria/contra" nombre = "Maria" />
                    <LoginItem route = "login_alumno/Juan/contra" nombre = "Juan" />
                    <LoginItem route = "login_alumno/Ana/contra" nombre = "Ana" />
                    <LoginItem route = "login_alumno/Pedro/contra" ontranombre = "Pedro" />
                    <LoginItem route = "login_alumno/Luisa/contra" nombre = "Luisa" />
                    
                </div>
                <div className="photo-page">
                <LoginItem route = "login_alumno/Javier/contra" nombre = "Javier" />
                <LoginItem route = "login_alumno/Sofia/picto" nombre = "Sofia" />
                <LoginItem route = "login_alumno/Alberto/picto" nombre = "Alberto" />
                <LoginItem route = "login_alumno/Carla/contra" nombre = "Carla" />
                <LoginItem route = "login_alumno/Lucas/picto" nombre = "Lucas" />
                <LoginItem route = "login_alumno/Marta/contra" nombre = "Marta" />
                </div>
            </div>
            <div className="pagination">
                <Boton nombre = "⟵" className="arrow" onClickAlto = {more = false}/>
                <Boton nombre = "⟶" className="arrow" onClickAlto = {more = true}/>
            </div>
        </main>
    </div>
    </div>
    </>
        
    );
}

export default LoginMain