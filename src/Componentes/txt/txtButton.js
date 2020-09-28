import React from 'react';
import Style from './txt.module.css'

const TxtButton = (props) => {
    const color = props.color
    let col
    if (color === 'red' ){
        col = Style.divR
    } else if (color === 'blue') {
        col = Style.divB
    }
    return (
        <button className={`hvr-grow ${col}`} onClick={props.onclick} onSubmit={props.onsubmit} type={props.type}>
            {props.children}
        </button>
    );
};

export default TxtButton;