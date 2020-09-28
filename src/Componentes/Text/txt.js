import React from 'react';
import Style from './txt.module.css'

const Txt = (props) => {
    const side = props.side
    if (side === 'right'){
        return <p className={Style.pR}>{props.children}</p>
    }
    return (
        <p className={Style.p}>{props.children}</p>
    );
};

export default Txt;