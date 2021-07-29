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
    const okText = "Libro ingresado";
    useEffect(() => {
        handleGet("http://localhost:3000/persona", setDatap);
        handleGet("http://localhost:3000/categoria", setDatac);
    }, []);
    const form = {
        nombre: nombre,
        descripcion: descripcion,
        categoria_id: categoria,
        persona: persona 
    };
    const handleSubmit = async (e) => {
        handleSubmitPost(e, form, url, okText);
    }
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
                return prop[i]['id'];
            }
        }
        return null;
    }
    return (
        <>
            <div className="ingreso_container">
            <h3>Ingresar nuevo libro</h3> 
            <form className="ingreso_form">
                <div className="inputs">
                <EntradaDeTexto className="ingreso_input" id="nombre" value={nombre} placeholder="Nombre"  function={e => setNombre(e.target.value)}/>
                <EntradaDeTexto className="ingreso_input" id="categoria" value={categoria} placeholder="Genero" options={propName(datac,'nombre')} function={e => setCategoria_id(nameToID(datac,'nombre',e.target.value))}/>
                <EntradaDeTexto className="ingreso_input" id="descripcion" value={descripcion} placeholder="Descripcion"  function={e => setDescripcion(e.target.value)}/>
                <EntradaDeTexto className="ingreso_input" id="persona" value={persona} placeholder="Persona"   options={propName(datap,'email')} function={e =>setPersona(nameToID(datap,'email',e.target.value)) }/>

                <Boton text="Enviar" function={handleSubmit}/>
                </div>
            </form>
            </div>
        </>
    );
}