import React from "react";


const Item = ({id, nombre, img, precio}) => {
    return (
        <div className="col-md-4">
            <div className="card cards">
                <img src={img} className="card-img-top" alt={nombre}/>
                <div className="card-body">
                    <h5 className="card-title text-center">{nombre}</h5>
                    <p className="card-text text-center">${precio}</p>
                </div>
            </div>
        </div>
    );
}

export default Item;