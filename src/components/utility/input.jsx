import React from 'react';

export default function entradaDeTexto(props) {
    var label = "";
    if(props.label !== "default")
    {
        label = <label>{props.label}</label>;
    }
    return (
        <>
            {label}
            <input required type={props.type} id={props.id} value={props.nombre} onChange={props.function} placeholder={props.placeholder} className={props.className}/>
        </>
    );
}
entradaDeTexto.defaultProps = {
    type: "texto",
    label: "default",
    placeholder: "",
    className: ""
};