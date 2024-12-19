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
