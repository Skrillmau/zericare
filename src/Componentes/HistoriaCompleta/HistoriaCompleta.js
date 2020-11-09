import React, { Component } from 'react';


class HistoriaCompleta extends Component {
    render() {
        return (
            <div>
                <p>Antecedentes familiares: {this.props.historia.afamiliares}</p>
                <p>PEEA: {this.props.historia.peea}</p>
                <p>Exploración física: {this.props.historia.efisica}</p>
                <p>Antecedentes no patológicos: {this.props.historia.anopatologicos}</p>
                <p>Antecedentes Gineco-Obstétricos: {this.props.historia.aginecoobstetricos}</p>
                <p>DNR: {this.props.historia.dnr}</p>
            </div>
        );
    }
}

export default HistoriaCompleta;