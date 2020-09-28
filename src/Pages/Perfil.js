import React, { Component } from 'react';
import Info from '../Componentes/Info/Info'

class Perfil extends Component {
    render() {
        return (
            <div>
                <Info nombre = "Nikolas" apellido = "Cardona" id="123" sexo="M" ocupacion="Estudiante"/>
            </div>
        );
    }
}

export default Perfil;