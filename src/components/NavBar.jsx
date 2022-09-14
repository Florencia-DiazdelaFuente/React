import React from "react";
import logo from "./assets/images/bicicleta.png"
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    
        return (
            <div className="container">
                <div className="row pt-3 pb-3">
                    
                        <div className= "col d-flex justify-content-center">
                            <Link to={"/"}>
                            <img src={logo} width="60px" alt="logo bici" />
                            </Link>
                        </div>

                        <div className="col-8 d-flex justify-content-evenly align-items-center" >
                            
                                <Link  to={"/"} className="btn btn-outline-dark">Home</Link>
                                <Link to={"/"} className="btn btn-outline-dark">Tienda</Link>
                                <Link to={"/"} className="btn btn-outline-dark">Nosotros</Link>
                                <Link to={"/"} className="btn btn-outline-dark">Contacto</Link>
                            
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                        <CartWidget />
                        </div>

                </div>
            
        </div>
    
        )
    
    
    }
    
    
    

export default NavBar;
