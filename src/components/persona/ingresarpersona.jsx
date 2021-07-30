import React, { useState } from 'react';
import handleSubmitPost from "../../middleware/post";
import Boton from '../utility/boton';
import EntradaDeTexto from '../utility/input';
const url = 'http://localhost:3000/persona'


//Formulario para ingresar nueva persona
export default function IngresarPersona() {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [alias, setAlias] = useState('');
    const okText = "Persona creada";
    const form = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        alias: alias
    };
    const handleSubmit = async (e) => {
        handleSubmitPost(e, form, url, okText);
    }
    return (
        <>
            <h3>Ingresar nueva persona</h3> 
            <form>
                <EntradaDeTexto placeholder = "Nombre" id="nombre" value={nombre} function={e => setNombre(e.target.value)}/>
                <EntradaDeTexto placeholder = "Apellido" id="apellido" value={apellido} function={e => setApellido(e.target.value)}/>
                <EntradaDeTexto placeholder = "Alias" id="alias" value={alias} function={e => setAlias(e.target.value)}/>
                <EntradaDeTexto placeholder = "Email" type="email" id="email" value={email} function={e => setEmail(e.target.value)}/>

                <Boton text="Enviar" function={handleSubmit}/>
            </form>
        </>
    );
}