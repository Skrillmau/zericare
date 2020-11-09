import React, { Component } from "react";
import Button from "../Componentes/Button/txt/txtButton.js";
import InfoPaciente from "../Componentes/InfoPaciente/InfoPaciente";
import { Firebase } from "../config/firebase";
import HistoriaBanner from "../Componentes/HistoriaBanner/HistoriaBanner";
import ListaHistorias from "../Componentes/ListaHistorias/ListaHistorias";
import ListaOrdenes from "../Componentes/ListaOrdenes/ListaOrdenes";
import classes from './VerPaciente/VerPaciente.css';
import Spinner from "../Componentes/Spinner/Spinner";
import PostAddIcon from '@material-ui/icons/PostAdd';
import LocalPharmacyOutlinedIcon from '@material-ui/icons/LocalPharmacyOutlined';

class VerPaciente extends Component {
  state = {
    user: {
      Historias: {},
      Ordenes: {}

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
    if (!this.state.user) return <Spinner />;
    return (
      <div>
        <h1>Informacion del paciente</h1>
        <InfoPaciente paciente={this.state.user} />
        <div className={classes.botones}>
          <Button color="blue"
            onclick={() =>
              this.props.history.push(`/AddHistoria/${this.state.user.id}`)
            }
          >
            <PostAddIcon />
          </Button>
          <Button color="blue"
            onclick={() =>
              this.props.history.push(`/AddOrden/${this.state.user.id}`)
            }
          >
            <LocalPharmacyOutlinedIcon />
          </Button>
        </div>

        <div>
          <div className={classes.Header}>
            <div className={classes.item3}>Historia clinica</div>
            <div className={classes.item4}>Recetas medicas</div>
          </div>

          <div className={classes.gridContainer}>
            <div className={classes.item1}>
              <ListaHistorias historias={this.state.user.Historias} />
            </div>

            <div className={classes.item2}>
              <ListaOrdenes ordenes={this.state.user.Ordenes} />
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default VerPaciente;
