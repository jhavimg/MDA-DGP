import '../css/Admin.css'
import Boton from '../components/Boton';
import Perfil from '../components/Perfil';
import Cabecera from '../components/Cabecera';
import { useState, useEffect } from 'react';

function Admin() {

  const [admin, setAdmin] = useState({});

  async function getAdmin(){
    const api_jesus = "https://especialeduca.jmarin.dev/";
    let promise = await fetch(`${api_jesus}/api/administradores/cmiller@example.com`);
    let response = await promise.json();
    setAdmin(response.data);
}

  useEffect(()=>{
      getAdmin();
      
  }, []);

  return (
    <>
    <Cabecera nombre = "Administrador" route = "/"/>
    <Perfil nombre = {admin.nombre} foto = {admin.foto}/>

    
    <Boton  nombre = "Gestionar Alumnos" route ="/alumno_list"/>
    <Boton nombre = "Gestionar Tareas" route = "/tarea_list"/>
    </>
  );
}

export default Admin;