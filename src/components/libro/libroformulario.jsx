import React, { useState } from 'react';
import EntradaDeTexto from '../utility/input';
import handleGet from '../../middleware/get';
import { useEffect } from 'react';

const url = 'http://localhost:3000/libro'

//Formulario para ingresar nuevo libro, NO ANDA
export default function libroformulario(props) {
    //chanchada
    function propName(prop, value){
        let string = [];
        for(var i in prop) {
            string.push(prop[i][value]);
        }
        return string;
    }
    function nameToID(prop, key, name){
        for(var i in prop) {
            if(prop[i][key]===name)
            {
                console.log(prop[i].email);

                return prop[i]['id'];
            }
        }
        return null;
    }
    //mejorar
    return (
        <>
            <EntradaDeTexto className="ingreso_input" id="nombre" value={props.nombre} placeholder="Nombre"  function={e => props.setNombre(e.target.value)}/>
            <EntradaDeTexto className="ingreso_input" id="categoria" value={props.categoria} placeholder="Genero" options={propName(props.datac,'nombre')} function={e => props.setCategoria_id(nameToID(props.datac,'nombre',e.target.value))}/>
            <EntradaDeTexto className="ingreso_input" id="descripcion" value={props.descripcion} placeholder="Descripcion"  function={e => props.setDescripcion(e.target.value)}/>
            <EntradaDeTexto className="ingreso_input" id="persona" value={props.persona} placeholder="Persona"   options={[...propName(props.datap,'email'), "Sin Prestar"]} function={e =>props.setPersona(nameToID(props.datap,'email',e.target.value)) }/>

        </>
    );
}