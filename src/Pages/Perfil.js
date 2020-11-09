import React, { Component } from "react";
import Info from "../Componentes/Info/Info";
import Historia from "../Componentes/Historia/Historia";
import classes from "../Pages/Perfil/Perfil.css";
import { Redirect, withRouter } from "react-router-dom";
import BannerText from "../Componentes/BannerText/BannerText";
import { connect } from "react-redux";
import ListaPacientes from "../Componentes/ListaPacientes/ListaPacientes";
import Spinner from "../Componentes/Spinner/Spinner";
import * as actionCreators from "../Store/Actions/";
var QRCode = require('qrcode.react');


class Perfil extends Component {
  state = {
    isUserLoggedIn: this.props.isUserLoggedIn,
    usuario: {},
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchUser(id);
  }
  componentDidUpdate() {
    if (!this.state.isUserLoggedIn) {
      this.props.history.push(`/login`);
    }
  }

  componentWillReceiveProps(nextState) {
    this.setState({
      isUserLoggedIn: nextState.isUserLoggedIn,
      usuario: nextState.user,
      isUserLoaded: nextState.isUserLoaded,
    });
  }
  handleLogout = () => {
    console.log(this.props);
    this.props.onlogOut();
    this.props.history.push(`/login`);
  };
  toggleProfile = () => {
    if (this.state.usuario.tipo == "Paciente") {
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
          <QRCode value="http://facebook.github.io/react/" />,
         
          <BannerText title="Tu historia clínica">
            En el listado a continuación, podrás ver tus historial médico más
            reciente (recuerda darle tu código al médico encargado de tu
            consulta para que pueda actualizar tu historial)
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
          <BannerText title="Tus órdenes">
            En el listado a continuación, podrás ver las órdenes provistas por
            tu médico asignado (recuerda confirmar cada orden por separado para
            poder autorizar el envío de las misma)
          </BannerText>
          <p>Insertar órdenes de firebase</p>
        </div>
      );
    } else if (this.state.usuario.tipo == "Medico") {
      return (
        <div>
          <Info
            logout={this.handleLogout}
            imagen={this.state.usuario.imagen}
            nombre={this.state.usuario.nombre}
            apellido={this.state.usuario.apellido}
            id={this.state.usuario.registro}
            sexo={this.state.usuario.sexo}
            ocupacion={this.state.usuario.ocupacion}
          />
          <hr></hr>
          <div className={classes.lista}>
            <ListaPacientes  pacientes={this.state.usuario.Pacientes}/>
          </div>
        </div>
      );
    } else {
      return  <Spinner/>;
    }
  };
 
  render() {
    if (!this.state.usuario) return <Spinner/>;
    return this.toggleProfile();
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.userStore.user,
    isUserLoggedIn: state.authStore.isUserLoggedIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(actionCreators.fetchUser(id)),
    onlogOut: () => dispatch(actionCreators.logOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Perfil);
