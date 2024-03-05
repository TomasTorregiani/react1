


const ItemCount = ({cantidad, handleRestar, handleSumar, handleAgregar}) => {

    return (
        <div>
            <div className="item-count">
            <button onClick={handleRestar} className="item-count-button">-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar} className="item-count-button">+</button>
        </div>
        <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;