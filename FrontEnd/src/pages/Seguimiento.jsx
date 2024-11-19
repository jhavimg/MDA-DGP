import '../css/Admin.css'
import Agenda from "../components/Agenda.jsx"
import Cabecera from '../components/Cabecera';


function Seguimiento() {

  return (
    <>
    <Cabecera nombre = "Agenda Semanal" route = "/alumno_perfil"/>
    <Agenda/>
    </>
  );
}

export default Seguimiento;