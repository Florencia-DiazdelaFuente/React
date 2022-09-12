import React from "react";
import Item from "./Item";


const ItemList = ({items}) => {
    return (
        <div className="row align-items-center justify-items-center">
            {items.map(item => (
                <div key={item.id} className="col-md-3">
                <Item item={item} />
                </div>)
            )}
        </div>
    )
}

export default ItemList;