import React from 'react';
import Buttom from "../Button/txt/txtButton.js";
import classes from "./OrdenFinal.css";
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';

const OrdenFinal = (props) => {

    return (
        <div className={classes.gridContainer}>
            
            <div className={classes.bloque}>
                <p>Nombre: {props.nombre}</p>
                
                <p>Cantidad: {props.cantidad}</p>
                
            </div>
            <div className={classes.bloque}>
                <p>Dosis: {props.dosis}</p>
                
                <>Observaciones: {props.observaciones}</>
            
            </div>
            <div className={classes.item1}>
                <div className={classes.CancelBoton}>
                <div className={classes.bloque2}>
                <Buttom color="red" onclick={props.onclick}><ClearOutlinedIcon/></Buttom>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default OrdenFinal;