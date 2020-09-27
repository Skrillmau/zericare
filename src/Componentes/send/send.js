import React from 'react';
import Style from './send.module.css'

const Send = (props) => {
    return (
        <div className={Style.wrapper}>
        <button className={`hvr-grow ${Style.button}`} type={props.type} onClick={props.onclick}>
            <span><img className={Style.img} src={'/assets/Enviar.png'} alt={'Imagen'}/><p className={Style.txt}>Enviar</p></span>
        </button>
        </div>
    );
};

export default Send;