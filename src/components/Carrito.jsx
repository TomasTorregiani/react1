import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className="container">
            <h1 className="main-title">Carrito</h1>

            {
                carrito.map( (prod) => (
                    <div key={prod.id}>
                        <br></br>
                        <h3>{prod.titulo}</h3>
                        <p>Precio unitario: ${prod.precio}</p>
                        <p>Precio total: {prod.precio * prod.cantidad}</p>
                        <p>Cantidad: {prod.cantidad}</p>
                    </div>
                    
                ) )
            }
        {
            carrito.length > 0 ?
            <div>
                <h2><br></br>Precio Total: ${precioTotal()}</h2>
                <button onClick={handleVaciar}>Vaciar Carrito</button>
            </div> :
            <h2>El carrito esta vacio</h2>
            
        }
        
        
        
        </div>
    )
}

export default Carrito;