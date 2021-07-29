import React, {useEffect, useState} from 'react';
import './style.css'
import Boton from '../utility/boton';
import Libro from './libro';
import Card from '../utility/card';
import handleGet from '../../middleware/get';
import handleDelete from '../../middleware/delete';
import handlePut from '../../middleware/put';
import IngresarLibro from './ingresarlibro';
import { useDispatch, useSelector } from 'react-redux';

const url = 'http://localhost:3000/libro/';

export default function ListadoLibro() {
    const [data, setdata] = useState([]);
    const datared = useSelector((state) => state.libro);
    const dispatch = useDispatch();
    const okText = "Libro borrado con exito";
    const form = {
        nombre: "hola"
    }
    //chanchada
    const [datap, setDatap] = useState([]);
    const [datac, setDatac] = useState([]);
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
    //mejorar

    useEffect(() => {
        handleGet(url, setdata);
      }, [data]);

    const listaLibro = data.map((libro) => {
        var infill = <><Libro nombre={libro.nombre} descripcion={libro.descripcion} persona={nameToX(datap,'id',libro.persona_id,'nombre')} categoria={nameToX(datac,'id',libro.categoria_id,'nombre')} />
                        <Boton class = "btn btn-primary" text="MODIFICAR" function={() => handlePut(url + libro.id, okText, form)}/>
                        <Boton class = "btn btn-outline-primary" text = "PRESTAR"/>
                        <Boton class = "btn btn-danger" text = "BORRAR" function={() => handleDelete(url + libro.id, okText)}/></>
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