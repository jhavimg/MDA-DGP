import "../css/LoginMain.css"
import LoginCabecera from "../components/CabeceraLogin";
import LoginItem from "../components/LoginItem";


function LoginMain(){
    //FALTA BBDD Y LÓGICA BOTONES 

    let currentPage = 0;
    const pages = document.querySelectorAll(".photo-page");

    function updateGallery() {
        pages.forEach((page, index) => {
            page.classList.toggle("active", index === currentPage);
        });
    }

    function pageLess() {
        if (currentPage > 0) {
            currentPage--;
            updateGallery();
        }
    };

    function pageMore() {
        if (currentPage < pages.length - 1) {
            currentPage++;
            updateGallery();
        }
    };

    updateGallery();
    return(<>
    <div className = "body">
        <div className="container-login">
        <LoginCabecera className = "header" route = "" />
        <main>
            <h2>Elige tu foto</h2>
            <div id="photo-gallery">
                <div className="photo-page active" id="page-0">
                    <LoginItem route = "login_alumno/Carlos/picto" nombre = "Carlos" />
                    <LoginItem route = "login_alumno/Maria/contra" nombre = "Maria" />
                    <LoginItem route = "login_alumno/Juan/picto" nombre = "Juan" />
                    <LoginItem route = "login_alumno/Ana/contra" nombre = "Ana" />
                    <LoginItem route = "login_alumno/Pedro/picto" nombre = "Pedro" />
                    <LoginItem route = "login_alumno/Luisa/contra" nombre = "Luisa" />
                </div>
                <div className="photo-page" id="page-1">
                    <LoginItem route = "login_alumno/Javier/contra" nombre = "Javier" />
                    <LoginItem route = "login_alumno/Sofia/picto" nombre = "Sofia" />
                    <LoginItem route = "login_alumno/Alberto/picto" nombre = "Alberto" />
                    <LoginItem route = "login_alumno/Carla/contra" nombre = "Carla" />
                    <LoginItem route = "login_alumno/Lucas/picto" nombre = "Lucas" />
                    <LoginItem route = "login_alumno/Marta/contra" nombre = "Marta" />
                </div>
            </div>
            <div className="pagination">
                <button id="prev-btn" className="arrow" onClick = {pageLess}>⟵</button>
                <span id="page-indicator">Página: {currentPage}</span>
                <button id="next-btn" className="arrow" onClick = {pageMore}>⟶</button>
            </div>
        </main>
    </div>
    </div>
    </>
        
    );
}

export default LoginMain