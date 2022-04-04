
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
import { useEffect } from 'react';
import userActions from './Redux/action/registroAction'
import { connect } from 'react-redux';







function App(props) {

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      const token = localStorage.getItem("token")
      props.VerificarToken(token)
    }

  }, [])

  return (
    <div className="App">



      <BrowserRouter>
        <Barra2 />
        <Routes>


          <Route path='/' element={<Main />} />
          <Route path='/cities' element={<CiudadesPag />} />
          <Route path='*' element={<Main />} />
          <Route path='/User' element={<PagEntrada />} />
          {!props.usuario && <Route path='/User/User' element={<PagEntrada />} />}
          <Route path="/cities/detalle/:id" element={<PaginaDetalles />} />
          {!props.usuario && <Route path='/user/signin' element={<EntradaSesion />} />}
          {!props.usuario && <Route path='/user/signup' element={<Registro />} />}


        </Routes>
        <Snack />
        <Footer />
      </BrowserRouter>


    </div>
  )
}

const mapDispatchToProps = {
  VerificarToken: userActions.VerificarToken,

}

const mapStateToProps = (state) => {
  return {
    usuario: state.UseReduc.usuario
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
