import React, { useEffect, useState } from 'react';
import handleGet from '../../middleware/get';
import handleDelete from '../../middleware/delete';
import Boton from '../utility/boton';
import Card from '../utility/card';
import './style.css'

import IngresarCategoria from './ingresarcategoria';

const url = 'http://localhost:3000/categoria/';

export default function ListadoCategoria() {
    const [data, setdata] = useState([]);
    const okText = "Genero borrado con exito";
    
    useEffect(() => {
      handleGet(url, data, setdata);
    }, [data]);

    const listaCategoria = data.map((categoria) => {
      var infill = <><p>{categoria.nombre}</p>
                    <Boton class = "btn btn-danger" text="BORRAR" funcion={() => handleDelete(url + categoria.id, okText)}/></>
      return (
        <Card infill = {infill} key ={"categoria" + categoria.id}/>
      );
    });
    return(
      <>
          <IngresarCategoria/>
          <div className="container">{listaCategoria}</div>
      </>
    );
}