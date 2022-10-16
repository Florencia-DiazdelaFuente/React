import React, { useEffect, useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);


    const disminuirCantidad = (valor) => {
        if (valor > 0) {
        setCounter(valor);
        } 
    }

    const aumentarCantidad = (valor) => {

        if (valor <= itemStock) {
            setCounter(valor);
            } 
    }

    const agregarProductos = () => {
        if (counter <= itemStock) {
            onAdd(counter);
            setItemStock(itemStock - counter);
            setCounter(itemStock + counter)
        }
    }

    useEffect (()=>{
        setItemStock(stock);
    }, [stock])


    return (

        <div className="container">
            <div className="row justify-content-center">
                <div className="border border-dark mb-2">
                    <p className="text-center text-decoration-underline">NOMBRE DEL PRODUCTO</p>
                    <div className="input-group">
                        <input  type="button" className="btn btn-dark" value="-" onClick={()=>{disminuirCantidad(counter - 1)}}/>
                        <input type="text" className="form-control" value={counter} onChange={()=>{}} />
                        <input type="button" className="btn btn-dark" value="+" onClick={()=>{aumentarCantidad(counter + 1)}} />
                    </div>
                    <div className="d-grid gap-2 py-3">
                        <input type="button" className="btn btn-dark " value="Agregar" onClick={()=>{agregarProductos()}} />
                    </div>
                    <p>Cantidad de productos seleccionados: {counter}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;