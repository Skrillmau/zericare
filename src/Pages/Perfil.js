import React, { Component } from 'react';
import Info from '../Componentes/Info/Info'
import Historia from '../Componentes/Historia/Historia'
import classes from '../Pages/Perfil/Perfil.css'

class Perfil extends Component {
    render() {
        return (
            <div>
                <h1>Perfil</h1>
                <Info Nombre = "Nikolas" apellido = "Cardona" id="123" sexo="M" ocupacion="Estudiante"/>
                <hr></hr>
                <Historia patologicos="Lo que sea" npatologicos= "asdasd" familiares= "asdasd" go="asdasdas" consulta="asdjakdskajh" dnr="asdasd" ef="asdjaskld"/>
                
            </div>
        );
    }
}

export default Perfil;