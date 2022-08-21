
import './App.css';

function App() {

let imagen = "cuartoDeLibra"
let titulo = "Doble Cuarto de Libra con Queso"
let calorias = "771 kcal"
let descripcion = "Imaginá la sensación del clásico Cuarto de Libra. Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza."

  return (
    <div className='container'>
      <div className="row">
        <div className='col-md-4 offset-md-2'>
        <img src={imagen} alt={titulo} className="img-fluid" />
        </div>
        <div className='col-md-4'>
        <h1>{titulo}</h1>
        <p>{calorias}</p>
        <p>{descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
