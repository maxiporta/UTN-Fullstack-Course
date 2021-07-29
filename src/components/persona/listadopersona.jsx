import React, {useEffect, useState} from 'react';
import handleGet from '../../middleware/get';
import handleDelete from '../../middleware/delete';
import Boton from '../utility/boton';
import Card from '../utility/card';
import './style.css'

import IngresarPersona from './ingresarpersona';

const url = 'http://localhost:3000/persona/';

export default function ListadoPersona() {
    const [data, setdata] = useState([]);
    const okText = "Persona Borrada";

    useEffect(() => {
        handleGet(url, data, setdata);
      }, [data]);
    
    const listaPersona = data.map((persona) => {
        var infill = <><p>{"Nombre: "   + persona.nombre}</p>
                        <p>{"Apellido: " + persona.apellido}</p>
                        <p>{"Alias: "    + persona.alias}</p>
                        <p>{"Email: "    + persona.email}</p>
                        <Boton class = "btn btn-primary" text="MODIFICAR"/>
                        <Boton class = "btn btn-danger" text="BORRAR" function={() => handleDelete(url + persona.id, okText)}/></>
        return (
            <Card infill = {infill} key ={"persona" + persona.id}/>
        );
    });
    return(
    <>
        <IngresarPersona/>
        <div className="container">{listaPersona}</div>
    </>
    );
}