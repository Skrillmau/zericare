import React, { Component } from 'react';
import Style from './Paragraph.module.css'

class Paragraph extends Component {
    
    render() {
    const clase = this.props.clase
    let col
    if (clase === 'importante' ){
        col = Style.divR
    } else if (clase === 'cuerpo') {
        col = Style.divB
    }
        return (
            <div>
                <p className={`hvr-grow ${col}`}>{this.props.contenido}</p>
            </div>
        );
    }
}

export default Paragraph;