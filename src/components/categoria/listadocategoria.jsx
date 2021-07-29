import React, { useEffect, useState } from 'react';
import handleGet from '../../middleware/get';
import handleDelete from '../../middleware/delete';
import handlePut from '../../middleware/put';
import Boton from '../utility/boton';
import Card from '../utility/card';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';

import IngresarCategoria from './ingresarcategoria';

const url = 'http://localhost:3000/categoria/';

export default function ListadoCategoria() {
    const [data, setdata] = useState([]);
    const datared = useSelector((state) => state.categoria);
    const dispatch = useDispatch();
    const okText = "Genero borrado con exito";
    const form = {
        descripcion: "hola"
    };
    useEffect(() => {
      handleGet(url, setdata);
    }, [data]);

    const listaCategoria = data.map((categoria) => {
      var infill = <><p>{categoria.nombre}</p>
                    <Boton class = "btn btn-primary" text="MODIFICAR" function={() => handlePut(url + categoria.id, okText, form)}/>
                    <Boton class = "btn btn-danger" text="BORRAR" function={() => handleDelete(url + categoria.id, okText)}/></>
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