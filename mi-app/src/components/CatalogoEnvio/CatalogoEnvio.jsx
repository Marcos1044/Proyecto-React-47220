import './CatalogoEnvio';

const CatalogoEnvio = () => {
  return (
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
  )
}

export default CatalogoEnvio;