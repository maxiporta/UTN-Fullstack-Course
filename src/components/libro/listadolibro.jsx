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
            // eslint-disable-next-line react/style-prop-object
            <div class="card animated fadeIn fast" Style={{marginTop:"1rem"}}>
                <img class="card-img-top img-fluid img" src="..." alt=""/>
                <div class="card-body">
                {// libro
                }
                <div class="book">
                    <div class="back"></div>
                    <div class="page6">
                        <p>{libro.descripcion}</p>
                    </div>
                    <div class="page5"></div>
                    <div class="page4"></div>
                    <div class="page3"></div>
                    <div class="page2"></div>
                    <div class="page1"></div>
                    <div class="front">
                        <p>{libro.nombre}</p>
                    </div>
                    </div>
                    <button class="btn btn-primary">MODIFICAR</button>
                    <button class="btn btn-danger">PRESTAR</button>
                    <button class="btn btn-outline-primary" onClick={() => BorrarLibro(libro.id)}>BORRAR</button>
                </div>
            </div>      
        )
    })

    return(
    <>
        <IngresarLibro/>
        <div className="container">{listaLibro}</div>
    </>
    );
    }