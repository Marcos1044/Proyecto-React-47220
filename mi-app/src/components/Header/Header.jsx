import './header.css'
import NavBar from '../NavBar/NavBar'

const Header = () => {
  return (
    <>
        <header>
          <div className='necesitasayuda'>
            <a className='ayuda' href="">¿Necesitas ayuda?</a>
          </div>
            <NavBar />
        </header>
    </>
  )
}

export default Header