import './NavBar.css'

import CartWidget from '../CartWidget/CartWidget';

import { Link } from "react-router-dom";

const NavBar = () => {
  return ( 
      <div>
        <nav>
            <ul>
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