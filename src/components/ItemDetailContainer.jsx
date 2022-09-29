import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {getFirestore, doc, getDoc} from "firebase/firestore";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();
    
    useEffect (() => {

        const db = getFirestore();
        const response = doc(db, "Items","2NURDUSNIQMjdRUR6T3S");
        getDoc(response).then((resultado)=>{
            if (resultado.exists()) {
                setItem({id: resultado.id, ...resultado.data()})
            }
        });
    }, [id]);
        // const getProductos = new Promise ((resolve)=>{
        //     setTimeout(()=>{
        //         resolve(Products.find(producto => producto.id === id) || [] );
        //         setLoading(false);
        //     }, 2000);
        // })
    //     getProducts.then((respuesta)=>{
    //         setItem(respuesta);
    //     })
    // }, [id])
    //-----------------------------------------------------------------------------------

    //     fetch("https://api.mercadolibre.com/sites/MLA/search?q=bicicleta%20raleigh%20&limit=12")

    //     .then((respuesta) => respuesta.json())
    //     .then((data) => {
    //         const product = data.results.find((element) => element.id === id);
        
    //     setItem(product);

    // })
    // }, [id])

    return (
        <div>
            <div className="container">
                <ItemDetail item={item}/>
            </div>
        </div>
    )
}


export default ItemDetailContainer;