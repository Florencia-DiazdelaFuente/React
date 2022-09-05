import React from "react";
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [cantidad, setCantidad] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdd, setItemAdd] = useState(onAdd);

    const disminuirCantidad = (valor) => {
        if (valor > -1) {
        setCantidad(valor);
        } 
    }

    const aumentarCantidad = (valor) => {

        if (valor <= itemStock) {
            setCantidad(valor);
            } 
    }

    const agregarProductos = () => {
        if (cantidad <= itemStock) {
            setItemStock(itemStock - cantidad);
            setItemAdd(itemAdd + cantidad)

        }
        

    }


    return (

        <div className="container">
            <div className="row justify-content-end">
                <div className="col-md-3 border border-dark mb-2">
                    <p className="text-center text-decoration-underline">NOMBRE DEL PRODUCTO</p>
                    <div className="input-group">
                        <input  type="button" className="btn btn-dark" value="-" onClick={()=>{disminuirCantidad(cantidad - 1)}}/>
                        <input type="text" className="form-control" value={cantidad} />
                        <input type="button" className="btn btn-dark" value="+" onClick={()=>{aumentarCantidad(cantidad + 1)}} />
                    </div>
                    <div className="d-grid gap-2 py-3">
                        <input type="button" className="btn btn-dark " value="Agregar" onClick={()=>{agregarProductos()}} />
                    </div>
                    <p>Cantidad de productos seleccionados: {itemAdd}</p>

                </div>
                
            </div>
            
        </div>
        
    )
}

export default ItemCount;