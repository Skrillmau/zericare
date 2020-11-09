import React, { Component } from 'react';


class HistoriaCompleta extends Component {
    render() {
        return (
            <div>
                <p>Antecedentes familiares: {this.props.af}</p>
                <p>PEEA: {this.props.peea}</p>
                <p>Exploración física: {this.props.ef}</p>
                <p>Antecedentes no patológicos: {this.props.ap}</p>
                <p>Antecedentes Gineco-Obstétricos: {this.props.go}</p>
                <p>DNR: {this.props.dnr}</p>
            </div>
        );
    }
}

export default HistoriaCompleta;