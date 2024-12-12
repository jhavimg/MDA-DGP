import "../css/LoginAdmin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginAdmin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        setError("");
    
        try {
            const response = await fetch("https://especialeduca.jmarin.dev/api/admin/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    contraseña: password,
                }),
            });
    
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || "Error al iniciar sesión");
            }
    
            const data = await response.json();
            console.log("Datos recibidos:", data.data);
    
            // Guardar tokens e información del administrador en localStorage
            localStorage.setItem("accessToken", data.data.access);
            localStorage.setItem("refreshToken", data.data.refresh);
            localStorage.setItem("adminId", data.data.id);
            localStorage.setItem("adminNombre", data.data.nombre);
            localStorage.setItem("adminEmail", email); // Corregido: guardar email
    
            navigate("/admin");
        } catch (err) {
            console.error("Error:", err.message);
            setError(err.message);
        }
    };

    return (
        <div className="body_login_admin">
            <div className="container_login_admin">
                <h1>Iniciar sesión</h1>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={submit}>
                    <div className="form-group">
                        <label htmlFor="correo">Correo:</label>
                        <input
                            type="email"
                            id="correo"
                            name="correo"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contraseña">Contraseña:</label>
                        <input
                            type="password"
                            id="contraseña"
                            name="contraseña"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn">
                        Iniciar sesión
                    </button>
                </form>
                <a href="/" className="volver">Volver</a>
            </div>
        </div>
    );
}

export default LoginAdmin;
