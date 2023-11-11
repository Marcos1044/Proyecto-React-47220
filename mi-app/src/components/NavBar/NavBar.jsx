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
                <Link className='listado' to="/posicion-Producto/categorias">Categorias</Link>
                <Link className='listado' to="/posicion-Producto/fragancias">Fragancias</Link>
                <Link className='listado' to="/posicion-Producto/maquillaje">Maquillaje</Link>
                <Link className='listado' to="/posicion-Producto/dermocosmetica">Dermocosmetica</Link>
                <Link className='listado' to="/posicion-Producto/electro">Electro</Link>
                <Link className='listado' to="/pedidosFarmacia">Pedidos-Farmacia</Link>
                <Link className='listado'><a href=""><CartWidget/></a></Link>
            </ul>
          </nav>
      </div>
  );
};

export default NavBar;