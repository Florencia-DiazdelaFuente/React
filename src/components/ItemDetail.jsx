import React from "react";
import ItemCount from './ItemCount';

const ItemDetail = ({prod}) => {


    return(
        <div className="row border border-dark my-3 py-2">
            <div className="col-md-4">
                <img src={prod.thumbnail} alt={prod.title}/>
            </div>
            <div className="col-md-4">
                <h5>{prod.title}</h5>
                <p>${prod.price}</p>
            </div>
            <div className="col-md-4">
                <ItemCount stock={10} initial={1} onAdd={0}/>
            </div>


        </div>
    )

}

export default ItemDetail;