import React, { Component } from "react";
import Info from "../Componentes/Info/Info";
import Historia from "../Componentes/Historia/Historia";
import classes from "../Pages/Perfil/Perfil.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import BannerText from "../Componentes/BannerText/BannerText";
class Perfil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usuario: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    console.log(this.props);
    axios
      .get(`https://api.npoint.io/05cf5d45abf19bfa8d4f/pacientes/${id}`, {})
      .then((res) => {
        const data = res.data;
        console.log(data);
        this.setState({ usuario: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleLogout = () =>{
      console.log("hola");
    localStorage.removeItem("user");
    this.props.history.push(`/`);
}
  render() {
    return (
      <div className={classes.block}>
        <h1>Perfil</h1>
        <Info
          logout={this.handleLogout}
          imagen={this.state.usuario.imagen}
          nombre={this.state.usuario.nombre}
          apellido={this.state.usuario.apellido}
          id={this.state.usuario.registro}
          sexo={this.state.usuario.sexo}
          ocupacion={this.state.usuario.ocupacion}
        />
        <BannerText title="Tu historia clínica">
          En el listado a continuación, podrás ver tus historial médico más
          reciente (recuerda darle tu código al médico encargado de tu consulta
          para que pueda actualizar tu historial)
        </BannerText>
        <Historia
          patologicos={this.state.usuario.patologicos}
          npatologicos={this.state.usuario.nopatologicos}
          familiares={this.state.usuario.familiares}
          go={this.state.usuario.gineco}
          consulta={this.state.usuario.PEEA}
          dnr={this.state.usuario.dnr}
          ef={this.state.usuario.fisica}
        />
      </div>
    );
  }
}

export default withRouter(Perfil);
