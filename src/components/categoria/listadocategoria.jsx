import React, { useEffect, useState } from 'react';
import handleGet from '../../middleware/get';
import handleDelete from '../../middleware/delete';
import Boton from '../utility/boton';
import Card from '../utility/card';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import BotonModi from '../utility/botonmodificar';
import EntradaDeTexto from '../utility/input';
import { nameToX } from '../../functions/functions';
import Libro from '../libro/libro';

import IngresarCategoria from './ingresarcategoria';

const url = 'http://localhost:3000/categoria/';

export default function ListadoCategoria() {
    const [data, setdata] = useState([]);
    const[flag, setFlag] = useState([true]);
    const datar = useSelector((state) => state);
    const [nombre, setNombre] = useState('');
    const [actualCategoria, setActualCategoria] = useState(null);
    const form = {
        nombre: nombre
    };

    const okText = "Genero borrado con exito";
    useEffect(() => {
      handleGet(url, setdata);
        if(data.length > flag.length){
            setFlag([...flag, true]);
        }
    }, [data]);

    const verLibro = (index)=>{
      setActualCategoria(index);
  }

    let listaCategoria = data.map((categoria, index) => {
      const input = <><br></br><EntradaDeTexto placeholder = "Nombre" id="nombre" value={nombre} function={e => setNombre(e.target.value)}/></>;
      let modificando = "";
      if(flag[index]===false)
      {
        modificando = input;
      }
      var infill = <><p>{categoria.nombre}</p>
                    <BotonModi class={"btn btn-primary"} index={index} id={categoria.id} form={form} ruta={url} flag={flag} setFlag={setFlag} />
                    <Boton class = "btn btn-outline-primary" text="VER LIBROS" function={() => verLibro(index)}/>
                    <Boton class = "btn btn-danger" text="BORRAR" function={() => handleDelete(url + categoria.id, okText)}/>
                    {modificando}</>
      return (
        <Card infill = {infill} keys ={"categoria" + categoria.id}/>
      );
    });
    if(actualCategoria !== null)
    {
        const input = <><br></br><EntradaDeTexto placeholder = "Nombre" id="nombre" value={nombre} function={e => setNombre(e.target.value)}/></>;
        let modificando = "";
        if(flag[actualCategoria]===false)
        {
            modificando = input;
        }
        let texto = <p>{"Nombre: "   + data[actualCategoria].nombre}</p>
        var infill = <>{texto}
                <p>{"Apellido: " + data[actualCategoria].apellido}</p>
                <p>{"Alias: "    + data[actualCategoria].alias}</p>
                <p>{"Email: "    + data[actualCategoria].email}</p>
                <BotonModi class={"btn btn-primary"} index={actualCategoria} id={data[actualCategoria].id} form={form} ruta={url} flag={flag} setFlag={setFlag} />
                <Boton class = "btn btn-outline-primary" text="DEJAR DE VER" function={() => verLibro(null)}/>
                <Boton class = "btn btn-danger" text="BORRAR" function={() => handleDelete(url + data[actualCategoria].id, okText)}/>
                {modificando}</>
        var listaLibros = datar.libro.map((libro, index) => {
            if(libro.categoria_id === data[actualCategoria].id){
                let l = <><Libro nombre={libro.nombre} descripcion={libro.descripcion} persona={nameToX(datar.persona,'id',libro.persona_id,'nombre')} categoria={nameToX(data,'id',libro.categoria_id,'nombre')} /></>;
                return ( 
                    // eslint-disable-next-line react/style-prop-object
                    <Card infill = {l} keys ={"libro" + libro.id}/>
                );
            }
            return "";
        });    
        listaCategoria = <> <Card infill = {infill} keys ={"categoria" + data[actualCategoria].id}/>{listaLibros}</>;
    }
    return(
      <>
          <IngresarCategoria/>
          <div className="container">{listaCategoria}</div>
      </>
    );
}