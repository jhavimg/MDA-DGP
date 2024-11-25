import Popup from "reactjs-popup";
import Boton from './Boton';
import "reactjs-popup/dist/index.css";

function Modal(props) {
    return (
        <Popup
            trigger={
                <button className="boton-eliminar">
                    <i className="fas fa-trash-alt"></i> {/* Ícono de papelera */}
                </button>
            }
            modal
            nested
        >
            {close => (
                <div className="modal">
                    <div className="header">¿Desea Eliminar Esta Tarea?</div>

                    <div className="actions">
                      <Boton nombre = "Aceptar" onClickAlto = {props.onClickAlto}/>
                      <Boton nombre = "Atrás" onClickAlto = {close}/>
                    </div>
                </div>
            )}
        </Popup>
    );
}

export default Modal;
