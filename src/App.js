
import './App.css';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Provider from './components/context/Context';

function App() {

  return (
    <div>

      
      
      {/* <ItemListContainer titulo={"The Bike Store"} mensaje={"Bienvenidos a The Bike Store"}/>
      <ItemDetailContainer /> */}
      
      <Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route exact path="/category/:id" element={<ItemListContainer/>}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route exact path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </Provider>
      
    </div>
  );
}

export default App;
