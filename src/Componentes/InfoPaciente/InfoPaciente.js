import React, { Component } from 'react';

class InfoPaciente extends Component {

    
    render() {
        return (
            <div>
                <img src={this.props.paciente.imagen} />
                <p>Nombre: {this.props.paciente.nombre} </p>
                <p>Apellido: {this.props.paciente.apellido} </p>
                <p>Sexo {this.props.paciente.sexo}</p>
                <p>Ocupación: {this.props.paciente.ocupacion}</p>
                <p>Creado: {this.props.paciente.registro}</p>
                <p>Código Care: {this.props.paciente.id}</p>
            </div>
        );
    }
}

export default InfoPaciente;