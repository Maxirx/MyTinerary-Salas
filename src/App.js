
import './App.css';
import './index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Gallery from './Componentes/Carrusel';
import ButtonAppBar from './Componentes/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Side from './Componentes/sideBar';
import Main from './Componentes/Main';
import Footer from './Componentes/footer'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ButtonAppBar />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <Side /> */}
    </div>
  )
}

export default App;
