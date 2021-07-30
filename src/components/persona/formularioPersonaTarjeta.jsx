import React from 'react';
import EntradaDeTexto from '../utility/input';

export default function FormularioPersonaTarjeta(props) {
    const input = <><br></br><EntradaDeTexto placeholder = "Nombre" id="nombre" value={props.person.nombre} function={e => props.setPersona({...props.person, nombre: e.target.value})}/>
                <EntradaDeTexto placeholder = "Apellido" id="apellido" value={props.person.apellido} function={e => props.setPersona({...props.person, apellido: e.target.value})}/>
                <EntradaDeTexto placeholder = "Alias" id="alias" value={props.person.alias} function={e => props.setPersona({...props.person, alias: e.target.value})}/></>; 
    return (
        <>
            {input}
        </>
    );
}
FormularioPersonaTarjeta.defaultProps = {

};