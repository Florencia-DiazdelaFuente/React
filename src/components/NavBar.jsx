import React from "react";
import logo from "./assets/images/bicicleta.png"
import CartWidget from "./CartWidget";

const NavBar = () => {
    
        return (
            <div className="container">
                <div className="row pt-3 pb-3">
                    
                        <div className= "col d-flex justify-content-center"><img src={logo} width="60px" alt="logo bici" /></div>
                        <div className="col-8 d-flex justify-content-evenly align-items-center">
                        <button type="button" className="btn btn-outline-dark">Home</button>
                        <button type="button" className="btn btn-outline-dark">Tienda</button>
                        <button type="button" className="btn btn-outline-dark">Nosotros</button>
                        <button type="button" className="btn btn-outline-dark">Contacto</button>
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                        <CartWidget />
                        </div>

                </div>
            
        </div>
    
        )
    
    
    }
    
    
    

export default NavBar;
