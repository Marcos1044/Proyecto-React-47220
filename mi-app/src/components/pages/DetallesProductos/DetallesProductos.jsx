import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../../Firebase/firabaseConfig';
import { collection, query, getDocs, where, documentId } from 'firebase/firestore'; 
import CardComponent from '../../CardComponent/CardComponent';

import './DetallesProductos.css'

const DetallesProductos = () => {

  const [productosData, setProductosData] = useState([]);

 // console.log(productosData)
  
  const {id} = useParams();

 // console.log(id);

  useEffect(() => {

    const getProductos = async () => {
      const q = query(collection(db, "Productos"), where (documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(),id: doc.id})
      });
      setProductosData(docs);
    };
    getProductos();

  }, [id]);


  return (
    <div className='posicionContainer'>
        <h1>Detalles del producto</h1>
        <div>
            {
                productosData.map((producto) => {
                    return <CardComponent productos={producto} key={producto.id} />
                } )
            }
        </div>
    </div>
  )
}

export default DetallesProductos;