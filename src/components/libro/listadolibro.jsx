import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './style.css'

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
        return (
                <div className="libros">
                    <ul className="libros-list">
                        <li className="libro-detail">
                            <p>{"Nombre: " + libro.nombre}</p>
                            <p>{"Descripcion: " + libro.descripcion}</p>
                            <p>{"Categoria ID: " + libro.categoria_id}</p>
                            <button onClick={() => BorrarLibro(libro.id)}>BORRAR</button>
                        </li>
                    </ul>
                </div>        
        )
    })

    return(
    <>
        <IngresarLibro/>
        {listaLibro}
    </>
    );
    }