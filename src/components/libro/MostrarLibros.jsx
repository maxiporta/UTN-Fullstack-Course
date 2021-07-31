import React from 'react';
import { useSelector } from 'react-redux';
import { nameToX } from '../../functions/functions';
import Libro from  './libro'
import Card from '../utility/card';

export default function MostrarLibro(props) {
    const data = useSelector((state) => state);
    var listaLibros = data.libro.map((libro, index) => {
        console.log(props.compareValue)
        if((libro[props.typeCompare] === props.compareValue)|| !props.filtro){
            let l = <div class = "backg"><Libro nombre={libro.nombre} descripcion={libro.descripcion} persona={nameToX(data.persona,'id',libro.persona_id,'nombre')} categoria={nameToX(data.categoria,'id',libro.categoria_id,'nombre')} /></div>;
            return ( 
                <Card infill = {l} keys ={"libro" + libro.id}/>
            );
        }
        return "";
    });    
    return (
        <>
            {listaLibros}
        </>
    );
}
MostrarLibro.defaultProps = {
    filtro: false,
    index: 0,
    Buttons: ""
};
