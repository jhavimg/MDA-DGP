import { useParams } from 'react-router-dom';
import Agenda from "../components/Agenda.jsx";
import Cabecera from '../components/Cabecera';

function Seguimiento() {
  const { id } = useParams();

  return (
    <>
      <Cabecera nombre="Agenda Semanal" route={`/alumno_perfil/${id}`} />
      <Agenda alumnoId={id} />
    </>
  );
}

export default Seguimiento;