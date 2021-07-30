import React, {useEffect, useState} from 'react';
import handleGet from '../../middleware/get';
import handleDelete from '../../middleware/delete';
import Boton from '../utility/boton';
import Card from '../utility/card';
import EntradaDeTexto from '../utility/input';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import BotonModi from '../utility/botonmodificar';
import { startFlag } from '../../functions/functions';
import IngresarPersona from './ingresarpersona';
import MostrarLibro from '../libro/MostrarLibros';
import FormularioPersonaTarjeta from './formularioPersonaTarjeta';
import InfillPersona from './infillPersona';

export default function ListadoPersona() {
    const data = useSelector((state) => state);
    const dispatch = useDispatch();
    const [person, setPersona] = useState('');
    const [actualPerson, setActualPerson] = useState(null);
    const[flag, setFlag] = useState([...startFlag(data.persona.length)]);
    const okText = "Persona Borrada";
    const url = 'http://localhost:3000/persona/';
    const form = {
        nombre: person.nombre,
        apellido: person.apellido,
        alias: person.alias
    };

    const verLibro = (index)=>{
        setActualPerson(index);
    }
    
    let listaPersona = data.persona.map((persona, index) => {
            let modificando = "";
            if(flag[index]===true)
            {
                modificando = <FormularioPersonaTarjeta person={person} setPersona={setPersona}/>;
            }
            const infill = <InfillPersona botom={modificando} text={"VER LIBROS"} person={data.persona[index] }index= {index} url = {url} form = {form} flag={flag}  okText={okText} setFlag={setFlag} verLibro ={setActualPerson}/>;
        return (
            <Card infill = {infill} keys ={"persona" + persona.id}/>
        );
    });
    
    if(actualPerson !== null)//cuando ves los libros de una persona 
    {
        let modificando = "";
        if(flag[actualPerson]===true)
        {
            modificando = <FormularioPersonaTarjeta person={person} setPersona={setPersona}/>;
        }
        const infill = <InfillPersona botom={modificando} text={"DEJAR DE VER"} person={data.persona[actualPerson] }index= {actualPerson} url = {url} form = {form} flag={flag}  okText={okText} setFlag={setFlag} verLibro ={() => setActualPerson(null)}/>;
        listaPersona = <><Card infill = {infill} keys ={"persona" + data.persona[actualPerson].id}/>{<MostrarLibro index = {actualPerson} filtro = {true}/>}</>;

    }
    return(
    <>
        <IngresarPersona/>
        <div className="container">{listaPersona}</div>
    </>
    );
}