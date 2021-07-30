import React, { useState } from 'react';
import handleSubmitPost from "../../middleware/post";
import Boton from '../utility/boton';
import handleGet from '../../middleware/get';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Libroformulario from './libroformulario';

const url = 'http://localhost:3000/libro'

export default function IngresarLibro() {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria_id] = useState('');
    const [persona, setPersona] = useState('');
    const data = useSelector((state) => state);

    const form = {
        nombre: nombre,
        descripcion: descripcion,
        categoria_id: categoria,
        persona_id: persona 
    };
    const okText = "Libro ingresado";
    const handleSubmit = async (e) => {
        if(form.categoria_id === ''){
            form.categoria_id = data.categoria[0].id;
        }
        if(form.persona_id === '')
        {
            form.persona_id = data.persona[0].id;
        }
        handleSubmitPost(e, form, url, okText);
    }
    return (
        <>
            <div className="ingreso_container">
            <h3>Ingresar nuevo libro</h3> 
            <form className="ingreso_form">
                <div className="inputs">
                    <Libroformulario  setNombre ={setNombre} nombre={nombre} setDescripcion ={setDescripcion} descripcion={descripcion} setCategoria_id ={setCategoria_id} categoria={categoria} setPersona ={setPersona} persona={persona} datap={data.persona} datac={data.categoria}/>
                    <Boton text="Enviar" function={handleSubmit}/>
                </div>
            </form>
            </div>
        </>
    );
}