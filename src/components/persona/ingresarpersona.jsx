import React, { useState } from 'react';
import handleSubmitPost from "../../middleware/post";
import Boton from '../utility/boton';
import EntradaDeTexto from '../utility/input';


//Formulario para ingresar nueva persona
export default function IngresarPersona() {

    const [persona, setPersona] = useState('');
    const url = 'http://localhost:3000/persona'
    const okText = "Persona creada";
    const form = {
        nombre: persona.nombre,
        apellido: persona.apellido,
        email: persona.email,
        alias: persona.alias
    };
    
    const handleSubmit = async (e) => {
        var valor = persona.email;
        //
        /*if(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor))  && (persona.alias.lenght>0) && (persona.apellido.lenght>0) && (persona.nombre.lenght>0)) {
          console.log("form");
        }*/

            handleSubmitPost(e, form, url, okText);
    }

    return (
        <>
            <h3>Ingresar nueva persona</h3> 
            <form>
                <EntradaDeTexto placeholder = "Nombre" id="nombre" value={persona.nombre} function={e => setPersona({...persona, nombre: e.target.value})}/>
                <EntradaDeTexto placeholder = "Apellido" id="apellido" value={persona.apellido} function={e => setPersona({...persona, apellido: e.target.value})}/>
                <EntradaDeTexto placeholder = "Alias" id="alias" value={persona.alias} function={e => setPersona({...persona, alias: e.target.value})}/>
                <EntradaDeTexto placeholder = "Email" type="email" id="email" value={persona.email} function={e => 
                    setPersona({...persona, email: e.target.value})}/>

                <Boton class="btn btn-primary" text="Enviar" function={handleSubmit}/>
            </form>
        </>
    );
}