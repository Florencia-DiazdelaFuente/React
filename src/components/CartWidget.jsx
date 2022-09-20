import React, { useContext } from "react";
import { Link } from "react-router-dom";
import carrito from "./assets/images/carrito.png"
import { CartContext } from "./context/Context";
import tacho from "./assets/images/tacho.png"

const CartWidget = () => {

    const {cartTotal, clear} = useContext(CartContext)

    return (
        <div>
            <Link to={"/cart"}>
                <button type="button" className="btn btn-light border border-dark">
                    <img src={carrito} width="40" alt="imagen carrito" />
                    <span >{cartTotal()}</span>
                </button> 
            </Link>
            <button type="button" className="btn "  onClick={()=>{clear()}}>
                <img src={tacho} className="border border-0" width= "20" alt= "icono tacho"/>
            </button>
        </div>
    )
}

export default CartWidget;