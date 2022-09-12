import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [prod, setProd] = useState([]);
    
    useEffect (() => {

        fetch("https://api.mercadolibre.com/sites/MLA/search?q=bicicleta%20raleigh%20&limit=12")

        .then((respuesta) => respuesta.json())
        .then((data) => {
        setProd(data.results[0]);

        // const getProd = new Promise((resolve, reject)=> {
            
        //     const product = prod.find((prod)=>prod.id===1)
        //     setTimeout(()=>{
        //         resolve(product);
        //     }, 2000)
        // })

        // getProd.then((respuesta)=>{
        //     setProd(respuesta);
        // })
    })
    }, [])

    return (
        <div>
            <div className="container">
                <ItemDetail prod={prod}/>
            </div>
        </div>
    )
}


export default ItemDetailContainer;