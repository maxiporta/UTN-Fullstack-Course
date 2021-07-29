import React, { useState } from 'react';
import axios from 'axios';

const url = 'http://localhost:3000/categoria'


export default function IngresarCategoria() {

    const [nombre, setNombre] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = {
            nombre: nombre
        }

        try {
            const respuesta = await axios.post(url, form);
            
            if(respuesta.status === 200){
                alert("Categoria agregada con exito");
            }

        } catch (err) {
            alert(err.response.data);
            console.log('Error: ', err.message);
        }

    }

    return (
        <>
            <h3>Ingresar nueva categoria</h3> 
            <form>
                <label>Nombre</label>
                <input required type="text" id="nombre" value={nombre} onChange={e => setNombre(e.target.value)} />

                <button type="submit" onClick={handleSubmit}>Enviar</button>
            </form>
        </>
    );
}