import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";


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

    

    const [items, setItems] = useState([]);

    useEffect (() => {
        // const productos = [
        //     {id: 1, nombre:"OLMO WISH 290 R29 DISC ENTRY", precio: 93000, img:{olmoWish}},
        //     {id: 2, nombre:"VOLTA SVEL DEORE R29", precio: 30000, img:"./assets/images/voltaSvel.jpg"},
        //     {id: 3, nombre:"VAIRO XR8.5 R29", precio: 50000, img:"./assets/images/vairoXR.jpg"},
        //     {id: 4, nombre:"STARK AMSTERDAM R28 7V", precio: 70000, img:"./assets/images/starkAmsterdam.jpg"},
        //     {id: 5, nombre:"TRINX N106 R26", precio: 107000, img:"./assets/images/trinx.png"},
        //     {id: 6, nombre:"STARK THUNDER R29 21V", precio: 101000, img:"./assets/images/starkThunder.jpg"}
        // ];

        fetch("https://api.mercadolibre.com/sites/MLA/search?q=bicicleta%20raleigh%20&limit=12")

        .then((respuesta) => respuesta.json())
        .then((data) => {
        setItems(data.results);

        })
    }, [])

    return (
        <div>
            <h2 style={estilosTitulo}> {props.titulo} </h2>
            <p className= "propios"style={estilosMensaje}> {props.mensaje} </p>
            <div className="container">
                <ItemList items={items}/>
            </div>
            
        </div>
    )
}

export default ItemListContainer;