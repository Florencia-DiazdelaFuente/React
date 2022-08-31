import React from "react";

const ItemListContainer = (props) => {
    let estilosTitulo = { 
        color: "white",
        backgroundColor: "black",
        textAlign: "center",
        padding: "30px 0"
    }
    let estilosMensaje ={
        textAlign: "center",
        textDecoration: "underline"
    }

    return (
        <div>
            <h2 style={estilosTitulo}> {props.titulo} </h2>
            <p className= "propios"style={estilosMensaje}> {props.mensaje} </p>

        </div>
    )
}

export default ItemListContainer;