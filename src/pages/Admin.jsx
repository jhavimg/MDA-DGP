import '../css/Admin.css'
import Boton from '../components/Boton';
import Main from '../components/Main';
import Perfil from '../components/Perfil';
import Cabecera from '../components/Cabecera';

function Admin() {
  return (
    <>
    <Cabecera nombre = "Administrador" route = "/"/>
    <Perfil nombre = "Admin de prueba"/>

    
    <Boton  nombre = "Gestionar Alumnos" />
    <Boton nombre = "Gestionar Tareas" route = "/tarea_list"/>
    </>
  );
}

export default Admin;