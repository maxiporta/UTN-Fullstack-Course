import React from 'react';
import Boton from '../utility/boton';
import handlePut from '../../middleware/put';
import { changeFlagArray } from '../../functions/functions';

export default function BotonModi(props) {
    const botonModificar = (setflag, flagi, flag, index, id, struct, ruta)=>{
        if(flagi === true)
        {
            handlePut(ruta+id, "modificado con exito", struct);
        }

        changeFlagArray(setflag, flagi, flag, index)
    }
    let modificar = "MODIFICAR";
    if(props.flag[props.index] === false){
        modificar = "Guardar";
    }

    return(
        <>
            <Boton class = {props.class} text={modificar} function={() => botonModificar(props.setFlag, !props.flag[props.index], props.flag, props.index, props.id, props.form, props.ruta)}/>
        </>
    );
}
