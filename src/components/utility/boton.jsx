import React from 'react';

export default function boton(props) {

    return (
        <>
            <button type="submit" onClick={props.function}>{props.text}</button>
        </>
    );
}