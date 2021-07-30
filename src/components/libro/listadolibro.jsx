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
import { propName, nameToID, nameToX } from '../../functions/functions';
import BotonModi from "../utility/botonmodificar"
const url = 'http://localhost:3000/libro/';

export default function ListadoLibro() {
    const [data, setdata] = useState([]);
    const datared = useSelector((state) => state.libro);
    const dispatch = useDispatch();
    const okText = "Libro borrado con exito";
    const [descripcion, setDescripcion] = useState('');
    const [persona, setPersona] = useState('');
    const[flag, setFlag] = useState([true]);
    const form = {
        descripcion: descripcion
    };
    //chanchada
    const [datap, setDatap] = useState([]);
    const [datac, setDatac] = useState([]);

    useEffect(() => {
        handleGet("http://localhost:3000/persona", setDatap);
        handleGet("http://localhost:3000/categoria", setDatac);
    }, []);
    //mejorar

    useEffect(() => {
        handleGet(url, setdata);
        if(data.length > flag.length){
            setFlag([...flag, true]);
        }
      }, [data]);


    const devolver = (form)=> {
        handlePut("http://localhost:3000/libro/devolver/"+form.id, "devuelto", form);
    }
    const presta = (form, persona)=>  {
        form.persona_id = persona;
        handlePut("http://localhost:3000/libro/prestar/"+form.id, "prestado", form);
    }
    const listaLibro = data.map((libro, index) => {
        let prestar = "PRESTAR";
        let pd = presta;
        let options = <EntradaDeTexto className="ingreso_input" id="persona" value={persona} placeholder="datap"   options={propName(datap,'email')} function={e =>setPersona(nameToID(datap,'email',e.target.value)) }/>
        const input = <EntradaDeTexto className="ingreso_input" id="descripcion" value={descripcion} placeholder="Descripcion"  function={e => setDescripcion(e.target.value)}/>;
        let modificando = "";
        if(flag[index]==false)
        {
            modificando = input;
        }
        if(libro.persona_id!=null ){
            options = "";
            prestar="DEVOLVER";
            pd = devolver;
        }
        var infill = <><Libro nombre={libro.nombre} descripcion={libro.descripcion} persona={nameToX(datap,'id',libro.persona_id,'nombre')} categoria={nameToX(datac,'id',libro.categoria_id,'nombre')} />
                        <BotonModi class={"btn btn-primary"} index={index} id={libro.id} form={form} ruta={url} flag={flag} setFlag={setFlag} />
                        <Boton class = "btn btn-outline-primary" text = {prestar} function={() => pd(libro, persona)}/>
                        <Boton class = "btn btn-danger" text = "BORRAR" function={() => handleDelete(url + libro.id, okText)}/>
                        {options}
                        {modificando}</>;

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