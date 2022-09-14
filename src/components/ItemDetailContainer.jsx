import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();
    
    useEffect (() => {

        fetch("https://api.mercadolibre.com/sites/MLA/search?q=bicicleta%20raleigh%20&limit=12")

        .then((respuesta) => respuesta.json())
        .then((data) => {
            const product = data.results.find((element) => element.id === id);
        
        console.log(data.results[0].id);
        
        setItem(product);

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
    }, [id])

    return (
        <div>
            <div className="container">
                <ItemDetail item={item}/>
            </div>
        </div>
    )
}


export default ItemDetailContainer;