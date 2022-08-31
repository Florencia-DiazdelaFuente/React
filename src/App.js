
import './App.css';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {



  return (
    <div>
      <NavBar />
      <ItemListContainer titulo={"The Bike Store"} mensaje={"Bienvenidos a The Bike Store"}/>
      <Footer />
    </div>
  );
}

export default App;
