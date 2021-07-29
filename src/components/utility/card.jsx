import React from 'react';

export default function card(props) {

    return (
        <div class="card animated fadeIn fast" Style={{marginTop:"1rem"}}>
        <img class="card-img-top img-fluid img" src="..." alt=""/>
        <div class="card-body">
            {props.infill}
        </div>
    </div>     
    );
}
card.defaultProps = {
    infill: ""
};