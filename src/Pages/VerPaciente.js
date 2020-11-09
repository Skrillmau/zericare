import React, { Component } from 'react';
import Button from '../Componentes/Button/txt/txtButton.js'
import InfoPaciente from '../Componentes/InfoPaciente/InfoPaciente'
import { Firebase } from "../../config/firebase";

class VerPaciente extends Component {
    database = Firebase.database();
    getUser(uid) {
        return (dispatch) => {
            console.log("fetch");
            var ref = database.ref(`Users/${uid}`);
            let user = {
                uid,
            };
            ref.once(
                "value",
                function (snapshot) {
                    user = {
                        ...user,
                        ...snapshot.val(),
                    };
                },
                function (errorObject) {
                    console.log("The read failed: " + errorObject.code);
                }
            );
        };
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        usuario = getUser(this.state.id);
      }
    
    render() {

        return (
            <div>
                <InfoPaciente></InfoPaciente>
            </div>
        );
    }
}

export default VerPaciente;