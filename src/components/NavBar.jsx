import React from "react";
import logo from "./assets/images/bicicleta.png"
import CartWidget from "./CartWidget";

const NavBar = () => {
    
        return (
            <div className="container">
                <div className="row">
                    
                        <a className= "col" aria-current="page" href="#"><img src={logo} width="60" alt="logo bici" /></a>
                        <ul className="col-8 nav d-flex justify-content-center align-items-center">
                        <li className="nav-item">
                        <a className="nav-link link_header" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link link_header" href="#">Tienda</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link link_header" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link link_header" href="#">Contacto</a>
                        </li>
                        </ul>
                        <div className="col">
                        <CartWidget />
                        </div>
                        
                

                </div>
            
        </div>
    
        )
    
    
    }
    
    
    

export default NavBar;
