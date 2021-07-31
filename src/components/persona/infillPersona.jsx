import React from 'react';
import BotonModi from '../utility/botonmodificar';
import Boton from '../utility/boton';
import handleDelete from '../../middleware/delete';

export default function InfillPersona(props) {
    let infill = <><p class="white">{"Nombre: "   + props.person.nombre}</p>
                    <p class="white">{"Apellido: " + props.person.apellido}</p>
                    <p class="white">{"Alias: "    + props.person.alias}</p>
                    <p class="white">{"Email: "    + props.person.email}</p>
                    <div class="abajos">
                    <BotonModi class={"btn btn-dark"} index={props.index} id={props.person.id} form={props.form} ruta={props.url} flag={props.flag} setFlag={props.setFlag} />
                    <Boton class = "btn btn-secondary" text={props.text} function={() => props.verLibro(props.index)}/>
                    <Boton class = "btn btn-danger" text="BORRAR" function={() => {handleDelete(props.url + props.person.id, props.okText);
                                                                                  props.verLibro(null);}}/>
                    <div class= "dis">{props.botom}</div></div>    </>;
    return (
        <>  
            <div class="backgc">
                {infill}
            </div>
        </>
    );
}
InfillPersona.defaultProps = {
    botom: "",

};
