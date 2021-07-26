import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'

export default function ListadoLibro() {
    const [data, setdata] = useState([]);
  
    const fetchData = async() => {
      const url = 'http://localhost:3000/libro/';
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
            {data.map((libro) => {
              return <li className="libro-detail">{libro.nombre}</li>;
            })}
          </ul>
        </div>
      );
    }

    