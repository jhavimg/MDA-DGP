import '../css/Admin.css'
import Boton from '../components/Boton';
import Main from '../components/Main';
import Perfil from '../components/Perfil';
import Cabecera from '../components/Cabecera';
import { useState, useEffect } from 'react';

function Admin() {

  const [admin, setAdmin] = useState({});

  useEffect(() => {
    setAdmin({
      nombre : "Alonso Macías",
      foto : "https://pbs.twimg.com/profile_images/1665732637011460097/_HijfwBd_400x400.jpg"
    });
  }, []);
  


  return (
    <>
    <Cabecera nombre = "Administrador" route = "/"/>
    <Perfil nombre = {admin.nombre} foto = {admin.foto}/>

    
    <Boton  nombre = "Gestionar Alumnos" route ="/Alumno_list"/>
    <Boton nombre = "Gestionar Tareas" route = "/tarea_list"/>
    </>
  );
}

export default Admin;