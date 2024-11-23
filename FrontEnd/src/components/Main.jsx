import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Admin from '../pages/Admin';
import TareaList from '../pages/Tarea_list';
import Tarea_form from '../pages/Tarea_form';
import Tarea_detail from '../pages/Tarea_detail';
import Seguimiento from '../pages/Seguimiento';
import Pedir_Material from '../pages/Pedir_Material';
import Alumno from '../pages/Alumno';
import AlumnoPerfil from '../pages/Alumno_Perfil';
import AlumnoList from "../pages/Alumno_list";
import AlumnoForm from "../pages/AlumnoForm";
import AlumnoComandas from "../pages/Alumno_Comandas";
import ClasesComandas from "../pages/Clases_Comandas";
import Profesor from '../pages/Profesor';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/admin' element={<Admin/>}></Route>
      <Route exact path='/tarea_list' element={<TareaList/>}></Route>
      <Route exact path='/Tarea_form' element={<Tarea_form/>}></Route>
      <Route exact path='/tarea_detail' element={<Tarea_detail/>}></Route>
      <Route exact path='/seguimiento' element={<Seguimiento/>}></Route>
      <Route exact path='/pedir_material' element={<Pedir_Material/>}></Route>
      <Route exact path='/alumno' element={<Alumno/>}></Route>
      <Route exact path='/alumno_perfil' element={<AlumnoPerfil/>}></Route>
      <Route exact path='/alumno_list' element={<AlumnoList/>}></Route>
      <Route exact path='/alumno_form' element={<AlumnoForm/>}></Route>
      <Route exact path='/clases_comandas' element={<ClasesComandas/>}></Route>
      <Route exact path='/alumno_comandas' element={<AlumnoComandas/>}></Route>
      <Route exact path='/profesor' element={<Profesor/>}></Route>
      
      
    </Routes>
  );
}

export default Main;