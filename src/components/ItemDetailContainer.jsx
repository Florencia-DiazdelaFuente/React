import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {getFirestore, doc, getDoc} from "firebase/firestore";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();
    
    useEffect (() => {

        const db = getFirestore();
        const response = doc(db, "Items", id);
        getDoc(response).then((resultado)=>{
            if (resultado.exists()) {
                setItem({id: resultado.id, ...resultado.data()})
            }
        });
    }, [id]);

    return (
        <div>
            <div className="container vh-auto">
                <ItemDetail item={item}/>
            </div>
        </div>
    )
}


export default ItemDetailContainer;