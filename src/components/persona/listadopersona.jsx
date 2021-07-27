import React, {useEffect, useState} from 'react';
import axios from 'axios';
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
        return (
                <div className="libros">
                    <ul className="libros-list">
                        <li className="libro-detail">
                            <p>{"Nombre: "   + persona.nombre}</p>
                            <p>{"Apellido: " + persona.apellido}</p>
                            <p>{"Alias: "    + persona.alias}</p>
                            <p>{"Email: "    + persona.email}</p>
                            <button onClick={() => BorrarPersona(persona.id)}>BORRAR</button>
                        </li>
                    </ul>
                </div>        
        )
    })

    return(
    <>
        <IngresarPersona/>
        {listaPersona}
    </>
    );
    }