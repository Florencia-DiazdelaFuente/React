import React from "react";
import portada from "./assets/images/portada.png"

const Home = () => {

    return (
        <div className="text-center">
            <h1>THE BIKE STORE</h1>
            <h6>Bienvenidos a The Bike Store</h6>
            <div><img className="w-100" src={portada} alt=""></img></div>
            
        </div>
    )
}

export default Home;