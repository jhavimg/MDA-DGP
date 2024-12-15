/* import MenuComp from '../components/MenuComp';
import '../css/Alumno_Comandas.css';
import { useState } from 'react';

import menuImage from '../images/menu.png';
import carneImage from '../images/carne.png';
import sinCarneImage from '../images/sinCarne.png';
import frutaImage from '../images/fruta.png';
import trituradoSinCarneImage from '../images/trituradoSinCarne.png';
import trituradoImage from '../images/triturado.png';
import noLentejasImage from '../images/noLentejas.png';
import yogurNatillasImage from '../images/yogurNatillas.png';

function AlumnoComandas({ alumnoId }) {
    const [menuSelection, setMenuSelection] = useState([
        { nombre: "Menu", cantidad: 0, aula: "Aula 1" },
        { nombre: "Carne", cantidad: 0, aula: "Aula 1" },
        { nombre: "Sin Carne", cantidad: 0, aula: "Aula 1" },
        { nombre: "Fruta", cantidad: 0, aula: "Aula 1" },
        { nombre: "Triturado Sin Carne", cantidad: 0, aula: "Aula 1" },
        { nombre: "Triturado", cantidad: 0, aula: "Aula 1" },
        { nombre: "No Lentejas", cantidad: 0, aula: "Aula 1" },
        { nombre: "Yogur/Natillas", cantidad: 0, aula: "Aula 1" },
    ]);
    function handleQuantityChange(index, change) {
        setMenuSelection((prev) =>
            prev.map((menu, i) =>
                i === index
                    ? { ...menu, cantidad: Math.max(menu.cantidad + change, 0) }
                    : menu
            )
        );
    }

    async function submitSelection() {
        const payload = {
            fecha: new Date().toISOString(), // Fecha actual
            alumnoAsignado: alumnoId,
            menus: menuSelection.filter((menu) => menu.cantidad > 0), // Solo enviar los menús seleccionados
        };

        try {
            const response = await fetch('http://localhost:8000/api/peticiones_comedor/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                alert('Petición de comedor creada exitosamente');
            } else {
                const errorData = await response.json();
                alert(`Error al crear la petición: ${errorData.detail || 'Error desconocido'}`);
            }
        } catch (error) {
            alert('Error de red o de servidor');
            console.error(error);
        }
    }

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
                rel="stylesheet"
            ></link>
            <div className="cuerpo_comandas">
                <div className="menu-container">
                    <h1>MENÚS</h1>
                    <div className="numbers-grid">
                        {menuSelection.map((menu, index) => (
                            <MenuComp
                                key={menu.nombre}
                                image={[
                                    menuImage,
                                    carneImage,
                                    sinCarneImage,
                                    frutaImage,
                                    trituradoSinCarneImage,
                                    trituradoImage,
                                    noLentejasImage,
                                    yogurNatillasImage,
                                ][index]}
                                alt={menu.nombre}
                                quantity={menu.cantidad}
                                increment={() => handleQuantityChange(index, 1)}
                                decrement={() => handleQuantityChange(index, -1)}
                            />
                        ))}
                    </div>
                    <button className="done-button" onClick={submitSelection}>
                        Hecho ✔
                    </button>
                </div>
            </div>
        </>
    );
}

export default AlumnoComandas;
 */

import MenuComp from '../components/MenuComp';
import '../css/Alumno_Comandas.css';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import Boton from "../components/Boton";

import menuImage from '../images/menu.png';
import carneImage from '../images/carne.png';
import sinCarneImage from '../images/sinCarne.png';
import frutaImage from '../images/fruta.png';
import trituradoSinCarneImage from '../images/trituradoSinCarne.png';
import trituradoImage from '../images/triturado.png';
import noLentejasImage from '../images/noLentejas.png';
import yogurNatillasImage from '../images/yogurNatillas.png';

function AlumnoComandas() {
    const { tareaId } = useParams(); // Captura el ID de la tarea desde la URL
    const location = useLocation();
    const aula = location.state?.aula; // Capturar el aula correctamente desde la navegación

    // Verificar si el aula no está definida
    useEffect(() => {
        if (!aula) {
            console.error("Aula no especificada en la navegación. Revisa el flujo de datos.");
        }
    }, [aula]);

    const [menuSelection, setMenuSelection] = useState([]);

    useEffect(() => {
        if (aula) {
            // Inicializa los menús con el aula seleccionada
            setMenuSelection([
                { nombre: "Menu", cantidad: 0, aula },
                { nombre: "Carne", cantidad: 0, aula },
                { nombre: "Sin Carne", cantidad: 0, aula },
                { nombre: "Fruta", cantidad: 0, aula },
                { nombre: "Triturado Sin Carne", cantidad: 0, aula },
                { nombre: "Triturado", cantidad: 0, aula },
                { nombre: "No Lentejas", cantidad: 0, aula },
                { nombre: "Yogur/Natillas", cantidad: 0, aula },
            ]);
        }
    }, [aula]); // Solo se ejecuta cuando cambia `aula`

    function handleQuantityChange(index, change) {
        setMenuSelection((prev) =>
            prev.map((menu, i) =>
                i === index
                    ? { ...menu, cantidad: Math.max(menu.cantidad + change, 0) }
                    : menu
            )
        );
    }

    async function submitSelection() {
        const menusWithAula = menuSelection.filter((menu) => menu.cantidad > 0);

        const payload = {
            menus: menusWithAula,
        };

        try {
            const response = await fetch(`http://localhost:8000/api/peticiones_comedor/${tareaId}/menus/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                alert('Menús actualizados exitosamente');
            } else {
                const errorData = await response.json();
                alert(`Error al actualizar los menús: ${errorData.detail || 'Error desconocido'}`);
            }
        } catch (error) {
            alert('Error de red o de servidor');
            console.error(error);
        }
    }

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
                rel="stylesheet"
            ></link>
            <div className="cuerpo_comandas">
                <div className="menu-container">
                    <div className="cabecera-peticion">
                        <Boton className = "boton-volver-atras" nombre = "Volver atrás   ↩" route = "/clases_comandas"/>
                        <h1>MENÚS DEL AULA {aula || "no especificada"}</h1>
                    </div>
                    <div className="numbers-grid">
                        {menuSelection.map((menu, index) => (
                            <MenuComp
                                key={menu.nombre}
                                image={[
                                    menuImage,
                                    carneImage,
                                    sinCarneImage,
                                    frutaImage,
                                    trituradoSinCarneImage,
                                    trituradoImage,
                                    noLentejasImage,
                                    yogurNatillasImage,
                                ][index]}
                                alt={menu.nombre}
                                quantity={menu.cantidad}
                                increment={() => handleQuantityChange(index, 1)}
                                decrement={() => handleQuantityChange(index, -1)}
                            />
                        ))}
                    </div>
                    <button className="done-button" onClick={submitSelection}>
                        Hecho ✔
                    </button>
                </div>
            </div>
        </>
    );
}

export default AlumnoComandas;


