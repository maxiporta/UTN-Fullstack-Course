import React from 'react';
import BotonModi from '../utility/botonmodificar';
import Boton from '../utility/boton';
import handleDelete from '../../middleware/delete';
import { categoria, urlroot, port} from '../../urls';

export default function InfillCategoria(props) {
    var infill = <><p class="whites">{props.categoria.nombre}</p>
                    <div class="abajo">
                    <BotonModi class={"btn btn-dark"} index={props.index} id={props.categoria.id} form={props.form} ruta={props.url} flag={props.flag} setFlag={props.setFlag} />
                    <Boton class = "btn btn-secondary" text={props.text} function={() => {props.verLibro(props.index)}}/>
                    <Boton class = "btn btn-danger" text="BORRAR" function={() => {handleDelete(props.url + props.categoria.id, props.okText);
                                                                                                          props.verLibro(null);}}/>
                    <div class= "dis">{props.botom}</div></div></>;
    return (
        <div class="backgc">
            {infill}
        </div>
    );
}
InfillCategoria.defaultProps = {
    botom: "",

};
