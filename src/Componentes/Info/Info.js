import React, { Component } from 'react';
import Paragraph from '../Paragraph/Paragraph'

class Info extends Component {
    render() {
        return (
            <div>
                <img src=""/>
               Nombre: <Paragraph contenido= {this.props.Nombre} clase={"importante"}/>
               Apellido: <Paragraph contenido= {this.props.apellido} clase={"importante"}/>
               Registro: <Paragraph contenido= {this.props.id} clase={"importante"}/>
               Sexo: <Paragraph contenido= {this.props.sexo} clase={"importante"}/>
             Ocupacion:<Paragraph contenido= {this.props.ocupacion} clase={"importante"}/>
            </div>
        );
    }
}

export default Info;