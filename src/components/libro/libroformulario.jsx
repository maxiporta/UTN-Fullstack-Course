import React from 'react';
import EntradaDeTexto from '../utility/input';
import {nameToID, propName} from '../../functions/functions'
export default function libroformulario(props) {
    return (
        <>
            <EntradaDeTexto className="ingreso_input" id="nombre" value={props.libr.nombre} placeholder="Nombre"  function={e => props.setLibro({...props.libr, nombre: e.target.value})}/>
            <EntradaDeTexto className="ingreso_input" id="categoria" value={props.libr.categoria} placeholder="Genero" options={propName(props.datac,'nombre')} function={e => props.setLibro({...props.libr, categoria: nameToID(props.datac,'nombre',e.target.value)})}/>
            <EntradaDeTexto className="ingreso_input" id="descripcion" value={props.libr.descripcion} placeholder="Descripcion"  function={e => props.setLibro({...props.libr, descripcion: e.target.value})}/>
            <EntradaDeTexto className="ingreso_input" id="persona" value={props.libr.persona} placeholder="Persona"   options={[...propName(props.datap,'email'), "Sin Prestar"]} function={e =>props.setLibro({...props.libr, persona: nameToID(props.datap,'email',e.target.value)}) }/>

        </>
    );
}