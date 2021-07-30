import React from 'react';

export default function libro(props) {
    let prestado = "prestado a,";
    if(props.persona == null)
    {
        prestado = [];
    }
    return (
        <div class="book">
            <div class="back"></div>
            <div class="page6">
                <p>{props.descripcion}</p>
                <p>{prestado} {props.persona}</p>
            </div>
            <div class="page5"></div>
            <div class="page4"></div>
            <div class="page3"></div>
            <div class="page2"></div>
            <div class="page1">
            </div>
            <div class="front">
                <p>{props.nombre}</p>
                <p class="categoria">{props.categoria}</p>
            </div>
        </div>
    );
}
libro.defaultProps = {
    descripcion: [],
    persona: null

};