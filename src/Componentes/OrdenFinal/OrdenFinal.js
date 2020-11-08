import React from 'react';
import Buttom from "../Button/txt/txtButton.js";

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
            <Buttom color="red" onclick={props.onclick}>Eliminar</Buttom>
        </div>
    );
};

export default OrdenFinal;