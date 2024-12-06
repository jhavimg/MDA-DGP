import '../css/Admin.css';
import Boton from '../components/Boton';
import Perfil from '../components/Perfil';
import Cabecera from '../components/Cabecera';
import { useState, useEffect } from 'react';
import Accesibilidad from '../components/Accesibilidad';
import { useParams, useNavigate } from 'react-router-dom';

function AlumnoPerfil() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [alumno, setAlumno] = useState({});
  const [loading, setLoading] = useState(true);
  const [accesibilidadesAlumno, setAccesibilidadesAlumno] = useState({});
  const URL_IMAGEN_POR_DEFECTO = "https://pbs.twimg.com/profile_images/1665732637011460097/_HijfwBd_400x400.jpg";

  useEffect(() => {
    async function getAlumno() {
      try {
        setLoading(true);
        const response = await fetch(`https://especialeduca.jmarin.dev/api/alumnos/${id}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setAlumno(data.data);

        const accesibilidadesResponse = await fetch(`https://especialeduca.jmarin.dev/api/alumnos/${id}/accesibilidades/`);
        if (!accesibilidadesResponse.ok) throw new Error(`HTTP error! status: ${accesibilidadesResponse.status}`);
        const accesibilidadesData = await accesibilidadesResponse.json();
        if (accesibilidadesData && accesibilidadesData.data) {
          const accesibilidadesSeleccionadas = {};
          accesibilidadesData.data.forEach(accesibilidad => {
            accesibilidadesSeleccionadas[accesibilidad.id] = true;
          });
          setAccesibilidadesAlumno(accesibilidadesSeleccionadas);
        } else {
          setAccesibilidadesAlumno({});
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setAlumno({});
      } finally {
        setLoading(false);
      }
    }

    getAlumno();
  }, [id]);

  const handleAccesibilidadesChange = (nuevasAccesibilidades) => {
    setAccesibilidadesAlumno(nuevasAccesibilidades);
  };

  const guardarAccesibilidades = async () => {
    try {
      setLoading(true);
      const accesibilidadesIds = Object.entries(accesibilidadesAlumno)
        .filter(([id, isSelected]) => isSelected)
        .map(([id]) => id);

      const response = await fetch(`https://especialeduca.jmarin.dev/api/alumnos/${id}/accesibilidades/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accesibilidades: accesibilidadesIds })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error al guardar accesibilidades: ${response.status} ${errorData.message || ''}`);
      }

      navigate(`/alumno_list`);

    } catch (error) {
      console.error("Error al guardar las accesibilidades:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Cargando datos del alumno...</div>;
  }

  if (!alumno) {
    return <div>No se encontró el alumno.</div>;
  }

  return (
    <>
      <Cabecera nombre="Alumno" route="/alumno_list" />
      <div>
        <Perfil nombre={alumno.nickname} foto={alumno.foto || URL_IMAGEN_POR_DEFECTO} fechaNacimiento={alumno.fechaNacimiento} />
        <br />
        <Boton nombre="Seguimiento" route={`/seguimiento/${id}`} />
        <Boton nombre="Establecer Login" route={`/login_form/${id}`} />
      </div>
      <br />
      <Accesibilidad initialAccesibilidades={accesibilidadesAlumno} onAccesibilidadesChange={handleAccesibilidadesChange} />
      <Boton nombre="Guardar" onClick={guardarAccesibilidades} />
    </>
  );
}

export default AlumnoPerfil;