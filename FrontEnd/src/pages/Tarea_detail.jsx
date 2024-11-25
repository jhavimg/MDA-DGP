import React from 'react';
import { useParams } from 'react-router-dom';
import Cabecera from "../components/Cabecera";
import Tarea from "../components/Tarea";

const Tarea_detail = () => {
  const { id } = useParams(); // Obtén el id de la URL

  return (
    <>
      <Cabecera nombre="Detalle de Tarea" route="/tarea_list" />
      <Tarea ident={id} /> {/* Pasa el id al componente Tarea */}
    </>
  );
}

export default Tarea_detail;
