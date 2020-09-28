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
            producto: {

            }
        }
    }

    componentDidMount() {
        //const { id } = this.props.match.params;
        const id = this.props.id;
        console.log(this.props);
        axios.get(`https://api.npoint.io/091cb40bb6d0f229f0d2/productos/${id}`, {})
            .then((res) => {
                const data = res.data;
                console.log(data);
                this.setState({ producto: data });
            })
            .catch((error) => {
                console.log(error);
            });

    }
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

export default withRouter(Perfil);