import { useState, useEffect } from 'react';
import './Main.css';
import CardComponent from '../CardComponent/CardComponent';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';

const Main = () => {

  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false);

    useEffect(() => {
  //  fetch('https://api.nasa.gov/planetary/apod?api_key=lMKeoDigPWeFxFozgofKcdzb6gloh1DKq28w1bDE')
  //  .then(response => response.json())
  //  .then(json => console.log(json) )

      setLoading(true);
      
      axios("https://api.nasa.gov/planetary/apod?api_key=lMKeoDigPWeFxFozgofKcdzb6gloh1DKq28w1bDE")
      .then(json => setData(json.data))
      setTimeout( () => {
        setLoading(false);
      }, 1000)

  }, [])

  return (
    <>
    <main>
        <div>
          <img className='publicidad' src="/img/Aguila/Publicidad/publicidad_1.png" alt="" />
        </div>
        <div className='container_iconos_publicidad'>
          <div className='container_iconos'>
            <div className='container_imagen_1'>
              <a href=""><img className='carrito_compra' src="/img/Aguila/Iconos_publicidad/carrito_compra.png" alt="" /></a>
            </div>
            <p>¿Cómo compro?</p>
          </div>
          <div className='container_iconos'>
            <div className='container_imagen_2'>
              <a href=""><img className='carrito_compra' src="/img/Aguila/Iconos_publicidad/moto_envio.png" alt="" /></a>
            </div>
            <p>Envio sin cargo desde $15.000.-</p>
          </div>
          <div className='container_iconos'>
            <div className='container_imagen_3'>
              <a href=""><img className='carrito_compra' src="/img/Aguila/Iconos_publicidad/retiro_sin_cargo.png" alt="" /></a>
            </div>
            <p>Retiro sin cargo</p>
          </div>
          <div className='container_iconos'>
            <div className='container_imagen_4'>
              <a href=""><img className='carrito_compra' src="/img/Aguila/Iconos_publicidad/reloj.png" alt="" /></a>
            </div>
            <p>Tu pedido a partir de las 48hs hábiles</p>
          </div>
        </div>
        {isLoading ? <Spinner /> : <CardComponent data={data} /> }
      </main>
    </>
   )
}

export default Main;