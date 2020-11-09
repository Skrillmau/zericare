import React from 'react';
import classes from './Medicamento.module.css'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
const Medicamento = (props) => {
    return (
        <div>
            <div className={classes.item}>
                <KeyboardArrowRightIcon />
                <p>Nombre: {props.medicamento.Nombre}</p>
            </div>
            <div className={classes.item2}>
                <p>Cantidad: {props.medicamento.Cantidad}</p>
                <p>Dosis: {props.medicamento.Dosis}</p>
                <p>Observaciones: {props.medicamento.Observaciones}</p>
            </div>

        </div>
    );
};

export default Medicamento;