
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



function App() {
  /* 
    const [input, setInput] = useState()
    const [apidata, setApiData] = useState([])
  
  
    console.log(input)
  
    useEffect(() => {
  
      axios.get(`https://rickandmortyapi.com/api/character/?page=1`)
        .then(response => setApiData(response))
  
    }, [])
    console.log(apidata)
   */
  return (
    <div className="App">
      <BrowserRouter>
        <Barra2 />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cities' element={<CiudadesPag />} />
          <Route path='*' element={<Main />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  )
}

export default App;
