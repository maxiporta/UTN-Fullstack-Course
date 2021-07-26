import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'

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
    
      return (
        <div className="libros">
          <ul className="libros-list">
            {data.map((categoria) => {
              return <li className="libro-detail">{categoria.nombre}</li>;
            })}
          </ul>
        </div>
      );
    }

    