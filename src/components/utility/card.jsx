import React from 'react';

export default function card(props) {

    return (
        <div className="card animated fadeIn bg-transparent" style={{marginTop:"1rem"}} key = {props.keys}>
        <img className="card-img-top img-fluid img" src="..." alt=""/>
        <div className="card-body">
                {props.infill}
        </div>
    </div>     
    );
}
card.defaultProps = {
    infill: "",
    key: ""
};