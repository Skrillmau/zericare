import React from 'react';
import Button from '../Button/txt/txtButton'
import classes from "./Paciente.css";


const pacientes = (props) => {
    return (
        <div className={classes.gridContainer}>
            <div className={classes.item}>
                <img src="https://p16-sg.tiktokcdn.com/aweme/1080x1080/tiktok-obj/1666346592333826.jpeg" />
            </div>
            <div className={classes.item}>
                <p>Nombre: {props.nombre}</p>
            </div>
            <div className={classes.item}>
                <p>Apellido: {props.apellido}</p>
            </div>
            <div className={classes.item}>
                <p>Creado: {props.creado}</p>
            </div>
            
            <div className={classes.item}>
                <Button color="blue" onclick={props.ver}> Ver más</Button>
            </div>

        </div>
    );
};

export default pacientes;