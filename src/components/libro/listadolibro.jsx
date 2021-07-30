import React, {useEffect, useState} from 'react';
import './style.css'
import Boton from '../utility/boton';
import Libro from './libro';
import Card from '../utility/card';
import handleGet from '../../middleware/get';
import handleDelete from '../../middleware/delete';
import handlePut from '../../middleware/put';
import IngresarLibro from './ingresarlibro';
import EntradaDeTexto from '../utility/input';
import { useDispatch, useSelector } from 'react-redux';

const url = 'http://localhost:3000/libro/';

export default function ListadoLibro() {
    const [data, setdata] = useState([]);
    const [flag, setflag] = useState(false);
    const datared = useSelector((state) => state.libro);
    const dispatch = useDispatch();
    const okText = "Libro borrado con exito";
    const form = {
        nombre: "nombre"
    };
    //chanchada
    const [datap, setDatap] = useState([]);
    const [datac, setDatac] = useState([]);
    const [persona, setPersona] = useState([]);

    useEffect(() => {
        handleGet("http://localhost:3000/persona", setDatap);
        handleGet("http://localhost:3000/categoria", setDatac);
    }, []);
    function nameToX(prop, key, name, X){
        for(var i in prop) {
            if(prop[i][key]===name)
            {
                return prop[i][X];
            }
        }
        return null;
    }
    function propName(prop, value){
        let string = [];
        for(var i in prop) {
            string.push(prop[i][value]);
        }
        return string;
    }
    function nameToID(prop, key, name){
        for(var i in prop) {
            if(prop[i][key]===name)
            {
                return prop[i]['id'];
            }
        }
        return null;
    }
    //mejorar
    //mejorar

    useEffect(() => {
        handleGet(url, setdata);
      }, [data]);


    const devolver = (form)=> {
        handlePut("http://localhost:3000/libro/devolver/"+form.id, "devuelto", form);
    }
    const presta = (form, persona)=>  {
        form.persona_id = persona;
        handlePut("http://localhost:3000/libro/prestar/"+form.id, "prestado", form);
    }

    
    const listaLibro = data.map((libro) => {
        let prestar = "PRESTAR";
        let pd = presta;
        let options = <EntradaDeTexto className="ingreso_input" id="persona" value={persona} placeholder="datap"   options={propName(datap,'email')} function={e =>setPersona(nameToID(datap,'email',e.target.value)) }/>

        if(libro.persona_id!=null )
        {
            options = "";
            prestar="DEVOLVER";
            pd = devolver;
        }
        var infill = <><Libro nombre={libro.nombre} descripcion={libro.descripcion} persona={nameToX(datap,'id',libro.persona_id,'nombre')} categoria={nameToX(datac,'id',libro.categoria_id,'nombre')} />
                        <Boton class = "btn btn-primary" text="MODIFICAR" function={() => handlePut(url + libro.id, okText, form)}/>
                        <Boton class = "btn btn-outline-primary" text = {prestar} function={() => pd(libro, persona)}/>
                        <Boton class = "btn btn-danger" text = "BORRAR" function={() => handleDelete(url + libro.id, okText)}/>
                        {options}</>
        return ( 
            // eslint-disable-next-line react/style-prop-object
            <Card infill = {infill} key ={"libro" + libro.id}/>
        );
    });
    return(
        <>
            <IngresarLibro/>
            <div className="container">{listaLibro}</div>
        </>
    );
}