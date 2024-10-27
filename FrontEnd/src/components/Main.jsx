import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Admin from '../pages/Admin';
import TareaList from '../pages/Tarea_list';
import Tarea_form from '../pages/Tarea_form';
import Alumno from '../pages/Alumno';
import Tarea_detail from '../pages/Tarea_detail';
import AlumnoList from "../pages/Alumno_list"
import AlumnoForm from "../pages/AlumnoForm"

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home/>}></Route>
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