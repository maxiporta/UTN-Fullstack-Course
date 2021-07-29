import React, { useState } from 'react';
import axios from 'axios';


const url = 'http://localhost:3000/libro'


//Formulario para ingresar nuevo libro, NO ANDA
export default function IngresarLibro() {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria_id] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = {
            nombre: nombre,
            descripcion: descripcion,
            categoria: categoria
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
            <div className="ingreso_container">
            <h3>Ingresar nuevo libro</h3> 
            <form className="ingreso_form">
                <div className="inputs">

                <input className="ingreso_input" required type="text" id="nombre" value={nombre} placeholder="Nombre" onChange={e => setNombre(e.target.value)} />

                <input className="ingreso_input" required type="text" id="categoria" value={categoria} placeholder="Genero" onChange={e => setCategoria_id(e.target.value)} />

                <input className="ingreso_input" required type="text" id="descripcion" value={descripcion} placeholder="Descripcion" onChange={e => setDescripcion(e.target.value)} />


                <button type="submit" onClick={handleSubmit}>Enviar</button>
                </div>
            </form>
            </div>
        </>
    );
}