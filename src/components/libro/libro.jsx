import React from 'react';

export default function libro(props) {
    let prestado = "prestado a,";
    if(props.persona == null)
    {
        prestado = [];
    }
    return (
        <div className="book">
            <div className="back"></div>
            <div className="page6">
                <p>{props.descripcion}</p>
                <p>{prestado} {props.persona}</p>
            </div>
            <div className="page5"></div>
            <div className="page4"></div>
            <div className="page3"></div>
            <div className="page2"></div>
            <div className="page1">
            </div>
            <div className="front">
                <p>{props.nombre}</p>
                <p className="categoria">{props.categoria}</p>
            </div>
        </div>
    );
}
libro.defaultProps = {
    descripcion: [],
    persona: null

};