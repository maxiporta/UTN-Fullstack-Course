import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'

import IngresarCategoria from './ingresarcategoria';


export default function ListadoCategoria() {
    const [data, setdata] = useState([]);
  
    const fetchData = async() => {
      const url = 'http://localhost:3000/categoria/';
      const respuesta = await axios.get(url);
      if (respuesta.status === 200) {
        setdata(respuesta.data);
      }
    };

    useEffect(() => {
        fetchData();
      }, []);

    const listaCategoria = data.map((categoria) => {
      return (
        <div className="libros">
          <ul className="libros-list"> 
              <li className="libro-detail">{categoria.nombre}</li>
              <li className="libro-detail">Categoria ID: {categoria.id}</li>
          </ul>
        </div>
      )
    })

    return(
      <>
          <IngresarCategoria/>
          {listaCategoria}
      </>
      );
      }