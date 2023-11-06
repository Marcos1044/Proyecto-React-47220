import './NavBar.css'

import CartWidget from '../CartWidget/CartWidget';

import { Link } from "react-router-dom";

const NavBar = () => {
  return ( 
      <div>
        <div className='div-logo'>
              <Link to="/"><img className='logo' src="/img/Aguila/Logo/logo.png" alt="" /></Link>

                <label>
                    <span></span>
                    <input className='buscador' type="text" id="buscador" placeholder="¿Que estas buscando?" />
                </label>
                <a href="" className='ingresar'><img src="" alt="" />Ingresar</a>    
        </div>
        <nav>
            <ul>
                <Link to="/"></Link>
                <Link className='listado' to="/categorias"><a href="">Categorias</a></Link>
                <Link className='listado' to="/fragancias"><a href="">Fragancias</a></Link>
                <Link className='listado' to="/maquillaje"><a href="">Maquillaje</a></Link>
                <Link className='listado' to="/dermocosmetica"><a href="">Dermocosmetica</a></Link>
                <Link className='listado' to="/electro"><a href="">Electro</a></Link>
                <Link className='listado' to="/pedidosFarmacia"><a href="">Pedidos-Farmacia</a></Link>
                <Link className='listado'><a href=""><CartWidget/></a></Link>
            </ul>
          </nav>
      </div>
  );
};

export default NavBar