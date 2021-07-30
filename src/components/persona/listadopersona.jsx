import React, {useEffect, useState} from 'react';
import handleGet from '../../middleware/get';
import handleDelete from '../../middleware/delete';
import Boton from '../utility/boton';
import Card from '../utility/card';
import EntradaDeTexto from '../utility/input';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import BotonModi from '../utility/botonmodificar';
import { nameToX } from '../../functions/functions';
import IngresarPersona from './ingresarpersona';
import Libro from '../libro/libro';

const url = 'http://localhost:3000/persona/';

export default function ListadoPersona() {
    const [data, setdata] = useState([]);
    const[flag, setFlag] = useState([true]);
    const datar = useSelector((state) => state);
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
    useEffect(() => {
        handleGet(url, setdata);
        if(data.length > flag.length){
            setFlag([...flag, true]);
        }
    }, [data]);
    const verLibro = (index)=>{
        setActualPerson(index);
    }
    let listaPersona = data.map((persona, index) => {
            const input = <><br></br><EntradaDeTexto placeholder = "Nombre" id="nombre" value={nombre} function={e => setNombre(e.target.value)}/>
                            <EntradaDeTexto placeholder = "Apellido" id="apellido" value={apellido} function={e => setApellido(e.target.value)}/>
                            <EntradaDeTexto placeholder = "Alias" id="alias" value={alias} function={e => setAlias(e.target.value)}/></>;
            let modificando = "";
            if(flag[index]===false)
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
        let texto = <p>{"Nombre: "   + data[actualPerson].nombre}</p>
        var infill = <>{texto}
                <p>{"Apellido: " + data[actualPerson].apellido}</p>
                <p>{"Alias: "    + data[actualPerson].alias}</p>
                <p>{"Email: "    + data[actualPerson].email}</p>
                <BotonModi class={"btn btn-primary"} index={actualPerson} id={data[actualPerson].id} form={form} ruta={url} flag={flag} setFlag={setFlag} />
                <Boton class = "btn btn-outline-primary" text="DEJAR DE VER" function={() => verLibro(null)}/>
                <Boton class = "btn btn-danger" text="BORRAR" function={() => handleDelete(url + data[actualPerson].id, okText)}/>
                {modificando}</>
        var listaLibros = datar.libro.map((libro, index) => {
            if(libro.persona_id === data[actualPerson].id){
                let l = <><Libro nombre={libro.nombre} descripcion={libro.descripcion} persona={nameToX(data,'id',libro.persona_id,'nombre')} categoria={nameToX(datar.categoria,'id',libro.categoria_id,'nombre')} /></>;
                return ( 
                    // eslint-disable-next-line react/style-prop-object
                    <Card infill = {l} keys ={"libro" + libro.id}/>
                );
            }
            return "";
        });    
        listaPersona = <><Card infill = {infill} keys ={"persona" + data[actualPerson].id}/>{listaLibros}</>;
    }
    return(
    <>
        <IngresarPersona/>
        <div className="container">{listaPersona}</div>
    </>
    );
}