import './NavBar.css'

import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <div>
      <nav>
          <ul>
              <li><a href="">Categorias</a></li>
              <li><a href="">Fragancias</a></li>
              <li><a href="">Maquillaje</a></li>
              <li><a href="">Dermocosmetica</a></li>
              <li><a href="">Electro</a></li>
              <li><a href="">Pedidos-Farmacia</a></li>
              <li><a href=""><CartWidget/></a></li>
          </ul>
        </nav>
    </div>
  );
};

export default NavBar