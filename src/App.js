
import './App.css';
import Footer from './components/Footer';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {



  return (
    <div>
      <NavBar />
      <ItemCount stock={10} initial={1} onAdd={0}/>
      <ItemListContainer titulo={"The Bike Store"} mensaje={"Bienvenidos a The Bike Store"}/>
      <Footer />
    </div>
  );
}

export default App;
