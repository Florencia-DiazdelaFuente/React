import React from "react";
import logo from "./assets/images/bicicleta.png"

const NavBar = () => {
    
        return (
            <div className="container">
            <ul className="nav d-flex align-items-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><img src={logo} width="48" alt="logo bici" /></a>
                </li>
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
        </div>
    
        )
    
    
    }
    
    
    

export default NavBar;
