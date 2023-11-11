import './CardComponent.css';

const CardComponent = ({ productos }) => {
  return (
    <>
        <div className='container-principal'>
          <a href=""><img className='imagenes' src={productos.img} alt="" /></a>
          <div className='container-descripcion'>
            <a href=""><p className='nombre-producto'> {productos.nombre} </p></a>
            <a href=""><p className='descripcion-producto'> {productos.descripcion} </p></a>
            <p className='precio-producto'> ${productos.precio} </p>
            <button className='agregar-carrito'><a href="">Agregar al carrito</a></button>
          </div>
        </div>
    </>
  )
}

export default CardComponent;