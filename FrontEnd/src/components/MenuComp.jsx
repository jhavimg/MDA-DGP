/* import "../css/Comp.css"
import { useState, useEffect } from "react";

//Componente que muestra una tarea
function MenuComp({image, alt}){

    const [cant, setCant] = useState(0);
    function increment() {
        setCant(cant => cant+1);

    }

    // Decrementar la cantidad
    function decrement() {
        if (cant > 0)
            setCant(cant=> cant -1);
    }
    

    return(<>
           <div className="number-box">
                <img className="img-menu" src= {image} alt = {alt}/>
                <div className="quantity-controls">
                    <button onClick={decrement}>-</button>
                    <span className="quantity">{cant}</span>
                    <button onClick={increment}>+</button>
                </div>
            </div>
        </>
        
    );
}

export default MenuComp */

import "../css/Comp.css";

function MenuComp({ image, alt, quantity, increment, decrement }) {
    return (
        <div className="number-box">
            <img className="img-menu" src={image} alt={alt} />
            <div className="quantity-controls">
                <button onClick={decrement}>-</button>
                <span className="quantity">{quantity}</span>
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
}

export default MenuComp;
