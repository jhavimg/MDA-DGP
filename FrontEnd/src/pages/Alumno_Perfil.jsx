import '../css/Admin.css'
import Boton from '../components/Boton';
import Perfil from '../components/Perfil';
import Cabecera from '../components/Cabecera';
import { useState, useEffect } from 'react';
import Accesibilidad from '../components/Accesibilidad';
import { useParams } from 'react-router-dom';

function AlumnoPerfil() {
  const { id } = useParams();
  const [alumno, setAlumno] = useState({});
  const [loading, setLoading] = useState(true);

  const URL_IMAGEN_POR_DEFECTO =  "https://pbs.twimg.com/profile_images/1665732637011460097/_HijfwBd_400x400.jpg";
  ///////////////////////////////////////FALTA GET//////////////////////////////////////////////////////////7

  async function getAlumno() {
    try {
      const response = await fetch(`https://especialeduca.jmarin.dev/api/alumnos/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setAlumno(data.data); 
    } catch (error) {
      console.error("Error al obtener el alumno:", error);
      setAlumno({});
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAlumno();
  }, [id]);

  if (loading) {
    return <div>Cargando datos del alumno...</div>;
  }

  return (
    <>
      <Cabecera nombre="Alumno" route="/alumno_list" />
      <div>
        <Perfil nombre={alumno.nickname} foto={alumno.foto || URL_IMAGEN_POR_DEFECTO} fechaNacimiento={alumno.fechaNacimiento}/>
        <br/>
        <Boton nombre="Seguimiento" route="/seguimiento" />
        
      </div>
      <br/>
      <Accesibilidad />
      <Boton nombre="Guardar" />
    </>
  );
}

export default AlumnoPerfil;