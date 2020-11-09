import React, { Component } from "react";
import Button from "../Componentes/Button/txt/txtButton.js";
import InfoPaciente from "../Componentes/InfoPaciente/InfoPaciente";
import { Firebase } from "../config/firebase";
import HistoriaBanner from "../Componentes/HistoriaBanner/HistoriaBanner";
import ListaHistorias from "../Componentes/ListaHistorias/ListaHistorias.js";
import Spinner from "../Componentes/Spinner/Spinner";

class VerPaciente extends Component {
  state = {
    user: {
        Historias:{}
        
    },
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const database = Firebase.database();
    var ref = database.ref(`Users/${id}`);
    let user = {
      id,
      ...this.state.user
    };
    ref.once(
      "value",
      (snapshot) => {
        user = {
          ...user,
          ...snapshot.val(),
        };
        this.setState({ user });
      },
      function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      }
    );
  }

  render() {
    if (!this.state.user) return <Spinner/>;
    return (
      <div>
        <h1>Informacion del paciente</h1>
        <InfoPaciente paciente={this.state.user} />
        <Button
          onclick={() =>
            this.props.history.push(`/AddHistoria/${this.state.user.id}`)
          }
        >
          Añadir Historia
        </Button>

        <ListaHistorias historias={this.state.user.Historias} />
        
      </div>
    );
  }
}

export default VerPaciente;
