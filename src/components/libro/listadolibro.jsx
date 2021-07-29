import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './style.css'
import Boton from '../utility/boton';
import Libro from './libro';
import Card from '../utility/card';
import IngresarLibro from './ingresarlibro';


const url = 'http://localhost:3000/libro/';

// DELETE Libro
const BorrarLibro = async (libroID) => {
    try {
        const respuesta = await axios.delete(url+libroID);
        
        if(respuesta.status === 200){
            alert("Libro borrado con exito");
        }

    } catch (err) {
        console.log('Error', err.message);
    }
}


export default function ListadoLibro() {
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
    
      
    const listaLibro = data.map((libro) => {
        var infill = <><Libro nombre={libro.nombre} descripcion={libro.descripcion}/>
                        <Boton class = "btn btn-primary" text = "MODIFICAR"/>
                        <Boton class = "btn btn-danger" text = "PRESTAR"/>
                        <Boton class = "btn btn-outline-primary" text = "BORRAR" function={() => BorrarLibro(libro.id)}/></>
        return ( 
            // eslint-disable-next-line react/style-prop-object
            <Card infill = {infill}/>
        )
    })
    return(
        <>
            <IngresarLibro/>
            <div className="container">{listaLibro}</div>
        </>
    );
}