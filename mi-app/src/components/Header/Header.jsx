import './header.css'
import NavBar from '../NavBar/NavBar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Categorias from '../pages/Categorias';
import Fragancias from '../pages/Fragancias';
import Maquillaje from '../pages/Maquillaje';
import Dermocosmetica from '../pages/Dermocosmetica';
import Electro from '../pages/Electro';
import PedidosFarmacia from '../pages/PedidoFarmacia';

const Header = () => {
  return (
    <>
     <Router>
        <header>
          <div className='necesitasayuda'>
            <a className='ayuda' href="">¿Necesitas ayuda?</a>
          </div>
          <div className='div-logo'>
            <img className='logo' src="/img/Aguila/Logo/logo.png" alt="" />
                <label>
                    <span></span>
                    <input className='buscador' type="text" id="buscador" placeholder="¿Que estas buscando?" />
                </label>
                <a href="" className='ingresar'><img src="" alt="" />Ingresar</a>    
          </div>
        
            <NavBar />
            <Routes>
              <Route path='/categorias' element={<Categorias />} />
              <Route path='/fragancias' element={<Fragancias />} />
              <Route path='/maquillaje' element={<Maquillaje />}/>
              <Route path='/dermocosmetica' element={<Dermocosmetica />}/>
              <Route path='/electro' element={<Electro />}/>
              <Route path='/pedidosFarmacia' element={<PedidosFarmacia />}/>
            </Routes>
          
        </header>
    </Router>
    </>
  )
}

export default Header