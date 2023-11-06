import './App.css'
import Header from './components/Header/Header';
import Main from './components/Main/main';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Categorias from './components/pages/Categorias/Categorias';
import Fragancias from './components/pages/Fragancias/Fragancias';
import Maquillaje from './components/pages/Maquillaje/Maquillaje';
import Dermocosmetica from './components/pages/Dermocosmetica/Dermocosmetica';
import Electro from './components/pages/Electro/Electro';
import PedidosFarmacia from './components/pages/PedidosFarmacias/PedidoFarmacia';
import DetallesProductos from './components/pages/DetallesProductos/DetallesProductos';


function App() {
  return (
    <>
    <Router>
      <Header />   
        <Routes>
              <Route path='/'element={<Main />} />
              <Route path='/categorias' element={<Categorias />} />
              <Route path='/fragancias' element={<Fragancias />} />
              <Route path='/maquillaje' element={<Maquillaje />}/>
              <Route path='/dermocosmetica' element={<Dermocosmetica />}/>
              <Route path='/electro' element={<Electro />}/>
              <Route path='/pedidosFarmacia' element={<PedidosFarmacia />}/>
              <Route path='/detalle/:id' element={<DetallesProductos />} />
        </Routes>
    </Router>
    </>
  )
}

export default App

