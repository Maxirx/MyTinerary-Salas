
import './App.css';
import './index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Barra2 from './Componentes/BarraNavegacion2'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './Componentes/Main';
import Footer from './Componentes/footer'
import CiudadesPag from './Componentes/cities'
import axios from 'axios'
import CiudadDetalle from './Componentes/detalle';
import PaginaDetalles from './Componentes/paginaDetalle';
import PagEntrada from './Componentes/PagEntrada';
import EntradaSesion from './Componentes/entrada'
import Registro from './Componentes/Registro'
import Snack from './Componentes/BarraAlerta'




function App() {

  return (
    <div className="App">
      {/*       <Provider store={reduxStore} > */}
      <BrowserRouter>
        <Barra2 />
        <Routes>


          <Route path='/' element={<Main />} />
          <Route path='/cities' element={<CiudadesPag />} />
          <Route path='*' element={<Main />} />
          <Route path='/User' element={<PagEntrada />} />
          <Route path="/cities/detalle/:id" element={<PaginaDetalles />} />
          <Route path='/user/signin' element={<EntradaSesion />} />
          <Route path='/user/signup' element={<Registro />} />
          {/*    <Snack /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
      {/*       </Provider> */}

    </div>
  )
}

export default App;
