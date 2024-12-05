import "../css/LoginMain.css"
import LoginCabecera from "../components/CabeceraLogin";
import LoginItem from "../components/LoginItem";


function LoginMain(){

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
        <div className="container">
        <LoginCabecera className = "header" route = "loginAdmin.html" />
        <main>
            <h2>Elige tu foto</h2>
            <div id="photo-gallery">
                <div className="photo-page active" id="page-0">
                    <LoginItem route = "login_alumno_texto/Carlos" nombre = "Carlos" />
                    <LoginItem route = "login_alumno_texto/Maria" nombre = "Maria" />
                    <LoginItem route = "login_alumno_texto/Juan" nombre = "Juan" />
                    <LoginItem route = "login_alumno_texto/Ana" nombre = "Ana" />
                    <LoginItem route = "login_alumno_texto/Pedro" nombre = "Pedro" />
                    <LoginItem route = "login_alumno_texto/Luisa" nombre = "Luisa" />
                    
                </div>
                <div className="photo-page" id="page-1">
                <LoginItem route = "login_alumno_texto/Javier" nombre = "Javier" />
                <LoginItem route = "login_alumno_texto/Sofia" nombre = "Sofia" />
                <LoginItem route = "login_alumno_texto/Alberto" nombre = "Alberto" />
                <LoginItem route = "login_alumno_texto/Carla" nombre = "Carla" />
                <LoginItem route = "login_alumno_texto/Lucas" nombre = "Lucas" />
                <LoginItem route = "login_alumno_texto/Marta" nombre = "Marta" />
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