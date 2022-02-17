import logo from './logo.svg';
import './App.css';
import './index.css'

function App() {
  function suma() {
    return edad + 1
  }
  const nombre = "Negra"
  const edad = 10
  /*   const boton = document.getElementById("boton")
  
    boton.addEventListener("click", testAlert) */

  function testAlert() {

    alert("presionaste el boton " + suma())
  }

  return (
    <div className="App">
      <div className='zero'>
        <p> Mi nombre es {nombre}</p>
        <p>Mi edad es {edad}</p>
        <button onClick={testAlert}>Presionar</button>
      </div>
    </div >
  );
}

export default App;
