import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'

import IngresarCategoria from './ingresarcategoria';

const url = 'http://localhost:3000/categoria/';

export default function ListadoCategoria() {
    const [data, setdata] = useState([]);
  
    const fetchData = async() => {
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
              <button onClick={() => BorrarCategoria(categoria.id)}>BORRAR</button>
              
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

      // BORRAR CATEGORIA
      const BorrarCategoria = async (categoriaID) => {
        try {
            const respuesta = await axios.delete(url+categoriaID);
            
            if(respuesta.status === 200){
                alert("Genero borrado con exito");
            }
    
        } catch (err) {
            console.log('Error', err.message);
        }
    }