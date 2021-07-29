import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Boton from '../utility/boton';
import Card from '../utility/card';
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
      var infill = <><p>{categoria.nombre}</p>
                    <Boton class = "btn btn-danger" text="BORRAR" funcion={() => BorrarCategoria(categoria.id)}/></>
      return (
        <Card infill = {infill}/>
      )
    })
    return(
      <>
          <IngresarCategoria/>
          <div className="container">{listaCategoria}</div>
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