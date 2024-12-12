import '../css/Admin.css';
import Boton from '../components/Boton';
import Perfil from '../components/Perfil';
import Cabecera from '../components/Cabecera';
import { useState, useEffect } from 'react';

function Admin() {
  const [admin, setAdmin] = useState({});
  const URL_IMAGEN_POR_DEFECTO = "https://pbs.twimg.com/profile_images/1665732637011460097/_HijfwBd_400x400.jpg";

  async function getAdmin() {
    const api_jesus = "https://especialeduca.jmarin.dev";
    const email = localStorage.getItem("adminEmail"); // Obtén el email desde localStorage

    if (!email) {
        console.error("Email no encontrado en localStorage");
        return;
    }

    try {
        const promise = await fetch(`${api_jesus}/administradores/${email}`);
        const response = await promise.json();

        if (response.success) {
            setAdmin(response.data);
        } else {
            console.error("Error al obtener el administrador:", response.message);
        }
    } catch (error) {
        console.error("Error en la solicitud a la API:", error);
    }
  } 

  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <>
      <Cabecera nombre="Administrador" route="/" />
      <Perfil nombre={admin.nombre || "Nombre no disponible"} foto={admin.foto || URL_IMAGEN_POR_DEFECTO} />
      <br />
      <div className='botones-admin'>
        <Boton nombre="Gestionar Alumnos" route="/alumno_list" />
        <Boton nombre="Gestionar Tareas" route="/tarea_list" />
      </div>
    </>
  );
}

export default Admin;
