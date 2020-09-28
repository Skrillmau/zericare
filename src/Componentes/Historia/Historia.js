import React, { Component } from 'react';
import Paragraph from '../Paragraph/Paragraph'
import Txt from '../Button/txt/txtButton'

class Historia extends Component {
    render() {
        return (
            <div>
              Antecedentes Patológicos: <Paragraph contenido= {this.props.patologicos} clase={"importante"}/>
              Antecedentes no Patológicos: <Paragraph contenido= {this.props.npatologicos} clase={"importante"}/>
              Antecedentes familiares: <Paragraph contenido= {this.props.familiares} clase={"importante"}/>
              Antecedentes Gineco-obstétricos: <Paragraph contenido= {this.props.go} clase={"importante"}/>
              PEEA última consulta:<Paragraph contenido= {this.props.consulta} clase={"importante"}/>
              DNR: <Paragraph contenido= {this.props.dnr} clase={"importante"}/>
              Exploración Física:<Paragraph contenido= {this.props.ef} clase={"importante"}/>
              <Txt>Buenas</Txt>
              
            </div>
        );
    }
}

export default Historia;