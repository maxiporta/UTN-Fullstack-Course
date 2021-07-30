import React from 'react';
import BotonModi from '../utility/botonmodificar';
import Boton from '../utility/boton';
import handleDelete from '../../middleware/delete';

export default function InfillPersona(props) {
    let infill = <><p>{"Nombre: "   + props.person.nombre}</p>
                    <p>{"Apellido: " + props.person.apellido}</p>
                    <p>{"Alias: "    + props.person.alias}</p>
                    <p>{"Email: "    + props.person.email}</p>
                    <BotonModi class={"btn btn-primary"} index={props.index} id={props.person.id} form={props.form} ruta={props.url} flag={props.flag} setFlag={props.setFlag} />
                    <Boton class = "btn btn-outline-primary" text={props.text} function={() => props.verLibro()}/>
                    <Boton class = "btn btn-danger" text="BORRAR" function={() => handleDelete(props.url + props.person.id, props.okText)}/>
                    {props.botom}
    </>;
    return (
        <>
            {infill}
        </>
    );
}
InfillPersona.defaultProps = {
    botom: "",

};
