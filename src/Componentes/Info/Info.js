import React, { Component } from 'react';
import Paragraph from '../Paragraph/Paragraph'
import classes from './Info.module.css'
import Button from '../Button/txt/txtButton'
class Info extends Component {
    render() {
        return (
            <div className={classes.block}>
                <div className={classes.gridContainer}>
                    <div className={classes.gridItem1}>
                        <img className={classes.imagen} src={this.props.imagen} />
                    </div>

                    <div className={classes.gridItem2}>
                        Nombre: <Paragraph contenido={this.props.nombre} clase={"importante"} />
                        Apellido: <Paragraph contenido={this.props.apellido} clase={"importante"} />
                        Registro: <Paragraph contenido={this.props.id} clase={"importante"} />
                        Sexo: <Paragraph contenido={this.props.sexo} clase={"importante"} />
                        Ocupacion:<Paragraph contenido={this.props.ocupacion} clase={"importante"} />
                        <Button color="red">Cerrar Sesión</Button>
                    </div>
                   
                </div>
            </div>
        );
    }
}

export default Info;