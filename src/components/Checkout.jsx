import React from "react"
import Form from "./Form";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/Context";

const Checkout = () => {
    const [orderId, setOrderId] = useState('');
    const {clear} = useContext(CartContext)

    const handleId = (numeroDeOrden) => {
        setOrderId(numeroDeOrden);
    };
    if (orderId) {
        return (
            <div className="text-center py-5 altura">
                <h1>
                Gracias por tu compra! 
                </h1>
                <p>El número de seguimiento es:{' '}
                {orderId}
                </p>
                <Link to="/" className="btn btn-dark">Volver al inicio</Link>
                {clear()}
            </div>
        );
    }

    return(
        <div>
            <Form handleId={handleId} />
        </div>
    )
} 

export default Checkout;