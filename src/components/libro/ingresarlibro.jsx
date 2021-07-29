import React, { useState } from 'react';
import handleSubmitPost from "../../middleware/post";
import EntradaDeTexto from '../utility/input';
import Boton from '../utility/boton';
import handleGet from '../../middleware/get';
import { useEffect } from 'react';

const url = 'http://localhost:3000/libro'

//Formulario para ingresar nuevo libro, NO ANDA
export default function IngresarLibro() {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria_id] = useState('');
    const [persona, setPersona] = useState('');
    const [datap, setDatap] = useState([]);
    const [datac, setDatac] = useState([]);
    useEffect(() => {
        handleGet("http://localhost:3000/persona", setDatap);
        handleGet("http://localhost:3000/categoria", setDatac);
        console.log("hola");

    }, []);
    
    function propName(prop, value){
        let string = [];
        for(var i in prop) {
            string.push(prop[i][value]);
        }
        return string;
     }
    return (
        <>
            <div className="ingreso_container">
            <h3>Ingresar nuevo libro</h3> 
            <form className="ingreso_form">
                <div className="inputs">
                <EntradaDeTexto className="ingreso_input" id="nombre" value={nombre} placeholder="Nombre"  function={e => setNombre(e.target.value)}/>
                <EntradaDeTexto className="ingreso_input" id="categoria" value={categoria} placeholder="Genero" options={propName(datac,'nombre')} function={e => setCategoria_id(e.target.value)}/>
                <EntradaDeTexto className="ingreso_input" id="descripcion" value={descripcion} placeholder="Descripcion"  function={e => setDescripcion(e.target.value)}/>
                <EntradaDeTexto className="ingreso_input" id="persona" value={persona} placeholder="Persona"   options={propName(datap,'nombre')} function={e => setPersona(e.target.value)}/>

                <Boton text="Enviar" function={handleSubmitPost}/>
                </div>
            </form>
            </div>
        </>
    );
}