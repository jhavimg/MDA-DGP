import '../css/Admin.css'
import Boton from '../components/Boton';
import Perfil from '../components/Perfil';
import Cabecera from '../components/Cabecera';
import { useState, useEffect } from 'react';

function Profesor() {

  const [profe, setProfe] = useState({});


  async function getProfe(){
    let promise = await fetch("https://especialeduca.jmarin.dev/api/profesores");
    let response = await promise.json();
    setProfe(response);
    console.log(profe);
}
/*
useEffect(()=>{
    getProfe();
    
}, [])
*/
  useEffect(() => {
    setProfe({
      nombre : "Alonso Macías (Profesor)",
      foto : "https://pbs.twimg.com/profile_images/1665732637011460097/_HijfwBd_400x400.jpg"
    });
  }, []);
  


  return (
    <>
    <Cabecera nombre = "Profesor" route = "/"/>
    <Perfil nombre = {profe.nombre} foto = {profe.foto}/>

    
    <Boton  nombre = "Pedir Material" route ="/Pedir_material"/>
    </>
  );
}

export default Profesor;