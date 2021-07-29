import React, { useState } from 'react';
import handleSubmitPost from '../utility/post';
import EntradaDeTexto from '../utility/input';
import Boton from '../utility/boton';
const url = 'http://localhost:3000/categoria'


export default function IngresarCategoria() {

    const [nombre, setNombre] = useState('');
    const okText = "Categoria agregada con exito";
    const form = {
        nombre: nombre
    };
    const handleSubmit = async (e) => {
        handleSubmitPost(e, form, url, okText);
    }
    return (
        <>
            <h3>Ingresar nueva categoria</h3> 
            <form>
                <EntradaDeTexto label = "Nombre" id="nombre" value={nombre} function={e => setNombre(e.target.value)}/>
                <Boton text="Enviar" function={handleSubmit}/>
            </form>
        </>
    );
}