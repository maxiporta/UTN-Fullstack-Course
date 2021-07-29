import React from 'react';

export default function boton(props) {

    return (
        <>
            <button className={props.class} type="submit" onClick={props.function}>{props.text}</button>
        </>
    );
}
boton.defaultProps = {
    class: "",
    function:null
};