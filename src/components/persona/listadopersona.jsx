import React, {useEffect, useState} from 'react';
import handleGet from '../../middleware/get';
import handleDelete from '../../middleware/delete';
import handlePut from '../../middleware/put';
import Boton from '../utility/boton';
import Card from '../utility/card';
import EntradaDeTexto from '../utility/input';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';

import IngresarPersona from './ingresarpersona';

const url = 'http://localhost:3000/persona/';

export default function ListadoPersona() {
    const [data, setdata] = useState([]);
    const datared = useSelector((state) => state.persona);
    const dispatch = useDispatch();
    const okText = "Persona Borrada";
    const form = {
        nombre: "hola",
        apellido: "hola",
        alias:"hola"
    };
    useEffect(() => {
        handleGet(url, setdata);
        dispatch({type:"ADDPERSON", data: data});
    }, [data]);
    const listaPersona = data.map((persona) => {
        let texto = <p>{"Nombre: "   + persona.nombre}</p>
        var infill = <>{texto}
                        <p>{"Apellido: " + persona.apellido}</p>
                        <p>{"Alias: "    + persona.alias}</p>
                        <p>{"Email: "    + persona.email}</p>
                        <Boton class = "btn btn-primary" text="MODIFICAR" function={() => handlePut(url + persona.id, okText, form)}/>
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