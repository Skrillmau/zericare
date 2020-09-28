import React, { Component } from 'react';
import Info from '../Componentes/Info/Info'
import Historia from '../Componentes/Historia/Historia'

class Perfil extends Component {
    render() {
        return (
            <div>
                <Info Nombre = "Nikolas" apellido = "Cardona" id="123" sexo="M" ocupacion="Estudiante"/>
                <Historia patologicos="Lo que sea" npatologicos= "asdasd" familiares= "asdasd" go="asdasdas" consulta="asdjakdskajh" dnr="asdasd" ef="asdjaskld"/>
                
            </div>
        );
    }
}

export default Perfil;