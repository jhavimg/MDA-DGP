import '../css/Admin.css'
import Boton from '../components/Boton';
import Perfil from '../components/Perfil';
import Cabecera from '../components/Cabecera';
import { useState, useEffect } from 'react';
import Accesibilidad from '../components/Accesibilidad';

function AlumnoPerfil() {

  const [alumno, setAlumno] = useState({});

  async function getAlumno(){
    let promise = await fetch("https://especialeduca.jmarin.dev/api/alumnos");
    let response = await promise.json();
    setAlumno(response);
    console.log(alumno);
}
/*
useEffect(()=>{
    getAdmin();
    
}, [])
*/
  useEffect(() => {
    setAlumno({
      nombre : "Alonso Macías(Alumno)",
      foto : "https://pbs.twimg.com/profile_images/1665732637011460097/_HijfwBd_400x400.jpg"
    });
  }, []);
  


  return (
    <>
    <Cabecera nombre = "Alumno" route = "/alumno_list"/>
    <div>
    <Perfil nombre = {alumno.nombre} foto = {alumno.foto}/>
    <Boton  nombre = "Seguimiento" route ="/seguimiento"/>
    </div>
    <Accesibilidad />
    <Boton nombre = "Guardar" />   
    
    </>
  );
}

export default AlumnoPerfil;