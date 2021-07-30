import React, {useEffect, useState} from 'react';
import handleGet from '../../middleware/get';
import handleDelete from '../../middleware/delete';
import Boton from '../utility/boton';
import Card from '../utility/card';
import EntradaDeTexto from '../utility/input';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import BotonModi from '../utility/botonmodificar';
import { nameToX, startFlag } from '../../functions/functions';
import IngresarPersona from './ingresarpersona';
import Libro from '../libro/libro';

const url = 'http://localhost:3000/persona/';

export default function ListadoPersona() {
    const data = useSelector((state) => state);
    const[flag, setFlag] = useState([...startFlag(data.persona.length)]);
    const dispatch = useDispatch();
    const okText = "Persona Borrada";
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [alias, setAlias] = useState('');
    const [actualPerson, setActualPerson] = useState(null);
    const form = {
        nombre: nombre,
        apellido: apellido,
        alias: alias
    };
    const verLibro = (index)=>{
        setActualPerson(index);
    }
    let listaPersona = data.persona.map((persona, index) => {
            const input = <><br></br><EntradaDeTexto placeholder = "Nombre" id="nombre" value={nombre} function={e => setNombre(e.target.value)}/>
                            <EntradaDeTexto placeholder = "Apellido" id="apellido" value={apellido} function={e => setApellido(e.target.value)}/>
                            <EntradaDeTexto placeholder = "Alias" id="alias" value={alias} function={e => setAlias(e.target.value)}/></>;
            let modificando = "";
            if(flag[index]===true)
            {
                modificando = input;
            }
            let texto = <p>{"Nombre: "   + persona.nombre}</p>
            var infill = <>{texto}
                            <p>{"Apellido: " + persona.apellido}</p>
                            <p>{"Alias: "    + persona.alias}</p>
                            <p>{"Email: "    + persona.email}</p>
                            <BotonModi class={"btn btn-primary"} index={index} id={persona.id} form={form} ruta={url} flag={flag} setFlag={setFlag} />
                            <Boton class = "btn btn-outline-primary" text="VER LIBROS" function={() => verLibro(index)}/>
                            <Boton class = "btn btn-danger" text="BORRAR" function={() => handleDelete(url + persona.id, okText)}/>
                            {modificando}</>
        return (
            <Card infill = {infill} keys ={"persona" + persona.id}/>
        );
    });
    
    if(actualPerson !== null)
    {
        const input = <><br></br><EntradaDeTexto placeholder = "Nombre" id="nombre" value={nombre} function={e => setNombre(e.target.value)}/>
                                <EntradaDeTexto placeholder = "Apellido" id="apellido" value={apellido} function={e => setApellido(e.target.value)}/>
                                <EntradaDeTexto placeholder = "Alias" id="alias" value={alias} function={e => setAlias(e.target.value)}/></>;
        let modificando = "";
        if(flag[actualPerson]===false)
        {
            modificando = input;
        }
        let texto = <p>{"Nombre: "   + data.persona[actualPerson].nombre}</p>
        var infill = <>{texto}
                <p>{"Apellido: " + data.persona[actualPerson].apellido}</p>
                <p>{"Alias: "    + data.persona[actualPerson].alias}</p>
                <p>{"Email: "    + data.persona[actualPerson].email}</p>
                <BotonModi class={"btn btn-primary"} index={actualPerson} id={data.persona[actualPerson].id} form={form} ruta={url} flag={flag} setFlag={setFlag} />
                <Boton class = "btn btn-outline-primary" text="DEJAR DE VER" function={() => verLibro(null)}/>
                <Boton class = "btn btn-danger" text="BORRAR" function={() => handleDelete(url + data.persona[actualPerson].id, okText)}/>
                {modificando}</>
        var listaLibros = data.libro.map((libro, index) => {
            if(libro.persona_id === data.persona[actualPerson].id){
                let l = <><Libro nombre={libro.nombre} descripcion={libro.descripcion} persona={nameToX(data.persona,'id',libro.persona_id,'nombre')} categoria={nameToX(data.categoria,'id',libro.categoria_id,'nombre')} /></>;
                return ( 
                    // eslint-disable-next-line react/style-prop-object
                    <Card infill = {l} keys ={"libro" + libro.id}/>
                );
            }
            return "";
        });    
        listaPersona = <><Card infill = {infill} keys ={"persona" + data.persona[actualPerson].id}/>{listaLibros}</>;
    }
    return(
    <>
        <IngresarPersona/>
        <div className="container">{listaPersona}</div>
    </>
    );
}