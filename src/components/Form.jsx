import React from "react";
import { useContext, useState } from 'react';
import { CartContext } from "./context/Context";
import { getFirestore, addDoc, serverTimestamp, collection } from "firebase/firestore";

const Form = ({handleId}) => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mail, setMail] = useState('');
    const { precioTotal, cart } = useContext(CartContext);
    const total = precioTotal();

    const handleSubmit = (e) => {
        e.preventDefault();
        const orden = {
            buyer: { nombre, telefono, mail },
            date: serverTimestamp(),
            cart,
            total,
        };
        const db = getFirestore();
        const refOrden = collection(db, 'orders');
        addDoc(refOrden, orden).then((res) => {
            handleId(res.id);
        });
    };

    const handleNombre = (e) => setNombre(e.target.value);

    const handleTelefono = (e) => setTelefono(e.target.value);

    const handleMail = (e) => setMail(e.target.value);


    return(
        <div className="altura">
            <h4 className="text-center mt-3">Checkout</h4>
            <form action="" onSubmit={handleSubmit} className="border border-dark py-5 px-4 mx-auto my-5 w-50">
                <div className="row mb-3">
                    <label for="inputNombre" className="col-sm-2 col-form-label">Nombre</label>
                    <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control" 
                        id="inputNombre"
                        name="nombre"
                        placeholder="John Doe"
                        value={nombre}
                        onChange={handleNombre}
                        required
                    />
                    </div>
                </div>
            
                <div className="row mb-3">
                    <label for="inputTelefono" class="col-sm-2 col-form-label">Teléfono</label>
                    <div className="col-sm-10">
                    <input
                        type="number"
                        className="form-control" 
                        id="inputTelefono"
                        name="telefono"
                        placeholder="1122334455"
                        value={telefono}
                        onChange={handleTelefono}
                    />
                    </div>
                </div>
            
                <div className="row mb-3">
                    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input
                        type="email"
                        className="form-control" 
                        id="inputEmail"
                        name="email"
                        placeholder="johnDoe@example.com"
                        value={mail}
                        onChange={handleMail}
                    />
                    </div>
                </div>
                <div className="d-grid col-12 mx-auto"><button type="submit" className="btn btn-dark py-2 mt-4">ENVIAR</button></div>
        </form>
        </div>
    )
} 

export default Form;