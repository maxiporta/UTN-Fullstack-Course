import React, { useState} from 'react';
import './style.css'
import Boton from '../utility/boton';
import Libro from './libro';
import Card from '../utility/card';
import handleDelete from '../../middleware/delete';
import handlePut from '../../middleware/put';
import IngresarLibro from './ingresarlibro';
import EntradaDeTexto from '../utility/input';
import { useSelector } from 'react-redux';
import { propName, nameToID, nameToX, startFlag } from '../../functions/functions';
import BotonModi from "../utility/botonmodificar"

export default function ListadoLibro() {
    const data = useSelector((state) => state);
    const[flag, setFlag] = useState([...startFlag(data.libro.length)]);
    const [lib, setLib] = useState({persona:'', descripcion:''});
    const okText = "Libro borrado con exito";
    const url = 'http://localhost:3000/libro/';
    const form = {
        descripcion: lib.descripcion
    };

    const devolver = (form)=> {
        handlePut("http://localhost:3000/libro/devolver/"+form.id, "El libro fue devuelto", form);
    }
    const presta = (form, persona)=>{
        form.persona_id = persona;
        if(persona === '')
        {
            form.persona_id = data.persona[0].id;
        }
        handlePut("http://localhost:3000/libro/prestar/"+form.id, "El libro fue prestado", form);
    }
    
    const listaLibro = data.libro.map((libro, index) => {
        let prestar = "PRESTAR";
        let pd = presta;
        let options = <EntradaDeTexto className="ingreso_input" id="persona" value={lib.persona} placeholder="datap"   options={propName(data.persona,'email')} function={e =>setLib({...lib, persona: nameToID(data.persona,'email',e.target.value)}) }/>
        const input = <EntradaDeTexto className="ingreso_input" id="descripcion" value={lib.descripcion} placeholder="Descripcion"  function={e => setLib({...lib, descripcion: e.target.value})}/>;
        let modificando = "";
        if(flag[index]===true)
        {
            modificando = input;
        }
        if(libro.persona_id!=null ){
            options = "";
            prestar="DEVOLVER";
            pd = devolver;
        }
        var infill = <div class = "backg"><Libro nombre={libro.nombre} descripcion={libro.descripcion} persona={nameToX(data.persona,'id',libro.persona_id,'alias')} categoria={nameToX(data.categoria,'id',libro.categoria_id,'nombre')} />
                        <BotonModi class={"btn btn-dark"} index={index} id={libro.id} form={form} ruta={url} flag={flag} setFlag={setFlag} />
                        <Boton class = "btn btn-secondary" text = {prestar} function={() => pd(libro, lib.persona)}/>
                        <Boton class = "btn btn-danger" text = "BORRAR" function={() => handleDelete(url + libro.id, okText)}/>
                        <br></br>
                        <div dis = "dis">{options}</div>
                        <div dis = "dis">{modificando}</div>
                        </div>;

        return (
            <Card infill = {infill} keys ={"libro" + libro.id}/>
        );
    });
    return(
        <>
            <IngresarLibro/>
            <div className="container">{listaLibro}</div>
        </>
    );
}