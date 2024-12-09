import "../css/LoginMain.css"

function LoginCabecera(props){
    return(
        <>
            <h1>Especial Educa</h1>
            <a href="/login_admin" className="login-button">Login administrador/profesor</a>
        </>
    );
}

export default LoginCabecera