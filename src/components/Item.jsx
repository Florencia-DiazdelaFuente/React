import React from "react";
import { Link } from "react-router-dom";




const Item = ({item}) => {
    return (
        <div>
            <div className="card cards">
                <img src={item.imagen} className="card-img-top w-50 align-self-center" alt={item.nombre}/>
                <div className="card-body d-flex flex-column justify-content-center">
                    <h5 className="card-title text-center">{item.nombre}</h5>
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