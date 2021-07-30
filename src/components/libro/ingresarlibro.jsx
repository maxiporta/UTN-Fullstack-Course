import React, { useState } from 'react';
import handleSubmitPost from "../../middleware/post";
import Boton from '../utility/boton';
import handleGet from '../../middleware/get';
import { useEffect } from 'react';
import Libroformulario from './libroformulario';

const url = 'http://localhost:3000/libro'

export default function IngresarLibro() {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria_id] = useState('');
    const [persona, setPersona] = useState('');
    const form = {
        nombre: nombre,
        descripcion: descripcion,
        categoria_id: categoria,
        persona_id: persona 
    };
    const okText = "Libro ingresado";
    
    const [datap, setDatap] = useState([]);
    const [datac, setDatac] = useState([]);
    useEffect(() => {
        handleGet("http://localhost:3000/persona", setDatap);
        handleGet("http://localhost:3000/categoria", setDatac);
    }, []);
    const handleSubmit = async (e) => {
        if(form.categoria_id === ''){
            form.categoria_id = datac[0].id;
        }
        if(form.persona_id === '')
        {
            form.persona_id = datap[0].id;
        }
        handleSubmitPost(e, form, url, okText);
    }
    return (
        <>
            <div className="ingreso_container">
            <h3>Ingresar nuevo libro</h3> 
            <form className="ingreso_form">
                <div className="inputs">
                    <Libroformulario  setNombre ={setNombre} nombre={nombre} setDescripcion ={setDescripcion} descripcion={descripcion} setCategoria_id ={setCategoria_id} categoria={categoria} setPersona ={setPersona} persona={persona} datap={datap} datac={datac}/>
                    <Boton text="Enviar" function={handleSubmit}/>
                </div>
            </form>
            </div>
        </>
    );
}