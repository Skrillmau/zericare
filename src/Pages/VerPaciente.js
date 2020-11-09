import React, { Component } from 'react';
import Button from '../Componentes/Button/txt/txtButton.js'
import InfoPaciente from '../Componentes/InfoPaciente/InfoPaciente'
import { Firebase } from "../config/firebase";
import HistoriaBanner from '../Componentes/HistoriaBanner/HistoriaBanner'

class VerPaciente extends Component {

    state={
        user:{}
    }
    
    componentDidMount() {
        const { id } = this.props.match.params;
        const database = Firebase.database();
        var ref = database.ref(`Users/${id}`);
            let user = {
                id,
            };
            ref.once("value", (snapshot) => {
                    user = {
                        ...user,
                        ...snapshot.val(),
                    };
                    this.setState({user});
                },
                function (errorObject) {
                    console.log("The read failed: " + errorObject.code);
                }
            );
      }
    
    render() {

        return (
            <div>
                <InfoPaciente paciente={this.state.user}/>
                <HistoriaBanner fecha={this.state.user.registro}></HistoriaBanner>

            </div>
        );
    }
}

export default VerPaciente;