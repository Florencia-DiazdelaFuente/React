import React from "react";
import carrito from "./assets/images/carrito.png"

const CartWidget = () => {

    return (
        <div>
            <img src={carrito} width="40" alt="imagen carrito" />
        </div>
    )
}

export default CartWidget;