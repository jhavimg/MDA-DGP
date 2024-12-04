import "../css/AForm.css";
import { useState, useEffect } from 'react';

function Accesibilidad({ initialAccesibilidades, onAccesibilidadesChange }) {
    const [accesibilidadesSeleccionadas, setAccesibilidadesSeleccionadas] = useState({});
    const [accesibilidades, setAccesibilidades] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchAccesibilidades() {
            try {
                const response = await fetch('https://especialeduca.jmarin.dev/api/accesibilidades/');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                if (data.success && data.data) {
                    setAccesibilidades(data.data);
                    const initialSelection = {};
                    data.data.forEach(item => {
                        initialSelection[item.id] = false;
                    });
                    setAccesibilidadesSeleccionadas(initialAccesibilidades || initialSelection);

                } else {
                    throw new Error('Formato de datos incorrecto');
                }
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }
        fetchAccesibilidades();
    }, []);

    useEffect(() => {
        if (onAccesibilidadesChange && Object.keys(accesibilidadesSeleccionadas).length > 0) {
            onAccesibilidadesChange(accesibilidadesSeleccionadas);
        }
    }, [accesibilidadesSeleccionadas, onAccesibilidadesChange]);


    const handleCheckboxChange = (id) => {
        setAccesibilidadesSeleccionadas(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    if (loading) {
        return <div>Cargando accesibilidades...</div>;
    }

    if (error) {
        return <div>Error cargando accesibilidades: {error.message}</div>;
    }

    return (
        <div className="section">
            <h2>Accesibilidad:</h2>
            <div className="section">
                <h4>Selecciona las accesibilidades:</h4>
                <div className="checkbox-group">
                    {accesibilidades.map((accesibilidad) => (
                        <label key={accesibilidad.id}>
                            <input
                                type="checkbox"
                                name={accesibilidad.nombre}
                                value={accesibilidad.id}
                                checked={accesibilidadesSeleccionadas[accesibilidad.id] || false}
                                onChange={() => handleCheckboxChange(accesibilidad.id)}
                            />
                            {accesibilidad.nombre}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Accesibilidad;