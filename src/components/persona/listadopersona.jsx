import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Boton from '../utility/boton';
import Card from '../utility/card';
import './style.css'

import IngresarPersona from './ingresarpersona';


const url = 'http://localhost:3000/persona/';

// DELETE Persona (funciona, pero todas las personas tienen libros asociados y el mensaje solo aparece en consola)
const BorrarPersona = async (personaID) => {
    try {
        const respuesta = await axios.delete(url+personaID);
        
        if(respuesta.status === 200){
            alert("Persona Borrada");
        }

    } catch (err) {
        console.log('Error', err.message);
    }
}


export default function ListadoPersona() {
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
    

    const listaPersona = data.map((persona) => {
        var infill = <><p>{"Nombre: "   + persona.nombre}</p>
                        <p>{"Apellido: " + persona.apellido}</p>
                        <p>{"Alias: "    + persona.alias}</p>
                        <p>{"Email: "    + persona.email}</p>
                        <Boton class = "btn btn-danger" text="BORRAR" funcion={() => BorrarPersona(persona.id)}/></>
        return (
            <Card infill = {infill}/>
        )
    })
    return(
    <>
        <IngresarPersona/>
        <div className="container">{listaPersona}</div>
    </>
    );
}