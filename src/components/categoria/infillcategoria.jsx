import React from 'react';
import BotonModi from '../utility/botonmodificar';
import Boton from '../utility/boton';
import handleDelete from '../../middleware/delete';

export default function InfillCategoria(props) {
    var infill = <><p>{props.categoria.nombre}</p>
                    <BotonModi class={"btn btn-primary"} index={props.index} id={props.categoria.id} form={props.form} ruta={props.url} flag={props.flag} setFlag={props.setFlag} />
                    <Boton class = "btn btn-outline-primary" text={props.text} function={() => {props.verLibro(props.index)}}/>
                    <Boton class = "btn btn-danger" text="BORRAR" function={() => {handleDelete(props.url + props.categoria.id, props.okText);
                                                                                                          props.verLibro(null);}}/>
                    {props.botom}</>;
    return (
        <>
            {infill}
        </>
    );
}
InfillCategoria.defaultProps = {
    botom: "",

};
