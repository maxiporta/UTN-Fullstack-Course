import React from 'react';

export default function entradaDeTexto(props) {
    let label = "";
    let input = <>
    <input required type={props.type} id={props.id} value={props.nombre} onChange={props.function} placeholder={props.placeholder} className={props.className}/></>
    if(props.label !== "default")
    {
        label = <label>{props.label}</label>;
    }
    if(props.options != "")
    {
        const option = props.options.map((opciones, index) => {
            return (
                <option >{opciones}</option>

            );
        });
        input = <>
            <select type={props.type} id={props.id} value={props.nombre} onChange={props.function} placeholder={props.placeholder} className={props.className}>
            {option}
        </select></>
    }
    return(
        <>
            {label}
            {input}
        </>
    );
}
entradaDeTexto.defaultProps = {
    type: "texto",
    label: "default",
    placeholder: "",
    className: "",
    options:""
};
