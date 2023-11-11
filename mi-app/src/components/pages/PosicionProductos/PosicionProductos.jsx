import React, { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";

//Firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase/firabaseConfig";

import './PosicionProductos.css'

import CardComponent from "../../CardComponent/CardComponent";


const PosicionProductos = () => {

    const [productosDataPos, setProductosDataPos] = useState([]);

    const { filtro } = useParams();

    useEffect(() => {

        const getProductos = async () => {
          const q = query(collection(db, "Productos"), where("filtro", "==", filtro));
          const docs = [];
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            docs.push({...doc.data(),id: doc.id})
          });
          setProductosDataPos(docs);
        };
        getProductos();
    
      }, [filtro]);
    
  return (
    <div className="container">
        <div className="containerTitulo">
          <h1> Filtro de Productos </h1>
        </div>
        <div className="containerCard">
        {productosDataPos.map((producto) => {
            return ( <Link to={`/detalle/${producto.id}`} key={producto.id}>
                    <CardComponent productos={producto} key={producto.id} />
                    </Link>
            );
        })}
        </div>
    </div>
  )
}

export default PosicionProductos;