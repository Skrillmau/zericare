import React from 'react';
import Buttom from "../Button/txt/txtButton.js";
import classes from "./OrdenFinal.css";

const OrdenFinal = (props) => {

    return (
        <div className={classes.gridContainer}>
            
            <div className={classes.bloque}>
                <p>Nombre: {props.nombre}</p>
                <p>Cantidad: {props.cantidad}</p>
            </div>
            <div className={classes.bloque}>
                <p>Dosis: {props.dosis}</p>
                <p>Observaciones: {props.observaciones}</p>
            </div>
            <div className={classes.item1}>
                <div className={classes.bloque2}>
                <Buttom color="red" onclick={props.onclick}>Eliminar</Buttom>
                </div>
                
            </div>
            
        </div>
    );
};

export default OrdenFinal;