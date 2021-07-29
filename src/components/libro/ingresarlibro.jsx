import React, { useState } from 'react';
import handleSubmitPost from '../utility/post';
import EntradaDeTexto from '../utility/input';
import Boton from '../utility/boton';

const url = 'http://localhost:3000/libro'

//Formulario para ingresar nuevo libro, NO ANDA
export default function IngresarLibro() {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria_id] = useState('');
    const okText = "Libro ingresado";
    const form = {
        nombre: nombre,
        descripcion: descripcion,
        categoria_id: categoria
    };
    const handleSubmit = async (e) => {
        handleSubmitPost(e, form, url, okText);
    }
    return (
        <>
            <div className="ingreso_container">
            <h3>Ingresar nuevo libro</h3> 
            <form className="ingreso_form">
                <div className="inputs">
                <EntradaDeTexto className="ingreso_input" id="nombre" value={nombre} placeholder="Nombre"  function={e => setNombre(e.target.value)}/>
                <EntradaDeTexto className="ingreso_input" id="categoria" value={categoria} placeholder="Genero"  function={e => setCategoria_id(e.target.value)}/>
                <EntradaDeTexto className="ingreso_input" id="descripcion" value={descripcion} placeholder="Descripcion"  function={e => setDescripcion(e.target.value)}/>
                
                <Boton text="Enviar" function={handleSubmit}/>
                </div>
            </form>
            </div>
        </>
    );
}