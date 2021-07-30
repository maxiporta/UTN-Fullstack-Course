import React from 'react';
import EntradaDeTexto from '../utility/input';
import {nameToID, propName} from '../../functions/functions'
//Formulario para ingresar nuevo libro, NO ANDA
export default function libroformulario(props) {
    return (
        <>
            <EntradaDeTexto className="ingreso_input" id="nombre" value={props.nombre} placeholder="Nombre"  function={e => props.setNombre(e.target.value)}/>
            <EntradaDeTexto className="ingreso_input" id="categoria" value={props.categoria} placeholder="Genero" options={propName(props.datac,'nombre')} function={e => props.setCategoria_id(nameToID(props.datac,'nombre',e.target.value))}/>
            <EntradaDeTexto className="ingreso_input" id="descripcion" value={props.descripcion} placeholder="Descripcion"  function={e => props.setDescripcion(e.target.value)}/>
            <EntradaDeTexto className="ingreso_input" id="persona" value={props.persona} placeholder="Persona"   options={[...propName(props.datap,'email'), "Sin Prestar"]} function={e =>props.setPersona(nameToID(props.datap,'email',e.target.value)) }/>

        </>
    );
}