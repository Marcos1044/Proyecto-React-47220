import './header.css'
import NavBar from '../NavBar/NavBar'

const Header = () => {
  return (
    <>
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
    </header>
    </>
  )
}

export default Header