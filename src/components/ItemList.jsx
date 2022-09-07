import React from "react";
import Item from "./Item";


const ItemList = ({items}) => {
    return (
        <div className="row">
            {items.map(item => (
                <div key={item.id} className="col-md-4">
                <Item  nombre={item.nombre} precio={item.precio} img={item.img} />
                </div>)
            )}
        </div>
    )
}

export default ItemList;