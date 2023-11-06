// /* eslint-disable react/prop-types */
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const CardComponent = ({ productos }) => {
//   return (
//     <Card sx={{ maxWidth: 345, m: "30px" }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         image= {productos.img}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {productos.nombre}
//         </Typography><Typography variant="body2" color="text.secondary">
//           {productos.descripcion}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           ${productos.precio}
//         </Typography>
//         <button>Agregar al carrito</button>
//       </CardContent>
//     </Card>
//   );
// }

// export default CardComponent;

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