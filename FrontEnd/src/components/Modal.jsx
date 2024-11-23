import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Boton from './Boton';

function Modal(props) {
    
    return(
    <Popup
    trigger={<button className="button"> Eliminar Tarea </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <div className="header"> ¿Desea Eliminar Esta Tarea? </div>

        <div className="actions">
        <Boton nombre = "Aceptar" onClickAlto = {props.onClickAlto}/>
        <Boton nombre = "Atrás" onClickAlto = {close}/>
        
        </div>
      </div>
    )}
  </Popup>
    )
};

  export default Modal