import React from "react";

const ItemListContainer = (props) => {

    return (
        <div>
            <p> {props.titulo} </p>
            <p> {props.mensaje} </p>

        </div>
    )
}

export default ItemListContainer;