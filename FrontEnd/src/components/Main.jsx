import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Admin from '../pages/Admin';
import TareaList from '../pages/Tarea_list';
import Tarea_form from '../pages/Tarea_form';
import Alumno from '../pages/Alumno';
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
import PeticionComandasForm from '../pages/PeticionComandasForm';
import LoginMain from "../pages/LoginMain";
import LoginAlumnoTexto from "../pages/LoginAlumnoTexto"
import LoginAlumnoPicto from "../pages/LoginAlumnoPicto"

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/login' element={<LoginMain/>}></Route>
      <Route exact path='/login_alumno_texto/:user' element={<LoginAlumnoTexto/>}></Route>
      <Route exact path='/login_alumno_picto/:user' element={<LoginAlumnoPicto/>}></Route>
      <Route exact path='/admin' element={<Admin/>}></Route>
      <Route exact path='/tarea_list' element={<TareaList/>}></Route>
      <Route exact path='/tarea_form' element={<Tarea_form/>}></Route>
      <Route exact path='/tarea_detail' element={<Tarea_detail/>}></Route>
      <Route exact path='/alumno' element={<Alumno/>}></Route>
      <Route exact path='/Alumno_list' element={<AlumnoList/>}></Route>
      <Route exact path='/Alumno_form' element={<AlumnoForm/>}></Route>
      
      
    </Routes>
  );
}

export default Main;