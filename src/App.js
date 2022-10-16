
import './App.css';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Provider from './components/context/Context';

function App() {

  return (
    <div>
      <Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route exact path="/category/:categoryName" element={<ItemListContainer/>}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/checkout' element={<Checkout/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </Provider>
    </div>
  );
}

export default App;
