import "../css/Comp.css"
import { useState, useEffect } from "react";

//Componente que muestra una tarea
function MenuComp({alt, image, cant, onClickSub, onClickAdd}){



    

    return(<>
           <div className="number-box">
                <img src= {require("../images/menu.png")} alt = {alt}/>
                <div className="quantity-controls">
                    <button onClick={onClickSub}>-</button>
                    <span className="quantity">{cant}</span>
                    <button onClick={onClickAdd}>+</button>
                </div>
            </div>
        </>
        
    );
}

export default MenuComp