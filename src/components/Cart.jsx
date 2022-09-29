import React, { useContext } from "react";
import { CartContext } from "./context/Context";



const Cart = () => {

    const {cart, deleteOne, clear, cartTotal, precioTotal} = useContext(CartContext);

    
    return (
        <div>
            <h2 className="text-center mb-3 ">CARRITO</h2> 
            
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    {cart.map((prod)=>(
                        <div key={prod.id} className="d-flex flex-row border border-dark mb-3 mx-3" >
                            <img className="p-3" src={prod.imagen} alt={prod.nombre}/>
                            <div className="p-2">
                                <h6>{prod.nombre}</h6>
                                <p>Cantidad: {prod.cantidad}</p>
                                <p>Precio: ${prod.precio}</p>
                                <button className="btn btn-outline-dark" onClick={()=>deleteOne(prod.id)}>
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    )) }
                    </div>
                        <div className="col-md-4 border border-dark h-50 py-2">
                            <h5>RESUMEN DEL PEDIDO </h5>
                            <p>Productos: {cartTotal()}</p>
                            <p>Total: ${precioTotal()}</p>
                            <button className="btn btn-outline-dark mx-3" onClick={clear}>
                                    Eliminar todo
                            </button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;