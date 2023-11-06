import { useState, useEffect } from 'react';
import CardComponent from '../CardComponent/CardComponent';
import Spinner from '../Spinner/Spinner';
import Publicidad from '../Publicidad/Publicidad';
import CatalogoEnvio from '../CatalogoEnvio/CatalogoEnvio';
import './Main.css';

// DB Firestore
import { db } from '../../Firebase/firabaseConfig';

// Firestore
import { collection, query, where, getDocs } from "firebase/firestore";
import { Link } from 'react-router-dom';
 
const Main = () => {

  const [productos,setProductos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {

    const getProductos = async () => {
      const q = query(collection(db, "Productos"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(),id: doc.id})
      });
      setProductos(docs);
      setLoading(false);  
    };
    getProductos();

  }, []);

  return (
    <>
    <main>
        <Publicidad />
        <CatalogoEnvio />
        
          { isLoading ? ( 
          <div className='spinner'>
            <Spinner /> 
          </div>) : ( 
          <div className='cardComponent'>
            {productos.map((productos) => {
            return (
              <Link to={`detalle/${productos.id}`} key={productos.id}>
                <CardComponent key={productos.id} productos={productos}/>;
              </Link>
             )
            })}
          </div>
          )}  
    </main>
    </>
   )
}

export default Main;