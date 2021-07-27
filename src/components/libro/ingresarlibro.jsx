import React, { useState } from 'react';
import axios from 'axios';

const url = 'http://localhost:3000/libro'


//Formulario para ingresar nuevo libro, NO ANDA
export default function IngresarLibro() {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categoria_id, setCategoria_id] = useState('');
    const [persona_id, setPersona_id] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = {
            nombre: nombre,
            descripcion: descripcion,
            categoria: categoria_id,
            persona: persona_id
        }

        try {
            const respuesta = await axios.post(url, form);
            
            if(respuesta.status === 200){
                alert("Libro agregado con exito");
            }

        } catch (err) {
            alert(err.response.data);
            console.log('Error: ', err.message);
        }

    }

    return (
        <>
            <h3>Ingresar nuevo libro</h3> 
            <form>
                <label>Nombre</label>
                <input required type="text" id="nombre" value={nombre} onChange={e => setNombre(e.target.value)} />

                <label>Categoria ID</label>
                <input required type="number" id="categoria_id" value={categoria_id} onChange={e => setCategoria_id(e.target.value)} />

                <label>Descripcion</label>
                <input required type="text" id="descripcion" value={descripcion} onChange={e => setDescripcion(e.target.value)} />

                <label>Persona ID</label>
                <input required type="number" id="persona_id" value={persona_id} onChange={e => setPersona_id(e.target.value)} />

                <button type="submit" onClick={handleSubmit}>Enviar</button>
            </form>
        </>
    );
}