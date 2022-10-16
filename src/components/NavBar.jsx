import React from "react";
import logo from "./assets/images/bicicleta.png"
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    
        return (
            <div className="container border-bottom border-secondary w-100">
                <div className="row pt-3 pb-3">
                    
                        <div className= "col d-flex justify-content-center">
                            <Link to={"/"}>
                            <img src={logo} width="60px" alt="logo bici" />
                            </Link>
                        </div>

                        <div className="col-8 d-flex justify-content-evenly align-items-center" >
                            
                                <Link  to={"/"} className="btn btn-outline-dark">Home</Link>
                                <Link to={"/category/mountainBike"} className="btn btn-outline-dark">Mountain Bikes</Link>
                                <Link to={"/category/urbana"} className="btn btn-outline-dark">Urbanas</Link>
                                <Link to={"/category/plegable"} className="btn btn-outline-dark">Plegables</Link>
                            
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                        <CartWidget />
                        </div>
                </div>
        </div>
        )
    }

export default NavBar;
