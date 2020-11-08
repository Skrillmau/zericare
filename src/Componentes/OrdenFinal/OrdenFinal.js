import React from 'react';

const OrdenFinal = (props) => {

    return (
        <div>
            <div>
    <p>Nombre: {props.nombre}</p>
    <p>Cantidad: {props.cantidad}</p>
            </div>
            <div>
    <p>Dosis: {props.dosis}</p>
    <p>Observaciones: {props.observaciones}</p>
            </div>
        </div>
    );
};

export default OrdenFinal;