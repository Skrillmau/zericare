import React from 'react';

const Medicamento = (props) => {
    return (
        <div>
            <p>Nombre: {props.medicamento.Nombre}</p>
            <p>Cantidad: {props.medicamento.Cantidad}</p>
            <p>Dosis: {props.medicamento.Dosis}</p>
            <p>Observaciones: {props.medicamento.Observaciones}</p>
        </div>
    );
};

export default Medicamento;