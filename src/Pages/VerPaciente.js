import React, { Component } from "react";
import Button from "../Componentes/Button/txt/txtButton.js";
import InfoPaciente from "../Componentes/InfoPaciente/InfoPaciente";
import { Firebase } from "../config/firebase";
import HistoriaBanner from "../Componentes/HistoriaBanner/HistoriaBanner";
import ListaHistorias from "../Componentes/ListaHistorias/ListaHistorias";
import ListaOrdenes from "../Componentes/ListaOrdenes/ListaOrdenes";

import Spinner from "../Componentes/Spinner/Spinner";

class VerPaciente extends Component {
  state = {
    user: {
        Historias:{},
        Ordenes:{}
        
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
        <Button color ="blue"
          onclick={() =>
            this.props.history.push(`/AddHistoria/${this.state.user.id}`)
          }
        >
          Añadir Historia
        </Button>
        <Button color="blue"
          onclick={() =>
            this.props.history.push(`/AddOrden/${this.state.user.id}`)
          }
        >
          Añadir Receta
        </Button>

        <ListaHistorias historias={this.state.user.Historias} />
        <ListaOrdenes ordenes={this.state.user.Ordenes} />
        
      </div>
    );
  }
}

export default VerPaciente;
