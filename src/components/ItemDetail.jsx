import React, { useContext, useState } from "react";
import {Link} from "react-router-dom"
import { CartContext } from "./context/Context";
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {

    const {addItem} = useContext(CartContext);
    const [counter, setCounter] = useState(0);

    const onAdd = (counter) => {
        setCounter(counter);
        addItem(item, counter);
    }

    return(
        <div className="itemDetail">
            <div className="row border border-dark my-3 py-2 w-75 d-flex flex-row align-items-center">
            <div className="col-md-4">
                <img src={item.imagen} alt={item.nombre}/>
            </div>
            <div className="col-md-4">
                <h5>{item.nombre}</h5>
                <p>Precio: ${item.precio}</p>
            </div>
            <div className="col-md-4">
                {counter === 0 ? <ItemCount stock={10} initial={1} onAdd={onAdd}/> : <Link to={"/cart"} className="btn btn-dark" > Ir al carrito </Link> }
            </div>
        </div>
        </div>
    )
}

export default ItemDetail;