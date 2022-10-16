import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import { useParams } from "react-router-dom"; 


const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const {categoryName} = useParams(); 

    useEffect (() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Items");
        const queryItems = categoryName ? query(itemsCollection, where("categoria", "==", categoryName)) : itemsCollection;
        getDocs(queryItems).then((response)=>{
            const products = response.docs.map((prod)=>{
                return {
                    id: prod.id,
                    ...prod.data(),
                };
            });
            setItems(products)
        })

    }, [categoryName]);

    

    return (
        <div>
            <h4 className="text-center my-4"> THE BIKE STORE </h4>
            <div className="container text-center">
                <ItemList items={items}/>
            </div>
        </div>
    )
}

export default ItemListContainer;