import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import {getFirestore, collection, getDocs} from "firebase/firestore";
// import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {
    // let estilosTitulo = { 
    //     color: "white",
    //     backgroundColor: "black",
    //     textAlign: "center",
    //     padding: "30px 0"
    // }
    // let estilosMensaje ={
    //     textAlign: "center",
    //     textDecoration: "underline"
    // }

    
    // const {id} = useParams()
    const [items, setItems] = useState([]);

    useEffect (() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Items");
        // const queryItems = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(itemsCollection).then((snapshot)=>{

            setItems(snapshot.docs.map((item)=> ({id: item.id, ...item.data()})))
        })
    }, []);

    

    return (
        <div>
            <h2> THE BIKE STORE </h2>
            <div className="container">
                <ItemList items={items}/>
            </div>
            
        </div>
    )
}

export default ItemListContainer;