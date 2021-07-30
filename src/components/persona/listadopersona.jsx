import React, {useEffect, useState} from 'react';
import handleGet from '../../middleware/get';
import handleDelete from '../../middleware/delete';
import handlePut from '../../middleware/put';
import Boton from '../utility/boton';
import Card from '../utility/card';
import EntradaDeTexto from '../utility/input';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import BotonModi from '../utility/botonmodificar';

import IngresarPersona from './ingresarpersona';

const url = 'http://localhost:3000/persona/';

export default function ListadoPersona() {
    const [data, setdata] = useState([]);
    const[flag, setFlag] = useState([true]);
    const datared = useSelector((state) => state.persona);
    const dispatch = useDispatch();
    const okText = "Persona Borrada";
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [alias, setAlias] = useState('');
    const form = {
        nombre: nombre,
        apellido: apellido,
        alias: alias
    };
    useEffect(() => {
        handleGet(url, setdata);
        dispatch({type:"ADDPERSON", data: data});
        if(data.length > flag.length){
            setFlag([...flag, true]);
        }
    }, [data]);
    const listaPersona = data.map((persona, index) => {
        const input = <><br></br><EntradaDeTexto placeholder = "Nombre" id="nombre" value={nombre} function={e => setNombre(e.target.value)}/>
                        <EntradaDeTexto placeholder = "Apellido" id="apellido" value={apellido} function={e => setApellido(e.target.value)}/>
                        <EntradaDeTexto placeholder = "Alias" id="alias" value={alias} function={e => setAlias(e.target.value)}/></>;
        let modificando = "";
        if(flag[index]==false)
        {
            modificando = input;
        }
        let texto = <p>{"Nombre: "   + persona.nombre}</p>
        var infill = <>{texto}
                        <p>{"Apellido: " + persona.apellido}</p>
                        <p>{"Alias: "    + persona.alias}</p>
                        <p>{"Email: "    + persona.email}</p>
                        <BotonModi class={"btn btn-primary"} index={index} id={persona.id} form={form} ruta={url} flag={flag} setFlag={setFlag} />
                        <Boton class = "btn btn-danger" text="BORRAR" function={() => handleDelete(url + persona.id, okText)}/>
                        {modificando}</>
        return (
            <Card infill = {infill} key ={"persona" + persona.id}/>
        );
    });
    return(
    <>
        <IngresarPersona/>
        <div className="container">{listaPersona}</div>
    </>
    );
}