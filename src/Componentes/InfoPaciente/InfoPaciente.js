import React, { Component } from 'react';
import classes from "./InfoPaciente.module.css";
import Paragraph from "../Paragraph/Paragraph";
class InfoPaciente extends Component {


    render() {
        return (

            <div className={classes.block}>
                <div className={classes.gridContainer}>
                    <div className={classes.gridItem1}>
                        <img className={classes.imagen} src={this.props.paciente.imagen} />
                    </div>

                    <div className={classes.gridItem2}>

                        <div>
                            Apellido:
                            <Paragraph contenido={this.props.paciente.apellido} clase={"cuerpo"} />
                        </div>

                        <div>
                            Sexo:
                            <Paragraph contenido={this.props.paciente.sexo} clase={"cuerpo"} />
                        </div>

                        <div>
                            Ocupacion:
                            <Paragraph contenido={this.props.paciente.ocupacion} clase={"cuerpo"} />
                        </div>

                        <div>
                            Creado:
                            <Paragraph contenido={this.props.paciente.registro} clase={"cuerpo"} />
                        </div>

                        <div>
                            Codigo care:
                            <Paragraph contenido={this.props.paciente.id} clase={"cuerpo"} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoPaciente;