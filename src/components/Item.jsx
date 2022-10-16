import React from "react";
import { Link } from "react-router-dom";


const Item = ({item}) => {
    return (
        <div>
            <div className="card cards w-100 cardHeight ">
                <img src={item.imagen} className="w-75 align-self-center" alt={item.nombre}/>
                <div className="card-body d-flex flex-column justify-content-center">
                    <h6 className="card-title text-center">{item.nombre}</h6>
                    <p className="card-text text-center">${item.precio}</p>
                    <Link to={"/item/" + item.id} className="btn btn-dark align-self-center">
                    Ver detalle
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Item;