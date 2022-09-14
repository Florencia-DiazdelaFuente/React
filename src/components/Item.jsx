import React from "react";
import { Link } from "react-router-dom";


const Item = ({item}) => {
    return (
        <div>
            <div className="card cards">
                <img src={item.thumbnail} className="card-img-top w-50 align-self-center" alt={item.title}/>
                <div className="card-body d-flex flex-column justify-content-center">
                    <h5 className="card-title text-center">{item.title}</h5>
                    <p className="card-text text-center">${item.price}</p>
                    <Link to={"/item/" + item.id} className="btn btn-dark align-self-center" target="_blank" rel="noreferrer">
                    Comprar
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Item;