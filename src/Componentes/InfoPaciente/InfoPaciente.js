import React, { Component } from 'react';

class InfoPaciente extends Component {

    
    render() {
        return (
            <div>
                <img src={this.state.imagen} />
                <p>Nombre: {this.state.nombre} </p>
                <p>Apellido: {this.state.apellido} </p>
                <p>Sexo {this.state.sexo}</p>
                <p>Ocupación: {this.state.ocupacion}</p>
                <p>Creado: {this.state.registro}</p>
                <p>ID: {this.state.uid}</p>
            </div>
        );
    }
}

export default InfoPaciente;