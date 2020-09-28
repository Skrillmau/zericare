import React, { Component } from 'react';

class Info extends Component {
    render() {
        return (
            <div>
                <img src={this.props.img}/>
                Nombre: <p>{this.props.nombre}</p>
                Apellido: <p>{this.props.apellido}</p>
                Número de Registro<p>{this.props.id}</p>
                Sexo:<p>{this.props.sexo}</p>
                Edad: <p>{this.props.sexo}</p>
                Ocupacion: <p>{this.props.ocupacion}</p>
            </div>
        );
    }
}

export default Info;