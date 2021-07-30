import React, { useEffect, useState } from 'react';
import handleGet from '../../middleware/get';
import handleDelete from '../../middleware/delete';
import handlePut from '../../middleware/put';
import Boton from '../utility/boton';
import Card from '../utility/card';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import BotonModi from '../utility/botonmodificar';
import EntradaDeTexto from '../utility/input';

import IngresarCategoria from './ingresarcategoria';

const url = 'http://localhost:3000/categoria/';

export default function ListadoCategoria() {
    const [data, setdata] = useState([]);
    const[flag, setFlag] = useState([true]);
    const [nombre, setNombre] = useState('');
    const form = {
        nombre: nombre
    };
    const datared = useSelector((state) => state.categoria);
    const dispatch = useDispatch();
    const okText = "Genero borrado con exito";
    useEffect(() => {
      handleGet(url, setdata);
        if(data.length > flag.length){
            setFlag([...flag, true]);
        }
    }, [data]);

    const listaCategoria = data.map((categoria, index) => {
      const input = <><br></br><EntradaDeTexto placeholder = "Nombre" id="nombre" value={nombre} function={e => setNombre(e.target.value)}/></>;
      let modificando = "";
      if(flag[index]==false)
      {
        modificando = input;
      }
      var infill = <><p>{categoria.nombre}</p>
                    <BotonModi class={"btn btn-primary"} index={index} id={categoria.id} form={form} ruta={url} flag={flag} setFlag={setFlag} />
                    <Boton class = "btn btn-danger" text="BORRAR" function={() => handleDelete(url + categoria.id, okText)}/>
                    {modificando}</>
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