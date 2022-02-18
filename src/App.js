
import './App.css';
import './index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Gallery from './Componentes/Carrusel';
import ButtonAppBar from './Componentes/NavBar'




function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Gallery />

    </div>
  )
}

export default App;
