import React, { Component } from 'react';
import Info from '../Componentes/Info/Info'
import Historia from '../Componentes/Historia/Historia'
import classes from '../Pages/Perfil/Perfil.css'
import { withRouter } from "react-router-dom";
import axios from 'axios'

class Perfil extends Component {

    constructor(props) {
        super(props)

        this.state = {
            usuario: {

            }
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        
        console.log(this.props);
        axios.get(`https://api.npoint.io/05cf5d45abf19bfa8d4f/pacientes/${id}`, {})
            .then((res) => {
                const data = res.data;
                console.log(data);
                this.setState({ usuario: data });
            })
            .catch((error) => {
                console.log(error);
            });

    }
    render() {
        return (
            <div>
                <h1>Perfil</h1>
                <Info imagen= {this.state.usuario.imagen} nombre = {this.state.usuario.nombre} apellido = {this.state.usuario.apellido} id={this.state.usuario.registro} sexo={this.state.usuario.sexo} ocupacion={this.state.usuario.ocupacion}/>
                <hr></hr>
                <Historia patologicos={this.state.usuario.patologicos} npatologicos= {this.state.usuario.nopatologicos} familiares= {this.state.usuario.familiares} go={this.state.usuario.gineco} consulta={this.state.usuario.PEEA} dnr={this.state.usuario.dnr} ef={this.state.usuario.fisica}/>
                
            </div>
        );
    }
}

export default withRouter(Perfil);