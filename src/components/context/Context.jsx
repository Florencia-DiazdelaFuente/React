import React from "react";
import { useState, createContext } from "react";

export const CartContext = createContext();

const Provider = (props)=> {
    const [cart, setCart] = useState([])

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            let producto = cart.find(el => el.id === item.id);
            cart[cart.indexOf(producto)].cantidad += cantidad;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, cantidad:cantidad}]);
        }
    }

    const clear = () => {
        setCart([])
    }


    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.cantidad, 0)
    }


    const deleteOne = (id) => {
            const productosFiltrados = cart.filter ((el)=>el.id !== id);
            setCart(productosFiltrados);
        
    }

    const precioTotal = () =>{
        const copia = [...cart];
        let precio = 0;
        copia.forEach((producto)=>{
            precio = precio + producto.precio
        });
        return precio;

    }

    

    return (
        <CartContext.Provider value={{cart, addItem, clear, cartTotal, deleteOne, precioTotal}}>
            {props.children}

        </CartContext.Provider>

    )

}

export default Provider;
